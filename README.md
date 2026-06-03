# Guru Ji's Satsang — Invitation Maker

A free, browser-based tool to create and share a beautiful **Guru Ji Satsang invitation**. Pick a template, fill in your details, and download a print-quality image (PNG/JPG/PDF) or share it straight to WhatsApp.

**Live:** https://nikhilku.github.io/guruji-invitation-maker/

## Features

- **16 templates** — a range of styles (Floral Mandir, Royal Mandap, Diya Glow, Divine Aura, Lotus Pond, Marigold Garland, Velvet Butterflies, Rose Garden, Divine Shiva, Midnight Gold, and more), all rendered with CSS/SVG.
- **Live preview** — every field updates the invitation instantly; the preview stays pinned while you scroll on desktop.
- **Smart date** — the weekday, day number (with ordinal), month and year are derived automatically from a single date picker.
- **Choose or upload a photo** — pick a Guru Ji photo or upload your own (your upload stays in your browser).
- **High-resolution export** — download a 3× PNG or JPG, or a PDF; or use the **Share** button (Web Share API → WhatsApp and other apps on mobile).
- **Auto-save** — your details are saved in the browser (localStorage), so a refresh won't lose your work. A "Reset to sample defaults" button is available.

## Privacy

Everything runs **client-side** — there is no backend. Your text and any photo you upload never leave your browser; nothing is uploaded to a server.

## Tech

Plain **HTML + CSS + vanilla JavaScript**, no build step. Two runtime libraries are loaded from a CDN:

- [html2canvas](https://html2canvas.hertzen.com/) — renders the invitation to a canvas for export
- [jsPDF](https://github.com/parallax/jsPDF) — wraps the rendered image into a PDF

Fonts come from Google Fonts; a few icons from Font Awesome.

## Run locally

No tooling required — just serve the folder over HTTP (needed so the browser can load the images/fonts):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
index.html    # markup: the form (left) and the live-preview card stage (right)
styles.css    # all styling, including one block per template (.t-<name>)
app.js        # template registry, decorative SVG generators, live binding,
              # date logic, photo handling, persistence, and export/share
assets/guruji # Guru Ji photos and a few decorative images
```

## Adding a template

Each template currently lives in three places:

1. **`app.js`** — add an entry to the `templates` array (`id`, display `name`, and a `bg` used for its thumbnail). If it needs decorative art (garlands, lamps, rays, …), add an injector in the decoration section.
2. **`index.html`** — add a `<div class="card t-<id>" data-tpl="t-<id>">` with the standard `data-bind` fields (`blessing`, `fulldate`, `time`, `langar`, `venue`, `names`, `phone`) and a `<img class="ji-photo" data-photo>`.
3. **`styles.css`** — add a `.t-<id> …` block for the background, frame, photo, title and text styling.

Keep the date as a single centered `bigdate` line (or use the `1fr auto 1fr` date-bar grid) and keep "Followed by Langar Prasad" right after the time.

## Deployment

Hosted on **GitHub Pages**. Pushing to `main` triggers the workflow in `.github/workflows/static.yml`, which publishes the site automatically.

## License

[MIT](LICENSE) © Nikhil Kumar

Guru Ji photographs are used for devotional/illustrative purposes; please ensure you have the rights to any images you add.
