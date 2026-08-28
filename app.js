(function () {
  'use strict';

  var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var state = { q: '', filter: 'all', sort: 'new' };

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }

  function parse(d) { var p = d.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }

  function shortDate(item) {
    var d = parse(item.acquired);
    if (item.precision === 'year') return String(d.getFullYear());
    return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  }

  function longDate(item) {
    var d = parse(item.acquired);
    if (item.precision === 'year') return String(d.getFullYear());
    if (item.precision === 'month') return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
    return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  }

  // "$1.38B" / "≈€433M" -> millions, for sorting and totals
  function millions(p) {
    if (!p) return 0;
    var m = /([\d.]+)\s*([BM])/i.exec(p);
    return m ? parseFloat(m[1]) * (m[2].toUpperCase() === 'B' ? 1000 : 1) : 0;
  }

  function peakHike(item) {
    var best = null;
    (item.pricing || []).forEach(function (p) {
      var m = /\+([\d,]+)%/.exec(p.change);
      if (!m) return;
      var pct = parseFloat(m[1].replace(/,/g, ''));
      if (!best || pct > best.pct) best = { pct: pct, label: p.change };
    });
    return best;
  }

  function cite(src) {
    return '<a class="cite" href="' + esc(src.u) + '" target="_blank" rel="noopener noreferrer"' +
           ' title="' + esc(src.t) + '">src</a>';
  }

  function factList(facts) {
    return '<dl class="facts">' + facts.map(function (f) {
      return '<div class="fact"><dt>' + esc(f.k) + '</dt>' +
             '<dd>' + esc(f.v) + cite(f.s) + '</dd></div>';
    }).join('') + '</dl>';
  }

  function bar(pct, label, mute) {
    var width = pct === null || pct === undefined ? 0 : Math.max(2, pct);
    return '<div class="bar">' +
             '<span class="bar-track"><span class="bar-fill' + (mute ? ' mute' : '') +
               '" style="width:' + width + '%"></span></span>' +
             '<span class="bar-label">' + esc(label) + '</span>' +
           '</div>';
  }

  /* ---------- one card ---------- */

  // Every label below is derived from a sourced fact on the entry.
  // No editorial scoring: if it is not reported, it is not shown.
  function evidence(item) {
    var e = [];
    if (item.status === 'dead') e.push({ k: 'shutdown', t: 'Shut down' });
    if (item.cut) e.push({ k: 'layoffs', t: 'Layoffs reported' });
    if (peakHike(item)) e.push({ k: 'price', t: 'Price rise reported' });
    else if (item.pricing && item.pricing.length) e.push({ k: 'price', t: 'Pricing changed' });
    if (!e.length) e.push({ k: 'none', t: 'No outcome reported' });
    return e;
  }

  function primaryLabel(item) {
    if (item.status === 'dead') return 'Shut down';
    if (item.cut) return 'Layoffs reported';
    if (item.pricing && item.pricing.length) return 'Pricing changed';
    if (item.sourcing === 'thin') return 'No outcome reported';
    return 'Acquired';
  }

  function yearsAgo(item) {
    var days = Math.floor((Date.now() - parse(item.acquired)) / 864e5);
    if (days < 45) return 'Acquired this month';
    if (days < 365) return 'Acquired ' + Math.round(days / 30.44) + ' months ago';
    var y = days / 365.25;
    return 'Acquired ' + (y < 1.6 ? 'about a year' : Math.round(y) + ' years') + ' ago';
  }

  // The headline figure is always a number someone else published.
  function headline(item) {
    var h = peakHike(item);
    if (h) return { v: h.label, l: 'reported price rise', hot: true };
    if (item.cut) return { v: item.cut.label, l: item.cut.pct === null ? 'let go' : 'of staff cut', hot: true };
    if (item.status === 'dead') return { v: 'Closed', l: 'shut down', hot: true };
    return { v: 'None', l: 'no outcome reported', hot: false };
  }

  function card(item) {
    var h = headline(item);
    var ev = evidence(item);

    var el = document.createElement('a');
    el.className = 'card';
    el.href = 'p/' + item.slug + '.html';

    el.innerHTML =
      '<div class="c-head">' +
        '<h3>' + esc(item.name) + '</h3>' +
        '<span class="c-status s-' + ev[0].k + '">' + esc(primaryLabel(item)) + '</span>' +
      '</div>' +
      '<p class="c-dates">' + esc(longDate(item)) +
        (item.price ? ' · ' + esc(item.price) : '') + '</p>' +
      '<p class="c-desc">' + esc(item.desc) + '</p>' +
      '<div class="c-figure' + (h.hot ? ' hot' : '') + '">' +
        '<span class="fig-v">' + esc(h.v) + '</span>' +
        '<span class="fig-l">' + esc(h.l) + '</span>' +
      '</div>' +
      '<div class="c-metrics">' +
        '<div class="metric"><span class="m-key">Staff cut</span>' +
          (item.cut ? bar(item.cut.pct, item.cut.label, item.cut.pct === null)
                    : '<span class="m-none">not reported</span>') + '</div>' +
      '</div>' +
      '<div class="c-tags">' + ev.map(function (x) {
        return '<span class="tag t-' + x.k + '">' + esc(x.t) + '</span>';
      }).join('') + '</div>' +
      '<div class="c-foot">' +
        '<span>' + esc(yearsAgo(item)) + '</span>' +
        '<span class="c-go">Full record<span class="chevron"></span></span>' +
      '</div>';
    return el;
  }

  /* ---------- rendering ---------- */

  function visible() {
    var q = state.q.trim().toLowerCase();
    var list = window.SPOONS.filter(function (i) {
      if (state.filter !== 'all') {
        var keys = evidence(i).map(function (e) { return e.k; });
        if (keys.indexOf(state.filter) === -1) return false;
      }
      if (!q) return true;
      return (i.name + ' ' + i.desc + ' ' + i.team + ' ' + i.product).toLowerCase().indexOf(q) !== -1;
    });

    list.sort(function (a, b) {
      switch (state.sort) {
        case 'old':   return parse(a.acquired) - parse(b.acquired);
        case 'az':    return a.name.localeCompare(b.name);
        case 'price': return millions(b.price) - millions(a.price);
        case 'cut':   return ((b.cut && b.cut.pct) || 0) - ((a.cut && a.cut.pct) || 0);
        default:      return parse(b.acquired) - parse(a.acquired);
      }
    });
    return list;
  }

  function renderRows() {
    var host = document.getElementById('rows');
    var empty = document.getElementById('empty');
    if (!host) return;

    var list = visible();
    var frag = document.createDocumentFragment();
    list.forEach(function (i) { frag.appendChild(card(i)); });
    host.innerHTML = '';
    host.appendChild(frag);
    if (empty) empty.hidden = list.length > 0;
  }

  function renderTopline() {
    var host = document.getElementById('topline');
    if (!host) return;
    var all = window.SPOONS;

    var spend = all.reduce(function (s, i) { return s + millions(i.price); }, 0);
    var cut = all.filter(function (i) { return i.cut; }).length;
    var worst = 0;
    all.forEach(function (i) { var h = peakHike(i); if (h && h.pct > worst) worst = h.pct; });

    var cells = [
      { k: 'Companies bought', v: all.length },
      { k: 'Disclosed spend',  v: '$' + (Math.round(spend / 100) / 10) + 'B' },
      { k: 'With reported cuts', v: cut + '/' + all.length, hot: true },
      { k: 'Steepest price rise', v: '+' + worst.toLocaleString() + '%', hot: true },
      { k: 'Shut down outright', v: all.filter(function (i) { return i.status === 'dead'; }).length }
    ];

    host.innerHTML = cells.map(function (c) {
      return '<div><dt>' + esc(c.k) + '</dt>' +
             '<dd' + (c.hot ? ' class="hot"' : '') + '>' + esc(c.v) + '</dd></div>';
    }).join('');
  }

  function renderCompany() {
    var host = document.getElementById('company-facts');
    if (!host || !window.SPOONS_COMPANY) return;
    var c = window.SPOONS_COMPANY;
    host.innerHTML = Object.keys(c).map(function (k) {
      return '<div class="fact"><dt>' + esc(c[k].label) + '</dt>' +
             '<dd>' + esc(c[k].value) + cite(c[k].src) + '</dd></div>';
    }).join('');
  }

  function renderBoard() {
    var host = document.getElementById('hike-board');
    if (!host) return;

    var rows = [];
    window.SPOONS.forEach(function (item) {
      (item.pricing || []).forEach(function (p) {
        var m = /\+([\d,]+)%/.exec(p.change);
        rows.push({ item: item, p: p, pct: m ? parseFloat(m[1].replace(/,/g, '')) : -1 });
      });
    });
    rows.sort(function (a, b) { return b.pct - a.pct; });

    host.innerHTML = rows.map(function (r) {
      return '<li class="board-row">' +
               '<span class="board-delta' + (r.pct < 0 ? ' soft' : '') + '">' +
                 esc(r.p.change) + '</span>' +
               '<span class="board-name">' + esc(r.item.name) + '</span>' +
               '<span class="board-move">' + esc(r.p.was) + ' → ' + esc(r.p.now) + '</span>' +
               cite(r.p.s) +
               '<span class="board-who">' + esc(r.p.who) + '</span>' +
             '</li>';
    }).join('');
  }

  function renderBuilt() {
    var host = document.getElementById('built-list');
    if (!host || !window.SPOONS_BUILT) return;
    host.innerHTML = window.SPOONS_BUILT.map(function (b) {
      return '<article class="built built-' + b.status + '">' +
               '<div class="built-top"><h3>' + esc(b.name) + '</h3>' +
                 '<span class="built-tag">' +
                   (b.status === 'dead' ? 'Discontinued' : 'Studio era') + '</span></div>' +
               '<p class="built-desc">' + esc(b.desc) + '</p>' +
               '<p class="built-period">' + esc(b.period) + '</p>' +
               factList(b.facts) +
               '<p class="built-verdict">' + esc(b.verdict) + '</p>' +
             '</article>';
    }).join('');
  }

  /* ---------- wiring ---------- */

  var search = document.getElementById('search');
  var sortSel = document.getElementById('sort');
  var segs = Array.prototype.slice.call(document.querySelectorAll('.seg'));

  if (search) search.addEventListener('input', function () { state.q = this.value; renderRows(); });
  if (sortSel) sortSel.addEventListener('change', function () { state.sort = this.value; renderRows(); });
  segs.forEach(function (b) {
    b.addEventListener('click', function () {
      segs.forEach(function (o) { o.classList.remove('is-on'); });
      b.classList.add('is-on');
      state.filter = b.dataset.filter;
      renderRows();
    });
  });

  renderRows();      // the ledger is the page; draw it before anything optional
  renderTopline();
  renderCompany();
  renderBoard();
  renderBuilt();
})();
