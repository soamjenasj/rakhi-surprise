/* =========================================================================
   DATA
   ========================================================================= */

const STATS = [
  { label: "Handsomeness", value: "100 / 100" },
  { label: "Annoying Level", value: "999+" },
  { label: "Intelligence", value: "Under investigation" },
  { label: "Sister's Patience Required", value: "Extreme" },
  { label: "Brother Availability", value: "Depends on Snacks 🍟" },
  { label: "Free Advice", value: "Unlimited" },
  { label: "Money Lending", value: "System Error 💀" },
];

const WISHES = [
  {
    id: "crore",
    title: "₹1 Crore 💰",
    sub: "Because apparently being my sister isn't enough.",
    reactIcon: "shocked",
    headline: "₹1 CRORE???",
    lines: [
      "Sister, I am your brother, not RBI.",
    ],
    stamp: "REQUEST REJECTED BY THE MINISTRY OF MY BANK BALANCE",
  },
  {
    id: "iphone",
    title: "A Brand New iPhone 📱",
    sub: "Sure. Let me just sell one of my kidneys.",
    reactIcon: "sweat",
    headline: "An iPhone?",
    lines: [
      "Madam, please check my current phone first.",
    ],
    stamp: "BUDGET APPROVED: ONE SCREEN PROTECTOR",
  },
  {
    id: "gwagon",
    title: "A G-Wagon 🚙",
    sub: "Absolutely. Give me 47 years.",
    reactIcon: "dizzy",
    headline: "G-Wagon?!",
    lines: [
      "I said handsome brother, not billionaire brother.",
    ],
    stamp: "ETA: 47 YEARS, PLEASE HOLD",
  },
  {
    id: "trip",
    title: "A Luxury Trip ✈️",
    sub: "Destination: wherever my bank balance allows.",
    reactIcon: "dreamy",
    headline: "Luxury vacation approved!",
    lines: [
      "Terms & Conditions: you are travelling in my dreams.",
    ],
    stamp: "BOARDING GATE: IMAGINATION",
  },
  {
    id: "salary",
    title: "My Entire Salary 💸",
    sub: "Nice try.",
    reactIcon: "villain",
    headline: "My salary?",
    lines: [
      "You really woke up and chose violence.",
    ],
    stamp: "CASE ESCALATED TO MOM",
  },
  {
    id: "food",
    title: "Lifetime Free Food 🍔",
    sub: "Now THIS is a realistic demand.",
    reactIcon: "happy",
    headline: "Finally… a sister with reasonable expectations.",
    lines: [
      "This request has been fast-tracked.",
    ],
    stamp: "APPROVED (mostly because I'm hungry too)",
  },
  {
    id: "blessings",
    title: "Nothing. I Just Want Your Blessings ❤️",
    sub: "Suspicious. Extremely suspicious.",
    reactIcon: "suspicious",
    headline: "\"Just blessings,\" she says.",
    lines: [
      "Sure. And I'm the Prime Minister of Odisha.",
    ],
    stamp: "FLAGGED FOR FURTHER INVESTIGATION",
  },
];

const PROCESSING_STEPS = [
  "Checking sister's request...",
  "Checking brother's bank balance...",
  "Contacting financial department...",
  "Asking Mom...",
  "Asking Dad...",
  "Reconsidering life choices...",
  "Request DENIED ❌",
];

const SCENE_ORDER = ["landing", "intro", "wishes", "reaction", "processing", "heartfelt"];
// approximate progress (0-1) through the mauli thread per scene
const SCENE_PROGRESS = {
  landing: 0.02,
  intro: 0.22,
  wishes: 0.42,
  reaction: 0.6,
  processing: 0.78,
  heartfelt: 1,
};

/* =========================================================================
   SVG REACTION ICONS — hand-built, no external/copyrighted images
   ========================================================================= */

function faceSVG(type){
  const gold = "#f3c968", rose = "#e85673", cream = "#f6ecdd", ink = "#12040a";
  const common = `viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"`;

  const parts = {
    shocked: `
      <circle cx="100" cy="100" r="88" fill="${rose}" opacity="0.15"/>
      <circle cx="100" cy="105" r="70" fill="#3d0f16" stroke="${gold}" stroke-width="3"/>
      <ellipse cx="72" cy="90" rx="12" ry="16" fill="${cream}"/>
      <ellipse cx="128" cy="90" rx="12" ry="16" fill="${cream}"/>
      <circle cx="72" cy="92" r="5" fill="${ink}"/>
      <circle cx="128" cy="92" r="5" fill="${ink}"/>
      <ellipse cx="100" cy="140" rx="16" ry="20" fill="${ink}"/>
      <path d="M40 60 Q30 40 45 30" stroke="${gold}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M160 60 Q170 40 155 30" stroke="${gold}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M50 155 Q45 175 30 178" stroke="#7fd3ff" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.85"/>
      <path d="M150 155 Q155 175 170 178" stroke="#7fd3ff" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.85"/>
    `,
    sweat: `
      <circle cx="100" cy="105" r="70" fill="#3d0f16" stroke="${gold}" stroke-width="3"/>
      <path d="M62 92 Q72 82 84 92" stroke="${cream}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M116 92 Q128 82 138 92" stroke="${cream}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M78 140 Q100 122 122 140" stroke="${ink}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="150" cy="70" rx="9" ry="13" fill="#7fd3ff" opacity="0.9"/>
      <path d="M50 40 L60 25 M140 30 L150 45" stroke="${gold}" stroke-width="4" stroke-linecap="round"/>
    `,
    dizzy: `
      <circle cx="100" cy="105" r="70" fill="#3d0f16" stroke="${gold}" stroke-width="3"/>
      <g stroke="${cream}" stroke-width="4" stroke-linecap="round">
        <path d="M62 82 L82 100 M82 82 L62 100"/>
        <path d="M118 82 L138 100 M138 82 L118 100"/>
      </g>
      <ellipse cx="100" cy="140" rx="20" ry="10" fill="${ink}"/>
      <circle cx="30" cy="60" r="14" fill="none" stroke="${gold}" stroke-width="3" opacity="0.7"/>
      <circle cx="172" cy="55" r="9" fill="none" stroke="${rose}" stroke-width="3" opacity="0.7"/>
      <path d="M20 130 Q40 110 20 90" stroke="${gold}" stroke-width="3" fill="none" opacity="0.6"/>
    `,
    dreamy: `
      <circle cx="100" cy="105" r="70" fill="#3d0f16" stroke="${gold}" stroke-width="3"/>
      <path d="M64 92 Q74 84 84 92" stroke="${cream}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M116 92 Q126 84 136 92" stroke="${cream}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M82 138 Q100 152 118 138" stroke="${cream}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="150" cy="55" r="6" fill="${gold}" opacity="0.9"/>
      <circle cx="165" cy="70" r="4" fill="${gold}" opacity="0.7"/>
      <circle cx="140" cy="40" r="3" fill="${gold}" opacity="0.6"/>
      <path d="M40 55 h14 M47 48 v14" stroke="${rose}" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
    `,
    villain: `
      <circle cx="100" cy="105" r="70" fill="#2a0a10" stroke="${rose}" stroke-width="3"/>
      <path d="M60 82 L88 92" stroke="${cream}" stroke-width="6" stroke-linecap="round"/>
      <path d="M140 82 L112 92" stroke="${cream}" stroke-width="6" stroke-linecap="round"/>
      <path d="M76 145 Q100 125 124 145" stroke="${cream}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M76 145 Q88 138 100 145 Q112 138 124 145" stroke="${ink}" stroke-width="3" fill="none"/>
      <path d="M30 40 Q50 20 75 35 Q95 15 125 35 Q150 20 170 40 L165 60 Q100 40 35 60 Z" fill="${ink}"/>
    `,
    happy: `
      <circle cx="100" cy="105" r="70" fill="#3d0f16" stroke="${gold}" stroke-width="3"/>
      <path d="M64 90 Q74 78 86 90" stroke="${cream}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M114 90 Q126 78 136 90" stroke="${cream}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M70 130 Q100 165 130 130" stroke="${cream}" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="60" cy="118" r="9" fill="${rose}" opacity="0.5"/>
      <circle cx="140" cy="118" r="9" fill="${rose}" opacity="0.5"/>
      <text x="100" y="45" font-size="26" text-anchor="middle">🍔</text>
    `,
    suspicious: `
      <circle cx="100" cy="105" r="70" fill="#3d0f16" stroke="${gold}" stroke-width="3"/>
      <path d="M60 88 L90 92" stroke="${cream}" stroke-width="5" stroke-linecap="round"/>
      <path d="M140 84 Q128 78 116 86" stroke="${cream}" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="75" cy="98" rx="8" ry="10" fill="${cream}"/>
      <circle cx="75" cy="100" r="3.5" fill="${ink}"/>
      <ellipse cx="128" cy="96" rx="6" ry="7" fill="${cream}"/>
      <circle cx="128" cy="97" r="3" fill="${ink}"/>
      <path d="M82 138 Q100 132 118 140" stroke="${cream}" stroke-width="5" fill="none" stroke-linecap="round"/>
    `,
  };

  return `<svg ${common}>${parts[type] || parts.shocked}</svg>`;
}

/* =========================================================================
   NAVIGATION
   ========================================================================= */

const app = document.getElementById("app");
let selectedWish = null;

function goToScene(name){
  document.querySelectorAll(".scene").forEach(sec => sec.classList.remove("is-active"));
  const target = document.getElementById(`scene-${name}`);
  if (target) target.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  updateMauli(SCENE_PROGRESS[name] ?? 0);

  if (name === "processing") runProcessingSequence();
}

function updateMauli(fraction){
  const fill = document.getElementById("mauliFill");
  if (!fill) return;
  const total = 520;
  fill.style.strokeDashoffset = String(total - total * fraction);
}

/* =========================================================================
   SCENE 2 — STAT CARDS
   ========================================================================= */

function renderStats(){
  const grid = document.getElementById("statGrid");
  grid.innerHTML = STATS.map((s, i) => `
    <div class="stat-card" style="animation-delay:${i * 90}ms">
      <p class="stat-card__label">${s.label}</p>
      <p class="stat-card__value">${s.value}</p>
    </div>
  `).join("");
}

/* =========================================================================
   SCENE 3 — WISH CARDS
   ========================================================================= */

function renderWishes(){
  const grid = document.getElementById("wishGrid");
  grid.innerHTML = WISHES.map((w, i) => `
    <button class="wish-card" data-id="${w.id}" style="animation-delay:${i * 70}ms">
      <p class="wish-card__title">${w.title}</p>
      <p class="wish-card__sub">${w.sub}</p>
    </button>
  `).join("");

  grid.querySelectorAll(".wish-card").forEach(card => {
    card.addEventListener("click", () => {
      selectedWish = WISHES.find(w => w.id === card.dataset.id);
      renderReaction(selectedWish);
      burstConfetti(28);
      goToScene("reaction");
    });
  });
}

/* =========================================================================
   SCENE 4 — REACTION
   ========================================================================= */

function renderReaction(wish){
  const stage = document.getElementById("reactionStage");
  if (!wish) return;
  stage.innerHTML = `
    <div class="reaction-illustration">${faceSVG(wish.reactIcon)}</div>
    <h2 class="reaction-headline">${wish.headline}</h2>
    ${wish.lines.map(l => `<p class="reaction-line">${l}</p>`).join("")}
    <span class="reaction-stamp">${wish.stamp}</span>
  `;
}

/* =========================================================================
   SCENE 5 — FAKE PROCESSING TERMINAL
   ========================================================================= */

let processingRan = false;

function runProcessingSequence(){
  if (processingRan) return; // only animate once per visit-cycle
  processingRan = true;

  const stepsList = document.getElementById("stepsList");
  const fill = document.getElementById("progressFill");
  const verdict = document.getElementById("verdict");
  stepsList.innerHTML = "";
  fill.style.width = "0%";
  verdict.classList.remove("is-visible");

  PROCESSING_STEPS.forEach((text, i) => {
    setTimeout(() => {
      const li = document.createElement("li");
      li.textContent = text;
      li.style.animationDelay = "0ms";
      stepsList.appendChild(li);
      fill.style.width = `${Math.round(((i + 1) / PROCESSING_STEPS.length) * 100)}%`;

      if (i === PROCESSING_STEPS.length - 1){
        setTimeout(() => {
          verdict.classList.add("is-visible");
          burstConfetti(16);
        }, 400);
      }
    }, i * 650);
  });
}

// allow re-running the animation if the user navigates back and forth
function resetProcessing(){ processingRan = false; }

/* =========================================================================
   CONFETTI (lightweight canvas confetti, no dependencies)
   ========================================================================= */

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
let confettiPieces = [];
let confettiRunning = false;

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const CONFETTI_COLORS = ["#f3c968", "#e85673", "#d9a441", "#f6ecdd", "#c73550"];

function burstConfetti(count = 24){
  const originX = canvas.width / 2;
  for (let i = 0; i < count; i++){
    confettiPieces.push({
      x: originX + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.25 + Math.random() * 40,
      vx: (Math.random() - 0.5) * 8,
      vy: -Math.random() * 9 - 4,
      size: Math.random() * 7 + 4,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * 360,
      spin: (Math.random() - 0.5) * 14,
      life: 0,
    });
  }
  if (!confettiRunning) animateConfetti();
}

function animateConfetti(){
  confettiRunning = true;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach(p => {
    p.vy += 0.28; // gravity
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.spin;
    p.life += 1;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    ctx.restore();
  });

  confettiPieces = confettiPieces.filter(p => p.y < canvas.height + 40 && p.life < 260);

  if (confettiPieces.length > 0){
    requestAnimationFrame(animateConfetti);
  } else {
    confettiRunning = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

/* =========================================================================
   FLOATING AMBIENT EMOJIS
   ========================================================================= */

function seedFloaters(){
  const holder = document.getElementById("floaters");
  const glyphs = ["🪢", "❤️", "✨", "🎉", "🧵"];
  const count = window.innerWidth < 600 ? 8 : 14;

  for (let i = 0; i < count; i++){
    const span = document.createElement("span");
    span.className = "floater";
    span.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.setProperty("--drift", `${(Math.random() - 0.5) * 120}px`);
    span.style.animationDuration = `${14 + Math.random() * 14}s`;
    span.style.animationDelay = `${Math.random() * -20}s`;
    span.style.fontSize = `${1 + Math.random() * 1.1}rem`;
    holder.appendChild(span);
  }
}

/* =========================================================================
   INIT + EVENT WIRING
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderWishes();
  seedFloaters();
  updateMauli(SCENE_PROGRESS.landing);

  document.getElementById("enterBtn").addEventListener("click", () => {
    burstConfetti(36);
    goToScene("intro");
  });

  document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.next;
      if (next === "heartfelt") burstConfetti(40);
      goToScene(next);
    });
  });

  const lastBtn = document.getElementById("lastThingBtn");
  const overlay = document.getElementById("finalOverlay");
  const closeOverlay = document.getElementById("closeOverlay");

  lastBtn.addEventListener("click", () => {
    overlay.classList.add("is-open");
    burstConfetti(50);
  });
  closeOverlay.addEventListener("click", () => overlay.classList.remove("is-open"));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("is-open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("is-open");
  });
});
