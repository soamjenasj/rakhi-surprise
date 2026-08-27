# Behold, Your Handsome Brother 😎 — Raksha Bandhan Experience

A funny, roast-first, secretly-heartfelt interactive website. No backend, no
build step — just open it and it works.

## 📁 Project structure

```
rakhi-site/
├── index.html      → all page structure / content
├── styles.css       → all visual styling + animations
├── script.js        → all interactivity (scene navigation, confetti, reactions)
├── assets/
│   └── brother.jpg  → your photo (already dropped in for you)
└── README.md
```

## 🖼️ Your photo

Your uploaded photo has already been placed at `assets/brother.jpg` and is
wired into the opening scene. If you ever want to swap it for a different
photo later, just replace that file — **keep the exact filename
`brother.jpg`** (or update the `src="assets/brother.jpg"` reference in
`index.html` if you rename it).

For best results, a photo where your face is clearly visible in the upper
two-thirds works best, since it's cropped into a tall 3:4 frame.

## ▶️ Running it locally

No installation, no npm, no server required. Just double-click `index.html`
and it opens in your browser.

If double-clicking causes any asset-loading quirks in your browser, run a
tiny local server instead (still no backend logic, just a static file
server):

```bash
# from inside the rakhi-site folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

or, if you have Node installed:

```bash
npx serve .
```

## 🧭 The experience, scene by scene

1. **Landing** — your photo, the big dramatic intro line, and the "ENTER AT
   YOUR OWN RISK" button.
2. **Brother Introduction** — animated stat cards (Handsomeness: 100/100,
   Annoying Level: 999+, etc).
3. **Wish Selection** — 7 clickable cards with ridiculous demands she can
   "ask" for.
4. **Reaction** — a hand-illustrated SVG face reaction + roast, unique per
   option she picks. All illustrations are drawn in code (SVG), so there
   are no copyrighted meme images anywhere in the project.
5. **Fake Approval System** — a mock terminal with a step-by-step
   "processing" animation that always ends in a dramatic (loving) rejection.
6. **Heartfelt Turn** — the tone flips: warm colors, a glowing rakhi motif,
   and the genuine message.
7. **Final Surprise** — a button reveals one last heartfelt note in an
   overlay card.

A thin gold "mauli" (sacred thread) on the right edge of the screen fills
in as she moves through the experience — a small signature touch tying
back to the Raksha Bandhan thread itself. (It's hidden on small/mobile
screens to keep things clean.)

## ✏️ Editing content

Everything is easy to find and tweak:

- **Wish options + roast reactions** → open `script.js`, edit the `WISHES`
  array near the top. Each entry has `title`, `sub`, `headline`, `lines`,
  and `stamp` — plus a `reactIcon` (`shocked`, `sweat`, `dizzy`, `dreamy`,
  `villain`, `happy`, `suspicious`) that picks which illustrated face shows.
- **Stat cards** → the `STATS` array in `script.js`.
- **Processing steps** → the `PROCESSING_STEPS` array in `script.js`.
- **Heartfelt message / sign-off** → directly inside `index.html`, in the
  `scene-heartfelt` section.
- **Colors / fonts** → the `:root` variables at the top of `styles.css`.

## 🚀 Deploying (optional)

This is a fully static site — drag-and-drop deploy works anywhere:

**GitHub Pages**
1. Create a new repo and push these files (including the `assets` folder).
2. Repo Settings → Pages → set source to your default branch, root folder.
3. Your site goes live at `https://<username>.github.io/<repo-name>/`.

**Netlify / Vercel**
1. Drag the whole `rakhi-site` folder onto the Netlify "Deploy" drop zone,
   or `vercel` CLI / import the repo in either dashboard.
2. No build command needed — it's plain HTML/CSS/JS.

## ✅ Notes

- Fully responsive — tested down to small mobile widths.
- Respects `prefers-reduced-motion` for accessibility.
- No external dependencies besides Google Fonts (Fraunces, Manrope, Caveat)
  — everything else (confetti, illustrations, animations) is hand-built
  with plain CSS/SVG/JS, so there's nothing to install and no console
  errors.
