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

const decor = {
  "t-pink":  { svg:pinkLotus },
  "t-blush": { svg:blossom },
  "t-midnight": { svg:artDeco },
  "t-peacock":  { svg:peacockFeather },
  "t-rose":     { svg:roseFlourish },
  "t-ivory":    { svg:goldCornerSm },
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

// Celestial Night: scattered gold stars, faint dots, and a crescent moon
const celestialCard = document.querySelector('.card[data-tpl="t-celestial"]');
if (celestialCard) {
  const star = (x, y, r, o) => `<path transform="translate(${x},${y})" d="M0,${-r} L${(r*0.3).toFixed(1)},${(-r*0.3).toFixed(1)} L${r},0 L${(r*0.3).toFixed(1)},${(r*0.3).toFixed(1)} L0,${r} L${(-r*0.3).toFixed(1)},${(r*0.3).toFixed(1)} L${-r},0 L${(-r*0.3).toFixed(1)},${(-r*0.3).toFixed(1)} Z" fill="#ecca72" opacity="${o}"/>`;
  const pts = [[42,72,5],[110,44,3],[384,64,4.5],[330,116,3],[58,300,4],[392,250,4],[34,470,3],[400,440,5],[78,560,4],[360,584,4],[300,170,3],[140,210,2.5],[300,520,3],[150,620,3],[230,92,2.5]];
  let s = pts.map(([x,y,r]) => star(x, y, r, (0.45 + Math.random()*0.45).toFixed(2))).join("");
  s += Array.from({length:34},(_,i) => `<circle cx="${(17+i*131)%420+5}" cy="${(29+i*97)%650+8}" r="1.1" fill="#cfd8f0" opacity="0.55"/>`).join("");
  s += `<g transform="translate(372,96)"><circle r="20" fill="#ecca72"/><circle cx="8" cy="-6" r="18" fill="#0d1631"/></g>`;
  celestialCard.insertAdjacentHTML("afterbegin", `<svg class="sky" viewBox="0 0 430 680" xmlns="http://www.w3.org/2000/svg">${s}</svg>`);
}
Object.keys(decor).forEach(tpl => {
  const card = document.querySelector(`.card[data-tpl="${tpl}"]`);
  ["c-tl","c-tr","c-bl","c-br"].forEach(pos => {
    card.insertAdjacentHTML("afterbegin", decor[tpl].svg.replace("{pos}", pos));
  });
});

// Watermark on every template — always present (also captured in the export)
document.querySelectorAll(".card").forEach(card => {
  card.insertAdjacentHTML("beforeend", `<div class="wm">Created with the Guru Ji Satsang Invitation Maker</div>`);
});

/* ===== App logic ===== */
const templates = [
  { id:"t-emerald",  name:"Emerald Royal",  bg:"radial-gradient(circle at 50% 22%,#136045,#073a27)" },
  { id:"t-amethyst", name:"Royal Amethyst", bg:"radial-gradient(circle at 50% 22%,#5e2f80,#2b1340)" },
  { id:"t-marigold", name:"Marigold Garland", bg:"linear-gradient(180deg,#ffe6ad,#ffd680)" },
  { id:"t-celestial", name:"Celestial Night", bg:"radial-gradient(circle at 50% 20%,#243a72,#0a1230)" },
  { id:"t-sandal",   name:"Sandal Minimal", bg:"#f4ecdd" },
  { id:"t-mandir",     name:"Floral Mandir",   bg:"linear-gradient(165deg,#e7accb,#e2a0c0)" },
  { id:"t-roses",      name:"Rose Garden",     bg:"url('assets/guruji/roses-bg.jpg') center/cover" },
  { id:"t-velvetred", name:"Velvet Butterflies", bg:"radial-gradient(circle at 50% 20%,#a4162f,#6c0c1e)" },
  { id:"t-shivad",   name:"Divine Shiva",  bg:"linear-gradient(180deg,#d4eaf6,#aed4ec)" },
  { id:"t-pcroyal",  name:"Royal Peacock", bg:"linear-gradient(180deg,#0a3b6b,#0e6f8a)" },
  { id:"t-ivory",    name:"Ivory Mandala", bg:"#f7f1e6" },
  { id:"t-rose",     name:"Rose Gold",     bg:"linear-gradient(155deg,#fffafb,#f6dde2)" },
  { id:"t-peacock",  name:"Peacock Teal",  bg:"linear-gradient(165deg,#0d6b66,#0a4f55)" },
  { id:"t-midnight", name:"Midnight Gold", bg:"radial-gradient(circle,#1c2c4e,#0c1424)" },
  { id:"t-blush", name:"Blush Floral", bg:"linear-gradient(150deg,#fff,#fbe0e8)" },
  { id:"t-pink",  name:"Lotus Pink",   bg:"linear-gradient(160deg,#f4c5d6,#e9a7c0)" },
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
  document.querySelectorAll(".tpl-thumb").forEach(n => n.classList.toggle("active", n.dataset.tpl === id));
  const t = templates.find(x => x.id === id);
  if (previewCap) previewCap.textContent = t ? t.name : "";
}

templates.forEach(t => {
  const el = document.createElement("div");
  el.className = "tpl-thumb" + (t.id === current ? " active" : "");
  el.style.background = t.bg;
  el.dataset.tpl = t.id;
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
function renderCanvas(fmt) {
  const card = document.querySelector(".card.show");
  const prev = stage.style.getPropertyValue("--s");
  stage.style.setProperty("--s", "1");
  const restore = () => { stage.style.setProperty("--s", prev || "1"); fitStage(); };
  return html2canvas(card, { scale:3, useCORS:true, backgroundColor: fmt === "png" ? null : "#ffffff" })
    .then(c => { restore(); return c; }, err => { restore(); throw err; });
}
async function withLoading(btn, fn) {
  if (btn.disabled) return;
  [downloadBtn, shareBtn].forEach(b => b.disabled = true);
  btn.classList.add("loading");
  try { await fn(); }
  catch (e) { toast("Sorry, something went wrong. Please try again."); }
  finally { [downloadBtn, shareBtn].forEach(b => b.disabled = false); btn.classList.remove("loading"); }
}
downloadBtn.addEventListener("click", () => withLoading(downloadBtn, async () => {
  const fmt = currentFormat;
  const canvas = await renderCanvas(fmt);
  if (fmt === "pdf") {
    const { jsPDF } = window.jspdf;
    const w = canvas.width, h = canvas.height;
    const pdf = new jsPDF({ orientation: w > h ? "landscape" : "portrait", unit:"px", format:[w, h] });
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, w, h);
    pdf.save("guru-ji-satsang-invitation.pdf");
  } else {
    const link = document.createElement("a");
    link.download = "guru-ji-satsang-invitation." + fmt;
    link.href = canvas.toDataURL(fmt === "jpg" ? "image/jpeg" : "image/png", 0.95);
    link.click();
  }
  toast("Invitation saved to your downloads.");
}));
shareBtn.addEventListener("click", () => withLoading(shareBtn, async () => {
  const canvas = await renderCanvas("png");
  const blob = await new Promise(r => canvas.toBlob(r, "image/png"));
  const file = new File([blob], "guru-ji-satsang-invitation.png", { type:"image/png" });
  const text = "🙏 You are invited to Guru Ji's Satsang";
  if (navigator.canShare && navigator.canShare({ files:[file] })) {
    try { await navigator.share({ files:[file], title:"Guru Ji's Satsang", text }); } catch (e) { /* user cancelled */ }
  } else {
    const link = document.createElement("a");
    link.download = "guru-ji-satsang-invitation.png"; link.href = canvas.toDataURL("image/png"); link.click();
    toast("Image saved — attach it in WhatsApp to share.");
  }
}));

// ---------- Init ----------
if (!restoreState()) {
  const first = document.querySelector('#photoGallery .pg-item[data-src]:not(.pg-none)');
  if (first) { first.classList.add("active"); setPhoto(first.dataset.src); }
}
setActiveTemplate(current);   // ensure caption + active states are in sync
fitStage();
ready = true;   // enable autosave now that initial state is applied
