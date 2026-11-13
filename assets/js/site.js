/* =========================================================
   Endurance — portfolio site script
   Shared nav/footer, reveal animations, video lightbox,
   copy-email, and CV PDF generated from the site's content.
   ========================================================= */

const SITE = {
  name: "Endurance",
  title: "Content & Creative Specialist",
  email: "endurancecreates@gmail.com",
  url: "", // set to the live domain once deployed, e.g. "https://endurance.vercel.app"
  socials: {
    x: "https://x.com/i_am_endurance",
    tiktok: "https://www.tiktok.com/@i_am_endurance_",
    substack: "https://open.substack.com/pub/iamendurance",
    // linkedin: "https://www.linkedin.com/in/…"   ← add when ready
  },
  proofOfWork: "https://t.me/+CQ0cNJZwTbFjMmJk",
  driveFolder: "https://drive.google.com/drive/folders/11TICLEPF9BPBg2h223c1-jtDerSUJkft?usp=share_link",
};

/* ---------- video showcase data ---------- */
const VIDEOS = [
  { type: "x", id: "2115507130358997026", title: "The Gamdom Takeover", note: "60K+ organic views", thumb: "assets/img/gamdom-thumb.jpg" },
  { type: "x", id: "2118073664675729609", title: "Tangem", note: "Watch on X" /* add thumb: "assets/img/tangem-thumb.jpg" once you have a frame */ },
  { type: "drive", id: "188dUU_lCNgTkFhj9pcPWenTQrcX7lHSo", title: "Avici card", note: "UGC video" },
  { type: "drive", id: "1zkPmNDuNh598LWR5GlBf-DbPzDJn0S8j", title: "Cineflicks", note: "UGC video" },
  { type: "drive", id: "1xrsF2DztbTtA4QTU3osTgAYJyQXmQoGm", title: "PerleLabs", note: "Project explainer" },
  { type: "drive", id: "1shOxPoBfEBi-5SY2YmdewHhTqYpHZC2Q", title: "Sui", note: "Ecosystem content" },
];

/* ---------- CV content (built from the portfolio) ---------- */
const CV = {
  profile:
    "Content & Creative Specialist passionate about turning ideas into engaging content through writing, creative thinking and storytelling. From developing content strategies to writing and producing videos, I help projects communicate their ideas, connect with audiences and tell better stories through content.",
  work: [
    { name: "Nige — Influencer", meta: "June 2025 – February 2026 · Influencer Marketing, Audience Research & Community Growth",
      points: ["Represented Nige across X, Telegram and WhatsApp with written promotional and educational content.",
               "Researched audience conversations and tailored content to their questions, interests and pain points.",
               "A viral NigeLearn promotional post generated 90 confirmed sign-ups/referrals; content received thousands of views."] },
    { name: "Gamdom — Creator challenge entry", meta: "Creative Concept Development & Video Production (solo)",
      points: ["Developed an original 'Gamdom takeover' concept: newspaper, radio news broadcast and telephone call.",
               "Handled concept, script, props, set, filming, editing, sound design and colour grading independently.",
               "Results: 60,000+ organic views, 936 likes and 211 reposts; positive public reaction from a Gamdom streamer."] },
    { name: "Sovra — Independent research", meta: "Project Research, Strategic Analysis & Visual Storytelling",
      points: ["Analysed Sovra's positioning, messaging and waitlist journey; identified a gap in post-signup nurturing.",
               "Recommended email education, useful content, community building and ongoing engagement (independent analysis).",
               "Wrote the article 'Attention Is The Most Undervalued Asset In Crypto Right Now' and designed its graphics."] },
  ],
  experience: [
    ["Content Lead — BEELIEVERS DAO", "Ran a 30-day content challenge: reviewed and analysed content, gave feedback, proposed topics and organised activities."],
    ["Brand Ambassador", "PuffVerse, Nexverse and other Web3 projects."],
    ["Community Growth Contributor — Agentic Bet", "Content and community participation associated with 300+ community joins."],
    ["Content Contributor — independent community", "Content that helped a jobbers/alpha community attract 600+ members."],
    ["Paid Content Creator / Writer", "Web3 writing and creative content projects."],
    ["Event Content Strategy", "Content strategy support for an in-real-life event."],
    ["Independent Content Creator", "Writing, video production, scripting, creative direction and editing."],
  ],
  skills: ["Content strategy and planning","Content research and analysis","Audience research","Copywriting and creative writing",
           "Storytelling and narrative development","Scriptwriting","Video production and editing","Creative direction",
           "Graphic design","Visual storytelling","UGC creation","Community engagement","Influencer marketing"],
  tools: ["CapCut","Canva","ChatGPT","Grok","Notepad"],
};

/* ---------- insignia (SVG) ---------- */
function insignia({ tagline = "CONTENT &amp; CREATIVE", text = "currentColor", line = "currentColor", icon = "#4E0E1A", label = "Endurance — Content and Creative" } = {}) {
  return `<svg viewBox="0 0 520 170" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(-14 62 70)">
    <path d="M28 40 h68 a10 10 0 0 1 10 10 v36 a10 10 0 0 1 -10 10 h-16 v14 l-13 -14 h-39 a10 10 0 0 1 -10 -10 v-36 a10 10 0 0 1 10 -10z" fill="none" style="stroke:${line}" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M52 52 l28 16 l-28 16z" style="fill:${icon}"/></g>
  <text x="260" y="92" text-anchor="middle" font-family="Montserrat, sans-serif" font-weight="800" font-size="58" style="fill:${text}" letter-spacing="-1">Endurance</text>
  <g transform="rotate(14 458 70)">
    <path d="M424 40 h68 a10 10 0 0 1 10 10 v36 a10 10 0 0 1 -10 10 h-39 l-13 14 v-14 h-16 a10 10 0 0 1 -10 -10 v-36 a10 10 0 0 1 10 -10z" fill="none" style="stroke:${line}" stroke-width="4.5" stroke-linejoin="round"/>
    <path d="M458 86 c-17 -11 -20 -22 -12 -27 c5 -3 10 -1 12 4 c2 -5 7 -7 12 -4 c8 5 5 16 -12 27z" style="fill:${icon}"/></g>
  <g style="stroke:${icon}" stroke-width="4.5" stroke-linecap="round"><path d="M500 14 l-2 12 M514 24 l-9 7"/></g>
  ${(() => { const long = tagline.replace(/&amp;/g, "&").length > 20; const ls = long ? 3 : 4.6, half = long ? 168 : 132;
    return `<line x1="${260 - half - 34}" y1="140" x2="${260 - half - 6}" y2="140" style="stroke:${icon}" stroke-width="1.6"/>
  <text x="260" y="144.5" text-anchor="middle" font-family="DM Sans, sans-serif" font-weight="600" font-size="12.5" letter-spacing="${ls}" style="fill:${text}">${tagline}</text>
  <line x1="${260 + half + 6}" y1="140" x2="${260 + half + 34}" y2="140" style="stroke:${icon}" stroke-width="1.6"/>`; })()}
</svg>`;
}
const bubblesMini = `<svg viewBox="0 0 64 34" aria-hidden="true"><g transform="rotate(-12 16 15)"><path d="M5 6 h22 a4 4 0 0 1 4 4 v11 a4 4 0 0 1 -4 4 h-5 v5 l-5 -5 h-12 a4 4 0 0 1 -4 -4 v-11 a4 4 0 0 1 4 -4z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M13 10.5 l9 5 l-9 5z" style="fill:var(--accent)"/></g><g transform="rotate(12 48 15)"><path d="M37 6 h22 a4 4 0 0 1 4 4 v11 a4 4 0 0 1 -4 4 h-12 l-5 5 v-5 h-5 a4 4 0 0 1 -4 -4 v-11 a4 4 0 0 1 4 -4z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M48 21 c-6 -4 -7 -8 -4.3 -9.7 c1.8 -1.1 3.4 -.3 4.3 1.4 c.9 -1.7 2.5 -2.5 4.3 -1.4 c2.7 1.7 1.7 5.7 -4.3 9.7z" style="fill:var(--accent)"/></g></svg>`;

const ICON = {
  x: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.4-5.6 6.4H2.2l7.3-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.3 6.3 0 1 0 5.4 6.3V8.6a8.2 8.2 0 0 0 4.4 1.3V6.5a4.4 4.4 0 0 1-4.4-4.5z"/></svg>`,
  substack: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h16v2.4H4zm0 4.6h16V10H4zM4 12.2h16V22l-8-4.5L4 22z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6v5.4h-4v-4.8c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v4.9h-4z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};

/* ---------- nav + footer ---------- */
function renderChrome() {
  const onHome = document.body.dataset.page === "home";
  const h = onHome ? "" : "index.html";
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    nav.outerHTML = `<header class="nav" id="top-nav"><div class="wrap"><nav class="nav-inner" aria-label="Main">
      <a class="brand" href="${h}#top" aria-label="Endurance — home">${bubblesMini}<span>Endurance</span></a>
      <ul class="nav-links">
        <li><a href="${h}#about">About</a></li>
        <li><a href="${h}#work">Work</a></li>
        <li><a href="${h}#videos">Videos</a></li>
        <li><a href="${h}#skills">Skills</a></li>
        <li><a href="${h}#proof">Proof of Work</a></li>
        <li><a class="nav-cta" href="#contact">Contact</a></li>
      </ul>
      <div class="nav-tools">
        <button class="theme-btn" data-theme-toggle aria-label="Switch to dark mode">
          <svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"/></svg>
          <svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        </button>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div></nav></div></header>`;
  }
  const foot = document.querySelector("[data-footer]");
  if (foot) {
    const s = SITE.socials;
    const links = [
      s.x && `<a href="${s.x}" target="_blank" rel="noopener">${ICON.x}<span>X</span></a>`,
      s.tiktok && `<a href="${s.tiktok}" target="_blank" rel="noopener">${ICON.tiktok}<span>TikTok</span></a>`,
      s.linkedin && `<a href="${s.linkedin}" target="_blank" rel="noopener">${ICON.linkedin}<span>LinkedIn</span></a>`,
      s.substack && `<a href="${s.substack}" target="_blank" rel="noopener">${ICON.substack}<span>Substack</span></a>`,
    ].filter(Boolean).join("");
    foot.outerHTML = `<footer class="footer" id="contact"><div class="wrap">
      <div class="footer-top reveal">
        <div class="footer-mark">${insignia({ text: "#F7F1F2", line: "#F7F1F2", icon: "#F4C0C8" })}</div>
        <div class="footer-cta">
          <a class="btn btn-light" href="mailto:${SITE.email}">Have a project in mind? Let’s talk ✉</a>
          <span class="mail">${SITE.email} <button class="copy-btn" data-copy="${SITE.email}">Copy</button></span>
        </div>
        <div class="socials">${links}</div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Endurance · Content &amp; Creative Specialist</span><span>Writing · Strategy · Video · Storytelling</span></div>
    </div></footer>`;
  }
  document.querySelectorAll("[data-insignia]").forEach((el) => {
    el.innerHTML = insignia({ tagline: el.dataset.insignia || undefined, text: "var(--accent)", line: "var(--accent)", icon: "var(--accent-deep)" });
  });
}

/* ---------- interactions ---------- */
function initNav() {
  const nav = document.getElementById("top-nav");
  if (!nav) return;
  const toggle = nav.querySelector(".nav-toggle");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }));
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
}

function initTheme() {
  const root = document.documentElement, btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;
  const label = () => btn.setAttribute("aria-label", root.dataset.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  label();
  btn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next; label();
    try { localStorage.setItem("theme", next); } catch {}
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((e) => io.observe(e));
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2400);
}

function initCopy() {
  document.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.copy); toast("Email copied"); }
    catch { toast(b.dataset.copy); }
  });
}

/* ---------- video grid + lightbox ---------- */
const driveThumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w720`;
const srcFor = (v) => v.type === "drive" ? `https://drive.google.com/file/d/${v.id}/preview`
  : v.type === "x" ? `https://platform.twitter.com/embed/Tweet.html?id=${v.id}&dnt=true&theme=${document.documentElement.dataset.theme === "dark" ? "dark" : "light"}`
  : v.src;
const linkFor = (v) => v.type === "drive" ? `https://drive.google.com/file/d/${v.id}/view`
  : v.type === "x" ? `https://x.com/i_am_endurance/status/${v.id}` : v.src;

function renderVideos() {
  const grid = document.querySelector("[data-videos]");
  if (!grid) return;
  grid.innerHTML = VIDEOS.map((v, i) => `
    <button class="vcard reveal d${i % 4}${!v.thumb && v.type !== "drive" ? " no-thumb" : ""}" data-video="${i}" aria-label="Play ${v.title}">
      <img src="${v.thumb || (v.type === "drive" ? driveThumb(v.id) : "")}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.classList.add('no-thumb')">
      <span class="play-dot" aria-hidden="true"></span>
      <span class="vmeta"><b>${v.title}</b><span>${v.note}</span></span>
    </button>`).join("");
}

function initLightbox() {
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Media viewer");
  lb.innerHTML = `<div class="lb-stage"></div>
    <button class="lb-btn lb-close" aria-label="Close">×</button>
    <button class="lb-btn lb-prev" aria-label="Previous">‹</button>
    <button class="lb-btn lb-next" aria-label="Next">›</button>
    <div class="lb-caption"></div>`;
  document.body.appendChild(lb);
  const stage = lb.querySelector(".lb-stage"), cap = lb.querySelector(".lb-caption");
  let list = VIDEOS, idx = 0, lastFocus = null;

  const show = (i) => {
    idx = (i + list.length) % list.length;
    const v = list[idx];
    stage.className = "lb-stage" + (v.type === "x" ? " x" : v.type === "image" ? " wide" : "");
    stage.innerHTML = v.type === "image"
      ? `<img src="${v.src}" alt="${v.title}">`
      : `<iframe src="${srcFor(v)}" title="${v.title}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    cap.innerHTML = `${v.title}${v.type !== "image" ? ` <a class="lb-external" href="${linkFor(v)}" target="_blank" rel="noopener">Open ↗</a>` : ""}`;
    const multi = list.length > 1;
    lb.querySelector(".lb-prev").style.display = multi ? "" : "none";
    lb.querySelector(".lb-next").style.display = multi ? "" : "none";
  };
  const open = (items, i) => { list = items; lastFocus = document.activeElement; show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; lb.querySelector(".lb-close").focus(); };
  const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; setTimeout(() => (stage.innerHTML = ""), 300); lastFocus && lastFocus.focus(); };

  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", () => show(idx - 1));
  lb.querySelector(".lb-next").addEventListener("click", () => show(idx + 1));
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight" && list.length > 1) show(idx + 1);
    if (e.key === "ArrowLeft" && list.length > 1) show(idx - 1);
  });
  document.addEventListener("click", (e) => {
    const vb = e.target.closest("[data-video]");
    if (vb) { open(VIDEOS, +vb.dataset.video); return; }
    const one = e.target.closest("[data-media]");
    if (one) { e.preventDefault(); open([{ type: one.dataset.media, id: one.dataset.id, src: one.dataset.src, title: one.dataset.title || "" }], 0); }
  });
}

/* ---------- case study table of contents ---------- */
function initToc() {
  const links = document.querySelectorAll(".cs-toc a");
  if (!links.length || !("IntersectionObserver" in window)) return;
  const map = new Map([...links].map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver((ens) => ens.forEach((en) => {
    if (en.isIntersecting) { links.forEach((l) => l.classList.remove("active")); map.get(en.target.id)?.classList.add("active"); }
  }), { rootMargin: "-30% 0px -60% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); s && io.observe(s); });
}

/* ---------- CV → PDF ---------- */
function loadScript(src) {
  return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
}
function cvContact() {
  const s = SITE.socials;
  return [SITE.email, s.x && "x.com/i_am_endurance", s.tiktok && "tiktok.com/@i_am_endurance_", s.substack && "iamendurance.substack.com",
    s.linkedin && s.linkedin.replace(/^https?:\/\/(www\.)?/, ""), SITE.url && SITE.url.replace(/^https?:\/\//, "")].filter(Boolean);
}
async function downloadCV(btn) {
  const label = btn.innerHTML;
  btn.disabled = true; btn.innerHTML = "Preparing CV…";
  try {
    if (!window.jspdf) await loadScript("assets/js/vendor/jspdf.umd.min.js");
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const W = 595.28, H = 841.89, M = 48, CW = W - M * 2;
    const BURG = [122, 23, 40], INK = [36, 25, 28], MUTED = [110, 100, 103];
    let y = M;
    const need = (h) => { if (y + h > H - M) { doc.addPage(); y = M; } };
    const text = (str, { size = 10, style = "normal", color = INK, x = M, width = CW, lh = 1.45, gap = 0 } = {}) => {
      doc.setFont("helvetica", style); doc.setFontSize(size); doc.setTextColor(...color);
      const lines = doc.splitTextToSize(str, width);
      lines.forEach((ln) => { need(size * lh); doc.text(ln, x, y + size); y += size * lh; });
      y += gap;
    };
    const heading = (t) => {
      need(40); y += 14;
      doc.setFont("helvetica", "bold"); doc.setFontSize(9.5); doc.setTextColor(...BURG);
      doc.text(t.toUpperCase(), M, y + 9.5, { charSpace: 1.4 });
      doc.setDrawColor(231, 218, 221); doc.setLineWidth(0.8); doc.line(M, y + 16, W - M, y + 16);
      y += 26;
    };
    // header
    doc.setFillColor(...BURG); doc.rect(0, 0, W, 6, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(30); doc.setTextColor(...BURG);
    doc.text(SITE.name, M, y + 26);
    doc.setFontSize(10); doc.setTextColor(...INK); doc.text(SITE.title.toUpperCase(), M, y + 46, { charSpace: 1.2 });
    doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(...MUTED);
    cvContact().forEach((c, i) => doc.text(c, W - M, y + 8 + i * 12.5, { align: "right" }));
    y += Math.max(60, cvContact().length * 12.5 + 8);
    doc.setDrawColor(...BURG); doc.setLineWidth(2); doc.line(M, y, W - M, y); y += 6;

    heading("Profile");
    text(CV.profile, { size: 10, lh: 1.5 });

    heading("Selected work");
    CV.work.forEach((w) => {
      need(70);
      text(w.name, { size: 11, style: "bold" });
      text(w.meta, { size: 9, style: "bold", color: BURG, gap: 3 });
      w.points.forEach((pt) => {
        need(14);
        doc.setFillColor(...BURG); doc.circle(M + 3, y + 6.2, 1.6, "F");
        text(pt, { size: 9.5, x: M + 12, width: CW - 12, lh: 1.42 });
      });
      y += 8;
    });

    heading("Experience & contributions");
    CV.experience.forEach(([t, d]) => { need(32); text(t, { size: 10, style: "bold" }); text(d, { size: 9.5, color: [75, 63, 66], gap: 6 }); });

    heading("Skills");
    const colW = CW / 2 - 10, half = Math.ceil(CV.skills.length / 2), y0 = y;
    need(half * 14);
    CV.skills.forEach((k, i) => {
      const col = i < half ? 0 : 1, row = col ? i - half : i;
      const x = M + col * (colW + 20), yy = y0 + row * 14;
      doc.setFillColor(...BURG); doc.rect(x, yy + 4.5, 3.5, 3.5, "F");
      doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(...INK); doc.text(k, x + 10, yy + 9);
    });
    y = y0 + half * 14;

    heading("Tools");
    text(CV.tools.join("  ·  "), { size: 10 });

    // footer on each page
    const pages = doc.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
      doc.setPage(i); doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...MUTED);
      doc.text(`Proof of work: ${SITE.proofOfWork.replace("https://", "")}`, M, H - 24);
      doc.text(`${i} / ${pages}`, W - M, H - 24, { align: "right" });
    }
    doc.save("Endurance-CV.pdf");
    toast("CV downloaded");
  } catch (err) {
    console.error(err); toast("Couldn’t build the PDF. Please try again.");
  } finally { btn.disabled = false; btn.innerHTML = label; }
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderVideos();
  initNav();
  initTheme();
  initReveal();
  initCopy();
  initLightbox();
  initToc();
  document.querySelectorAll("[data-cv]").forEach((b) => b.addEventListener("click", () => downloadCV(b)));
  document.querySelectorAll("[data-href]").forEach((a) => (a.href = SITE[a.dataset.href] || a.href));
});
