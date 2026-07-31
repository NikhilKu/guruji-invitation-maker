#!/usr/bin/env python3
"""Preview-vs-export fidelity harness.

Verifies that what the Download button saves is pixel-identical to the live preview,
for every template, in real browser engines. For each engine and template it captures:

  truth  — a screenshot of the on-screen preview card at 3x device pixels
           (with the responsive scale neutralised, exactly like the exporter does)
  export — the app's own renderCanvas() output (the pixels Download/Share save)

and reports two numbers:

  aa     — share of pixels whose max channel delta exceeds 16. Antialiasing of text
           and hairlines lands here; engine-dependent floor (Chromium/Firefox <0.3%,
           WebKit up to ~4% because it quantises glyph positions differently inside
           SVG-image rendering — invisible at any real viewing size).
  blob   — share of strong-delta (>48) pixels that SURVIVE a 2px binary erosion.
           Glyph/hairline fringes are 1-2px thin and erode to nothing; any real
           defect (wrong crop, smear, missing art, shifted element) is a solid
           region and survives. Must be ~0 on every engine.

Usage:
  python3 -m venv venv && venv/bin/pip install playwright pillow numpy
  venv/bin/python -m playwright install chromium webkit firefox
  venv/bin/python tools/fidelity_check.py [chromium,webkit,firefox] [t-mandir,...]

Artifacts (truth/export/diff PNGs) for failing templates are written to
tools/fidelity_out/.
"""
import base64
import functools
import io
import os
import sys
import threading
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

import numpy as np
from PIL import Image
from playwright.sync_api import sync_playwright

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "tools", "fidelity_out")
PORT = 8641
TEMPLATES = ["t-mandir", "t-diya", "t-rose", "t-shivad", "t-marigold", "t-midnight",
             "t-lotuspond", "t-pcroyal", "t-velvetred", "t-aura", "t-peacock", "t-roses",
             "t-blush", "t-mandap", "t-ivory", "t-pink",
             "t-emerald", "t-bademandir", "t-saffron", "t-paisley"]
# aa (>16) is AA-dominated and engine-specific; blob (eroded >48) catches real defects.
AA_BUDGET = {"chromium": 0.5, "firefox": 1.2, "webkit": 4.5}
BLOB_BUDGET = 0.02  # percent


def erode(mask, iterations=2):
    """8-neighbourhood binary erosion (numpy-only)."""
    m = mask
    for _ in range(iterations):
        n = m.copy()
        for ax, sh in ((0, 1), (0, -1), (1, 1), (1, -1)):
            n &= np.roll(m, sh, axis=ax)
        n &= np.roll(np.roll(m, 1, 0), 1, 1) & np.roll(np.roll(m, 1, 0), -1, 1)
        n &= np.roll(np.roll(m, -1, 0), 1, 1) & np.roll(np.roll(m, -1, 0), -1, 1)
        m = n
    return m

NEUTRALISE = """() => {
  const stage = document.getElementById('cardStage');
  stage.style.setProperty('--s', '1');
  const card = document.querySelector('.card.show');
  card.style.transform = 'none';
  card.style.position = 'fixed'; card.style.top = '0'; card.style.left = '0'; card.style.zIndex = '999';
  void card.offsetWidth;
}"""
RESTORE = """() => {
  const card = document.querySelector('.card.show');
  card.style.transform = ''; card.style.position = ''; card.style.top = ''; card.style.left = ''; card.style.zIndex = '';
  fitStage();
}"""
WAIT_ASSETS = "async () => waitForCardAssets(document.querySelector('.card.show'))"
EXPORT = "async () => (await renderCanvas('png')).toDataURL('image/png')"


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass


def serve():
    handler = functools.partial(QuietHandler, directory=REPO)
    httpd = ThreadingHTTPServer(("127.0.0.1", PORT), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def run_engine(pw, name, templates):
    failures = []
    browser = getattr(pw, name).launch()
    page = browser.new_context(viewport={"width": 1500, "height": 900},
                               device_scale_factor=3).new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.goto(f"http://127.0.0.1:{PORT}/index.html", wait_until="networkidle")
    for tpl in templates:
        page.evaluate(f"setActiveTemplate('{tpl}')")
        page.evaluate(WAIT_ASSETS)
        page.evaluate(NEUTRALISE)
        page.wait_for_timeout(50)
        truth_png = page.screenshot(clip={"x": 0, "y": 0, "width": 430, "height": 680}, scale="device")
        page.evaluate(RESTORE)
        truth = Image.open(io.BytesIO(truth_png)).convert("RGB")
        data_url = page.evaluate(EXPORT)
        export = Image.open(io.BytesIO(base64.b64decode(data_url.split(",", 1)[1]))).convert("RGB")
        if truth.size != export.size:
            print(f"  {name:9s} {tpl:12s} FAIL size {truth.size} vs {export.size}")
            failures.append(tpl)
            continue
        d = np.abs(np.asarray(truth, np.int16) - np.asarray(export, np.int16)).max(axis=2)
        aa = float((d > 16).mean() * 100)
        blob = float(erode(d > 48).mean() * 100)
        ok = aa <= AA_BUDGET[name] and blob <= BLOB_BUDGET
        print(f"  {name:9s} {tpl:12s} {'OK  ' if ok else 'FAIL'} aa={aa:5.2f}%  blob={blob:5.3f}%")
        if not ok:
            failures.append(tpl)
            os.makedirs(OUT, exist_ok=True)
            base = os.path.join(OUT, f"{name}-{tpl}")
            truth.save(base + "-truth.png")
            export.save(base + "-export.png")
            heat = np.zeros((*d.shape, 3), np.uint8)
            heat[..., 0] = np.clip(d * 4, 0, 255)
            Image.fromarray(heat).save(base + "-diff.png")
    if errors:
        print(f"  {name} page errors: {errors[:3]}")
        failures.append("(page errors)")
    browser.close()
    return failures


def main():
    engines = sys.argv[1].split(",") if len(sys.argv) > 1 else ["chromium", "webkit", "firefox"]
    templates = sys.argv[2].split(",") if len(sys.argv) > 2 else TEMPLATES
    serve()
    all_failures = {}
    with sync_playwright() as pw:
        for eng in engines:
            print(f"[{eng}]")
            fails = run_engine(pw, eng, templates)
            if fails:
                all_failures[eng] = fails
    if all_failures:
        print(f"\nFAILURES: {all_failures}\nArtifacts in {OUT}")
        sys.exit(1)
    print("\nAll templates match the preview on all engines.")


if __name__ == "__main__":
    main()
