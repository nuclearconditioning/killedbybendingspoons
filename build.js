/* Generates one static page per acquisition into p/<slug>.html.
   Run: node build.js   (re-run after editing data.js) */

const fs = require('fs');
const path = require('path');

global.window = {};
require('./data.js');
const { SPOONS, SPOONS_COMPANY } = window;

const OUT = path.join(__dirname, 'p');
const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];

const esc = s => String(s).replace(/[&<>"']/g,
  c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Derived from sourced facts only, never an editorial rating.
const label = item =>
  item.status === 'dead' ? 'Shut down'
  : item.cut ? 'Layoffs reported'
  : (item.pricing && item.pricing.length) ? 'Pricing changed'
  : item.sourcing === 'thin' ? 'No outcome reported'
  : 'Acquired';
const tagKey = item =>
  item.status === 'dead' ? 'shutdown'
  : item.cut ? 'layoffs'
  : (item.pricing && item.pricing.length) ? 'price' : 'none';

function longDate(item) {
  const [y, m, d] = item.acquired.split('-').map(Number);
  if (item.precision === 'year') return String(y);
  if (item.precision === 'month') return `${MONTHS[m-1]} ${y}`;
  return `${d} ${MONTHS[m-1]} ${y}`;
}

function peakHike(item) {
  let best = null;
  (item.pricing || []).forEach(p => {
    const m = /\+([\d,]+)%/.exec(p.change);
    if (!m) return;
    const pct = parseFloat(m[1].replace(/,/g, ''));
    if (!best || pct > best.pct) best = { pct, label: p.change };
  });
  return best;
}

const cite = s =>
  `<a class="cite" href="${esc(s.u)}" target="_blank" rel="noopener noreferrer" title="${esc(s.t)}">src</a>`;

const factList = facts => `<dl class="facts">${facts.map(f =>
  `<div class="fact"><dt>${esc(f.k)}</dt><dd>${esc(f.v)}${cite(f.s)}</dd></div>`).join('')}</dl>`;

function bar(pct, label, mute) {
  const w = pct == null ? 0 : Math.max(2, pct);
  return `<div class="bar"><span class="bar-track"><span class="bar-fill${mute ? ' mute' : ''}" style="width:${w}%"></span></span><span class="bar-label">${esc(label)}</span></div>`;
}

function page(item, prev, next) {
  const hike = peakHike(item);

  const hero = hike
    ? { v: hike.label, l: 'documented price rise', hot: true }
    : item.cut ? { v: item.cut.label, l: item.cut.pct == null ? 'let go' : 'of staff cut', hot: true }
    : item.status === 'dead' ? { v: 'Closed', l: 'no longer available', hot: true }
    : { v: 'None', l: 'no outcome reported', hot: false };

  const pricing = (item.pricing && item.pricing.length)
    ? `<ul class="hikes">${item.pricing.map(p => `<li class="hike">
        <div class="hike-who">${esc(p.who)}</div>
        <div class="hike-move"><span class="was">${esc(p.was)}</span><span class="to">→</span><span class="now">${esc(p.now)}</span><span class="delta">${esc(p.change)}</span></div>
        ${p.note ? `<div class="hike-note">${esc(p.note)}${cite(p.s)}</div>` : ''}
      </li>`).join('')}</ul>`
    : `<p class="notice">No before-and-after pricing has been reported for ${esc(item.name)}. An absence of evidence, not evidence that nothing changed.</p>`;

  const notices =
    (item.sourcing === 'thin'
      ? `<p class="notice notice-thin"><strong>No outcome reporting.</strong> The acquisition is confirmed, but no company-specific coverage of layoffs, shutdowns or price rises was found. Nothing on this page is inferred from the pattern.</p>` : '') +
    (item.dispute ? `<p class="notice"><strong>Contested.</strong> ${esc(item.dispute)}</p>` : '');

  const nav = (rel, label) => rel
    ? `<a class="pager-link" href="${rel.slug}.html"><span class="pager-dir">${label}</span><span class="pager-name">${esc(rel.name)}</span></a>`
    : `<span class="pager-link is-off"><span class="pager-dir">${label}</span><span class="pager-name">None</span></span>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(item.name)} · Killed by Bending Spoons</title>
<meta name="description" content="${esc(item.desc)} Acquired by Bending Spoons ${esc(longDate(item))}. What happened to the team, the product and the price.">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230a0a0a'/><rect x='18' y='46' width='64' height='8' fill='%23c8302f'/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">
</head>
<body class="detail-page">

<nav class="topbar">
  <div class="shell">
    <a class="back" href="../index.html"><span class="back-arrow"></span>All acquisitions</a>
    <span class="topbar-title">Killed by Bending Spoons</span>
  </div>
</nav>

<header class="entry-head">
  <div class="shell">
    <span class="c-status s-${tagKey(item)}">${label(item)}</span>
    <h1>${esc(item.name)}</h1>
    <p class="entry-desc">${esc(item.desc)}</p>

    <dl class="entry-stats">
      <div><dt>Acquired</dt><dd>${esc(longDate(item))}</dd></div>
      <div><dt>Price paid</dt><dd>${item.price ? esc(item.price) : 'undisclosed'}</dd></div>
      <div><dt>Staff cut</dt><dd>${item.cut ? esc(item.cut.label) : 'not reported'}</dd></div>
      <div class="${hero.hot ? 'hot' : ''}"><dt>${esc(hero.l)}</dt><dd>${esc(hero.v)}</dd></div>
    </dl>

    <div class="entry-bars">
      <div class="metric"><span class="m-key">Staff cut</span>${item.cut ? bar(item.cut.pct, item.cut.label, item.cut.pct == null) : '<span class="m-none">not reported</span>'}</div>
    </div>
  </div>
</header>

<main class="shell entry-body">
  ${notices}

  <section class="entry-section">
    <h2>The team</h2>
    <p class="prose">${esc(item.team)}</p>
  </section>

  <section class="entry-section">
    <h2>The product</h2>
    <p class="prose">${esc(item.product)}</p>
  </section>

  <section class="entry-section">
    <h2>What it costs now</h2>
    ${pricing}
  </section>

  ${item.facts && item.facts.length ? `<section class="entry-section">
    <h2>The record</h2>
    ${factList(item.facts)}
  </section>` : ''}

  <section class="entry-section">
    <h2>Sources</h2>
    <ul class="sources-list">
      ${item.sources.map(s => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener noreferrer">${esc(s.t)}</a></li>`).join('')}
      ${item.link ? `<li><a href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">${esc(item.name)} today ↗</a></li>` : ''}
    </ul>
    <p class="fineprint">Every figure above links to the reporting it came from. Where no figure is shown, none was published. This page does not estimate, score or infer. If you can source a correction, it will be applied.</p>
  </section>
</main>

<nav class="pager">
  <div class="shell">
    ${nav(prev, 'Previous')}
    ${nav(next, 'Next')}
  </div>
</nav>

<footer>
  <div class="shell">
    <p>Not affiliated with Bending Spoons S.p.A. <a href="../index.html">Back to all ${SPOONS.length} acquisitions</a>.</p>
  </div>
</footer>

</body>
</html>`;
}

/* ---- write ---- */
fs.mkdirSync(OUT, { recursive: true });

const ordered = [...SPOONS].sort((a, b) => new Date(b.acquired) - new Date(a.acquired));
ordered.forEach((item, i) => {
  const html = page(item, ordered[i - 1], ordered[i + 1]);
  fs.writeFileSync(path.join(OUT, `${item.slug}.html`), html);
});

console.log(`Built ${ordered.length} pages into p/`);
