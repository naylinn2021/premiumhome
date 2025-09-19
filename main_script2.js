/* =========================
   Device ID helpers
========================= */
function readFromAndroid() {
  try {
    if (window.Android && typeof Android.getDeviceId === "function") {
      return String(Android.getDeviceId() || "").trim();
    }
  } catch(e){}
  return null;
}
function localFallbackId(){
  let id = localStorage.getItem("LOCAL_DEVICE_ID");
  if(!id){
    id = "LID-" + Math.random().toString(36).slice(2,10).toUpperCase();
    localStorage.setItem("LOCAL_DEVICE_ID", id);
  }
  return id;
}
function getDeviceId(){
  const q = new URLSearchParams(location.search);
  if(q.get("id")) return q.get("id");
  return readFromAndroid() || localFallbackId();
}

/* =========================
   UI + Login Logic
========================= */
const deviceId   = getDeviceId();
const denyPanel  = document.getElementById("denyPanel");
const allowPanel = document.getElementById("allowPanel");
const deviceIdEl = document.getElementById("deviceId");
const deviceIdOk = document.getElementById("deviceIdOk");
const loginBtn   = document.getElementById("loginBtn");
const loginMsg   = document.getElementById("loginMsg");
const u = document.getElementById("u");
const p = document.getElementById("p");
const copyBtn    = document.getElementById("copyBtn");
const copyMsg    = document.getElementById("copyMsg");

deviceIdEl.textContent = deviceId;

// Copy button handler
copyBtn.addEventListener("click", ()=>{
  navigator.clipboard.writeText(deviceId).then(()=>{
    copyMsg.textContent = "✅ Device ID copied!";
  }).catch(()=>{
    copyMsg.textContent = "❌ Copy failed. Please copy manually.";
  });
});

function showAllowed(){
  denyPanel.classList.add("hidden");
  allowPanel.classList.remove("hidden");
  deviceIdOk.textContent = deviceId;
}

// Check if this device has login config
if(CONFIG.devices[deviceId]){
  showAllowed();
}

// Login check
loginBtn?.addEventListener("click", ()=>{
  const creds = CONFIG.devices[deviceId];
  if(!creds){ 
    loginMsg.textContent = "❌ This device is not registered."; 
    return; 
  }
  if(u.value.trim()===creds.username && p.value===creds.password){
    loginMsg.textContent = "✅ Login success. Redirecting…";
    setTimeout(()=>{ location.href = "home.html"; }, 1200);
  } else {
    loginMsg.textContent = "❌ Username/Password မမှန်ပါ။";
  }
});
