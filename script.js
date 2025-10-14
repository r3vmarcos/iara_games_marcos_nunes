// Base: seu script.js original (mantido) com extensões para o painel de acessibilidade.
// Arquivo original: script.js. :contentReference[oaicite:6]{index=6}

const body = document.body;

// Variáveis dos elementos do painel de acessibilidade
const a11yFloating = document.getElementById("a11y-floating");
const a11yToggle = document.getElementById("a11y-toggle");
const a11yCloseBtn = document.getElementById("a11y-close");

// A lógica de "Alternância de Tema" e "Leitura em Voz Alta" que usava botões separados
// foi removida, pois agora é gerenciada exclusivamente pelo painel de acessibilidade.

// ---------- Leitor por hover com delay ----------
let hoverReaderEnabled = JSON.parse(localStorage.getItem("hoverReaderEnabled") || "false");
const hoverToggleBtn = document.getElementById("toggle-hover-reader");
if (hoverToggleBtn) {
  hoverToggleBtn.setAttribute("aria-pressed", String(hoverReaderEnabled));
  hoverToggleBtn.textContent = `Leitura por Hover: ${hoverReaderEnabled ? "On" : "Off"}`;
}
let hoverTimer = null;
let lastSpoken = null;

function speakText(text) {
  if (!text || text.trim().length === 0) return;
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "pt-BR";
  utter.rate = 1;
  utter.pitch = 1;
  speechSynthesis.speak(utter);
  lastSpoken = text;
}

document.body.addEventListener(
  "mouseenter",
  (e) => {
    if (!hoverReaderEnabled) return;
    const target = e.target;
    // evita leitura de elementos muito genéricos
    if (!target) return;
    hoverTimer = setTimeout(() => {
      const texto = target.innerText || target.alt || target.getAttribute("aria-label") || "";
      if (texto && texto.trim().length > 0 && texto !== lastSpoken) {
        speakText(texto.trim());
      }
    }, 1000); // 1s de delay como solicitado
  },
  true
);

document.body.addEventListener(
  "mouseleave",
  (e) => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
    // Não cancela a fala imediatamente; pode deixar completar ou cancelar:
    // speechSynthesis.cancel();
  },
  true
);

// Toggle button para hover reader
if (hoverToggleBtn) {
  hoverToggleBtn.addEventListener("click", () => {
    hoverReaderEnabled = !hoverReaderEnabled;
    hoverToggleBtn.setAttribute("aria-pressed", String(hoverReaderEnabled));
    hoverToggleBtn.classList.toggle("active", hoverReaderEnabled);
    hoverToggleBtn.textContent = `Leitura por Hover: ${hoverReaderEnabled ? "On" : "Off"}`;
    localStorage.setItem("hoverReaderEnabled", JSON.stringify(hoverReaderEnabled));
    if (!hoverReaderEnabled) speechSynthesis.cancel();
  });
}

// ---------- Painel de Acessibilidade: abrir/fechar (Lógica Centralizada) ----------
function openA11yPanel() {
  a11yFloating.setAttribute("aria-hidden", "false");
  a11yToggle.setAttribute("aria-expanded", "true");
  // Foco no botão de fechar ao abrir para acessibilidade
  a11yCloseBtn.focus();
}

function closeA11yPanel() {
  a11yFloating.setAttribute("aria-hidden", "true");
  a11yToggle.setAttribute("aria-expanded", "false");
  // Retorna o foco para o botão de toggle
  a11yToggle.focus();
}

if (a11yToggle) {
  a11yToggle.addEventListener("click", () => {
    const isOpen = a11yFloating.getAttribute("aria-hidden") === "false";
    if (isOpen) {
      closeA11yPanel();
    } else {
      openA11yPanel();
    }
  });
}

if (a11yCloseBtn) {
  a11yCloseBtn.addEventListener("click", closeA11yPanel);
}

// fechar ao pressionar Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && a11yFloating.getAttribute("aria-hidden") === "false") {
    closeA11yPanel();
  }
});

// fechar ao clicar fora do painel
document.addEventListener("click", (e) => {
  if (a11yFloating.getAttribute("aria-hidden") === "false" && !a11yFloating.contains(e.target) && e.target !== a11yToggle) {
    closeA11yPanel();
  }
});

// ---------- Texto: Normal / Médio / Grande ----------
const textSizeBtns = document.querySelectorAll(".text-size");
const applyTextSize = (sizeKey) => {
  document.documentElement.classList.remove("text-size-normal", "text-size-medio", "text-size-grande");
  if (sizeKey === "normal") document.documentElement.classList.add("text-size-normal");
  if (sizeKey === "medio") document.documentElement.classList.add("text-size-medio");
  if (sizeKey === "grande") document.documentElement.classList.add("text-size-grande");
  localStorage.setItem("textSize", sizeKey);
};
textSizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const sz = btn.getAttribute("data-size");
    applyTextSize(sz);
    textSizeBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// carregar preferencia
const savedTextSize = localStorage.getItem("textSize") || "normal";
applyTextSize(savedTextSize);
document.querySelectorAll(`.text-size[data-size="${savedTextSize}"]`).forEach((b) => b.classList.add("active"));

// ---------- Visual switches (claro/escuro/alto-contraste/monocromatico) ----------
const visualBtns = document.querySelectorAll(".visual");
visualBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const visual = btn.getAttribute("data-visual");
    // Removemos classes específicas e aplicamos
    body.classList.remove("modo-claro", "modo-escuro", "alto-contraste", "monocromatico");
    // default: manter modo-claro/escuro separados
    if (visual === "claro") {
      body.classList.add("modo-claro");
      localStorage.setItem("tema", "claro");
    } else if (visual === "escuro") {
      body.classList.add("modo-escuro");
      localStorage.setItem("tema", "escuro");
    } else if (visual === "alto-contraste") {
      body.classList.add("alto-contraste");
      localStorage.setItem("tema", "alto-contraste");
    } else if (visual === "monocromatico") {
      body.classList.add("monocromatico");
      localStorage.setItem("tema", "monocromatico");
    }
    visualBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// Ao carregar, se localStorage indicar um tema não padrão, aplicamos
const savedTheme = localStorage.getItem("tema");
if (savedTheme) {
  document.querySelectorAll(`.visual[data-visual]`).forEach((b) => b.classList.remove("active"));
  if (savedTheme === "claro") {
    body.classList.add("modo-claro");
    document.querySelector(`.visual[data-visual="claro"]`)?.classList.add("active");
  } else if (savedTheme === "escuro") {
    body.classList.add("modo-escuro");
    document.querySelector(`.visual[data-visual="escuro"]`)?.classList.add("active");
  } else if (savedTheme === "alto-contraste") {
    body.classList.add("alto-contraste");
    document.querySelector(`.visual[data-visual="alto-contraste"]`)?.classList.add("active");
  } else if (savedTheme === "monocromatico") {
    body.classList.add("monocromatico");
    document.querySelector(`.visual[data-visual="monocromatico"]`)?.classList.add("active");
  }
}

// ---------- Font switches (Inter / Lexend / Baloo / System) ----------
const fontBtns = document.querySelectorAll(".font-switch");
const applyFont = (fontKey) => {
  body.classList.remove("font-inter", "font-lexend", "font-baloo");
  if (fontKey === "inter") body.classList.add("font-inter");
  if (fontKey === "lexend") body.classList.add("font-lexend");
  if (fontKey === "baloo") body.classList.add("font-baloo");
  // system = padrão: sem classe
  localStorage.setItem("font", fontKey);
};
fontBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const f = btn.getAttribute("data-font");
    applyFont(f);
    fontBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// carregar preferência de fonte
const savedFont = localStorage.getItem("font") || "system";
applyFont(savedFont);
document.querySelectorAll(`.font-switch[data-font="${savedFont}"]`).forEach((b) => b.classList.add("active"));

// ---------- Reset Acessibilidade ----------
const resetBtn = document.getElementById("reset-a11y");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    // limpa preferências restore padrão
    localStorage.removeItem("textSize");
    localStorage.removeItem("tema");
    localStorage.removeItem("font");
    localStorage.removeItem("hoverReaderEnabled");
    // aplicar padrões
    applyTextSize("normal");
    body.classList.remove("alto-contraste", "monocromatico", "modo-claro", "modo-escuro", "font-inter", "font-lexend", "font-baloo");
    hoverReaderEnabled = false;
    hoverToggleBtn.setAttribute("aria-pressed", "false");
    hoverToggleBtn.textContent = `Leitura por Hover: Off`;
    document.querySelectorAll(".a11y-btn").forEach((b) => b.classList.remove("active"));
  });
}

// ---------- Tornar cards clicáveis + acessíveis via teclado ----------
function initClickableCards() {
  // Seleciona card-jogo (article), card-lista-jogo (article) e card-categoria (a já é link)
  const clickable = document.querySelectorAll(".card-jogo[tabindex], .card-lista-jogo[tabindex], .card-categoria");
  clickable.forEach((el) => {
    // make sure card-categoria is focusable
    if (el.classList.contains("card-categoria")) {
      el.setAttribute("tabindex", "0");
    }
    // click handler (usa data-href se presente)
    el.addEventListener("click", (ev) => {
      const href = el.getAttribute("data-href") || el.closest("a")?.getAttribute("href") || "#";
      // animação de destaque já é CSS; aqui navegamos
      if (href && href !== "#") {
        window.location.href = href;
      } else {
        // placeholder behavior: pode abrir modal ou simular navegação
        console.log("card clicado (placeholder):", href);
      }
    });
    // teclado (Enter / Space)
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.click();
      }
    });
  });
}
initClickableCards();

// Observe: caso seus cards sejam gerados dinamicamente, re-execute initClickableCards() após criação.

// ---------- Carregamento inicial: aplicar classes do localStorage (para manter estado) ----------
(function applySavedSettingsOnLoad() {
  // text size já aplicado acima
  if (savedFont && savedFont !== "system") {
    document.querySelectorAll(`.font-switch[data-font="${savedFont}"]`).forEach((b) => b.classList.add("active"));
  }
  if (hoverReaderEnabled && hoverToggleBtn) {
    hoverToggleBtn.classList.add("active");
  }
})();
