/* ===== Reusable decorative SVGs injected per template ===== */
// Floral/lotus corner decorations as inline SVG (data-driven per template)
const goldFloral = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#c8a23a" stroke-width="2" opacity="0.9">
    <path d="M0,70 Q40,60 60,20 Q70,55 110,55" stroke-width="2.5"/>
    <circle cx="22" cy="40" r="10" fill="#e9d49a" stroke="#b8902a"/>
    <circle cx="50" cy="22" r="8" fill="#f0e2b0" stroke="#b8902a"/>
    <circle cx="78" cy="38" r="7" fill="#e9d49a" stroke="#b8902a"/>
    <path d="M5,95 Q35,90 45,70" /><path d="M0,120 Q30,118 42,100"/>
  </g>
  <g fill="#d8bf78" opacity="0.85">
    <circle cx="14" cy="62" r="4"/><circle cx="38" cy="50" r="3"/><circle cx="64" cy="60" r="3"/>
  </g></svg>`;

const pinkLotus = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(60,60)">
    <g fill="#f7a8c4" stroke="#e07aa0" stroke-width="1.5" opacity=".95">
      <ellipse cx="0" cy="-30" rx="13" ry="34"/>
      <ellipse cx="0" cy="-30" rx="13" ry="34" transform="rotate(40)"/>
      <ellipse cx="0" cy="-30" rx="13" ry="34" transform="rotate(-40)"/>
      <ellipse cx="0" cy="-30" rx="13" ry="34" transform="rotate(80)"/>
      <ellipse cx="0" cy="-30" rx="13" ry="34" transform="rotate(-80)"/>
    </g>
    <g fill="#fcd0e0" stroke="#e07aa0" stroke-width="1.2">
      <ellipse cx="0" cy="-22" rx="9" ry="24"/>
      <ellipse cx="0" cy="-22" rx="9" ry="24" transform="rotate(25)"/>
      <ellipse cx="0" cy="-22" rx="9" ry="24" transform="rotate(-25)"/>
    </g>
    <circle r="7" fill="#f6c14b"/>
  </g>
  <g fill="#f6a8b0"><circle cx="120" cy="30" r="6"/><circle cx="140" cy="55" r="5"/><circle cx="30" cy="120" r="6"/></g>
</svg>`;

const lotusBig = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(70,70) scale(1.25)">
    <g fill="#f3c6d6" stroke="#d98aa8" stroke-width="1.2" opacity=".92">
      <ellipse cx="0" cy="-34" rx="15" ry="40"/>
      <ellipse cx="0" cy="-34" rx="15" ry="40" transform="rotate(35)"/>
      <ellipse cx="0" cy="-34" rx="15" ry="40" transform="rotate(-35)"/>
      <ellipse cx="0" cy="-34" rx="15" ry="40" transform="rotate(70)"/>
      <ellipse cx="0" cy="-34" rx="15" ry="40" transform="rotate(-70)"/>
    </g>
    <g fill="#f9dbe6" stroke="#d98aa8" stroke-width="1">
      <ellipse cx="0" cy="-26" rx="10" ry="28"/>
      <ellipse cx="0" cy="-26" rx="10" ry="28" transform="rotate(22)"/>
      <ellipse cx="0" cy="-26" rx="10" ry="28" transform="rotate(-22)"/>
    </g>
    <circle r="7" fill="#e8a0c0"/>
  </g></svg>`;

const redLeaf = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#6a8a5a" stroke-width="2" fill="#7a9a6a" opacity=".9">
    <ellipse cx="30" cy="55" rx="8" ry="20" transform="rotate(-30 30 55)"/>
    <ellipse cx="55" cy="35" rx="8" ry="20" transform="rotate(10 55 35)"/>
    <ellipse cx="78" cy="55" rx="7" ry="17" transform="rotate(40 78 55)"/>
  </g>
  <g fill="#a83a3a" stroke="#7a2020" stroke-width="1">
    <circle cx="40" cy="40" r="11"/><circle cx="68" cy="32" r="9"/><circle cx="58" cy="62" r="8"/>
  </g></svg>`;

const greenVine = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#2f6b3a" stroke-width="2.5" fill="none"><path d="M0,40 Q40,30 60,70 Q75,100 110,95"/></g>
  <g fill="#3f7b4a" stroke="#235a30" stroke-width="1" opacity=".92">
    <ellipse cx="22" cy="38" rx="9" ry="18" transform="rotate(-25 22 38)"/>
    <ellipse cx="48" cy="28" rx="9" ry="18" transform="rotate(15 48 28)"/>
    <ellipse cx="64" cy="60" rx="8" ry="16" transform="rotate(45 64 60)"/>
  </g>
  <g fill="#e8e0c0" stroke="#c8b870"><circle cx="38" cy="48" r="5"/><circle cx="60" cy="40" r="4"/></g></svg>`;

const marigold = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#3f7b4a" stroke-width="2" fill="#3f7b4a" opacity=".85">
    <ellipse cx="26" cy="62" rx="7" ry="16" transform="rotate(-30 26 62)"/>
    <ellipse cx="58" cy="60" rx="7" ry="15" transform="rotate(30 58 60)"/>
  </g>
  <g>
    <g transform="translate(40,40)"><g fill="#e8902a"><circle r="16"/></g><g fill="#f6b94a">
      <circle cx="0" cy="-13" r="5"/><circle cx="13" cy="0" r="5"/><circle cx="0" cy="13" r="5"/><circle cx="-13" cy="0" r="5"/>
      <circle cx="9" cy="-9" r="5"/><circle cx="9" cy="9" r="5"/><circle cx="-9" cy="9" r="5"/><circle cx="-9" cy="-9" r="5"/></g>
      <circle r="6" fill="#b86a14"/></g>
    <g transform="translate(72,28) scale(.7)"><g fill="#e8902a"><circle r="16"/></g><g fill="#f6b94a">
      <circle cx="0" cy="-13" r="5"/><circle cx="13" cy="0" r="5"/><circle cx="0" cy="13" r="5"/><circle cx="-13" cy="0" r="5"/></g>
      <circle r="5" fill="#b86a14"/></g>
  </g></svg>`;

const blossom = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#b07a5a" stroke-width="2" fill="none" opacity=".7"><path d="M0,30 Q30,40 50,75"/><path d="M30,0 Q40,30 70,48"/></g>
  ${[[34,34,1],[64,26,.7],[28,66,.7],[60,62,.55]].map(([x,y,s])=>`
    <g transform="translate(${x},${y}) scale(${s})"><g fill="#f7c0d4" stroke="#e893b3" stroke-width="1">
      <circle cx="0" cy="-11" r="7"/><circle cx="10" cy="-3" r="7"/><circle cx="6" cy="9" r="7"/><circle cx="-6" cy="9" r="7"/><circle cx="-10" cy="-3" r="7"/>
    </g><circle r="4" fill="#f6c14b"/></g>`).join("")}
</svg>`;

const artDeco = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#c9a24a" stroke-width="2">
    <path d="M30,30 H95 M30,30 V95"/>
    <path d="M30,46 H80 M46,30 V80" stroke-width="1" opacity=".7"/>
    <circle cx="30" cy="30" r="6" fill="#c9a24a" stroke="none"/>
    <path d="M70,30 Q86,30 86,46 M30,70 Q30,86 46,86" opacity=".8"/>
    <circle cx="92" cy="92" r="3" fill="#c9a24a" stroke="none"/>
  </g></svg>`;

const peacockFeather = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(34,34) rotate(45)">
    <path d="M0,0 C-26,-44 26,-44 0,0" fill="#0d6b66" opacity=".9"/>
    <ellipse cx="0" cy="-40" rx="13" ry="17" fill="#1f8f86"/>
    <ellipse cx="0" cy="-42" rx="8" ry="11" fill="#0a4f55"/>
    <circle cx="0" cy="-42" r="4.5" fill="#c9a24a"/>
    <path d="M0,0 L0,-26" stroke="#0a4f55" stroke-width="1.5"/>
  </g></svg>`;

const roseFlourish = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#cf9aa6" stroke-width="1.6">
    <path d="M24,24 Q70,28 78,70 Q80,90 64,96"/>
    <path d="M24,24 Q28,64 64,76" opacity=".6"/>
  </g>
  <g fill="#d89aa4" stroke="#c2808c" stroke-width="1">
    <circle cx="30" cy="30" r="6"/><circle cx="54" cy="40" r="5"/><circle cx="44" cy="62" r="4"/>
  </g>
  <g fill="#e8c2c8"><circle cx="40" cy="30" r="3"/><circle cx="36" cy="48" r="2.5"/></g></svg>`;

const goldCornerSm = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#b08a3a" stroke-width="1.6">
    <path d="M34,52 Q34,34 52,34"/><path d="M40,64 Q40,40 64,40" opacity=".6"/>
    <circle cx="34" cy="34" r="4" fill="#b08a3a" stroke="none"/>
  </g></svg>`;

const paisleyGold = `<svg class="corner {pos}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#d9b45c" stroke-width="2">
    <path d="M40,26 C86,16 112,48 104,84 C97,114 64,126 46,110 C32,97 38,72 56,68 C70,65 80,76 76,88" opacity=".95"/>
    <path d="M50,40 C80,36 94,60 88,82" stroke-width="1.1" opacity=".65"/>
    <path d="M24,118 Q34,140 26,162" stroke-width="1.5" opacity=".8"/>
    <path d="M124,20 Q146,28 158,18" stroke-width="1.5" opacity=".8"/>
  </g>
  <g fill="#d9b45c" opacity=".9">
    <circle cx="60" cy="78" r="3"/><circle cx="118" cy="34" r="3"/><circle cx="130" cy="52" r="2"/>
    <circle cx="34" cy="130" r="2"/><circle cx="52" cy="124" r="1.6"/>
  </g></svg>`;

const decor = {
  "t-pink":  { svg:pinkLotus },
  "t-blush": { svg:blossom },
  "t-midnight": { svg:artDeco },
  "t-peacock":  { svg:peacockFeather },
  "t-rose":     { svg:roseFlourish },
  "t-ivory":    { svg:goldCornerSm },
  "t-paisley":  { svg:paisleyGold },
};

// Royal Peacock: scatter peacock feathers across the card (jittered grid → even but random),
// sitting behind the text (z-index 2 < content z-index 3) at low opacity so it stays readable.
const pcCard = document.querySelector('.card[data-tpl="t-pcroyal"]');
if (pcCard) {
  const FEATHER_W = 297, COLS = 3, ROWS = 4;
  const cellW = 430 / COLS, cellH = 680 / ROWS;
  let html = "";
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cx = col * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.7;
      const cy = row * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.7;
      const scale = 0.16 + Math.random() * 0.18;            // ~48–101px wide
      const rot = Math.floor(Math.random() * 360);
      // fainter in the central text column, a touch stronger toward the edges
      const edge = Math.abs(col - (COLS - 1) / 2) / ((COLS - 1) / 2);
      const op = (0.12 + edge * 0.12 + Math.random() * 0.06).toFixed(2);
      const w = Math.round(FEATHER_W * scale);
      html += `<img class="feather" src="assets/guruji/peacock-feather.png" alt="" `
        + `style="left:${cx.toFixed(0)}px;top:${cy.toFixed(0)}px;width:${w}px;`
        + `transform:translate(-50%,-50%) rotate(${rot}deg);opacity:${op}" />`;
    }
  }
  pcCard.insertAdjacentHTML("afterbegin", html);
}
const shCard = document.querySelector('.card[data-tpl="t-shivad"]');
if (shCard) {
  shCard.insertAdjacentHTML("beforeend", `<img class="shiva" src="assets/guruji/shiva.jpg" alt="" />`);
}
// Mandala watermark for the Ivory template
const ivoryCard = document.querySelector('.card[data-tpl="t-ivory"]');
if (ivoryCard) {
  const ring = (n, fn) => Array.from({length:n}, (_, i) => fn(i, i*(360/n))).join("");
  const petals = ring(24, (i, a) => `<ellipse cx="260" cy="120" rx="14" ry="60" fill="none" stroke="#b08a3a" stroke-width="2" transform="rotate(${a} 260 260)"/>`);
  const petals2 = ring(16, (i, a) => `<ellipse cx="260" cy="160" rx="10" ry="40" fill="none" stroke="#b08a3a" stroke-width="2" transform="rotate(${a} 260 260)"/>`);
  ivoryCard.insertAdjacentHTML("afterbegin",
    `<svg class="mandala" viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg"><g>${petals}${petals2}<circle cx="260" cy="260" r="46" fill="none" stroke="#b08a3a" stroke-width="2"/><circle cx="260" cy="260" r="24" fill="none" stroke="#b08a3a" stroke-width="2"/></g></svg>`);
}

// Velvet Red: scatter butterflies across the card (jittered grid → even but random),
// at random sizes and gentle rotations, behind the text (z-index 1 < content z-index 2).
const velvetCard = document.querySelector('.card[data-tpl="t-velvetred"]');
if (velvetCard) {
  const COLS = 3, ROWS = 4;
  const cellW = 430 / COLS, cellH = 680 / ROWS;
  const onPhoto = (x, y) => (x - 215) ** 2 + (y - 116) ** 2 < 72 * 72;   // portrait medallion
  const onTitle = (x, y) => x > 92 && x < 338 && y > 196 && y < 350;     // script title
  let html = "";
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      let cx = col * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.7;
      const cy = row * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.7;
      // keep the two focal points (portrait + title) clear: nudge offenders to a side margin
      if (onPhoto(cx, cy) || onTitle(cx, cy)) cx = Math.random() < 0.5 ? 14 + Math.random() * 38 : 378 + Math.random() * 38;
      const w = Math.round(40 + Math.random() * 48);      // 40–88px wide
      const rot = Math.round(-32 + Math.random() * 64);   // gentle tilt -32°..32°
      const op = (0.38 + Math.random() * 0.26).toFixed(2);
      html += `<img class="butterfly" src="assets/guruji/butterfly.png" alt="" `
        + `style="left:${cx.toFixed(0)}px;top:${cy.toFixed(0)}px;width:${w}px;`
        + `transform:translate(-50%,-50%) rotate(${rot}deg);opacity:${op}" />`;
    }
  }
  velvetCard.insertAdjacentHTML("beforeend", html);
}

// Floral Mandir: cream temple-arch panel + vector florals, gold diya strings & lotuses
const mandirCard = document.querySelector('.card[data-tpl="t-mandir"]');
if (mandirCard) {
  const archPanel = `<svg class="archpanel" viewBox="0 0 430 680" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28,250 C28,118 120,44 215,44 C310,44 402,118 402,250 L402,636 Q402,652 386,652 L44,652 Q28,652 28,636 Z"
      fill="#fdf4f6" stroke="#e7b9cb" stroke-width="1.5"/></svg>`;

  const flower = (x, y, s, pet, ctr) => `<g transform="translate(${x},${y}) scale(${s})">
    <g fill="${pet}">${[0,72,144,216,288].map(a=>`<ellipse cx="0" cy="-11" rx="7.5" ry="12" transform="rotate(${a})"/>`).join("")}</g>
    <circle r="4.5" fill="${ctr}"/></g>`;
  const leaf = (x, y, r, s, c) => `<ellipse cx="${x}" cy="${y}" rx="${6*s}" ry="${13*s}" fill="${c}" transform="rotate(${r} ${x} ${y})"/>`;
  const cluster = (cls) => `<svg class="floral ${cls}" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg"><g opacity=".97">
      ${leaf(64,64,30,1.5,'#9ccf9c')}${leaf(102,46,-18,1.2,'#86c48a')}${leaf(44,102,62,1.2,'#9ccf9c')}${leaf(120,96,40,1,'#86c48a')}
      ${flower(60,60,2.1,'#f0a0bf','#f6c14b')}
      ${flower(108,48,1.4,'#f7c2d6','#f0a050')}
      ${flower(48,108,1.35,'#f7c2d6','#f0a050')}
      ${flower(104,104,1.05,'#fbd2e0','#f6c14b')}
      <g fill="#ef8a3a">${[[132,72,5],[78,132,4.5],[140,128,4]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}"/>`).join("")}</g>
    </g></svg>`;

  const diya = (cls) => `<svg class="diya ${cls}" viewBox="0 0 60 360" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="2" x2="30" y2="358" stroke="#d8a83a" stroke-width="1.5"/>
    ${[44,300].map(cy=>`<g transform="translate(30,${cy})">
      <g stroke="#d8a83a" stroke-width="1.4">${Array.from({length:12},(_,i)=>`<line x1="0" y1="0" x2="0" y2="-21" transform="rotate(${i*30})"/>`).join("")}</g>
      <circle r="13" fill="#fff6dc" stroke="#d8a83a" stroke-width="1.5"/>
      <path d="M-7,3 Q0,9 7,3 Q5,-2 0,-3 Q-5,-2 -7,3Z" fill="#e8a23a"/>
      <path d="M0,-3 Q2,-10 0,-13 Q-2,-10 0,-3Z" fill="#f0642a"/></g>`).join("")}
    ${[150,225].map(cy=>`<g transform="translate(30,${cy}) rotate(45)"><rect x="-5" y="-5" width="10" height="10" fill="#ecc25a" stroke="#c79320" stroke-width="1"/></g>`).join("")}
    ${[110,265].map(cy=>`<circle cx="30" cy="${cy}" r="3" fill="#d8a83a"/>`).join("")}</svg>`;

  const lotus = (cls) => `<svg class="lotus ${cls}" viewBox="0 0 120 92" xmlns="http://www.w3.org/2000/svg"><g transform="translate(60,76)">
      <g fill="#e98ab4" stroke="#d96fa0" stroke-width="1.5">
        <ellipse cx="0" cy="-28" rx="11" ry="32"/>
        <ellipse cx="0" cy="-26" rx="10" ry="28" transform="rotate(34)"/><ellipse cx="0" cy="-26" rx="10" ry="28" transform="rotate(-34)"/>
        <ellipse cx="0" cy="-22" rx="9" ry="23" transform="rotate(64)"/><ellipse cx="0" cy="-22" rx="9" ry="23" transform="rotate(-64)"/></g>
      <g fill="#f5b9d3" stroke="#e98ab4" stroke-width="1">
        <ellipse cx="0" cy="-22" rx="7" ry="24"/><ellipse cx="0" cy="-20" rx="6" ry="19" transform="rotate(24)"/><ellipse cx="0" cy="-20" rx="6" ry="19" transform="rotate(-24)"/></g>
    </g></svg>`;

  mandirCard.insertAdjacentHTML("afterbegin", archPanel);
  mandirCard.insertAdjacentHTML("beforeend",
    cluster("fl-tl") + cluster("fl-tr") + cluster("fl-bl") + cluster("fl-br") +
    diya("dy-l") + diya("dy-r") + lotus("lo-l") + lotus("lo-r"));
}

// Marigold Garland: a hanging genda-phool garland across the top
const marigoldCard = document.querySelector('.card[data-tpl="t-marigold"]');
if (marigoldCard) {
  const bloom = (x, y, s) => `<g transform="translate(${x},${y}) scale(${s})">
    ${Array.from({length:12},(_,k)=>`<ellipse cx="0" cy="-11" rx="4.5" ry="9" fill="#f7b545" transform="rotate(${k*30})"/>`).join("")}
    <circle r="10" fill="#ef8a1e"/>
    ${Array.from({length:8},(_,k)=>`<circle cx="0" cy="-6" r="2.6" fill="#f9cd6e" transform="rotate(${k*45})"/>`).join("")}
    <circle r="3.5" fill="#c2600e"/></g>`;
  const leaf = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="5" ry="11" fill="#3f8a4a" transform="rotate(${r} ${x} ${y})"/>`;
  let g = `<path d="M2,16 Q215,46 428,16" fill="none" stroke="#3f8a4a" stroke-width="2"/>`;
  for (let i = 0; i <= 9; i++) { const x = 16 + i*44; const y = 16 + Math.sin(i/9*Math.PI)*18; g += leaf(x-9,y+5,-28) + leaf(x+9,y+5,28) + bloom(x, y, 0.85 + (i%2)*0.18); }
  marigoldCard.insertAdjacentHTML("afterbegin", `<svg class="garland" viewBox="0 0 430 66" xmlns="http://www.w3.org/2000/svg">${g}</svg>`);
}

// Royal Mandap: a hanging toran (leaf + marigold bandanwar) + ornate gold side borders
const mandapCard = document.querySelector('.card[data-tpl="t-mandap"]');
if (mandapCard) {
  const mari = (x, y, s) => `<g transform="translate(${x},${y}) scale(${s})">${Array.from({length:10},(_,k)=>`<circle cx="0" cy="-6" r="3.2" fill="#f3a01e" transform="rotate(${k*36})"/>`).join("")}<circle r="5" fill="#e07a12"/><circle r="2" fill="#b85a0e"/></g>`;
  let t = `<path d="M4,8 Q108,40 215,14 Q322,40 426,8" fill="none" stroke="#e0bd5e" stroke-width="2.5"/>`;
  for (let i = 0; i <= 26; i++) { const x = 10 + i*16; t += `<path d="M${x},12 Q${x-4.5},27 ${x},36 Q${x+4.5},27 ${x},12Z" fill="#2f7a3a" stroke="#1f5a28" stroke-width="0.6"/>`; }
  for (let i = 0; i <= 6; i++) { const x = 33 + i*60; t += `<line x1="${x}" y1="14" x2="${x}" y2="42" stroke="#caa84a" stroke-width="1"/>` + mari(x, 48, 1.05); }
  mandapCard.insertAdjacentHTML("afterbegin", `<svg class="toran" viewBox="0 0 430 66" xmlns="http://www.w3.org/2000/svg">${t}</svg>`);
  const side = (cls) => `<svg class="mandap-side ${cls}" viewBox="0 0 26 600" xmlns="http://www.w3.org/2000/svg">
    <line x1="13" y1="6" x2="13" y2="594" stroke="#d8b04a" stroke-width="2"/>
    <line x1="20" y1="6" x2="20" y2="594" stroke="#d8b04a" stroke-width="1" opacity=".55"/>
    ${Array.from({length:13},(_,i)=>`<g transform="translate(13,${26+i*45})"><path d="M0,-7 L7,0 L0,7 L-7,0Z" fill="#e0bd5e" stroke="#b8902a" stroke-width="0.7"/><circle r="1.8" fill="#7a1228"/></g>`).join("")}
  </svg>`;
  mandapCard.insertAdjacentHTML("beforeend", side("ms-l") + side("ms-r"));
}

// Divine Aura: a golden sunrise/prabhavali fan of rays behind the photo
const auraCard = document.querySelector('.card[data-tpl="t-aura"]');
if (auraCard) {
  let r = "";
  for (let a = -130; a <= 130; a += 10) {
    const long = Math.abs(a) < 65; const len = long ? 158 : 118; const w = long ? 5 : 3.5;
    r += `<path d="M0,-34 L${w},${-len} L${-w},${-len} Z" fill="#e8bb50" opacity="${a % 20 === 0 ? 0.85 : 0.5}" transform="rotate(${a})"/>`;
  }
  auraCard.insertAdjacentHTML("afterbegin", `<svg class="rays" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><g transform="translate(160,160)">${r}</g></svg>`);
}

// Lotus Pond: pink lotuses rising from a serene pond along the bottom
const pondCard = document.querySelector('.card[data-tpl="t-lotuspond"]');
if (pondCard) {
  const pad = (x, y, rx, rot) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${(rx*0.4).toFixed(1)}" fill="#3f8a6a" stroke="#2f6a50" stroke-width="1" transform="rotate(${rot} ${x} ${y})"/>`;
  const lotus = (x, y, s) => `<g transform="translate(${x},${y}) scale(${s})">
    <g fill="#e98ab4" stroke="#d96fa0" stroke-width="1.2">
      <ellipse cx="0" cy="-22" rx="9" ry="26"/>
      <ellipse cx="0" cy="-20" rx="8" ry="22" transform="rotate(32)"/><ellipse cx="0" cy="-20" rx="8" ry="22" transform="rotate(-32)"/>
      <ellipse cx="0" cy="-17" rx="7" ry="18" transform="rotate(62)"/><ellipse cx="0" cy="-17" rx="7" ry="18" transform="rotate(-62)"/></g>
    <g fill="#f5b9d3" stroke="#e98ab4" stroke-width="0.9">
      <ellipse cx="0" cy="-17" rx="6" ry="19"/><ellipse cx="0" cy="-15" rx="5" ry="15" transform="rotate(22)"/><ellipse cx="0" cy="-15" rx="5" ry="15" transform="rotate(-22)"/></g></g>`;
  let p = `<path d="M0,634 Q215,622 430,634 L430,680 L0,680 Z" fill="#cfe4ea" opacity="0.65"/>`;
  p += `<path d="M28,628 Q120,622 210,628" fill="none" stroke="#b3d2da" stroke-width="1.5" opacity=".7"/><path d="M226,635 Q320,629 408,635" fill="none" stroke="#b3d2da" stroke-width="1.5" opacity=".7"/>`;
  p += pad(150,634,24,8) + pad(300,632,24,-8) + pad(70,638,34,-6) + pad(360,638,34,6) + pad(215,646,42,0);
  p += lotus(150,636,0.8) + lotus(300,634,0.8) + lotus(70,630,1.15) + lotus(360,630,1.15) + lotus(215,620,1.5);
  pondCard.insertAdjacentHTML("afterbegin", `<svg class="pond" viewBox="0 0 430 680" xmlns="http://www.w3.org/2000/svg">${p}</svg>`);
}

// Diya Glow: a row of lit oil lamps with warm halos along the bottom
const diyaCard = document.querySelector('.card[data-tpl="t-diya"]');
if (diyaCard) {
  const diya = (x, y, s) => `<g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="6" rx="48" ry="34" fill="#f0a83a" opacity="0.16"/>
    <path d="M-30,0 Q0,15 30,0 Q26,20 0,23 Q-26,20 -30,0Z" fill="#b5651d" stroke="#7a3d10" stroke-width="1"/>
    <ellipse cx="0" cy="0" rx="29" ry="6.5" fill="#d98a2a"/>
    <path d="M0,-2 Q-6,-18 0,-31 Q6,-18 0,-2Z" fill="#ffd24a"/>
    <path d="M0,-4 Q-3,-14 0,-23 Q3,-14 0,-4Z" fill="#ff8a1e"/></g>`;
  let g = "";
  [60, 158, 256, 354].forEach((x, i) => { g += diya(x, 624, i === 1 || i === 2 ? 1.05 : 0.9); });
  diyaCard.insertAdjacentHTML("afterbegin", `<svg class="diyas" viewBox="0 0 430 680" xmlns="http://www.w3.org/2000/svg">${g}</svg>`);
}
// Emerald Vine: a winding gold vine with leaves and berries down each side
const emeraldCard = document.querySelector('.card[data-tpl="t-emerald"]');
if (emeraldCard) {
  let v = `<path d="M20,4 C33,56 7,96 20,148 C33,200 7,240 20,292 C33,344 7,384 20,436 C31,478 11,516 20,556" fill="none" stroke="#d4af5a" stroke-width="2"/>`;
  for (let i = 0; i < 13; i++) {
    const y = 24 + i * 42;
    const side = i % 2 === 0 ? 1 : -1;                     // leaves alternate sides
    const rot = side * (34 + (i % 3) * 8);
    v += `<ellipse cx="${20 + side * 8}" cy="${y}" rx="4.2" ry="10" fill="#d4af5a" opacity=".85" transform="rotate(${rot} ${20 + side * 8} ${y})"/>`;
    if (i % 3 === 1) v += `<circle cx="${20 - side * 7}" cy="${y + 16}" r="2.4" fill="#e8c987" opacity=".8"/>`;
  }
  const vine = (cls) => `<svg class="vine ${cls}" viewBox="0 0 40 560" xmlns="http://www.w3.org/2000/svg">${v}</svg>`;
  emeraldCard.insertAdjacentHTML("beforeend", vine("vn-l") + vine("vn-r"));
}

// Bade Mandir: a night-celebration scene — a canopy of fairy-light strings over the glowing
// white pavilion, crowned by the dark shivling dome with its white tripundra stripes
// (inspired by photos of the Bade Mandir).
const bmCard = document.querySelector('.card[data-tpl="t-bademandir"]');
if (bmCard) {
  // fairy-light canopy: strings sag from the top centre out to the edges
  let L = "";
  const ends = [[0,60],[0,132],[0,212],[430,60],[430,132],[430,212],[104,0],[326,0]];
  ends.forEach(([ex, ey], i) => {
    const ax = 215, ay = -4;
    const cx = (ax + ex) / 2, cy = Math.max(ay, ey) / 2 + 54 + (i % 3) * 16;
    L += `<path d="M${ax},${ay} Q${cx},${cy} ${ex},${ey}" fill="none" stroke="#d9b45c" stroke-width="0.6" opacity="0.3"/>`;
    for (let k = 1; k < 16; k++) {
      const t = k / 16;
      const x = (1-t)*(1-t)*ax + 2*(1-t)*t*cx + t*t*ex;
      const y = (1-t)*(1-t)*ay + 2*(1-t)*t*cy + t*t*ey;
      const big = (k + i) % 4 === 0;
      L += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${big ? 5 : 3}" fill="#ffd98a" opacity="${big ? 0.13 : 0.09}"/>`
         + `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${big ? 1.8 : 1.2}" fill="${big ? "#ffe9bb" : "#f6cd72"}" opacity="0.95"/>`;
    }
  });
  bmCard.insertAdjacentHTML("afterbegin",
    `<svg class="bm-lights" viewBox="0 0 430 300" xmlns="http://www.w3.org/2000/svg">${L}</svg>`);

  // the temple: white tent pavilion with gold drape scallops, marigold-string curtain,
  // glowing doorway, red swag — and the shivling dome rising behind it
  let T = `<rect x="0" y="148" width="430" height="22" fill="#0e163a"/>`;
  T += `<g transform="translate(215,6)">
    <path d="M-36,84 C-36,32 -25,8 0,8 C25,8 36,32 36,84 Z" fill="#262019"/>
    <path d="M-23,34 Q0,28 23,34" stroke="#f2ead8" stroke-width="5" fill="none"/>
    <path d="M-28,50 Q0,44 28,50" stroke="#f2ead8" stroke-width="5" fill="none"/>
    <path d="M-31,66 Q0,60 31,66" stroke="#f2ead8" stroke-width="5" fill="none"/>
    <line x1="0" y1="9" x2="0" y2="-5" stroke="#d9b45c" stroke-width="1.5"/>
    <path d="M0,-5 L17,-1 L0,4 Z" fill="#e8b93a"/>
  </g>`;
  T += `<path d="M24,80 L406,80 L416,150 L14,150 Z" fill="#f6f1e4"/>`;
  let sc = "";
  for (let x = 24; x < 406; x += 22) sc += `Q${x + 11},93 ${x + 22},82 `;
  T += `<path d="M24,82 ${sc}L406,80 L24,80 Z" fill="#e8b93a" opacity=".9"/>`;
  T += `<path d="M24,82 ${sc}" fill="none" stroke="#caa030" stroke-width="1" opacity=".8"/>`;
  for (let x = 34; x <= 398; x += 9) {
    T += `<line x1="${x}" y1="88" x2="${x}" y2="146" stroke="#eecf7e" stroke-width="1" opacity="${x % 27 === 7 ? 0.5 : 0.3}"/>`;
  }
  T += `<path d="M193,150 L193,112 Q215,94 237,112 L237,150 Z" fill="#ffe3a0"/>
        <path d="M199,150 L199,116 Q215,103 231,116 L231,150 Z" fill="#fff3cf"/>`;
  let sw = "";
  for (let x = 24; x < 406; x += 54) sw += `M${x},124 Q${x + 27},136 ${x + 54},124 `;
  T += `<path d="${sw}" fill="none" stroke="#c0504a" stroke-width="2.2" opacity=".85"/>`;
  for (let x = 24; x <= 406; x += 54) T += `<circle cx="${x}" cy="124" r="2.4" fill="#a83a34"/>`;
  T += `<ellipse cx="12" cy="152" rx="36" ry="24" fill="#152a1e"/>
        <ellipse cx="418" cy="152" rx="36" ry="24" fill="#152a1e"/>
        <ellipse cx="62" cy="158" rx="22" ry="14" fill="#183024"/>
        <ellipse cx="368" cy="158" rx="22" ry="14" fill="#183024"/>
        <g fill="#f6cd72" opacity=".9"><circle cx="20" cy="142" r="1.4"/><circle cx="8" cy="150" r="1.2"/>
        <circle cx="412" cy="144" r="1.4"/><circle cx="424" cy="152" r="1.2"/><circle cx="64" cy="152" r="1.2"/><circle cx="366" cy="153" r="1.2"/></g>`;
  bmCard.insertAdjacentHTML("afterbegin",
    `<svg class="bm-temple" viewBox="0 0 430 170" xmlns="http://www.w3.org/2000/svg">${T}</svg>`);
}

// Saffron Mandir: temple-skyline silhouette along the bottom, a few birds in the sky
const saffronCard = document.querySelector('.card[data-tpl="t-saffron"]');
if (saffronCard) {
  const C = "#5f1d0d";
  // stepped shikhara tower: tiers narrow toward the finial
  const tower = (x, s) => `<g transform="translate(${x},0) scale(${s})" fill="${C}">
    <rect x="-30" y="84" width="60" height="36"/>
    <rect x="-24" y="62" width="48" height="24"/>
    <rect x="-18" y="42" width="36" height="22"/>
    <rect x="-12" y="26" width="24" height="18"/>
    <ellipse cx="0" cy="24" rx="9" ry="5"/>
    <rect x="-1.2" y="6" width="2.4" height="16"/>
    <path d="M1,7 L15,10 L1,14 Z"/></g>`;
  // onion dome on a drum
  const dome = (x, s) => `<g transform="translate(${x},0) scale(${s})" fill="${C}">
    <rect x="-26" y="96" width="52" height="24"/>
    <path d="M-22,96 C-22,74 -8,72 0,58 C8,72 22,74 22,96 Z"/>
    <rect x="-1" y="46" width="2" height="12"/><circle cx="0" cy="45" r="2.5"/></g>`;
  const bird = (x, y, s) => `<path d="M${x},${y} q5,-5 10,0 q5,-5 10,0" fill="none" stroke="${C}" stroke-width="1.6" opacity=".75" transform="scale(${s})" transform-origin="${x} ${y}"/>`;
  let sk = `<rect x="0" y="112" width="430" height="20" fill="${C}"/>`;
  sk += `<path d="M0,112 h430 v-6 l-8,-4 -8,4 -12,0 -8,-4 -8,4 -12,0 -8,-4 -8,4 h-286 l-8,-4 -8,4 -12,0 -8,-4 -8,4 -12,0 -8,-4 -8,4 Z" fill="${C}"/>`;
  sk += tower(215, 1) + dome(92, 0.9) + dome(338, 0.9) + tower(24, 0.55) + tower(406, 0.55);
  sk += bird(120, 26, 1) + bird(300, 18, 0.8) + bird(260, 34, 0.6);
  saffronCard.insertAdjacentHTML("afterbegin",
    `<svg class="skyline" viewBox="0 0 430 132" xmlns="http://www.w3.org/2000/svg">${sk}</svg>`);
}

Object.keys(decor).forEach(tpl => {
  const card = document.querySelector(`.card[data-tpl="${tpl}"]`);
  ["c-tl","c-tr","c-bl","c-br"].forEach(pos => {
    card.insertAdjacentHTML("afterbegin", decor[tpl].svg.replace("{pos}", pos));
  });
});

// Give every inline SVG an explicit width/height from its viewBox. An SVG sized only by CSS
// has no intrinsic size, which can collapse it when the card is serialised for export on
// strict engines (Safari/iOS). The attributes pin the intrinsic size; CSS still controls the
// displayed size, so the on-screen preview is unchanged.
document.querySelectorAll(".card svg[viewBox]").forEach(svg => {
  if (svg.hasAttribute("width") && svg.hasAttribute("height")) return;
  const vb = svg.getAttribute("viewBox").split(/[\s,]+/);
  svg.setAttribute("width", vb[2]);
  svg.setAttribute("height", vb[3]);
});

// Watermark on every template — always present (also captured in the export)
document.querySelectorAll(".card").forEach(card => {
  card.insertAdjacentHTML("beforeend", `<div class="wm">Created with the Guru Ji Satsang Invitation Maker</div>`);
});

/* ===== App logic ===== */
const templates = [
  { id:"t-mandir",     name:"Floral Mandir",   bg:"linear-gradient(165deg,#e7accb,#e2a0c0)" },
  { id:"t-diya",        name:"Diya Glow",      bg:"radial-gradient(circle at 50% 32%,#3a1810,#1d0b07)" },
  { id:"t-rose",     name:"Rose Gold",     bg:"linear-gradient(155deg,#fffafb,#f6dde2)" },
  { id:"t-shivad",   name:"Divine Shiva",  bg:"linear-gradient(180deg,#d4eaf6,#aed4ec)" },
  { id:"t-marigold", name:"Marigold Garland", bg:"linear-gradient(180deg,#ffe6ad,#ffd680)" },
  { id:"t-midnight", name:"Midnight Gold", bg:"radial-gradient(circle,#1c2c4e,#0c1424)" },
  { id:"t-lotuspond",   name:"Lotus Pond",     bg:"linear-gradient(180deg,#d8eaf0,#f0efe0)" },
  { id:"t-pcroyal",  name:"Royal Peacock", bg:"linear-gradient(180deg,#0a3b6b,#0e6f8a)" },
  { id:"t-velvetred", name:"Velvet Butterflies", bg:"radial-gradient(circle at 50% 20%,#a4162f,#6c0c1e)" },
  { id:"t-aura",        name:"Divine Aura",    bg:"radial-gradient(circle at 50% 30%,#fff4de,#f1cf94)" },
  { id:"t-peacock",  name:"Peacock Teal",  bg:"linear-gradient(165deg,#0d6b66,#0a4f55)" },
  { id:"t-roses",      name:"Rose Garden",     bg:"url('assets/guruji/roses-bg.jpg') center/cover" },
  { id:"t-blush", name:"Blush Floral", bg:"linear-gradient(150deg,#fff,#fbe0e8)" },
  { id:"t-mandap",      name:"Royal Mandap",   bg:"linear-gradient(180deg,#7a1228,#560c1c)" },
  { id:"t-ivory",    name:"Ivory Mandala", bg:"#f7f1e6" },
  { id:"t-pink",  name:"Lotus Pink",   bg:"linear-gradient(160deg,#f4c5d6,#e9a7c0)" },
  { id:"t-emerald", name:"Emerald Vine",   bg:"linear-gradient(170deg,#0e3f2d,#092b1e)" },
  { id:"t-bademandir", name:"Bade Mandir", bg:"linear-gradient(180deg,#141c4a,#31417e)" },
  { id:"t-saffron", name:"Saffron Mandir", bg:"linear-gradient(180deg,#ffe2a0,#ee8c28)" },
  { id:"t-paisley", name:"Royal Paisley",  bg:"radial-gradient(circle at 50% 25%,#4a2472,#231040)" },
];
const tplWrap = document.getElementById("templates");
const previewCap = document.getElementById("previewCap");
let current = templates[0].id;

// Switch the visible template, sync the active thumb + caption
function setActiveTemplate(id) {
  if (!document.querySelector(`.card[data-tpl="${id}"]`)) return;
  document.querySelector(".card.show")?.classList.remove("show");
  document.querySelector(`.card[data-tpl="${id}"]`).classList.add("show");
  current = id;
  document.querySelectorAll(".tpl-thumb").forEach(n => {
    const on = n.dataset.tpl === id;
    n.classList.toggle("active", on);
    n.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const t = templates.find(x => x.id === id);
  if (previewCap) previewCap.textContent = t ? t.name : "";
}

templates.forEach(t => {
  const el = document.createElement("button");
  el.type = "button";
  el.className = "tpl-thumb" + (t.id === current ? " active" : "");
  el.style.background = t.bg;
  el.dataset.tpl = t.id;
  el.setAttribute("aria-label", t.name + " template");
  el.setAttribute("aria-pressed", t.id === current ? "true" : "false");
  const span = document.createElement("span"); span.textContent = t.name; el.appendChild(span);
  el.onclick = () => { setActiveTemplate(t.id); saveState(); };
  tplWrap.appendChild(el);
});

// Live binding: one input updates every matching [data-bind] across all templates
const setAll = (key, val) => document.querySelectorAll(`[data-bind="${key}"]`).forEach(n => n.textContent = val);
document.querySelectorAll("[data-bind]").forEach(input => {
  if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
    setAll(input.dataset.bind, input.value);
    input.addEventListener("input", () => setAll(input.dataset.bind, input.value));
  }
});

// Date picker → auto-derive day name, date number (with ordinal), month, year & full line
const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const SUP = { "1":"ˢᵗ","2":"ⁿᵈ","3":"ʳᵈ" };
const ordinal = (n) => {
  const v = n % 100;
  if (v >= 11 && v <= 13) return "ᵗʰ";
  return SUP[String(n % 10)] || "ᵗʰ";
};
const dateInput = document.getElementById("eventDate");
function applyDate() {
  const v = dateInput.value;
  if (!v) return;
  const [y, m, d] = v.split("-").map(Number);
  const dt = new Date(y, m - 1, d);          // local date, no timezone shift
  const day = WEEKDAYS[dt.getDay()];
  const month = MONTHS[m - 1];
  setAll("day", day);
  setAll("daynum", String(d));
  setAll("month", month);
  setAll("year", String(y));
  setAll("fulldate", `${day}, ${d}${ordinal(d)} ${month} ${y}`);
}
dateInput.addEventListener("input", applyDate);
applyDate();

// ---------- State & elements ----------
const STORAGE_KEY = "guruji-invite-v2";
const downloadBtn = document.getElementById("download");
const shareBtn    = document.getElementById("share");
const resetBtn    = document.getElementById("reset");
const formatSeg   = document.getElementById("formatSeg");
const toastEl     = document.getElementById("toast");
const stage       = document.getElementById("cardStage");
let selectedPhoto = null;   // current photo src ("" = none, path = preset, data: = upload)
let currentFormat = "png";
let ready = false;          // gate autosave until initial state is applied

function toast(msg) {
  toastEl.textContent = msg; toastEl.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => toastEl.classList.remove("show"), 2800);
}

// Shared photo setter — applies to every template instance
function setPhoto(src) {
  selectedPhoto = src || null;
  document.querySelectorAll("[data-photo]").forEach(img => {
    if (src) { img.src = src; img.style.display = "block"; }
    else { img.removeAttribute("src"); img.style.display = "none"; }
  });
}
function markPhoto(src) {
  let matched = false;
  document.querySelectorAll("#photoGallery .pg-item").forEach(n => {
    const m = n.dataset.src === src; n.classList.toggle("active", m); if (m) matched = true;
  });
  return matched;
}

// ---------- Persistence ----------
function saveState() {
  if (!ready) return;
  try {
    const d = { fields:{}, date:dateInput.value, tpl:current, photo:selectedPhoto, fmt:currentFormat };
    document.querySelectorAll(".panel [data-bind]").forEach(i => d.fields[i.dataset.bind] = i.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
  } catch (e) { /* storage unavailable / quota — ignore */ }
}
function restoreState() {
  let d; try { d = JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch (e) {}
  if (!d) return false;
  if (d.fields) document.querySelectorAll(".panel [data-bind]").forEach(i => {
    if (d.fields[i.dataset.bind] != null) { i.value = d.fields[i.dataset.bind]; setAll(i.dataset.bind, i.value); }
  });
  if (d.date) { dateInput.value = d.date; }
  applyDate();
  if (d.fmt) { currentFormat = d.fmt; formatSeg.querySelectorAll(".seg-btn").forEach(b => b.classList.toggle("active", b.dataset.fmt === d.fmt)); }
  if (d.tpl) { setActiveTemplate(d.tpl); }
  if (d.photo != null) { setPhoto(d.photo); markPhoto(d.photo); }
  return true;
}

// ---------- Photo controls ----------
document.querySelectorAll("#photoGallery .pg-item").forEach(item => {
  item.addEventListener("click", () => { setPhoto(item.dataset.src); markPhoto(item.dataset.src); saveState(); });
});
document.getElementById("photo").addEventListener("change", e => {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => { setPhoto(ev.target.result); markPhoto(ev.target.result); saveState(); };
  reader.readAsDataURL(file);
});

// ---------- Format / reset ----------
formatSeg.querySelectorAll(".seg-btn").forEach(b => b.addEventListener("click", () => {
  formatSeg.querySelectorAll(".seg-btn").forEach(x => x.classList.remove("active"));
  b.classList.add("active"); currentFormat = b.dataset.fmt; saveState();
}));
resetBtn.addEventListener("click", () => {
  if (!confirm("Reset all details to the sample defaults? Your current text will be cleared.")) return;
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  location.reload();
});

// Autosave on any field edit
document.querySelector(".panel").addEventListener("input", saveState);

// ---------- Responsive scaling (fit width; on desktop also fit viewport height so the sticky card never clips) ----------
function fitStage() {
  const avail = stage.parentElement.clientWidth;
  let s = Math.min(1, avail / 430);
  if (window.matchMedia("(min-width:821px)").matches) {
    s = Math.min(s, (window.innerHeight - 100) / 680);
  }
  stage.style.setProperty("--s", Math.max(0.25, s).toFixed(4));
}
window.addEventListener("resize", fitStage);

// ---------- Render / export / share ----------
// modern-screenshot renders via an SVG <foreignObject>, i.e. the browser's own engine paints
// the card — so gradients, SVG and text all match the live preview (true WYSIWYG). It embeds
// the page fonts into the image, which is why the fonts must be self-hosted.
const EXPORT_SCALE = 3;

async function waitForCardAssets(card) {
  if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) {} }
  await Promise.all([...card.querySelectorAll("img")].map(img =>
    (img.src && img.decode) ? img.decode().catch(() => {}) : Promise.resolve()));
}

// WebKit (Safari/iOS) mis-renders object-fit inside <foreignObject>: the crop origin shifts
// and the overflow of the scaled image leaks outside the frame. The export must therefore
// never rely on object-fit — bake the exact on-screen crop into the pixels, capture, undo.
// The replacement reproduces what the user already sees, so the preview doesn't flicker.
async function precropCardImages(card) {
  const undos = [];
  // object-position % semantics: the overflow (box minus scaled image) is distributed by the
  // percentage; a px value is a straight offset of the image's top-left corner.
  const axisOffset = (v, box, img) => v.endsWith("%") ? (box - img) * (parseFloat(v) / 100) : parseFloat(v);
  for (const img of card.querySelectorAll("img")) {
    const cs = getComputedStyle(img);
    const fit = cs.objectFit;
    if (cs.display === "none" || !img.naturalWidth || (fit !== "cover" && fit !== "contain")) continue;
    const bw = img.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const bh = img.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    if (bw <= 0 || bh <= 0) continue;
    const iw = img.naturalWidth, ih = img.naturalHeight;
    const s = fit === "cover" ? Math.max(bw / iw, bh / ih) : Math.min(bw / iw, bh / ih);
    const pos = cs.objectPosition.split(" ");
    const dx = axisOffset(pos[0], bw, iw * s), dy = axisOffset(pos[1] || "50%", bh, ih * s);
    const c = document.createElement("canvas");
    c.width = Math.round(bw * EXPORT_SCALE); c.height = Math.round(bh * EXPORT_SCALE);
    c.getContext("2d").drawImage(img, dx * EXPORT_SCALE, dy * EXPORT_SCALE, iw * s * EXPORT_SCALE, ih * s * EXPORT_SCALE);
    const saved = { src: img.src, cssText: img.style.cssText };
    undos.push(() => { img.style.cssText = saved.cssText; img.src = saved.src; });
    img.style.objectFit = "fill";
    img.src = c.toDataURL("image/png");
    if (img.decode) { try { await img.decode(); } catch (e) {} }
  }
  return undos;
}

// WebKit's <foreignObject> rasteriser cannot paint *blurred* box-shadows — they come out as
// hard opaque slabs smeared to one side of the element (the classic "gray wedge" on exported
// photos). Zero-blur ring shadows are fine. So for the capture, each image's shadow stack is
// rasterised into a canvas (Canvas2D shadows use the same Gaussian σ = blur/2 as CSS, so the
// pixels match) and swapped in as a plain <img> behind the photo; the photo itself keeps
// box-shadow:none until the capture is undone.
function parseShadowList(str) {
  const parts = [];
  let depth = 0, cur = "";
  for (const ch of str) {
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (ch === "," && depth === 0) { parts.push(cur); cur = ""; }
    else cur += ch;
  }
  if (cur.trim()) parts.push(cur);
  return parts.map(p => {
    const inset = /\binset\b/.test(p);
    const color = (p.match(/rgba?\([^)]*\)|#[0-9a-fA-F]+/) || ["rgba(0,0,0,0)"])[0];
    const [dx = 0, dy = 0, blur = 0, spread = 0] =
      p.replace(color, "").replace(/\binset\b/, "").trim().split(/\s+/).map(parseFloat);
    return { inset, color, dx, dy, blur, spread };
  });
}
function bakeImgShadows(card) {
  const undos = [];
  const S = EXPORT_SCALE, OFF = 5000;   // draws the silhouette off-canvas; only its shadow lands
  for (const img of card.querySelectorAll("img")) {
    const cs = getComputedStyle(img);
    if (cs.display === "none" || cs.boxShadow === "none") continue;
    const shadows = parseShadowList(cs.boxShadow).filter(s => !s.inset);
    if (!shadows.length) continue;
    const w = img.offsetWidth, h = img.offsetHeight;
    const radii = [cs.borderTopLeftRadius, cs.borderTopRightRadius,
                   cs.borderBottomRightRadius, cs.borderBottomLeftRadius]
      .map(r => r.endsWith("%") ? parseFloat(r) / 100 * w : parseFloat(r));
    const pad = Math.ceil(Math.max(...shadows.map(s =>
      s.blur + s.spread + Math.max(Math.abs(s.dx), Math.abs(s.dy))))) + 2;
    const c = document.createElement("canvas");
    c.width = (w + 2 * pad) * S; c.height = (h + 2 * pad) * S;
    const ctx = c.getContext("2d");
    // manual rounded-rect path: ctx.roundRect is missing on the older Safari
    // versions this whole workaround exists for
    const roundRect = (x, y, rw, rh, rs) => {
      const [tl, tr, br, bl] = rs.map(v => Math.max(0, Math.min(v, Math.min(rw, rh) / 2)));
      ctx.beginPath();
      ctx.moveTo(x + tl, y);
      ctx.lineTo(x + rw - tr, y); ctx.arcTo(x + rw, y, x + rw, y + tr, tr);
      ctx.lineTo(x + rw, y + rh - br); ctx.arcTo(x + rw, y + rh, x + rw - br, y + rh, br);
      ctx.lineTo(x + bl, y + rh); ctx.arcTo(x, y + rh, x, y + rh - bl, bl);
      ctx.lineTo(x, y + tl); ctx.arcTo(x, y, x + tl, y, tl);
      ctx.closePath();
    };
    // CSS paints the first shadow on top — draw back-to-front
    for (const s of [...shadows].reverse()) {
      ctx.save();
      ctx.shadowColor = s.color;
      ctx.shadowBlur = s.blur * S;
      ctx.shadowOffsetX = OFF + s.dx * S;
      ctx.shadowOffsetY = s.dy * S;
      ctx.fillStyle = "#000";
      roundRect((pad - s.spread) * S - OFF, (pad - s.spread) * S,
                (w + 2 * s.spread) * S, (h + 2 * s.spread) * S,
                radii.map(r => (r + s.spread) * S));
      ctx.fill();
      ctx.restore();
    }
    // outset shadows never paint inside the border box — punch the interior out
    ctx.globalCompositeOperation = "destination-out";
    roundRect(pad * S, pad * S, w * S, h * S, radii.map(r => r * S));
    ctx.fill();
    const ghost = document.createElement("img");
    ghost.style.cssText =
      `position:absolute;z-index:-1;left:${img.offsetLeft - pad}px;top:${img.offsetTop - pad}px;` +
      `width:${w + 2 * pad}px;height:${h + 2 * pad}px;margin:0;border:0;padding:0;` +
      `transform:${cs.transform};`;
    ghost.src = c.toDataURL("image/png");
    img.parentNode.insertBefore(ghost, img);
    const savedShadow = img.style.boxShadow;
    img.style.boxShadow = "none";
    undos.push(() => { ghost.remove(); img.style.boxShadow = savedShadow; });
  }
  return undos;
}

// No card is a flat colour, so a uniform capture means the engine rasterised the SVG before
// its embedded resources were ready (a sporadic WebKit failure) — worth one retry.
function canvasLooksBlank(canvas) {
  const probe = document.createElement("canvas");
  probe.width = probe.height = 16;
  const ctx = probe.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(canvas, 0, 0, 16, 16);
  const d = ctx.getImageData(0, 0, 16, 16).data;
  for (let i = 4; i < d.length; i += 4) {
    if (Math.abs(d[i] - d[0]) > 6 || Math.abs(d[i + 1] - d[1]) > 6 ||
        Math.abs(d[i + 2] - d[2]) > 6 || Math.abs(d[i + 3] - d[3]) > 6) return false;
  }
  return true;
}

async function renderCanvas(fmt) {
  if (!window.modernScreenshot) throw new Error("Export library not loaded");
  const card = document.querySelector(".card.show");
  const prev = stage.style.getPropertyValue("--s");
  // The preview is scaled to fit the screen via transform:scale(--s); the capture honours that
  // transform, so a shrunk preview would export at reduced resolution. Neutralise the scale
  // (both the variable and the element transform) and force a reflow so the capture is always a
  // full-resolution 430×680 → 1290×2040 px, independent of window size.
  stage.style.setProperty("--s", "1");
  card.style.transform = "none";
  void card.offsetWidth;
  let undoPhotos = [];
  try {
    await waitForCardAssets(card);
    undoPhotos = await precropCardImages(card);
    undoPhotos.push(...bakeImgShadows(card));
    const opts = {
      scale: EXPORT_SCALE, width: 430, height: 680,
      backgroundColor: fmt === "png" ? null : "#ffffff"
    };
    let canvas = await modernScreenshot.domToCanvas(card, opts);
    if (canvasLooksBlank(canvas)) canvas = await modernScreenshot.domToCanvas(card, opts);
    return canvas;
  } finally {
    undoPhotos.forEach(u => u());
    card.style.transform = "";
    stage.style.setProperty("--s", prev || "1");
    fitStage();
  }
}
async function withLoading(btn, fn) {
  if (btn.disabled) return;
  [downloadBtn, shareBtn].forEach(b => b.disabled = true);
  btn.classList.add("loading");
  try { await fn(); }
  catch (e) { toast("Sorry, something went wrong. Please try again."); }
  finally { [downloadBtn, shareBtn].forEach(b => b.disabled = false); btn.classList.remove("loading"); }
}
// Downloads go through a Blob object-URL: data-URL anchors are unreliable on iOS Safari and
// duplicate the multi-megabyte image as a string, which is exactly where low-memory phones die.
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);   // iOS requires the anchor to be in the document
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
downloadBtn.addEventListener("click", () => withLoading(downloadBtn, async () => {
  const fmt = currentFormat;
  const canvas = await renderCanvas(fmt);
  if (fmt === "pdf") {
    if (!window.jspdf) throw new Error("PDF library not loaded");
    const { jsPDF } = window.jspdf;
    const w = canvas.width, h = canvas.height;
    const pdf = new jsPDF({ orientation: w > h ? "landscape" : "portrait", unit:"px", format:[w, h] });
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, w, h);
    downloadBlob(pdf.output("blob"), "guru-ji-satsang-invitation.pdf");
  } else {
    const type = fmt === "jpg" ? "image/jpeg" : "image/png";
    const blob = await new Promise(r => canvas.toBlob(r, type, 0.95));
    if (!blob) throw new Error("Image encoding failed");
    downloadBlob(blob, "guru-ji-satsang-invitation." + fmt);
  }
  toast("Invitation saved to your downloads.");
}));
shareBtn.addEventListener("click", () => withLoading(shareBtn, async () => {
  const canvas = await renderCanvas("png");
  const blob = await new Promise(r => canvas.toBlob(r, "image/png"));
  if (!blob) throw new Error("Image encoding failed");
  const file = new File([blob], "guru-ji-satsang-invitation.png", { type:"image/png" });
  const text = "🙏 You are invited to Guru Ji's Satsang";
  if (navigator.canShare && navigator.canShare({ files:[file] })) {
    try { await navigator.share({ files:[file], title:"Guru Ji's Satsang", text }); } catch (e) { /* user cancelled */ }
  } else {
    downloadBlob(blob, "guru-ji-satsang-invitation.png");
    toast("Image saved — attach it in WhatsApp to share.");
  }
}));

// ---------- Init ----------
if (!restoreState()) {
  const first = document.querySelector('#photoGallery .pg-item[data-src]:not(.pg-none)');
  if (first) { first.classList.add("active"); setPhoto(first.dataset.src); }
}
setActiveTemplate(current);   // ensure caption + active states are in sync
document.querySelectorAll(".card svg").forEach(s => s.setAttribute("aria-hidden", "true")); // decorative art
fitStage();
ready = true;   // enable autosave now that initial state is applied
