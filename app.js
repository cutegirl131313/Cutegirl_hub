/**
 * CG Key Site — GitHub Pages (static)
 * keys.json 에 등록된 키만 통과합니다.
 * 주의: 정적 사이트라 키가 저장소에 공개됩니다. 간단용입니다.
 */

const CONFIG = {
  // 실제 스크립트 raw URL 로 바꾸세요 (GitHub raw / paste 등)
  scriptUrl: "https://raw.githubusercontent.com/YOUR_USER/YOUR_REPO/main/script.lua",
  // Discord 초대 링크
  discordInvite: "https://discord.gg/your-invite",
};

const keyInput = document.getElementById("keyInput");
const btnCheck = document.getElementById("btnCheck");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");
const loaderCodeEl = document.getElementById("loaderCode");
const btnCopy = document.getElementById("btnCopy");
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
  // 실행기용 로더: 키를 헤더/쿼리로 넘기는 형태 (나중에 서버 붙이면 교체)
  return [
    `-- CG Loader | key bound`,
    `local key = "${key}"`,
    `local url = "${CONFIG.scriptUrl}"`,
    `local ok, src = pcall(function()`,
    `  return game:HttpGet(url .. "?key=" .. key)`,
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

async function loadKeys() {
  const res = await fetch("keys.json", { cache: "no-store" });
  if (!res.ok) throw new Error("keys.json 로드 실패");
  const data = await res.json();
  return Array.isArray(data.keys) ? data.keys : [];
}

async function checkKey() {
  const key = normalizeKey(keyInput.value);
  resultEl.classList.add("hidden");
  loaderCodeEl.textContent = "";

  if (!key || key.length < 4) {
    setStatus("키를 입력하세요.", "bad");
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
      setStatus("유효하지 않거나 만료된 키입니다.", "bad");
      return;
    }

    const displayKey = normalizeKey(typeof found === "string" ? found : found.key);
    setStatus("인증 성공", "ok");
    loaderCodeEl.textContent = buildLoader(displayKey);
    resultEl.classList.remove("hidden");
  } catch (e) {
    console.error(e);
    setStatus("키 목록을 불러오지 못했습니다. keys.json 을 확인하세요.", "bad");
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
    setStatus("복사됨", "ok");
  } catch {
    setStatus("복사 실패 — 직접 드래그해서 복사하세요.", "bad");
  }
});
