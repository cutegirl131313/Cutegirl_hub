/**
 * CG Key Site — locked until valid key
 * 기본 화면: "페이지를 볼 권한이 없습니다"
 */

const CONFIG = {
  scriptUrl: "https://raw.githubusercontent.com/cutegirl131313/Cutegirl_hub/main/Nervous",
  discordInvite: "https://discord.gg/your-invite",
};

const gate = document.getElementById("gate");
const panel = document.getElementById("panel");
const keyInput = document.getElementById("keyInput");
const btnCheck = document.getElementById("btnCheck");
const statusEl = document.getElementById("status");
const loaderCodeEl = document.getElementById("loaderCode");
const btnCopy = document.getElementById("btnCopy");
const btnLock = document.getElementById("btnLock");
const discordLink = document.getElementById("discordLink");

discordLink.href = CONFIG.discordInvite;

function setStatus(msg, type) {
  statusEl.textContent = msg;
  statusEl.className = "status" + (type ? " " + type : "");
}

function normalizeKey(k) {
  return String(k || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "");
}

function buildLoader(key) {
  return [
    `-- CG Loader`,
    `local key = "${key}"`,
    `local url = "${CONFIG.scriptUrl}"`,
    `local ok, src = pcall(function()`,
    `  return game:HttpGet(url)`,
    `end)`,
    `if not ok or not src or src == "" then`,
    `  warn("[CG] download failed")`,
    `  return`,
    `end`,
    `local fn, err = loadstring(src)`,
    `if not fn then`,
    `  warn("[CG] load error:", err)`,
    `  return`,
    `end`,
    `fn()`,
  ].join("\n");
}

function showDenied(msg) {
  gate.classList.remove("hidden");
  panel.classList.add("hidden");
  setStatus(msg || "페이지를 볼 권한이 없습니다.", "bad");
}

function showPanel(key) {
  gate.classList.add("hidden");
  panel.classList.remove("hidden");
  loaderCodeEl.textContent = buildLoader(key);
}

async function loadKeys() {
  const res = await fetch("keys.json", { cache: "no-store" });
  if (!res.ok) throw new Error("keys.json 로드 실패");
  const data = await res.json();
  return Array.isArray(data.keys) ? data.keys : [];
}

async function checkKey() {
  const key = normalizeKey(keyInput.value);

  if (!key || key.length < 4) {
    setStatus("페이지를 볼 권한이 없습니다. 키를 입력하세요.", "bad");
    return;
  }

  setStatus("확인 중...", "");
  btnCheck.disabled = true;

  try {
    const keys = await loadKeys();
    const found = keys.find((entry) => {
      const k = normalizeKey(typeof entry === "string" ? entry : entry.key);
      if (k !== key) return false;
      if (typeof entry === "object" && entry.expires) {
        const exp = Date.parse(entry.expires);
        if (!Number.isNaN(exp) && Date.now() > exp) return false;
      }
      if (typeof entry === "object" && entry.disabled) return false;
      return true;
    });

    if (!found) {
      setStatus("페이지를 볼 권한이 없습니다.", "bad");
      panel.classList.add("hidden");
      gate.classList.remove("hidden");
      return;
    }

    const displayKey = normalizeKey(typeof found === "string" ? found : found.key);
    setStatus("", "");
    showPanel(displayKey);
  } catch (e) {
    console.error(e);
    setStatus("페이지를 볼 권한이 없습니다.", "bad");
  } finally {
    btnCheck.disabled = false;
  }
}

btnCheck.addEventListener("click", checkKey);
keyInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkKey();
});

btnCopy.addEventListener("click", async () => {
  const text = loaderCodeEl.textContent;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    btnCopy.textContent = "복사됨";
    setTimeout(() => {
      btnCopy.textContent = "복사";
    }, 1200);
  } catch {
    btnCopy.textContent = "복사 실패";
  }
});

btnLock.addEventListener("click", () => {
  keyInput.value = "";
  showDenied("페이지를 볼 권한이 없습니다.");
});

// 첫 화면 = 권한 없음
showDenied("페이지를 볼 권한이 없습니다.");
