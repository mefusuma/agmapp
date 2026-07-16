
const BUILTIN = [{"cat":"Motor Atölyesi","type":"iscilik","desc":"Kuyruk Servisi — Kıç aynadan montajlı (DPI vb.)","unit":"EACH","price":260.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Kuyruk Servisi — Kıç aynadan montajlı (ZT350 vb.)","unit":"EACH","price":350.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Kuyruk Servisi — Yelkenli Sdrive VOLVO","unit":"EACH","price":100.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Kuyruk Servisi — Yelkenli Sdrive YANMAR","unit":"EACH","price":125.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Kuyruk Servisi — Volvo Penta IPS","unit":"EACH","price":500.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor Servisleri — 2-5 HP","unit":"EACH","price":97.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor Servisleri — 8-20 HP","unit":"EACH","price":130.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor Servisleri — 25 HP","unit":"EACH","price":156.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor Servisleri — 30-40 HP","unit":"EACH","price":210.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor Servisleri — 50-70 HP","unit":"EACH","price":260.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor Servisleri — 80-130 HP","unit":"EACH","price":330.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor Servisleri — 150-200 HP","unit":"EACH","price":370.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor Servisleri — 225-300 HP","unit":"EACH","price":430.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Karbüratör Bakımı — 2-5 HP","unit":"EACH","price":34.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Karbüratör Bakımı — 8-20 HP","unit":"EACH","price":46.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Karbüratör Bakımı — 25 HP","unit":"EACH","price":70.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Karbüratör Bakımı — 30-40 HP","unit":"EACH","price":100.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Karbüratör Bakımı — 50-70 HP","unit":"EACH","price":120.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Karbüratör Bakımı — 80-130 HP","unit":"EACH","price":160.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Karbüratör Bakımı — 150-200 HP","unit":"EACH","price":180.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Karbüratör Bakımı — 225-300 HP","unit":"EACH","price":280.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Zehirli Boya Uygulaması — 1 adet (2,5 Lt kutu)","unit":"EACH","price":170.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Zehirli Boya Uygulaması — 2 adet (2,5 Lt kutu)","unit":"EACH","price":250.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Zehirli Boya Uygulaması — 3 adet (2,5 Lt kutu)","unit":"EACH","price":280.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Zehirli Boya Uygulaması — 4 adet (2,5 Lt kutu)","unit":"EACH","price":350.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Zehirli Boya Uygulaması — 5 adet (2,5 Lt kutu)","unit":"EACH","price":500.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Zehirli Boya Uygulaması — 6 adet (2,5 Lt kutu)","unit":"EACH","price":650.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Borda Pasta ve Cilası — 1 adet (takım)","unit":"EACH","price":100.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Borda Pasta ve Cilası — 2 adet (takım)","unit":"EACH","price":150.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Borda Pasta ve Cilası — 3 adet (takım)","unit":"EACH","price":250.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Borda Pasta ve Cilası — 4 adet (takım)","unit":"EACH","price":350.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Borda Pasta ve Cilası — 5 adet (takım)","unit":"EACH","price":450.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Borda Pasta ve Cilası — 6 adet (takım)","unit":"EACH","price":0.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Epoxy Koruma Uygulamaları — 15ft ve altı","unit":"EACH","price":1800.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Epoxy Koruma Uygulamaları — 16-25ft","unit":"EACH","price":2300.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Epoxy Koruma Uygulamaları — 26-35ft","unit":"EACH","price":2800.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Epoxy Koruma Uygulamaları — 36-45ft","unit":"EACH","price":3300.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Epoxy Koruma Uygulamaları — 46-55ft","unit":"EACH","price":4000.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Epoxy Koruma Uygulamaları — 56ft ve üstü","unit":"EACH","price":5000.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Ozmoz Tedavi Uygulamaları — 15ft ve altı","unit":"EACH","price":2970.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Ozmoz Tedavi Uygulamaları — 16-25ft","unit":"EACH","price":3520.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Ozmoz Tedavi Uygulamaları — 26-35ft","unit":"EACH","price":4070.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Ozmoz Tedavi Uygulamaları — 36-45ft","unit":"EACH","price":4620.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Ozmoz Tedavi Uygulamaları — 46-55ft","unit":"EACH","price":5500.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Ozmoz Tedavi Uygulamaları — 56ft ve üstü","unit":"EACH","price":6600.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Irgat Mekanik Bakımı — 500W","unit":"EACH","price":200.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Irgat Mekanik Bakımı — 700W","unit":"EACH","price":250.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Irgat Mekanik Bakımı — 1000W","unit":"EACH","price":300.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Irgat Mekanik Bakımı — 1500W","unit":"EACH","price":350.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Vinç Mekanik Bakımı — 35 kalibre","unit":"EACH","price":150.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Vinç Mekanik Bakımı — 40 kalibre","unit":"EACH","price":200.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Vinç Mekanik Bakımı — 46 kalibre","unit":"EACH","price":250.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Vinç Mekanik Bakımı — 50 kalibre","unit":"EACH","price":300.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Dümen Yekesi Sökümü — 26-35ft","unit":"EACH","price":700.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Dümen Yekesi Sökümü — 36-45ft","unit":"EACH","price":1200.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Dümen Yekesi Sökümü — 46-55ft","unit":"EACH","price":1500.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Dümen Yekesi Sökümü — 56ft ve üstü","unit":"EACH","price":2000.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Ana Direk ve Bumba Sökümü — 26-35ft","unit":"EACH","price":1500.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Ana Direk ve Bumba Sökümü — 36-45ft","unit":"EACH","price":3000.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Ana Direk ve Bumba Sökümü — 46-55ft","unit":"EACH","price":4000.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Ana Direk ve Bumba Sökümü — 56ft ve üstü","unit":"EACH","price":5000.0},{"cat":"Yelken ve Döşeme","type":"iscilik","desc":"Yelken Sökümü (feet başına)","unit":"FT","price":1.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Jeneratör Servisi","unit":"EACH","price":0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Yakıt Tankı Temizliği (Olası söküm durumuna göre fiyatlandırılır)","unit":"EACH","price":0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Motor, Jeneratör, Kuyruk, Saildrive ve IPS Kapsamlı Onarımlar ve Ağır Bakımlar","unit":"EACH","price":0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"İçten Takma Motorlarda Bilgisayar Yardımı İle Olası Sorunların Teşhisi Ve Genel Testler","unit":"EACH","price":200.0},{"cat":"Motor Atölyesi","type":"iscilik","desc":"Dıştan Takma Motorlarda Bilgisayar Yardımı İle Olası Sorunların Teşhisi Ve Genel Testler","unit":"EACH","price":120.0},{"cat":"Boya Bakım","type":"iscilik","desc":"Çelik veya Alüminyum gövde teknelerde, salma ve diğer ekipmanlarda sulu raspa uygulamaları (Detaylar için sorunuz)","unit":"EACH","price":0},{"cat":"Boya Bakım","type":"iscilik","desc":"Her türlü yüzeyler için Poliüretan/Akrilik/Sentetik son kat boya uygulamaları (Detaylar için sorunuz)","unit":"EACH","price":0},{"cat":"Yelken ve Döşeme","type":"iscilik","desc":"Yelken yıkaması ve atölyede depolanması (metrekare başına)","unit":"M2","price":3.5},{"cat":"Yelken ve Döşeme","type":"iscilik","desc":"Her türlü bimini, siperlik, kışlık tente, yelken atölyede depolanması (aylık)","unit":"MONTH","price":17.5},{"cat":"Yelken ve Döşeme","type":"iscilik","desc":"Tekne üzerindeki her türlü yeni yelken, tente, kılıf işleri (Detaylar için sorunuz)","unit":"EACH","price":0},{"cat":"Yelken ve Döşeme","type":"iscilik","desc":"Tekne iç/dış yerleşimdeki her türlü minder, yatak, perde işleri (Detaylar için sorunuz)","unit":"EACH","price":0},{"cat":"Marangoz Atölyesi","type":"iscilik","desc":"Teak güverte yenileme (malzeme dahil) (metrekare başına) (Detaylar için sorunuz)","unit":"M2","price":900.0},{"cat":"Marangoz Atölyesi","type":"iscilik","desc":"Teak güverte armuz mastiklerini yenileme (malzeme dahil) (metrekare başına) (Detaylar için sorunuz)","unit":"M2","price":300.0},{"cat":"Marangoz Atölyesi","type":"iscilik","desc":"Tekne iç/dış yerleşimdeki her türlü mobilya ve ahşap parça imalatı (Detaylar için sorunuz)","unit":"EACH","price":0},{"cat":"Marangoz Atölyesi","type":"iscilik","desc":"Plexiglass Cam Değişimi","unit":"EACH","price":0},{"cat":"Elektrik Atölyesi","type":"iscilik","desc":"Motor Dinamo Bakımı","unit":"EACH","price":150.0},{"cat":"Elektrik Atölyesi","type":"iscilik","desc":"Irgat Dinamo Bakımı","unit":"EACH","price":150.0},{"cat":"Elektrik Atölyesi","type":"iscilik","desc":"Elektrik Vinç Motor Bakımı","unit":"EACH","price":100.0},{"cat":"Elektrik Atölyesi","type":"iscilik","desc":"Tekne üzerindeki her türlü elektrik veya sıhhi tesisat bakım ve onarımları","unit":"EACH","price":0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Vana, kovan ve hortum bağlantılarının değişimi sarf malzeme (sikaflex, würth boru dişi sabitleyici) dahil","unit":"EACH","price":220.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Saildrive pervane şaft mili tamiratı","unit":"EACH","price":250.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Katlanır pervane sökümü/bakımı/montajı (x se €100 ilave edilecektir)","unit":"EACH","price":200.0},{"cat":"Mekanik/Torna Atölyesi","type":"iscilik","desc":"Tekne üzerindeki her türlü mekanik bakım ve onarımları","unit":"EACH","price":0},{"cat":"Diğer Servisler","type":"iscilik","desc":"Raymarine Servisi(Antalya'dan Kaş/Finike Marinaya Servis Ücreti)","unit":"EACH","price":0},{"cat":"Diğer Servisler","type":"iscilik","desc":"Zincir, çapa galvaniz işleri (tekneden söküm/montaj hariç) (KG başına ücrettir)","unit":"KG","price":2.0},{"cat":"Diğer Servisler","type":"iscilik","desc":"Isıtma/soğutma sistemleri servis ücreti (kontrol ve gaz takviyesi içerir)","unit":"EACH","price":100.0},{"cat":"Diğer Servisler","type":"iscilik","desc":"Su yapıcı kışlama (temizleme malzemeleri içerir, filtreler hariçtir)","unit":"EACH","price":220.0},{"cat":"Diğer Servisler","type":"iscilik","desc":"Yelkenli teknelerde direğe tırmanma işleri","unit":"EACH","price":220.0},{"cat":"Diğer Servisler","type":"iscilik","desc":"Dalgıçlık Hizmeti","unit":"EACH","price":75.0},{"cat":"Diğer Servisler","type":"iscilik","desc":"Dalgıç ile tekne altı temizliği (saat başına)","unit":"HOUR","price":150.0}];

let db = [];
const uid = () => Math.random().toString(36).slice(2, 10);
const fmt = n => {
  const c = document.getElementById("quoteCurrency")?.value || "EUR";
  const sym = c === "EUR" ? "€" : c === "USD" ? "$" : "₺";
  return Number(n || 0).toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " " + sym;
};
function updateCurrency() { updateTotals(); renderServices(); save(); }
const parseNum = v => {
  if (typeof v === "number") return v;
  if (v == null) return 0;
  let s = String(v).trim().replace(/[€$₺\s]/g, "");
  if (!s) return 0;
  if (s.includes(",") && s.includes(".")) s = s.replace(/\./g, "").replace(",", ".");
  else if (s.includes(",")) s = s.replace(",", ".");
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
};
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

function newService() { return { id: uid(), title: "", notes: "", redNotes: "", labour: [], materials: [] }; }

let quote;
let saved = localStorage.getItem("teklif_quote");
if (saved) { try { quote = JSON.parse(saved); } catch(e) {} }
if (!quote || !quote.services) { quote = { id: uid(), customer: { name:"", email:"", phone:"", boat:"", model:"", flag:"" }, services: [newService()] }; }
if (!quote.id) quote.id = uid();

let loaded = false;
let pickerSvc = null;
let pickerCat = "";
let pickerAddedCount = 0;

// Utility fonksiyonlar yukarı taşındı

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.style.display = "block";
  clearTimeout(t._h); t._h = setTimeout(() => t.style.display = "none", 2200);
}

async function storageGet(key) {
  try { if (window.storage) { const r = await window.storage.get(key); return r?.value || null; } } catch(e) {}
  return localStorage.getItem(key);
}
async function storageSet(key, val) {
  try { if (window.storage) { await window.storage.set(key, val); return; } } catch(e) {}
  localStorage.setItem(key, val);
}

async function loadState() {
  try { const r = await storageGet("teklif-db"); if (r) db = JSON.parse(r); } catch (e) {}
  loaded = true;
  if (!db.length) { db = BUILTIN.map(i => Object.assign({ id: uid() }, i)); }
  initTabs();
  const active = tabs.find(t => t.id === activeTabId);
  if (active) quote = active.quote; // Referansı mutlaka eşitle
  renderAll();
  document.querySelectorAll("[data-cust]").forEach(el => el.value = quote.customer[el.dataset.cust] || "");
  resetHistory(); // İlk açılışta geçmişi ayarla
}

/* ========== UNDO / REDO (GERİ / İLERİ) ========== */
let undoStack = [];
let redoStack = [];
let isUndoing = false;
let lastPushTime = 0;

function resetHistory() {
  undoStack = [JSON.stringify({ quote, db })];
  redoStack = [];
  lastPushTime = Date.now();
}

function pushHistory(force = false) {
  if (isUndoing) return;
  const stateStr = JSON.stringify({ quote, db });
  if (undoStack.length > 0 && undoStack[undoStack.length - 1] === stateStr) return; // Değişiklik yok

  const now = Date.now();
  // Yazma işlemleri gruplanır (ilk vuruştan itibaren 1 saniye içinde olanlar aynı adıma yazılır)
  if (!force && now - lastPushTime < 1000 && undoStack.length > 1) {
    undoStack[undoStack.length - 1] = stateStr;
  } else {
    undoStack.push(stateStr);
    if (undoStack.length > 60) undoStack.shift(); // Max 60 işlem
    redoStack = [];
    lastPushTime = now;
  }
}

function undo() {
  if (undoStack.length <= 1) { toast("Daha fazla geri alınamaz"); return; }
  isUndoing = true;
  const currentStr = undoStack.pop();
  redoStack.push(currentStr);
  const prevStr = undoStack[undoStack.length - 1];
  
  const parsed = JSON.parse(prevStr);
  quote = parsed.quote;
  db = parsed.db;
  
  const active = tabs.find(t => t.id === activeTabId);
  if (active) active.quote = quote; 
  renderAll(); // hem quote hem db render
  document.querySelectorAll("[data-cust]").forEach(el => el.value = quote.customer[el.dataset.cust] || "");
  save(true);
  toast("↩ Geri alındı");
  isUndoing = false;
}

function redo() {
  if (redoStack.length === 0) { toast("İleri alınacak işlem yok"); return; }
  isUndoing = true;
  const nextStr = redoStack.pop();
  undoStack.push(nextStr);
  
  const parsed = JSON.parse(nextStr);
  quote = parsed.quote;
  db = parsed.db;
  
  const active = tabs.find(t => t.id === activeTabId);
  if (active) active.quote = quote;
  renderAll(); // hem quote hem db render
  document.querySelectorAll("[data-cust]").forEach(el => el.value = quote.customer[el.dataset.cust] || "");
  save(true);
  toast("↪ İleri alındı");
  isUndoing = false;
}

document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    if (e.shiftKey) redo(); else undo();
  } else if (e.ctrlKey && e.key.toLowerCase() === 'y') {
    e.preventDefault();
    redo();
  }
});
/* ================================================ */

function save(skipHistory = false, forceHistory = false) {
  if (!skipHistory) pushHistory(forceHistory);
  localStorage.setItem("teklif_quote", JSON.stringify(quote));
  saveTabsToStorage();
  saveDraftSilent(); // Arka planda sessizce taslağı güncelle
  if (!loaded) return;
  setTimeout(async () => { try { await storageSet("teklif-db", JSON.stringify(db)); } catch (e) {} }, 400);
}

function renderAll() { renderServices(); refreshDb(); }

function showTab(t) {
  document.getElementById("tab-teklif").classList.toggle("hidden", t !== "teklif");
  document.getElementById("tab-veri").classList.toggle("hidden", t !== "veri");
  document.querySelectorAll(".page-tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === t));
}

/* ========== SEKME (TAB) YÖNETİMİ ========== */
let tabs = [];        // [{ id, quote, currency }]
let activeTabId = null;
let focusAfterRender = null;  // render sonrası odaklanacak servis kalemi id'si

let dragSrcId = null; // global drag state

function getTabLabel(tab) {
  const boat = tab.quote?.customer?.boat || '';
  const name = tab.quote?.customer?.name || '';
  if (boat) return boat;       // önce tekne adı
  if (name) return name;       // yoksa müşteri adı
  return 'Yeni Teklif';
}

function renderQuoteTabs() {
  const bar = document.getElementById('quoteTabsBar');
  const addBtn = bar.querySelector('.quote-tab-add');
  bar.querySelectorAll('.quote-tab').forEach(el => el.remove());

  tabs.forEach(tab => {
    const isActive = tab.id === activeTabId;
    const el = document.createElement('div');
    el.className = 'quote-tab' + (isActive ? ' active' : '');
    el.draggable = true;
    el.dataset.tabId = tab.id;
    el.innerHTML = `<span class="tab-label" title="${getTabLabel(tab)}">${getTabLabel(tab)}</span>${tabs.length > 1 ? `<button class="tab-close" title="Kapat">×</button>` : ''}`;

    // Tıklama — sadece kapat değil ise
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-close')) return;
      // Anında görsel güncelleme (DOM yeniden oluşturmadan)
      document.querySelectorAll('.quote-tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      switchTab(tab.id);
    });

    const closeBtn = el.querySelector('.tab-close');
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeTab(tab.id); });

    // Drag & Drop
    el.addEventListener('dragstart', (e) => {
      dragSrcId = tab.id;
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(() => el.classList.add('dragging'), 0);
    });
    el.addEventListener('dragend', () => {
      el.classList.remove('dragging');
      bar.querySelectorAll('.quote-tab').forEach(t => t.classList.remove('drag-over'));
    });
    el.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      bar.querySelectorAll('.quote-tab').forEach(t => t.classList.remove('drag-over'));
      if (tab.id !== dragSrcId) el.classList.add('drag-over');
    });
    el.addEventListener('drop', (e) => {
      e.preventDefault();
      el.classList.remove('drag-over');
      if (!dragSrcId || dragSrcId === tab.id) return;
      const srcIdx = tabs.findIndex(t => t.id === dragSrcId);
      const dstIdx = tabs.findIndex(t => t.id === tab.id);
      const [moved] = tabs.splice(srcIdx, 1);
      tabs.splice(dstIdx, 0, moved);
      dragSrcId = null;
      renderQuoteTabs();
      saveTabsToStorage();
    });

    bar.insertBefore(el, addBtn);
  });
}

function switchTab(id) {
  if (id === activeTabId) return;
  if (activeTabId) {
    const cur = tabs.find(t => t.id === activeTabId);
    if (cur) {
      cur.quote = JSON.parse(JSON.stringify(quote));
      cur.currency = document.getElementById('quoteCurrency')?.value || 'EUR';
    }
  }
  activeTabId = id;
  const tab = tabs.find(t => t.id === id);
  if (!tab) return;
  quote = JSON.parse(JSON.stringify(tab.quote));
  const sel = document.getElementById('quoteCurrency');
  if (sel) sel.value = tab.currency || 'EUR';
  document.querySelectorAll('[data-cust]').forEach(el => { el.value = quote.customer[el.dataset.cust] || ''; });
  renderServices();
  // Sadece label güncellemesi - full re-render değil
  document.querySelectorAll('.quote-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.tabId === activeTabId);
  });
  saveTabsToStorage();
  resetHistory(); // Sekme değiştiğinde geçmişi sıfırla
}

function addTab() {
  // Mevcut teklifi kaydet
  if (activeTabId) {
    const cur = tabs.find(t => t.id === activeTabId);
    if (cur) {
      cur.quote = JSON.parse(JSON.stringify(quote));
      cur.currency = document.getElementById('quoteCurrency')?.value || 'EUR';
    }
  }
  const newId = uid();
  const newQ = { id: newId, customer: { name:'', email:'', phone:'', boat:'', model:'', flag:'' }, services: [newService()] };
  tabs.push({ id: newId, quote: newQ, currency: 'EUR' });
  activeTabId = newId;
  quote = newQ;
  document.querySelectorAll('[data-cust]').forEach(el => el.value = '');
  const sel = document.getElementById('quoteCurrency');
  if (sel) sel.value = 'EUR';
  renderServices();
  renderQuoteTabs();
  saveTabsToStorage();
  toast('➕ Yeni teklif sekmesi açıldı');
}

function closeTab(id) {
  if (tabs.length <= 1) { toast('Son sekme kapatılamaz'); return; }
  const idx = tabs.findIndex(t => t.id === id);
  tabs.splice(idx, 1);
  if (activeTabId === id) {
    const newActive = tabs[Math.min(idx, tabs.length - 1)];
    activeTabId = newActive.id;
    quote = JSON.parse(JSON.stringify(newActive.quote));
    const sel = document.getElementById('quoteCurrency');
    if (sel) sel.value = newActive.currency || 'EUR';
    document.querySelectorAll('[data-cust]').forEach(el => { el.value = quote.customer[el.dataset.cust] || ''; });
    renderServices();
  }
  renderQuoteTabs();
  saveTabsToStorage();
}

function saveTabsToStorage() {
  // Aktif teklifi tabs'a yaz, sonra kaydet
  const cur = tabs.find(t => t.id === activeTabId);
  if (cur) {
    cur.quote = JSON.parse(JSON.stringify(quote));
    cur.currency = document.getElementById('quoteCurrency')?.value || 'EUR';
  }
  localStorage.setItem('teklif_tabs', JSON.stringify({ tabs, activeTabId }));
}

function initTabs() {
  // localStorage'dan sekmeleri yükle
  try {
    const raw = localStorage.getItem('teklif_tabs');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.tabs && data.tabs.length) {
        tabs = data.tabs;
        activeTabId = data.activeTabId || tabs[0].id;
        const active = tabs.find(t => t.id === activeTabId) || tabs[0];
        quote = active.quote;
        renderQuoteTabs();
        return;
      }
    }
  } catch(e) {}
  // Yoksa mevcut quote ile başlat
  const firstId = quote.id || uid();
  quote.id = firstId;
  tabs = [{ id: firstId, quote: JSON.parse(JSON.stringify(quote)), currency: 'EUR' }];
  activeTabId = firstId;
  renderQuoteTabs();
}
/* =========================================== */

// newService fonksiyonu yukarı taşındı
function addService() { quote.services.push(newService()); renderServices(); save(false, true); }
function delService(id) {
  quote.services = quote.services.filter(s => s.id !== id);
  if (!quote.services.length) quote.services.push(newService());
  renderServices(); save(false, true);
}

function addItem(svcId, kind, item, silent) {
  const s = quote.services.find(x => x.id === svcId);
  if (!s) return;
  const newId = uid();
  s[kind].push({ id: newId, desc: item?.desc || "", qty: 1, unit: item?.unit || "EACH", price: item?.price ?? 0 });
  renderServices(); save(false, true);
  if (!silent) toast("Eklendi");
}
function delItem(svcId, kind, itemId) {
  const s = quote.services.find(x => x.id === svcId);
  if (!s) return;
  s[kind] = s[kind].filter(i => i.id !== itemId);
  renderServices(); save(false, true);
}
function toggleOpt(svcId, kind, itemId) {
  const s = quote.services.find(x => x.id === svcId);
  const it = s && s[kind].find(x => x.id === itemId);
  if (!it) return;
  it.opt = ((it.opt || 0) + 1) % 3;
  renderServices(); save(false, true);
}
function svcTotals(s) {
  const l = s.labour.filter(i => i.opt !== 1).reduce((a, i) => a + parseNum(i.qty) * parseNum(i.price), 0);
  const m = s.materials.filter(i => i.opt !== 1).reduce((a, i) => a + parseNum(i.qty) * parseNum(i.price), 0);
  return { l, m };
}

function renderServices() {
  const host = document.getElementById("services");
  host.innerHTML = quote.services.map((s, idx) => {
    const t = svcTotals(s);
    const rowsHtml = (kind, label, total) => {
      const isLab = kind === "labour";
      return `
      <div class="rows-title"><span class="dot ${isLab ? "i" : "m"}"></span>${label}
        <span class="sum">${fmt(total)}</span></div>
      ${s[kind].map(it => `
        <div class="row-line ${it.opt === 1 ? 'is-opt1' : it.opt === 2 ? 'is-opt2' : ''}" data-item-id="${it.id}"
             draggable="true" 
             ondragstart="onItemDragStart(event, '${s.id}', '${kind}', '${it.id}')"
             ondragover="onItemDragOver(event, '${s.id}', '${kind}', '${it.id}')"
             ondragend="onItemDragEnd(event)"
             ondrop="onItemDrop(event, '${s.id}', '${kind}', '${it.id}')">
          <button class="opt-btn" onclick="toggleOpt('${s.id}','${kind}','${it.id}')">${it.opt === 1 ? '🟢' : it.opt === 2 ? '🔴' : '⚪'}</button>
          <input value="${esc(it.desc)}" placeholder="Açıklama" data-item="${s.id}|${kind}|${it.id}|desc">
          <input value="${esc(it.qty)}" data-item="${s.id}|${kind}|${it.id}|qty" style="text-align:right">
          <input value="${esc(it.unit)}" data-item="${s.id}|${kind}|${it.id}|unit">
          <input value="${esc(it.price)}" class="${parseNum(it.price) > 0 ? "" : "noprice"}" data-item="${s.id}|${kind}|${it.id}|price" style="text-align:right">
          <div class="sub" data-sub="${it.id}">${it.opt === 1 ? 'Opsiyon' : fmt(parseNum(it.qty) * parseNum(it.price))}</div>
          <button class="del" onclick="delItem('${s.id}','${kind}','${it.id}')">✕</button>
        </div>`).join("")}
      <button class="btn btn-ghost btn-sm" style="margin-bottom: 12px; margin-top: 4px;" onclick="addItem('${s.id}','${kind}',null,true)">+ boş ${isLab ? 'işçilik' : 'malzeme'} ekle</button>`;
    };
    return `
    <div class="svc" data-id="${s.id}">
      <div class="svc-head">
        <span class="svc-no">${idx + 1}.</span>
        <input value="${esc(s.title)}" placeholder="Servis başlığı (örn: Motor Bakımı)" data-svc="${s.id}|title">
        <button class="del" style="background:none;border:none;color:#cbd5e1;font-size:16px" onclick="delService('${s.id}')">✕</button>
      </div>
      <textarea placeholder="Açıklama satırları" data-svc="${s.id}|notes" style="margin-bottom:4px">${esc(s.notes)}</textarea>
      <textarea class="red-notes" placeholder="Kırmızı uyarı notları" data-svc="${s.id}|redNotes" style="margin-top:0">${esc(s.redNotes)}</textarea>
      ${rowsHtml("labour", "İşçilik", t.l)}
      ${rowsHtml("materials", "Malzeme", t.m)}
      <div class="svc-actions">
        <button class="btn btn-primary btn-sm" onclick="openPicker('${s.id}')">🔍 Katalogdan ekle</button>
      </div>
    </div>`;
  }).join("");
  updateTotals();

  if (focusAfterRender) {
    const el = document.querySelector(`input[data-item$="|${focusAfterRender}|desc"]`);
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    focusAfterRender = null;
  }
  
  host.querySelectorAll("textarea").forEach(ta => {
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
  });
}

/* ========== SÜRÜKLE BIRAK (KALEMLER İÇİN) ========== */
let dSrc = null;

function onItemDragStart(e, svcId, kind, itemId) {
  dSrc = { svcId, kind, itemId };
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => e.target.classList.add('dragging'), 0);
}

function onItemDragOver(e, svcId, kind, itemId) {
  e.preventDefault();
  if (!dSrc || dSrc.svcId !== svcId || dSrc.kind !== kind) return;
  e.dataTransfer.dropEffect = 'move';
  document.querySelectorAll('.row-line').forEach(el => el.classList.remove('drag-over'));
  const targetLine = e.target.closest('.row-line');
  if (targetLine && targetLine.dataset.itemId !== dSrc.itemId) {
    targetLine.classList.add('drag-over');
  }
}

function onItemDragEnd(e) {
  e.target.classList.remove('dragging');
  document.querySelectorAll('.row-line').forEach(el => el.classList.remove('drag-over'));
  dSrc = null;
}

function onItemDrop(e, svcId, kind, itemId) {
  e.preventDefault();
  document.querySelectorAll('.row-line').forEach(el => el.classList.remove('drag-over'));
  if (!dSrc || dSrc.svcId !== svcId || dSrc.kind !== kind || dSrc.itemId === itemId) return;
  
  const s = quote.services.find(x => x.id === svcId);
  if (!s) return;
  
  const list = s[kind];
  const srcIdx = list.findIndex(i => i.id === dSrc.itemId);
  const dstIdx = list.findIndex(i => i.id === itemId);
  if (srcIdx < 0 || dstIdx < 0) return;
  
  const [moved] = list.splice(srcIdx, 1);
  list.splice(dstIdx, 0, moved);
  
  dSrc = null;
  renderServices();
  save(false, true);
}
/* ================================================== */

document.addEventListener("input", e => {
  const el = e.target;
  if (el.tagName === "TEXTAREA") { el.style.height = "auto"; el.style.height = el.scrollHeight + "px"; }
  if (el.dataset.cust !== undefined) { quote.customer[el.dataset.cust] = el.value; renderQuoteTabs(); save(); return; }
  if (el.dataset.svc) {
    const [id, field] = el.dataset.svc.split("|");
    const s = quote.services.find(x => x.id === id);
    if (s) { s[field] = el.value; save(); }
    return;
  }
  if (el.dataset.item) {
    const [sid, kind, iid, field] = el.dataset.item.split("|");
    const s = quote.services.find(x => x.id === sid);
    const it = s && s[kind].find(x => x.id === iid);
    if (it) {
      it[field] = el.value;
      if (field === "price") el.classList.toggle("noprice", !(parseNum(el.value) > 0));
      const subEl = el.closest(".row-line").querySelector(".sub");
      if (subEl) subEl.textContent = it.opt === 1 ? 'Opsiyon' : fmt(parseNum(it.qty) * parseNum(it.price));
      const card = el.closest(".svc");
      const t = svcTotals(s);
      const titles = card.querySelectorAll(".rows-title");
      titles.forEach(tt => {
        const isLab = tt.querySelector(".dot.i");
        tt.querySelector(".sum").textContent = fmt(isLab ? t.l : t.m);
      });
      updateTotals(); save();
    }
  }
});

/* Enter ile yeni satır ekleme */
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.tagName === "INPUT" && e.target.dataset.item) {
    e.preventDefault();
    const [sid, kind, iid, field] = e.target.dataset.item.split("|");
    addItem(sid, kind, null, true);
  }
});

function totals() {
  let l = 0, m = 0;
  for (const s of quote.services) { const t = svcTotals(s); l += t.l; m += t.m; }
  return { l, m, vat: l * 0.2, grand: l + m + l * 0.2 };
}
function updateTotals() {
  const t = totals();
  document.getElementById("tLab").textContent = fmt(t.l);
  document.getElementById("tMat").textContent = fmt(t.m);
  document.getElementById("tVat").textContent = fmt(t.vat);
  document.getElementById("tGrand").textContent = fmt(t.grand);
}

function newQuote() {
  const hasContent = quote.customer.name || quote.customer.boat || quote.services.some(s => s.title || s.labour.length || s.materials.length);
  if (hasContent) {
    const choice = confirm("Mevcut teklifin kaydedilmemiş değişiklikleri olabilir.\n\nÖNEMLİ: 'Tamam' dersen mevcut çalışman silinir.\n\nÖnce kaydetmek ister misin?\n\n(İptal = vazgeç, Tamam = kaydetmeden yeni aç)");
    if (!choice) return;
  }
  quote = { id: uid(), customer: { name:"", email:"", phone:"", boat:"", model:"", flag:"" }, services: [newService()] };
  document.querySelectorAll("[data-cust]").forEach(el => el.value = "");
  const sel = document.getElementById("quoteCurrency");
  if (sel) sel.value = "EUR";
  renderServices(); save();
  toast("➕ Yeni teklif açıldı");
}

function clearQuote() {
  if (!confirm("Teklifi temizlemek istediğinize emin misiniz?")) return;
  quote = { id: uid(), customer: { name:"", email:"", phone:"", boat:"", model:"", flag:"" }, services: [newService()] };
  document.querySelectorAll("[data-cust]").forEach(el => el.value = "");
  renderServices(); save(false, true);
}

/* ========== TASLAK (DRAFT) YÖNETİMİ ========== */
function loadDraftsData() {
  try { return JSON.parse(localStorage.getItem('teklif_drafts') || '[]'); } catch(e) { return []; }
}
function saveDraftsData(drafts) {
  localStorage.setItem('teklif_drafts', JSON.stringify(drafts));
}
function saveDraft() {
  const drafts = loadDraftsData();
  const name = (quote.customer.name || 'İsimsiz Müşteri');
  const boat = quote.customer.boat ? ' — ' + quote.customer.boat : '';
  const title = name + boat;
  const existingIdx = drafts.findIndex(d => d.id === quote.id);
  const draftObj = {
    id: quote.id,
    title: title,
    date: new Date().toLocaleString('tr-TR'),
    currency: document.getElementById("quoteCurrency")?.value || "EUR",
    quote: JSON.parse(JSON.stringify(quote))
  };
  if (existingIdx > -1) drafts[existingIdx] = draftObj;
  else drafts.unshift(draftObj);
  saveDraftsData(drafts);
  toast("💾 Taslak kaydedildi: " + title);
}

let autoDraftTimeout = null;
function saveDraftSilent() {
  clearTimeout(autoDraftTimeout);
  autoDraftTimeout = setTimeout(() => {
    try {
      const drafts = loadDraftsData();
      const name = (quote.customer.name || 'İsimsiz Müşteri');
      const boat = quote.customer.boat ? ' — ' + quote.customer.boat : '';
      const title = name + boat;
      const existingIdx = drafts.findIndex(d => d.id === quote.id);
      const draftObj = {
        id: quote.id,
        title: title,
        date: new Date().toLocaleString('tr-TR'),
        currency: document.getElementById("quoteCurrency")?.value || "EUR",
        quote: JSON.parse(JSON.stringify(quote))
      };
      if (existingIdx > -1) drafts[existingIdx] = draftObj;
      else drafts.unshift(draftObj);
      saveDraftsData(drafts);
    } catch(e) {}
  }, 1500); // 1.5 saniye hareketsizlikten sonra kaydet
}
function openDrafts() {
  document.getElementById("draftOverlay").classList.add("open");
  document.getElementById("draftModal").classList.add("open");
  renderDrafts();
}
function closeDrafts() {
  document.getElementById("draftOverlay").classList.remove("open");
  document.getElementById("draftModal").classList.remove("open");
}
function renderDrafts() {
  const drafts = loadDraftsData();
  const list = document.getElementById("draftList");
  if (!drafts.length) {
    list.innerHTML = "<div style='padding:24px; text-align:center; color:#64748b;'>Henüz kayıtlı taslak yok.<br><small>💾 Taslağı Kaydet butonuyla kaydedin.</small></div>";
    return;
  }
  list.innerHTML = drafts.map(d => `
    <div class="draft-item" onclick="loadDraft('${d.id}')">
      <div class="draft-info">
        <div class="draft-title">${esc(d.title)}</div>
        <div class="draft-date">${esc(d.date)}</div>
      </div>
      <button class="draft-del" onclick="event.stopPropagation(); delDraft('${d.id}')">Sil</button>
    </div>
  `).join('');
}
function loadDraft(id) {
  const drafts = loadDraftsData();
  const draft = drafts.find(d => d.id === id);
  if (!draft) return;
  quote = draft.quote;
  const sel = document.getElementById("quoteCurrency");
  if (sel && draft.currency) sel.value = draft.currency;
  document.querySelectorAll("[data-cust]").forEach(el => {
    el.value = quote.customer[el.dataset.cust] || "";
  });
  renderServices();
  save();
  closeDrafts();
  toast("📂 Taslak yüklendi: " + draft.title);
}
function delDraft(id) {
  if (!confirm("Bu taslağı silmek istediğinize emin misiniz?")) return;
  saveDraftsData(loadDraftsData().filter(d => d.id !== id));
  renderDrafts();
}
/* ============================================== */

/* ========== GEÇMİŞTEN SERVİS KLONLAMA ========== */
function openHistoryPicker() {
  document.getElementById("hq").value = "";
  document.getElementById("historyOverlay").classList.add("open");
  document.getElementById("historyPicker").classList.add("open");
  renderHistoryPicker();
}
function closeHistoryPicker() {
  document.getElementById("historyOverlay").classList.remove("open");
  document.getElementById("historyPicker").classList.remove("open");
}
function renderHistoryPicker() {
  const drafts = loadDraftsData();
  const qStr = document.getElementById("hq").value.toLowerCase().trim();
  const queries = qStr.split(/\s+/).filter(Boolean); // Kelimelere böl
  
  let html = '';
  let found = 0;
  const MAX_RESULTS = 40;

  for (const draft of drafts) {
    if (found >= MAX_RESULTS) break;
    const custStr = (draft.title || '').toLowerCase();
    
    for (const svc of draft.quote.services) {
      if (found >= MAX_RESULTS) break;
      const svcTitle = (svc.title || '').toLowerCase();
      const svcNotes = (svc.notes || '').toLowerCase();
      
      // Tüm arama kelimeleri bu servisin bir yerinde geçiyor mu?
      const matches = queries.every(kw => 
        custStr.includes(kw) || svcTitle.includes(kw) || svcNotes.includes(kw)
      );
      
      if (matches || queries.length === 0) {
        found++;
        html += `
          <div class="card" style="margin-bottom:10px; padding:12px; cursor:default; border-color:#cbd5e1">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div style="flex:1; padding-right:12px">
                <div style="font-size:11px; font-weight:600; color:#1273b8; text-transform:uppercase; margin-bottom:4px">
                  ${esc(draft.title)} <span style="color:#94a3b8; font-weight:400; margin-left:6px">${esc(draft.date || '')}</span>
                </div>
                <b style="color:#0f2438; font-size:14px; display:block; margin-bottom:4px">${esc(svc.title || 'İsimsiz Servis')}</b>
                ${svc.notes ? `<div style="font-size:12px; color:#64748b; max-height:36px; overflow:hidden; text-overflow:ellipsis">${esc(svc.notes)}</div>` : ''}
              </div>
              <button class="btn btn-sm btn-green" onclick="cloneServiceFromHistory('${draft.id}', '${svc.id}')" style="flex-shrink:0">+ Ekle</button>
            </div>
          </div>
        `;
      }
    }
  }

  if (found === 0) {
    html = `<div class="empty">Geçmiş kayıtlarda eşleşen servis bulunamadı.</div>`;
  } else if (found >= MAX_RESULTS) {
    html += `<div style="text-align:center; padding:10px; font-size:12px; color:#64748b;">En yeni ${MAX_RESULTS} sonuç gösteriliyor. Aradığınızı bulamadıysanız arama kelimeleri ekleyin.</div>`;
  }
  
  document.getElementById("historyBody").innerHTML = html;
}
function cloneServiceFromHistory(draftId, svcId) {
  const drafts = loadDraftsData();
  const draft = drafts.find(d => d.id === draftId);
  if (!draft) return;
  const svc = draft.quote.services.find(s => s.id === svcId);
  if (!svc) return;

  const cloned = JSON.parse(JSON.stringify(svc));
  cloned.id = uid();
  cloned.labour.forEach(i => i.id = uid());
  cloned.materials.forEach(i => i.id = uid());

  // Eğer mevcut teklif tamamen boşsa boş servisi sil
  if (quote.services.length === 1 && !quote.services[0].title && !quote.services[0].labour.length && !quote.services[0].materials.length) {
    quote.services = [];
  }

  quote.services.push(cloned);
  renderServices(); save(false, true);
  toast("✅ Servis teklife eklendi!");
  closeHistoryPicker();
}
/* ============================================== */

/* ---------- KATALOG SEÇİCİ ---------- */
function openPicker(svcId) {
  pickerSvc = svcId;
  pickerCat = "";
  pickerAddedCount = 0;
  const idx = quote.services.findIndex(s => s.id === svcId);
  const s = quote.services[idx];
  document.getElementById("pickerTarget").textContent = `Hedef: ${idx + 1}. ${s?.title || "servis bölümü"}`;
  document.getElementById("pq").value = "";
  document.getElementById("pickerAdded").textContent = "Tıkladıkça teklife eklenir";
  document.getElementById("overlay").classList.add("open");
  document.getElementById("picker").classList.add("open");
  renderCatChips();
  renderPicker();
}
function closePicker() {
  document.getElementById("overlay").classList.remove("open");
  document.getElementById("picker").classList.remove("open");
  pickerSvc = null;
}
function setPickerCat(c) { pickerCat = c; renderCatChips(); renderPicker(); }
function renderCatChips() {
  const cats = [...new Set(db.map(i => i.cat))].sort();
  document.getElementById("catChips").innerHTML =
    `<button class="chip ${pickerCat === "" ? "active" : ""}" onclick="setPickerCat('')">Tümü</button>` +
    cats.map(c => `<button class="chip ${pickerCat === c ? "active" : ""}" onclick='setPickerCat(${JSON.stringify(c)})'>${esc(c)}</button>`).join("");
}
function pickerFiltered() {
  const q = (document.getElementById("pq").value || "").toLocaleLowerCase("tr");
  return db.filter(i =>
    (!pickerCat || i.cat === pickerCat) &&
    (!q || (i.desc + " " + i.cat).toLocaleLowerCase("tr").includes(q)));
}
function renderPicker() {
  const items = pickerFiltered();
  const body = document.getElementById("pickerBody");
  if (!items.length) {
    body.innerHTML = `<div class="empty">Eşleşen kalem yok.${db.length ? "" : "<br>Katalog sekmesinden fiyat listesi yükleyin."}</div>`;
    return;
  }
  const groups = new Map();
  const singles = [];
  for (const i of items) {
    const m = i.desc.split(" — ");
    if (m.length >= 2) {
      const g = m[0];
      const key = i.cat + "|" + g;
      if (!groups.has(key)) groups.set(key, { name: g, cat: i.cat, vars: [] });
      groups.get(key).vars.push({ label: m.slice(1).join(" — "), item: i });
    } else {
      singles.push(i);
    }
  }
  let html = "";
  for (const g of groups.values()) {
    html += `<div class="grp">
      <div class="grp-name"><span class="dot ${g.vars[0].item.type === "malzeme" ? "m" : "i"}"></span>${esc(g.name)} <span class="grp-cat">${esc(g.cat)}</span></div>
      <div class="var-chips">` +
      g.vars.map(v => `<button class="var-chip" data-pick="${v.item.id}">
          ${esc(v.label)} <span class="p ${v.item.price > 0 ? "" : "zero"}">${v.item.price > 0 ? fmt(v.item.price) : "fiyat gir"}</span>
        </button>`).join("") +
      `</div></div>`;
  }
  if (singles.length) {
    html += `<div class="grp"><div class="grp-name">Tekil kalemler</div>` +
      singles.map(i => `<button class="single-item" data-pick="${i.id}">
          <span class="dot ${i.type === "malzeme" ? "m" : "i"}"></span>
          <span>${esc(i.desc)}</span>
          <span class="p ${i.price > 0 ? "" : "zero"}">${i.price > 0 ? fmt(i.price) : "fiyat gir"}</span>
        </button>`).join("") + `</div>`;
  }
  body.innerHTML = html;
}
document.getElementById("pickerBody").addEventListener("click", e => {
  const btn = e.target.closest("[data-pick]");
  if (!btn || !pickerSvc) return;
  const item = db.find(i => i.id === btn.dataset.pick);
  if (!item) return;
  addItem(pickerSvc, item.type === "malzeme" ? "materials" : "labour", item, true);
  pickerAddedCount++;
  document.getElementById("pickerAdded").textContent = pickerAddedCount + " kalem eklendi";
  btn.classList.add("added");
  setTimeout(() => btn.classList.remove("added"), 700);
});

/* ---------- veri: içe aktarma ---------- */
function onFile(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  const rd = new FileReader();
  rd.onload = () => {
    try {
      importWb = XLSX.read(rd.result, { type: "array" });
      document.getElementById("mCat").value = f.name.replace(/\.(xlsx|xls|csv)$/i, "");
      const ss = document.getElementById("mSheet");
      ss.innerHTML = importWb.SheetNames.map(s => `<option>${esc(s)}</option>`).join("");
      document.getElementById("mapper").classList.remove("hidden");
      onSheetChange();
    } catch (err) { toast("Dosya okunamadı — .xlsx veya .csv yükleyin"); }
  };
  rd.readAsArrayBuffer(f);
  e.target.value = "";
}
function sheetRows() {
  const sn = document.getElementById("mSheet").value;
  const ws = importWb.Sheets[sn];
  return XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" }).slice(0, 500);
}
function onSheetChange() {
  const rows = sheetRows();
  const colCount = rows.reduce((m, r) => Math.max(m, r.length), 0);
  const sample = ci => {
    for (const r of rows) { const v = r[ci]; if (v !== "" && v != null) return String(v).slice(0, 26); }
    return "(boş)";
  };
  const opts = `<option value="-1">Seç…</option>` + Array.from({ length: colCount })
    .map((_, ci) => `<option value="${ci}">Sütun ${String.fromCharCode(65 + (ci % 26))} — ${esc(sample(ci))}</option>`).join("");
  document.getElementById("mDesc").innerHTML = opts;
  document.getElementById("mPrice").innerHTML = opts;
  document.getElementById("mUnit").innerHTML = opts;
}
function doImport() {
  const d = +document.getElementById("mDesc").value;
  const p = +document.getElementById("mPrice").value;
  const u = +document.getElementById("mUnit").value;
  if (d < 0 || p < 0) { toast("Açıklama ve fiyat sütunlarını seçin"); return; }
  const cat = document.getElementById("mCat").value || document.getElementById("mSheet").value;
  const type = document.getElementById("mType").value;
  const items = [];
  for (const r of sheetRows()) {
    const desc = String(r[d] ?? "").trim();
    const price = parseNum(r[p]);
    if (!desc || price <= 0) continue;
    items.push({ id: uid(), cat, type, desc, unit: u >= 0 ? String(r[u] || "EACH") : "EACH", price });
  }
  if (!items.length) { toast("Bu eşleşmeyle geçerli satır bulunamadı"); return; }
  db = db.concat(items);
  cancelImport();
  refreshDb(); save(); // Katalog save, history ile alakası yok
  toast(items.length + " kalem kataloğa eklendi");
}
function cancelImport() { importWb = null; document.getElementById("mapper").classList.add("hidden"); }

function addManual() {
  const desc = document.getElementById("manDesc").value.trim();
  if (!desc) { toast("Açıklama girin"); return; }
  db.push({
    id: uid(),
    cat: document.getElementById("manCat").value.trim() || "Genel",
    type: document.getElementById("manType").value,
    desc, unit: "EACH",
    price: parseNum(document.getElementById("manPrice").value),
  });
  document.getElementById("manDesc").value = "";
  document.getElementById("manPrice").value = "";
  refreshDb(); save(); toast("Kalem eklendi");
}
function delCat(cat) {
  if (!confirm(cat + " kategorisindeki tüm kalemleri silmek istiyor musunuz?")) return;
  db = db.filter(i => i.cat !== cat);
  refreshDb(); save();
}
let openCats = {}; // Açık kategorileri takip et
function toggleCat(cat) { openCats[cat] = !openCats[cat]; refreshDb(); }
function updateDbItem(id, field, val) {
  const it = db.find(i => i.id === id);
  if (!it) return;
  if (field === 'price') it[field] = parseNum(val);
  else it[field] = val;
  save(); // db'yi storage'a kaydeder (save içinde db de kaydediliyor)
}
function delDbItem(id) {
  if (!confirm("Bu kalemi silmek istediğinize emin misiniz?")) return;
  db = db.filter(i => i.id !== id);
  refreshDb(); save();
}

function refreshDb() {
  const cats = [...new Set(db.map(i => i.cat))].sort();
  document.getElementById("dbCount").textContent = "— " + db.length + " kalem";
  document.getElementById("dbCats").innerHTML = cats.length
    ? cats.map(c => {
        const items = db.filter(i => i.cat === c);
        const isOpen = openCats[c];
        return `
        <div style="border-bottom: 1px solid #e2e8f0; margin-bottom: 4px;">
          <div class="db-cat" style="cursor:pointer; display:flex; align-items:center; gap:8px; padding:8px 4px; border:none;" onclick='toggleCat(${JSON.stringify(c)})'>
            <span style="width:16px;text-align:center;color:#94a3b8">${isOpen ? '▼' : '▶'}</span> <b>${esc(c)}</b>
            <span class="n" style="margin-left:auto;color:#64748b;font-size:12px">${items.length} kalem</span>
            <button class="del" style="background:none;border:none;color:#cbd5e1;cursor:pointer;padding:0 8px;font-size:14px" onclick='event.stopPropagation(); delCat(${JSON.stringify(c)})' title="Kategoriyi Sil">✕</button>
          </div>
          <div class="db-items" style="display:${isOpen ? 'block' : 'none'}; padding: 4px 0 12px 24px;">
            ${items.map(i => `
              <div style="display:flex; gap:6px; align-items:center; margin-bottom:6px;">
                <span style="font-size:11px; color:#94a3b8; width:46px;">${i.type === 'iscilik' ? 'İşçilik' : 'Malzeme'}</span>
                <input value="${esc(i.desc)}" style="flex:1; padding:5px 8px; font-size:12.5px" onchange="updateDbItem('${i.id}', 'desc', this.value)" title="Açıklamayı düzenle">
                <div style="position:relative; display:inline-block;">
                  <input value="${esc(i.price)}" style="width:86px; padding:5px 22px 5px 8px; font-size:12.5px; text-align:right" onchange="updateDbItem('${i.id}', 'price', this.value)" title="Fiyatı düzenle">
                  <span style="position:absolute; right:8px; top:50%; transform:translateY(-50%); font-size:12px; color:#94a3b8; pointer-events:none">€</span>
                </div>
                <span style="font-size:12px; color:#64748b; width:34px;">${esc(i.unit)}</span>
                <button class="del" style="background:none;border:none;color:#cbd5e1;cursor:pointer;font-size:14px;padding:4px" onclick="delDbItem('${i.id}')" title="Sil">✕</button>
              </div>
            `).join("")}
          </div>
        </div>`;
      }).join("")
    : `<div class="empty">Henüz veri yok.</div>`;
}
function exportJson() {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "teklif_katalog_yedek.json"; a.click();
}
function onJson(e) {
  const f = e.target.files?.[0]; if (!f) return;
  f.text().then(t => {
    try { const d = JSON.parse(t); if (Array.isArray(d)) { db = d; refreshDb(); save(); toast("Katalog yedeği yüklendi"); } }
    catch { toast("JSON okunamadı"); }
  });
  e.target.value = "";
}
function loadBuiltin() {
  const have = new Set(db.map(i => i.cat + "|" + i.desc));
  const add = BUILTIN.filter(i => !have.has(i.cat + "|" + i.desc)).map(i => Object.assign({ id: uid() }, i));
  db = db.concat(add);
  refreshDb(); save();
  toast(add.length ? add.length + " matris kalemi eklendi" : "Matris kalemleri zaten katalogda");
}

/* ---------- AFINA FORMATINDA EXCEL ÇIKTISI ---------- */
const BLUE = "DCE6F1", GREEN2 = "C3D69B", GRAY = "BFBFBF", YEL = "FFFF00", RED = "FFFF0000";
const thinB = { style: "thin" };
const BOX = { top: thinB, bottom: thinB, left: thinB, right: thinB };
const FILLP = hex => ({ type: "pattern", pattern: "solid", fgColor: { argb: "FF" + hex } });
const TH = o => Object.assign({ name: "Tahoma", size: 12 }, o || {});
const TERMS_EN = [
  "*  Defining services above are going to be started after confirmation. Work delivery time may change due to delay of material supply, weather conditions and/or other conditions beyond our control.",
  "* Surface preparations and paint applications are proceeded by following technical guide of manufacturing company.",
  "* All material cost is paid by customer in advance.",
  "* %50 of labour cost is paid in advance and the balance is settled according to invoice when the works fully completed.",
  "* Any service not specified above is outside of this quotation. These additional cost as work and/or material, that can be caused by general arrangement of boat systems, will be charged separately.",
  "* Local delivery cost of materials are included in prices. Any additional cost due to overseas transportation will be charged separately.",
  "* If any payment is delayed after works completed and invoice prepared, %5 interest ratio per month will be applied as overdue.",
  "* A service fee of 75 € + VAT is required for any intervention, detection and proposal preparation on the boat.",
  "* Prices are valid for only 7 days."
];
const TERMS_TR = [
  "* Yukarıda belirtilen hizmetler onaylandıktan sonra başlar. Malzeme tedariği, hava şartları veya kontrolümüz dışındaki sebeplerden dolayı iş teslim süresi değişebilir.",
  "* Yüzey hazırlığı ve boya uygulamaları üretici firmanın teknik kılavuzlarına göre yapılır.",
  "* Tüm malzeme bedeli peşin alınır.",
  "* İşçilik bedelinin %50'si peşin alınır, kalanı iş bitiminde faturaya göre kapatılır.",
  "* Yukarıda belirtilmeyen tüm hizmetler bu teklifin dışındadır. Tekne sistemlerinin yerleşiminden kaynaklanabilecek bu ilave masraflar ayrıca ücretlendirilecektir.",
  "* Yerel malzeme teslimat masrafları fiyatlara dahildir. Yurtdışı nakliye gibi ek masraflar ayrıca ücretlendirilir.",
  "* İş bitimi ve fatura kesiminden sonra ödemede gecikme olursa aylık %5 gecikme faizi uygulanır.",
  "* Tekne üzerinde yapılacak her türlü müdahale, tespit ve teklif hazırlığı için 75 € + KDV servis ücreti alınır.",
  "* Fiyatlar sadece 7 gün geçerlidir."
];

function closeDl() {
  document.getElementById("dlOverlay").classList.remove("open");
  document.getElementById("dlBox").classList.remove("open");
}

async function exportXlsx(lang = 'EN') {
  const curr = document.getElementById("quoteCurrency")?.value || "EUR";
  const sym = curr === "EUR" ? "€" : curr === "USD" ? "$" : "₺";
  const numFmt = `#,##0.00 "${sym}"`; 

  const dict = {
    sheetName: lang === 'TR' ? "TR" : "ING",
    title: lang === 'TR' ? "TEKNİK SERVİS TEKLİF FORMU" : "TECHNICAL SERVICE PROPOSAL FORM",
    date: lang === 'TR' ? "TARİH" : "DATE",
    custInfo: lang === 'TR' ? "MÜŞTERİ BİLGİLERİ" : "CUSTOMER INFORMATION",
    name: lang === 'TR' ? "AD SOYAD" : "NAME & SURNAME",
    boatName: lang === 'TR' ? "TEKNE ADI" : "BOAT NAME",
    email: lang === 'TR' ? "E-POSTA" : "EMAIL ADDRESS",
    model: lang === 'TR' ? "TEKNE MODELİ" : "BOAT MODEL",
    phone: lang === 'TR' ? "TELEFON" : "TELEPHONE",
    flag: lang === 'TR' ? "BAYRAK" : "BOAT FLAG",
    servInfo: lang === 'TR' ? "SERVİS BİLGİLERİ" : "SERVICE INFORMATION",
    qty: lang === 'TR' ? "MİKTAR" : "QUANTITY",
    unit: lang === 'TR' ? "BİRİM" : "UNIT",
    uPrice: lang === 'TR' ? "BİRİM FİYAT" : "UNIT PRICE",
    total: lang === 'TR' ? "TOPLAM" : "TOTAL",
    subTotal: lang === 'TR' ? "ARA TOPLAM" : "SUB TOTAL",
    works: lang === 'TR' ? "İŞÇİLİK" : "WORKS & SERVICES",
    mats: lang === 'TR' ? "MALZEME" : "MATERIALS",
    totWork: lang === 'TR' ? "İŞ TOPLAMI" : "TOTAL FOR WORK",
    totLab: lang === 'TR' ? "TOPLAM İŞÇİLİK" : "TOTAL LABOUR COST",
    totMat: lang === 'TR' ? "TOPLAM MALZEME" : "TOTAL MATERIAL COST",
    vat: lang === 'TR' ? "KDV %20 (Sadece işçilik)" : "VAT %20 (Labour only)",
    grand: lang === 'TR' ? "GENEL TOPLAM" : "GRAND TOTAL",
    terms: lang === 'TR' ? "ŞARTLAR & KOŞULLAR" : "TERMS & CONDITIONS",
    approve: lang === 'TR' ? "Müşteri Onayı" : "Customer Approval"
  };
  const activeTerms = lang === 'TR' ? TERMS_TR : TERMS_EN;

 try {
  if (typeof ExcelJS === "undefined") {
    toast("Excel kütüphanesi yüklenemedi — internet bağlantısıyla sayfayı yenileyin");
    return;
  }
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet(dict.sheetName);
  
  ws.pageSetup.paperSize = 9; // A4
  ws.pageSetup.orientation = 'portrait';
  ws.pageSetup.fitToPage = true;
  ws.pageSetup.fitToWidth = 1;
  ws.pageSetup.fitToHeight = 0; // Sınırsız dikey sayfa

  ws.columns = [{ width: 16 }, { width: 21 }, { width: 32 }, { width: 17 }, { width: 11 }, { width: 16 }, { width: 16 }];

  const C = (row, col, value, o = {}) => {
    const c = ws.getCell(row, col);
    if (value !== undefined && value !== null) c.value = value;
    c.font = TH(o.font);
    if (o.fill) c.fill = FILLP(o.fill);
    if (o.border) c.border = o.border;
    if (o.align) c.alignment = o.align;
    if (o.fmt) c.numFmt = o.fmt;
    return c;
  };
  const MR = (row, c1, c2) => ws.mergeCells(row, c1, row, c2);

  const getB64 = async (url) => {
    try {
      const res = await fetch(url + '?t=' + Date.now());
      if (!res.ok) return null;
      const blob = await res.blob();
      const dataUrl = await new Promise(r => { const f = new FileReader(); f.onloadend = () => r(f.result); f.readAsDataURL(blob); });
      return dataUrl.split(',')[1];
    } catch(e) { return null; }
  };

  const b64Ust = await getB64('ust.png');
  const b64Alt = await getB64('alt.png');

  if (!b64Ust || !b64Alt) {
    toast("Bilgi: ust.png veya alt.png bulunamadı, antetler olmadan oluşturuluyor.");
  }

  let r = 1;
  if (b64Ust) {
    const idUst = wb.addImage({ base64: b64Ust, extension: 'png' });
    ws.addImage(idUst, {
      tl: { col: 1, row: 0 },
      br: { col: 7, row: 4 }
    });
    r = 6;
  }

  // Antetin (logo + başlık) tüm sayfalarda (Page 1, Page 2...) tekrar etmesini sağla
  ws.pageSetup.printTitlesRow = '1:' + (b64Ust ? 8 : 3);

  C(r, 2, dict.title, { font: { bold: true, size: 16 } });
  C(r+1, 6, dict.date, { font: { bold: true } });
  C(r+1, 7, { formula: "TODAY()", result: new Date() }, { font: { bold: true }, fmt: "dd.mm.yyyy" });

  r += 3;
  MR(r, 2, 7); C(r, 2, dict.custInfo, { font: { bold: true, size: 14 }, fill: BLUE });
  const cu = quote.customer;
  const custRows = [
    [dict.name, cu.name, dict.boatName, cu.boat],
    [dict.email, cu.email, dict.model, cu.model],
    [dict.phone, cu.phone, dict.flag, cu.flag],
  ];
  r++; // Müşteri bilgilerini alt satırdan başlat
  for (const [l1, v1, l2, v2] of custRows) {
    C(r, 2, l1, { font: { bold: true, size: 11 }, fill: BLUE, border: BOX });
    C(r, 3, v1 || "", { border: BOX });
    C(r, 4, l2, { font: { bold: true }, fill: BLUE, border: BOX });
    MR(r, 5, 7); C(r, 5, v2 || "", { border: BOX });
    r++;
  }
  r++; // Servis bilgileri öncesi bir satır boşluk
  MR(r, 2, 7); C(r, 2, dict.servInfo, { font: { bold: true, size: 14 }, fill: BLUE });
  r += 2; // İşlerin başlaması için boşluk

  const labourSubs = [], matSubs = [];

  const writeTable = (rows, header) => {
    MR(r, 2, 3); C(r, 2, header, { font: { bold: true }, fill: BLUE, border: BOX });
    [dict.qty, dict.unit, dict.uPrice, dict.total].forEach((h, i) =>
      C(r, 4 + i, h, { font: { bold: true }, fill: BLUE, border: BOX, align: { horizontal: "center" } }));
    r++;
    const start = r;
    let sum = 0;
    for (const it of rows) {
      const qty = parseNum(it.qty), price = parseNum(it.price);
      if (it.opt !== 1) sum += qty * price;
      let hl = price > 0 ? undefined : YEL;
      if (it.opt === 1) hl = "E2EFDA"; // green
      if (it.opt === 2) hl = "FCE4D6"; // red

      MR(r, 2, 3);
      C(r, 2, it.desc || "", { border: BOX, fill: hl, align: { wrapText: true, vertical: "top" } });
      C(r, 4, qty, { border: BOX, fill: hl, align: { horizontal: "center" } });
      C(r, 5, it.unit || "EACH", { border: BOX, fill: hl, align: { horizontal: "center" } });
      C(r, 6, price, { border: BOX, fill: hl, fmt: numFmt });
      
      if (it.opt === 1) {
        C(r, 7, lang === 'TR' ? "OPSİYON" : "OPTION", { border: BOX, fill: hl, align: { horizontal: "right" } });
      } else {
        C(r, 7, { formula: `D${r}*F${r}`, result: qty * price }, { border: BOX, fill: hl, fmt: numFmt });
      }
      r++;
    }
    const end = r - 1;
    C(r, 4, dict.subTotal, { font: { bold: true }, fill: BLUE, border: BOX });
    C(r, 5, "", { fill: BLUE, border: BOX });
    C(r, 6, "", { fill: BLUE, border: BOX });
    C(r, 7, end >= start ? { formula: `SUM(G${start}:G${end})`, result: sum } : 0,
      { font: { bold: true }, fill: BLUE, border: BOX, fmt: numFmt });
    const subRow = r;
    r += 2;
    return { subRow, sum };
  };

  let pageRows = r + 2; // Üst kısımdaki sabit başlıkların tahmini satır sayısı
  const PAGE_CAPACITY = 58; // A4 sayfasına sığacak tahmini maksimum satır

  quote.services.forEach((s, i) => {
    if (!s.title && !s.labour.length && !s.materials.length && !s.notes) return;
    
    // Bu iş bloğunun kaç satır tutacağını tahmin et
    const notesCount = String(s.notes || "").split("\n").filter(Boolean).length;
    const redNotesCount = String(s.redNotes || "").split("\n").filter(Boolean).length;
    let est = 1 + notesCount; 
    if (s.labour.length) est += 3 + s.labour.length;
    if (s.materials.length) est += 3 + s.materials.length;
    if (s.labour.length || s.materials.length) est += 2; 
    est += redNotesCount + 1;

    // Eğer bu iş sayfaya sığmıyorsa
    if (pageRows + est > PAGE_CAPACITY) {
      // Sayfanın yarısından fazlasını doldurduysak temizce yeni sayfaya geç (tablo bölünmesin)
      if (pageRows > 32) {
        if (typeof ws.getRow(r - 1).addPageBreak === 'function') {
          ws.getRow(r - 1).addPageBreak();
        }
        pageRows = est; // Yeni sayfada sadece bu işin satırları var
      } else {
        // İş çok devasa, sayfanın yarısından önce başlasa bile sığmıyor.
        // Excel'in doğal olarak bölmesine izin ver.
        pageRows = (pageRows + est) % PAGE_CAPACITY;
      }
    } else {
      // Sayfaya rahatça sığıyor
      pageRows += est;
    }

    C(r, 2, `${i + 1}. ${s.title || "Service"}`, { font: { bold: true, size: 14, color: { argb: RED } } });
    r++;
    String(s.notes || "").split("\n").map(x => x.trim()).filter(Boolean).forEach(n => {
      MR(r, 2, 7);
      C(r, 2, n.startsWith("*") ? n : "* " + n, { align: { wrapText: true, vertical: "top" } });
      r++;
    });
    r++;
    let L = null, M = null;
    if (s.labour.length) { L = writeTable(s.labour, dict.works); labourSubs.push("G" + L.subRow); }
    if (s.materials.length) { M = writeTable(s.materials, dict.mats); matSubs.push("G" + M.subRow); }
    const parts = [L && "G" + L.subRow, M && "G" + M.subRow].filter(Boolean);
    if (parts.length) {
      C(r, 4, dict.totWork, { font: { bold: true }, fill: GREEN2, border: BOX });
      C(r, 5, "", { fill: GREEN2, border: BOX });
      C(r, 6, "", { fill: GREEN2, border: BOX });
      C(r, 7, { formula: parts.join("+"), result: (L?.sum || 0) + (M?.sum || 0) },
        { font: { bold: true }, fill: GREEN2, border: BOX, fmt: numFmt });
      r += 2;
    } else {
      r += 1;
    }

    String(s.redNotes || "").split("\n").map(x => x.trim()).filter(Boolean).forEach(n => {
      MR(r, 2, 7);
      C(r, 2, n.startsWith("*") ? n : "* " + n, { align: { wrapText: true, vertical: "top" }, font: { color: { argb: RED }, bold: true } });
      r++;
    });
    r += 1;
  });

  const t = totals();
  r++;
  const summaryRows = [
    [dict.totLab, t.l, labourSubs],
    [dict.totMat, t.m, matSubs],
    [dict.vat, t.vat, null],
    [dict.grand, t.grand, null],
  ];
  for (const [label, val, refs] of summaryRows) {
    const isGrand = label === dict.grand;
    C(r, 4, label, { font: { bold: true }, fill: isGrand ? GREEN2 : BLUE, border: BOX });
    C(r, 5, "", { fill: isGrand ? GREEN2 : BLUE, border: BOX });
    C(r, 6, "", { fill: isGrand ? GREEN2 : BLUE, border: BOX });
    C(r, 7, val, { font: { bold: true }, fill: isGrand ? GREEN2 : BLUE, border: BOX, fmt: numFmt });
    r++;
  }

  r += 2;
  MR(r, 2, 7); C(r, 2, dict.terms, { font: { bold: true, size: 14 }, fill: BLUE }); r++;
  for (const term of activeTerms) {
    MR(r, 2, 7);
    C(r, 2, term, { align: { wrapText: true, vertical: "top" }, font: { size: 10 } });
    ws.getRow(r).height = 28;
    r++;
  }

  r += 2;
  MR(r, 2, 4); C(r, 2, "SERVİS MERKEZİ", { font: { bold: true } });
  MR(r, 5, 7); C(r, 5, dict.approve, { font: { bold: true } });
  r += 2;

  if (b64Alt) {
    const idAlt = wb.addImage({ base64: b64Alt, extension: 'png' });
    ws.addImage(idAlt, {
      tl: { col: 1, row: r }, // B(r)
      br: { col: 7, row: r + 5 } // G(r+5)'in sağ alt köşesi
    });
    r += 6;
  }

  ws.pageSetup.printArea = 'B1:G' + (r + 1);

  // Geri yükleme (import) için veriyi gizli bir sekmeye gömüyoruz
  const stateWs = wb.addWorksheet('_teklif_state', { state: 'hidden' });
  stateWs.getCell('A1').value = JSON.stringify({ quote, currency: curr });

  const buf = await wb.xlsx.writeBuffer();
  const blob = new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  const url = URL.createObjectURL(blob);
  const boatName = (quote.customer.boat || "teklif").replace(/\s+/g, "_");
  const fname = `Teklif_${boatName}_${new Date().toISOString().slice(0,10)}_${lang}.xlsx`;

  // Try direct download first
  const a = document.createElement("a");
  a.href = url;
  a.download = fname;
  a.click();

  // Also show the download box as fallback
  document.getElementById("dlName").textContent = fname;
  document.getElementById("dlLink").href = url;
  document.getElementById("dlLink").download = fname;
  document.getElementById("dlOverlay").classList.add("open");
  document.getElementById("dlBox").classList.add("open");

  } catch (e) {
    console.error(e);
    toast("Excel oluşturulurken bir hata oluştu.");
  }
}

async function importXlsx(e) {
  const file = e.target.files[0];
  if (!file) return;
  e.target.value = ""; // aynı dosyayı tekrar seçebilmek için sıfırla

  try {
    if (typeof ExcelJS === "undefined") {
      toast("Excel kütüphanesi yüklenmedi, sayfayı yenileyin.");
      return;
    }
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.load(file);
    const ws = wb.getWorksheet('_teklif_state');
    if (!ws) {
      toast("Hata: Bu dosyada gizli veri bulunamadı. Sadece yeni oluşturulan dosyalar yüklenebilir.");
      return;
    }
    const dataStr = ws.getCell('A1').value;
    const data = JSON.parse(dataStr);
    
    if (data.quote) {
      quote = data.quote;
      if (data.currency) {
        const cSel = document.getElementById("quoteCurrency");
        if (cSel) cSel.value = data.currency;
      }
      renderServices();
      save();
      toast("✅ Dosya başarıyla içeri aktarıldı!");
    } else {
      toast("Hata: Veri formatı bozuk.");
    }
  } catch(err) {
    console.error(err);
    toast("Hata: Dosya okunurken bir sorun oluştu.");
  }
}

/* ---------- CRM Entegrasyonu ---------- */
/* ---------- CRM gelen iş bildirimi ---------- */
const CRM_TUR_LABEL = { su_alti_bakim:'Su Altı Bakım', antifouling:'Antifouling', boya_genel:'Gövde Boya', periyodik_bakim:'Periyodik Bakım', motor_bakim:'Motor Bakım', mekanik_torna:'Mekanik & Torna', saft_pervane:'Şaft & Pervane', elektrik:'Elektrik', elektronik:'Elektronik', yelken_doseme:'Yelken & Döşeme', tesisat:'Tesisat', cekek:'Çekek', teknik_rapor:'Survey', diger:'Diğer' };
const CRM_DURUM = {
  yeni:           { label:'Yeni',           bg:'#fef3c7', fg:'#b45309' },
  gorusmede:      { label:'Görüşmede',      bg:'#dbeafe', fg:'#1d4ed8' },
  teklif_verildi: { label:'Teklif Verildi', bg:'#ede9fe', fg:'#6d28d9' },
  onaylandi:      { label:'Onaylandı',      bg:'#dcfce7', fg:'#15803d' },
  iptal:          { label:'İptal',          bg:'#f1f5f9', fg:'#94a3b8' }
};
// Teklif bekleyen işler: durumu yeni veya görüşmede olan talepler
function crmGelenIsler() {
  let crm = [];
  try { crm = JSON.parse(localStorage.getItem('crm_data') || '[]'); } catch (e) {}
  const acik = [];
  crm.forEach(c => (c.talepler || []).forEach(t => {
    if (t.durum === 'yeni' || t.durum === 'gorusmede') acik.push({ cust: c, talep: t });
  }));
  return acik;
}
function updateCrmBadge() {
  const el = document.getElementById('crmBadge');
  if (!el) return;
  const n = crmGelenIsler().length;
  el.textContent = n;
  el.style.display = n ? 'block' : 'none';
}
// CRM başka sekmede güncellenirse rozet canlı yenilensin
window.addEventListener('storage', e => { if (e.key === 'crm_data') updateCrmBadge(); });

function openCrmModal() {
  document.getElementById('crmOverlay').classList.add('open');
  document.getElementById('crmModal').classList.add('open');
  renderCrmList();
}
function closeCrmModal() {
  document.getElementById('crmOverlay').classList.remove('open');
  document.getElementById('crmModal').classList.remove('open');
}
function renderCrmList() {
  const crmDataStr = localStorage.getItem('crm_data');
  const crmData = crmDataStr ? JSON.parse(crmDataStr) : [];
  const listEl = document.getElementById('crmList');
  const q = (document.getElementById('crmSearch').value || '').toLowerCase();

  const acikMi = t => t.durum === 'yeni' || t.durum === 'gorusmede';
  const acikSayi = c => (c.talepler || []).filter(acikMi).length;

  const gelen = crmGelenIsler().length;
  const cntEl = document.getElementById('crmModalCount');
  if (cntEl) cntEl.textContent = gelen ? `· ${gelen} iş teklif bekliyor` : '';

  let html = '';
  // Teklif bekleyen işi olan müşteriler üstte
  [...crmData].sort((a, b) => acikSayi(b) - acikSayi(a)).forEach(cust => {
    const cName = ((cust.ad || '') + ' ' + (cust.soyad || '')).toLowerCase().trim();
    const bName = ((cust.tekneAdi || '') + ' ' + (cust.tekneMarkasi || '') + ' ' + (cust.tekneModeli || '')).toLowerCase().trim();
    if (cName.includes(q) || bName.includes(q)) {
      // Bekleyenler önce, iptaller en sonda
      const talepler = [...(cust.talepler || [])].sort((a, b) => {
        const w = t => acikMi(t) ? 0 : t.durum === 'iptal' ? 2 : 1;
        return w(a) - w(b);
      });
      const boatName = cust.tekneAdi || (cust.tekneMarkasi ? cust.tekneMarkasi + ' ' + cust.tekneModeli : 'Bilinmiyor');
      const loa = cust.tekneBoyu ? cust.tekneBoyu + ' ft' : '';
      const fullName = (cust.ad || '') + ' ' + (cust.soyad || '');
      html += `<div style="padding:12px; border:1px solid #e2e8f0; border-radius:8px; margin-bottom:10px; background:#fff;">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
          <b style="color:#0f2438">${esc(fullName) || 'Bilinmeyen Müşteri'}</b>
          <span style="font-size:12px; color:#1273b8; font-weight:600">${esc(boatName)} ${loa}</span>
        </div>`;
      if (talepler.length === 0) {
        html += `<div style="font-size:12px; color:#94a3b8; display:flex; justify-content:space-between; align-items:center;">Kayıtlı talep yok. <button class="btn btn-ghost btn-sm" onclick="selectCrmData('${cust.id}', null)">Müşteriyi Çek</button></div>`;
      } else {
        talepler.forEach(t => {
          const d = CRM_DURUM[t.durum] || { label: t.durum || '?', bg: '#f1f5f9', fg: '#475569' };
          const bekliyor = acikMi(t);
          const tarih = t.createdAt ? new Date(t.createdAt).toLocaleDateString('tr-TR') : '';
          const butce = t.butceBilinmiyor ? 'Bütçe: —' : (t.butce ? 'Bütçe: €' + Number(t.butce).toLocaleString('tr-TR') : '');
          html += `<div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:6px; padding:8px; background:${bekliyor ? '#fffbeb' : '#f8fafc'}; border-radius:6px; border:1px solid ${bekliyor ? '#fcd34d' : '#e2e8f0'}; ${t.durum === 'iptal' ? 'opacity:.55;' : ''}">
            <div>
              <div style="font-size:13px; font-weight:600; color:#0f2438;">${esc(CRM_TUR_LABEL[t.tur] || t.tur || 'Talep')} <span style="display:inline-block; margin-left:6px; font-size:10px; font-weight:700; padding:2px 8px; border-radius:999px; background:${d.bg}; color:${d.fg};">${d.label}</span></div>
              ${t.aciklama ? `<div style="font-size:12px; color:#475569; margin-top:2px;">${esc(t.aciklama)}</div>` : ''}
              <div style="font-size:11px; color:#64748b; margin-top:2px;">${tarih}${tarih && butce ? ' · ' : ''}${butce}</div>
            </div>
            ${t.durum === 'iptal' ? '' : `<button class="btn btn-primary btn-sm" style="flex-shrink:0;" onclick="selectCrmData('${cust.id}', '${t.id}')">Bu Talebi Seç</button>`}
          </div>`;
        });
      }
      html += `</div>`;
    }
  });
  if (!html) html = '<div style="color:#94a3b8; text-align:center; padding:20px;">CRM kaydı bulunamadı.</div>';
  listEl.innerHTML = html;
}

function selectCrmData(custId, talepId) {
  const crmDataStr = localStorage.getItem('crm_data');
  const crmData = crmDataStr ? JSON.parse(crmDataStr) : [];
  const cust = crmData.find(c => c.id === custId);
  if (!cust) return;
  
  quote.customer.name = ((cust.ad || '') + ' ' + (cust.soyad || '')).trim();
  quote.customer.email = cust.email || '';
  quote.customer.phone = cust.telefon || cust.phone || '';
  quote.customer.boat = cust.tekneAdi || (cust.tekneMarkasi || 'Bilinmeyen Tekne');
  quote.customer.model = cust.tekneModeli || '';
  quote.customer.flag = cust.bayrak || '';
  // Ekstra bilgileri (boy ve motor) de arka planda saklayalım
  quote.customer.loa = cust.tekneBoyu || '';
  quote.customer.motor_hp = (cust.motorlar && cust.motorlar.length > 0) ? cust.motorlar[0].hp : '';
  quote.customer.kuyruk = (cust.motorlar && cust.motorlar.length > 0) ? cust.motorlar[0].tahrik : '';
  
  if (talepId && cust.talepler) {
    const talep = cust.talepler.find(t => t.id === talepId);
    if (talep) {
       const s = newService();
       s.title = (CRM_TUR_LABEL[talep.tur] || talep.tur || 'Talep') + (talep.aciklama ? ': ' + talep.aciklama : '');
       s.notes = talep.notlar || '';
       if (quote.services.length === 1 && !quote.services[0].title && quote.services[0].labour.length === 0 && quote.services[0].materials.length === 0) {
         quote.services = [];
       }
       quote.services.push(s);
    }
  }
  
  const activeTab = tabs.find(t => t.id === activeTabId);
  if (activeTab) {
     activeTab.quote = JSON.parse(JSON.stringify(quote));
  }
  document.querySelectorAll('[data-cust]').forEach(el => el.value = quote.customer[el.dataset.cust] || "");
  renderServices();
  save(false, true);
  closeCrmModal();
  toast("CRM bilgileri başarıyla aktarıldı!");
}

/* ---------- Teklif Sihirbazı ---------- */
const WIZ_DEFAULTS = {
  ana_makina: {"10-30 HP":280,"40-55 HP":380,"56-75 HP":460,"76-110 HP":560,"111-150 HP":650,"151-230 HP":780,"231-350 HP":950},
  impeller:   {"10-30 HP":60, "40-55 HP":80, "56-75 HP":90, "76-110 HP":110,"111-150 HP":130,"151-230 HP":160,"231-350 HP":200},
  pasta_cila: {"≤25 ft":100,"26-30 ft":150,"31-35 ft":250,"36-40 ft":350,"41-45 ft":450,"46-50 ft":550,"51-55 ft":650,"56-60 ft":800},
  zehirli:    {"≤25 ft":170,"26-30 ft":250,"31-35 ft":280,"36-40 ft":350,"41-45 ft":450,"46-50 ft":550,"51-55 ft":650,"56-60 ft":800}
};

let wizPrices = loadWizPrices();

function loadWizPrices() {
  let prices = JSON.parse(JSON.stringify(WIZ_DEFAULTS));
  try {
    const saved = localStorage.getItem('wiz_prices');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge saved with defaults
      for (let k in parsed) {
        if (prices[k]) {
          prices[k] = { ...prices[k], ...parsed[k] };
        }
      }
    }
  } catch(e) {}
  return prices;
}

function saveWizPrices() {
  // Read from matrix inputs
  ['ana_makina','impeller','pasta_cila','zehirli'].forEach(cat => {
    const el = document.getElementById('matrix' + cat.split('_').map(w=>w[0].toUpperCase()+w.slice(1)).join(''));
    if (!el) return;
    el.querySelectorAll('input[data-key]').forEach(inp => {
      wizPrices[cat][inp.dataset.key] = parseFloat(inp.value) || 0;
    });
  });
  localStorage.setItem('wiz_prices', JSON.stringify(wizPrices));
  updateWizPrices();
  // Flash save feedback
  const btn = event.target;
  btn.textContent = '✅ Kaydedildi!';
  setTimeout(() => btn.textContent = '💾 Kaydet', 1500);
}

function resetWizPrices() {
  if (!confirm('Fiyatları varsayılana döndür mek istediğinize emin misiniz?')) return;
  wizPrices = JSON.parse(JSON.stringify(WIZ_DEFAULTS));
  localStorage.removeItem('wiz_prices');
  renderWizMatrix();
  updateWizPrices();
}

function renderWizMatrix() {
  const cats = [
    { id: 'matrixAnaMakina',  key: 'ana_makina' },
    { id: 'matrixImpeller',   key: 'impeller'   },
    { id: 'matrixPastaCila',  key: 'pasta_cila' },
    { id: 'matrixZehirli',    key: 'zehirli'    }
  ];
  cats.forEach(({id, key}) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = Object.entries(wizPrices[key]).map(([bucket, price]) => `
      <div style="text-align:center;">
        <div style="font-size:10px; color:#64748b; margin-bottom:4px; font-weight:600;">${bucket}</div>
        <input data-key="${bucket}" data-cat="${key}" type="number" value="${price}"
          oninput="wizPrices['${key}']['${bucket}']=parseFloat(this.value)||0; updateWizPrices();"
          style="width:100%; text-align:center; padding:6px 4px; border:1px solid #e2e8f0; border-radius:6px; font-size:13px; font-weight:600; color:#0f2438; background:#fff;">
      </div>
    `).join('');
  });
}

function toggleWizMatrix() {
  const panel = document.getElementById('wizMatrixPanel');
  const arrow = document.getElementById('wizMatrixArrow');
  const isOpen = panel.style.display !== 'none';
  panel.style.display = isOpen ? 'none' : 'block';
  arrow.textContent = isOpen ? '▶' : '▼';
  if (!isOpen) renderWizMatrix();
}

function mapLoaToBucket(loaVal) {
  if (!loaVal) return '';
  const loa = parseFloat(loaVal);
  if (isNaN(loa)) return '';
  if (loa <= 25) return '≤25 ft';
  if (loa <= 30) return '26-30 ft';
  if (loa <= 35) return '31-35 ft';
  if (loa <= 40) return '36-40 ft';
  if (loa <= 45) return '41-45 ft';
  if (loa <= 50) return '46-50 ft';
  if (loa <= 55) return '51-55 ft';
  if (loa <= 60) return '56-60 ft';
  return '';
}

let currentEngineParts = [];
let currentEngineLabour = 0;

function switchWizTab(tabId) {
  document.querySelectorAll('.wiz-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('wizTabBtn-' + tabId).classList.add('active');
  document.querySelectorAll('.wiz-tab-content').forEach(c => c.style.display = 'none');
  document.getElementById('wizTab-' + tabId).style.display = 'block';
}

function getBucketForEngine(model) {
  if (!model) return '';
  if (model.includes('D1-13') || model.includes('D1-20') || model.includes('D1-30')) return '10-30 HP';
  if (model.includes('D2-40') || model.includes('D2-50') || model.includes('D2-55')) return '40-55 HP';
  if (model.includes('D2-60') || model.includes('D2-75')) return '56-75 HP';
  if (model.includes('D3-110')) return '76-110 HP';
  if (model.includes('D3-130') || model.includes('D3-150')) return '111-150 HP';
  if (model.includes('D3-170') || model.includes('D3-190') || model.includes('D3-220')) return '151-230 HP';
  return '40-55 HP';
}

function renderWizEngineOptions() {
  const sel = document.getElementById('wizEngineModel');
  if (!sel || !window.SERVICE_AUTOMATION_DATA) return;
  const models = Object.keys(SERVICE_AUTOMATION_DATA.engineParts);
  sel.innerHTML = '<option value="">Seçiniz...</option>' + models.map(m => `<option value="${m}">Volvo Penta ${m}</option>`).join('');
}

function renderWizEngineParts() {
  const model = document.getElementById('wizEngineModel').value;
  const interval = document.getElementById('wizEngineInterval').value;
  const preview = document.getElementById('wizEnginePreview');
  currentEngineParts = [];
  currentEngineLabour = 0;

  if (!model || !interval) {
    preview.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8; font-size:13px; border:1px dashed #cbd5e1; border-radius:8px;">Motor modeli ve bakım periyodu seçin.</div>`;
    updateWizPrices();
    return;
  }

  const parts = SERVICE_AUTOMATION_DATA.engineParts[model]?.[`interval_${interval}`] || [];
  let partsTotal = 0;
  let html = `<div style="background:#fff; border:2px solid #0ea5e9; border-radius:10px; padding:16px;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div style="font-weight:700; color:#0f2438;">⚙️ ${model} - ${interval} Saat Bakımı</div>
      <label style="display:flex; align-items:center; gap:6px; font-size:12px; font-weight:600; cursor:pointer;">
        <input type="checkbox" id="wizChkEngine" checked onchange="updateWizPrices()" style="width:16px;height:16px;accent-color:#0ea5e9;"> Teklife Ekle
      </label>
    </div>
    <table style="width:100%; font-size:12px; border-collapse:collapse; margin-bottom:12px;">
      <tr style="border-bottom:1px solid #e2e8f0; color:#64748b;">
        <th style="text-align:left; padding-bottom:6px;">Parça / İşlem</th>
        <th style="text-align:center; padding-bottom:6px;">Miktar</th>
        <th style="text-align:right; padding-bottom:6px;">Birim Fiyat</th>
      </tr>`;

  parts.forEach(p => {
    partsTotal += p.quantity * p.price;
    html += `<tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:6px 0;">${p.description}</td>
      <td style="text-align:center; padding:6px 0;">${p.quantity}</td>
      <td style="text-align:right; padding:6px 0;">${p.price} €</td>
    </tr>`;
  });
  
  const bucket = getBucketForEngine(model);
  currentEngineLabour = (wizPrices.ana_makina[bucket] || 0);
  if (interval == "500" || interval == "1000") currentEngineLabour += (wizPrices.impeller[bucket] || 0);

  html += `</table>
    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;"><span style="color:#64748b;">Parça Toplamı:</span> <b style="color:#0f2438;">${partsTotal} €</b></div>
    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:8px;"><span style="color:#64748b;">İşçilik (${bucket}):</span> <b style="color:#0f2438;">${currentEngineLabour} €</b></div>
    <div style="display:flex; justify-content:space-between; font-size:14px; padding-top:8px; border-top:1px dashed #cbd5e1;"><span style="font-weight:600; color:#0ea5e9;">Paket Toplamı:</span> <b style="color:#0ea5e9;">${partsTotal + currentEngineLabour} €</b></div>
  </div>`;
  
  currentEngineParts = parts;
  preview.innerHTML = html;
  updateWizPrices();
}

function updateWizPrices() {
  const loa = document.getElementById('wizLoa').value;

  const boyaPrice    = loa ? (wizPrices.pasta_cila[loa]||0) : 0;
  const zehirliPrice = loa ? (wizPrices.zehirli[loa]||0) : 0;

  document.getElementById('wizPriceBoya').textContent    = loa ? boyaPrice    + ' €' : '—';
  document.getElementById('wizPriceZehirli').textContent = loa ? zehirliPrice + ' €' : '—';

  const chkEngine  = document.getElementById('wizChkEngine')?.checked;
  const chkBoya    = document.getElementById('wizChkBoya').checked;
  const chkZehirli = document.getElementById('wizChkZehirli').checked;

  let total = 0;
  let count = 0;

  if (chkEngine && currentEngineParts.length > 0) {
    total += currentEngineLabour + currentEngineParts.reduce((acc, p) => acc + (p.quantity * p.price), 0);
    count++;
  }
  if (chkBoya && loa) { total += boyaPrice; count++; }
  if (chkZehirli && loa) { total += zehirliPrice; count++; }

  document.getElementById('wizTotal').textContent = total + ' €';
  document.getElementById('wizSelectedCount').textContent = count;

  document.getElementById('wizCardBoya').style.borderColor    = (chkBoya && loa) ? '#0ea5e9' : '#cbd5e1';
  document.getElementById('wizCardZehirli').style.borderColor = (chkZehirli && loa) ? '#0ea5e9' : '#cbd5e1';
}

function openWizardModal() {
  renderWizEngineOptions();
  switchWizTab('motor');
  document.getElementById('wizEngineModel').value = '';
  document.getElementById('wizEngineInterval').value = '';
  document.getElementById('wizEnginePreview').innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8; font-size:13px; border:1px dashed #cbd5e1; border-radius:8px;">Motor modeli ve bakım periyodu seçin.</div>`;
  document.getElementById('wizChkBoya').checked = false;
  document.getElementById('wizChkZehirli').checked = false;

  document.getElementById('wizCrmBoat').textContent      = (quote.customer.boat || '') + (quote.customer.model ? ' ' + quote.customer.model : '') || '—';
  document.getElementById('wizCrmCustomer').textContent  = quote.customer.name  || '—';
  document.getElementById('wizCrmLoa').textContent       = quote.customer.loa       ? quote.customer.loa + ' ft' : '—';
  document.getElementById('wizCrmMotorType').textContent = quote.customer.kuyruk   || '—';

  if (quote.customer.loa) {
    const b = mapLoaToBucket(quote.customer.loa);
    if (b) document.getElementById('wizLoa').value = b;
  }

  ['wizLoa','wizChkBoya','wizChkZehirli'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.onchange = updateWizPrices; }
  });
  updateWizPrices();

  document.getElementById('wizardOverlay').classList.add('open');
  document.getElementById('wizardModal').classList.add('open');
}

function closeWizardModal() {
  document.getElementById('wizardOverlay').classList.remove('open');
  document.getElementById('wizardModal').classList.remove('open');
}

function applyWizard() {
  const model = document.getElementById('wizEngineModel').value;
  const interval = document.getElementById('wizEngineInterval').value;
  const loa  = document.getElementById('wizLoa').value;
  
  const chkEngine  = document.getElementById('wizChkEngine')?.checked;
  const chkBoya    = document.getElementById('wizChkBoya').checked;
  const chkZehirli = document.getElementById('wizChkZehirli').checked;

  const clearEmpty = () => {
    if (quote.services.length === 1 && !quote.services[0].title && quote.services[0].labour.length === 0 && quote.services[0].materials.length === 0) {
      quote.services = [];
    }
  };

  // ─── Motor Bakımı ───
  if (chkEngine && model && interval && currentEngineParts.length > 0) {
    const s = newService();
    s.title = `⚙️ Volvo Penta ${model} - ${interval} Saat Bakımı`;
    const bucket = getBucketForEngine(model);
    
    if (wizPrices.ana_makina[bucket]) {
      s.labour.push({ id: uid(), desc: "Ana Makina Periyodik Bakım (İşçilik)", qty: 1, unit: "EACH", price: wizPrices.ana_makina[bucket], opt: 0 });
    }
    if ((interval === "500" || interval === "1000") && wizPrices.impeller[bucket]) {
      s.labour.push({ id: uid(), desc: "İmpeller Değişimi (İşçilik)", qty: 1, unit: "EACH", price: wizPrices.impeller[bucket], opt: 0 });
    }

    currentEngineParts.forEach(p => {
      s.materials.push({ id: uid(), desc: p.description, qty: p.quantity, unit: p.description.includes("Yağı") || p.description.includes("Coolant") ? "LT" : "EACH", price: p.price, opt: 0 });
    });
    
    clearEmpty();
    quote.services.push(s);
  }

  // ─── Borda Pasta & Cila ───
  if (chkBoya && loa) {
    const s = newService();
    s.title = `✨ Borda Pasta & Cila (${loa})`;
    if (wizPrices.pasta_cila[loa]) s.labour.push({ id: uid(), desc: "Borda Pasta & Cila Uygulaması (İşçilik + Sarf)", qty: 1, unit: "EACH", price: wizPrices.pasta_cila[loa], opt: 0 });
    clearEmpty();
    quote.services.push(s);
  }

  // ─── Zehirli Boya ───
  if (chkZehirli && loa) {
    const s = newService();
    s.title = `⚓ Zehirli Boya Uygulaması (${loa})`;
    if (wizPrices.zehirli[loa]) s.labour.push({ id: uid(), desc: "Alt yıkama, zımpara ve zehirli boya uygulaması (İşçilik + Sarf)", qty: 1, unit: "EACH", price: wizPrices.zehirli[loa], opt: 0 });
    clearEmpty();
    quote.services.push(s);
  }

  if (!chkEngine && !chkBoya && !chkZehirli) { alert('Lütfen en az bir paket seçin.'); return; }

  renderServices();
  save(false, true);
  closeWizardModal();
  toast('✅ Paketler teklife eklendi!');
}

/* ---------- başlat ---------- */
loadState();
updateCrmBadge();
