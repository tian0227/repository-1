let lang=localStorage.getItem('tripLang')||'zh';
let budgetCurrency=localStorage.getItem('tripBudgetCurrency')||'THB';
let quickDay=localStorage.getItem('tripQuickDay')||'';
const maps={};
const txt=v=>typeof v==='string'?v:(v[lang]||v.zh||'');
const quickI18n={
  zh:{label:'快速定位',day:'选择日期',item:'选择时间段 / 行程'},
  en:{label:'Quick jump',day:'Choose date',item:'Choose time / activity'},
  ja:{label:'クイック移動',day:'日付を選択',item:'時間帯・予定を選択'},
  th:{label:'ไปยังรายการ',day:'เลือกวันที่',item:'เลือกเวลา / กิจกรรม'}
};
const altI18n={
  zh:{hint:'点击卡片 → 右侧地图显示酒店出发路线；该选择也是之后去 Terminal 21 的起点',chosen:'当前选择',map:'地图 / 评价',menu:'菜单 / 官网',two:'2人'},
  en:{hint:'Tap a card → the map shows the route from the hotel; the choice is also the start of the later Terminal 21 route',chosen:'Selected',map:'Map / reviews',menu:'Menu / website',two:'for 2'},
  ja:{hint:'カードをタップ → ホテルからのルートを地図に表示。選択は後のTerminal 21ルートの出発点になります',chosen:'選択中',map:'地図 / 口コミ',menu:'メニュー / 公式',two:'2人'},
  th:{hint:'แตะการ์ด → แผนที่แสดงเส้นทางจากโรงแรม และเป็นจุดเริ่มของเส้นทางไป Terminal 21',chosen:'เลือกอยู่',map:'แผนที่ / รีวิว',menu:'เมนู / เว็บไซต์',two:'2 คน'}
};
const LEGACY_ALT_NAMES={'Bamboo Beach':'bamboo','The Glass House Silver':'glass','Moom Aroi Na Kluea':'moom','Chomtalay':'chomtalay'};
const optionalI18n={zh:'可选 · 有时间再考虑',en:'Optional · if time allows',ja:'任意 · 時間があれば',th:'ตัวเลือก · ถ้ามีเวลา'};
function altSelected(p){
  if(!p.alternatives||!p.alternatives.length)return null;
  let id=localStorage.getItem(p.altKey||'');
  if(id&&LEGACY_ALT_NAMES[id])id=LEGACY_ALT_NAMES[id];
  return p.alternatives.find(a=>a.id===id)||p.alternatives[0];
}
function altsHtml(p){
  if(!p.alternatives||!p.alternatives.length)return '';
  const a=altI18n[lang]||altI18n.zh;
  const sel=altSelected(p);
  const cards=p.alternatives.map(o=>`<div class="alt-card${sel&&sel.id===o.id?' alt-selected':''}" data-alt="${o.id}" data-alt-of="${p.id}" tabindex="0" role="button" aria-pressed="${sel&&sel.id===o.id}">
    <div class="alt-head"><span>${o.name}<span class="alt-tag">${txt(o.tag)}</span><span class="alt-chosen">${a.chosen}</span></span><span class="alt-price">${o.price} / ${a.two}</span></div>
    <div class="alt-reason">${txt(o.reason)}</div>
    <div class="alt-actions"><a href="${o.google}" target="_blank" rel="noopener">${a.map}</a><a href="${o.menu}" target="_blank" rel="noopener">${a.menu}</a></div>
  </div>`).join('');
  return `<div class="alt-list">${cards}</div><div class="alt-hint">${a.hint}</div>`;
}
const flightI18n={
  zh:{
    title:'航班信息',
    me:'我的去程',mev:'8月26日 · FD237 · FUK 08:15 → DMK 11:45',
    friend:'朋友去程',friendv:'8月26日 · NRT 09:15 → DMK 14:00',friendnote:'航空公司 / 航班号待确认',
    back:'两人回程',backv:'8月29日 · FD236 · DMK 23:45 → FUK 07:05（8月30日）',
    meet:'DMK汇合：朋友约14:00抵达后一起前往芭提雅'
  },
  en:{
    title:'Flights',
    me:'My outbound',mev:'Aug 26 · FD237 · FUK 08:15 → DMK 11:45',
    friend:"Friend's outbound",friendv:'Aug 26 · NRT 09:15 → DMK 14:00',friendnote:'Airline / flight number to be confirmed',
    back:'Return · both',backv:'Aug 29 · FD236 · DMK 23:45 → FUK 07:05 (Aug 30)',
    meet:'Meet at DMK after the 14:00 arrival, then travel to Pattaya together'
  },
  ja:{
    title:'フライト情報',
    me:'自分の往路',mev:'8月26日 · FD237 · FUK 08:15 → DMK 11:45',
    friend:'森田の往路',friendv:'8月26日 · NRT 09:15 → DMK 14:00',friendnote:'航空会社 / 便名は確認待ち',
    back:'2人の復路',backv:'8月29日 · FD236 · DMK 23:45 → FUK 07:05（8月30日）',
    meet:'DMKで合流：友人が14:00頃到着後、一緒にパタヤへ移動'
  },
  th:{
    title:'ข้อมูลเที่ยวบิน',
    me:'เที่ยวบินขาไปของฉัน',mev:'26 ส.ค. · FD237 · FUK 08:15 → DMK 11:45',
    friend:'เที่ยวบินขาไปของเพื่อน',friendv:'26 ส.ค. · NRT 09:15 → DMK 14:00',friendnote:'รอยืนยันสายการบิน / หมายเลขเที่ยวบิน',
    back:'เที่ยวบินขากลับของทั้งสองคน',backv:'29 ส.ค. · FD236 · DMK 23:45 → FUK 07:05 (30 ส.ค.)',
    meet:'พบกันที่ DMK หลังเพื่อนถึงประมาณ 14:00 แล้วเดินทางไปพัทยาด้วยกัน'
  }
};
function fmtEst(v){
  const s=txt(v);
  if(!s.includes('฿')||!s.includes('¥'))return s;
  const p=s.split(/\s+\/\s+/);
  const thb=p.find(x=>x.includes('฿'))||'';
  const jpy=p.find(x=>x.includes('¥'))||'';
  const primary=budgetCurrency==='JPY'?jpy:thb;
  const secondary=budgetCurrency==='JPY'?thb:jpy;
  return `${primary}<br><span style="font-size:10px;font-weight:700;color:#71807b">≈ ${secondary}</span>`;
}
function ensureFlights(){
  if(document.getElementById('flightSummary'))return;
  const style=document.createElement('style');
  style.textContent=`
    .flightwrap{margin:16px 0 12px;background:#fff;border:1px solid #dce7e3;border-radius:20px;padding:17px 18px;box-shadow:0 8px 22px rgba(32,50,45,.06)}
    .flighthead{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:11px}
    .flighthead h3{margin:0;font-size:17px;color:#173b37}
    .flightmeet{font-size:11px;color:#0f766e;font-weight:750;background:#edf8f5;border-radius:999px;padding:6px 9px}
    .flightgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
    .flightcard{border:1px solid #e4ebe8;background:#fafcfb;border-radius:13px;padding:11px 12px}
    .flightlabel{font-size:10.5px;color:#6b7874;font-weight:850;margin-bottom:5px}
    .flightvalue{font-size:13px;color:#172624;font-weight:850;line-height:1.45}
    .flightnote{font-size:10.5px;color:#8a6a37;margin-top:5px;line-height:1.35}
    @media(max-width:760px){.flightgrid{grid-template-columns:1fr}.flighthead{align-items:flex-start;flex-direction:column}.flightmeet{border-radius:9px}}
  `;
  document.head.appendChild(style);
  const sec=document.createElement('section');
  sec.className='flightwrap';sec.id='flightSummary';
  sec.innerHTML='<div class="flighthead"><h3 id="flightTitle"></h3><div class="flightmeet" id="flightMeet"></div></div><div class="flightgrid"><div class="flightcard"><div class="flightlabel" id="flightMeLabel"></div><div class="flightvalue" id="flightMeValue"></div></div><div class="flightcard"><div class="flightlabel" id="flightFriendLabel"></div><div class="flightvalue" id="flightFriendValue"></div><div class="flightnote" id="flightFriendNote"></div></div><div class="flightcard"><div class="flightlabel" id="flightBackLabel"></div><div class="flightvalue" id="flightBackValue"></div></div></div>';
  const nav=document.querySelector('.nav');
  nav.parentNode.insertBefore(sec,nav);
}
function renderFlights(){
  ensureFlights();
  const f=flightI18n[lang]||flightI18n.zh;
  flightTitle.textContent=f.title;
  flightMeet.textContent=f.meet;
  flightMeLabel.textContent=f.me;flightMeValue.textContent=f.mev;
  flightFriendLabel.textContent=f.friend;flightFriendValue.textContent=f.friendv;flightFriendNote.textContent=f.friendnote;
  flightBackLabel.textContent=f.back;flightBackValue.textContent=f.backv;
}
function ensureQuickNav(){
  if(document.getElementById('quickJump'))return;
  const style=document.createElement('style');
  style.textContent=`
    .quickjump{display:flex;gap:7px;align-items:center;background:#fff;border:1px solid #dae8e4;border-radius:14px;padding:6px 8px;box-shadow:0 5px 13px rgba(32,50,45,.06);margin-left:auto}
    .quicklabel{font-size:11px;font-weight:850;color:#0f766e;white-space:nowrap;padding:0 3px}
    .quickselect{border:1px solid #d6e2df;background:#f8fbfa;color:#213936;border-radius:9px;padding:7px 28px 7px 9px;font-size:12px;font-weight:700;max-width:260px;min-height:34px}
    .item{scroll-margin-top:145px}
    .item.quickflash{background:#f0faf7;border-radius:13px;box-shadow:0 0 0 7px #f0faf7;transition:.25s}
    @media(max-width:720px){.nav{background:rgba(244,241,234,.94);backdrop-filter:blur(8px);padding:6px;border-radius:14px}.quickjump{width:100%;margin-left:0;display:grid;grid-template-columns:auto 1fr 1.6fr}.quickselect{width:100%;max-width:none;min-width:0}.item{scroll-margin-top:175px}}
    @media(max-width:470px){.quickjump{grid-template-columns:1fr 1.45fr}.quicklabel{grid-column:1/-1}.item{scroll-margin-top:210px}}
  `;
  document.head.appendChild(style);
  const wrap=document.createElement('div');
  wrap.className='quickjump';wrap.id='quickJump';
  wrap.innerHTML='<span class="quicklabel" id="quickLabel"></span><select class="quickselect" id="quickDaySelect"></select><select class="quickselect" id="quickItemSelect" disabled></select>';
  document.querySelector('.nav').appendChild(wrap);
  quickDaySelect.onchange=()=>{
    quickDay=quickDaySelect.value;
    if(quickDay)localStorage.setItem('tripQuickDay',quickDay);else localStorage.removeItem('tripQuickDay');
    fillQuickItems();
    if(quickDay){const sec=document.getElementById('day'+quickDay);if(sec)sec.scrollIntoView({behavior:'smooth',block:'start'});}
  };
  quickItemSelect.onchange=()=>{
    const id=quickItemSelect.value;if(!id)return;
    const el=document.getElementById('trip_'+id);
    if(el){el.scrollIntoView({behavior:'smooth',block:'start'});el.classList.add('quickflash');setTimeout(()=>el.classList.remove('quickflash'),1800);}
  };
}
function fillQuickItems(){
  const q=quickI18n[lang]||quickI18n.zh;
  const sel=document.getElementById('quickItemSelect');if(!sel)return;
  sel.innerHTML=`<option value="">${q.item}</option>`;
  if(!quickDay){sel.disabled=true;return;}
  sel.disabled=false;
  plans.filter(p=>String(p.day)===String(quickDay)).forEach(p=>{
    const o=document.createElement('option');o.value=p.id;o.textContent=`${p.time} · ${txt(p.title)}`;sel.appendChild(o);
  });
}
function renderQuickNav(){
  ensureQuickNav();
  const q=quickI18n[lang]||quickI18n.zh;
  quickLabel.textContent=q.label;
  quickDaySelect.innerHTML=`<option value="">${q.day}</option>`+[26,27,28,29].map(d=>`<option value="${d}">${ui[lang]['nav'+d]}</option>`).join('');
  quickDaySelect.value=quickDay;
  fillQuickItems();
}
function renderStatic(){const t=ui[lang];document.documentElement.lang=lang==='zh'?'zh-CN':lang;const put=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v};[['languageLabel','language'],['currencyLabel','currencyLabel'],['heroTitle','title'],['heroSubtitle','subtitle'],['hotelBadge','hotel'],['rateBadge','rate'],['saveBadge','save'],['nav26','nav26'],['nav27','nav27'],['nav28','nav28'],['nav29','nav29'],['navSummary','navSummary'],['day26Title','d26'],['day26Theme','d26theme'],['day27Title','d27'],['day27Theme','d27theme'],['day28Title','d28'],['day28Theme','d28theme'],['day29Title','d29'],['day29Theme','d29theme'],['summaryTitle','summary'],['resetBtn','reset'],['actualThbLabel','totalThb'],['actualJpyLabel','totalJpy'],['filledLabel','filled'],['footer','footer']].forEach(([id,k])=>put(id,t[k]));[26,27,28,29].forEach(d=>{put('map'+d+'Title',t.map);put('map'+d+'Note',t['map'+d+'note'])});document.querySelectorAll('.langbtn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));document.querySelectorAll('.currencybtn').forEach(b=>b.classList.toggle('active',b.dataset.currency===budgetCurrency))}
function renderTimeline(day){const t=ui[lang],c=document.getElementById('timeline'+day);c.innerHTML='';plans.filter(p=>p.day===day).forEach(p=>{const saved=localStorage.getItem('actual_'+p.id)||'';const actual=p.actual===false?`<div class="moneybox"><div class="moneylabel">${t.actual}</div><div class="estimate">—</div></div>`:`<div class="moneybox"><div class="moneylabel">${t.actual}</div><div class="actualrow"><input inputmode="decimal" type="number" min="0" step="1" value="${saved}" placeholder="${t.actualPh}" data-actual="${p.id}"><span class="currency">THB</span></div><div class="jpycalc" id="jpy_${p.id}">${saved?`≈ ¥${Math.round(Number(saved)*RATE).toLocaleString()}`:''}</div></div>`;const el=document.createElement('div');el.className='item'+(p.optional?' optional-item':'');el.id='trip_'+p.id;const opt=p.optional?`<div class="optional-badge">${optionalI18n[lang]||optionalI18n.zh}</div>`:'';el.innerHTML=`<div class="dot"></div><div class="time">${p.time}</div><div class="event">${opt}<strong>${txt(p.title)}</strong><div class="desc">${txt(p.desc)}</div>${altsHtml(p)}<div class="projectbar"><a class="action mapaction" href="${p.map}" target="_blank" rel="noopener">${t.mapBtn}</a><a class="action webaction" href="${p.web}" target="_blank" rel="noopener">${t.webBtn}</a><div class="moneybox"><div class="moneylabel">${t.estimated}</div><div class="estimate">${fmtEst(p.est)}</div></div>${actual}</div></div>`;c.appendChild(el)});document.querySelectorAll('[data-actual]').forEach(inp=>inp.oninput=e=>{const id=e.target.dataset.actual,v=e.target.value;if(v==='')localStorage.removeItem('actual_'+id);else localStorage.setItem('actual_'+id,v);const calc=document.getElementById('jpy_'+id);if(calc)calc.textContent=v!==''?`≈ ¥${Math.round(Number(v)*RATE).toLocaleString()}`:'';updateSummary()})}
function updateSummary(){let total=0,filled=0,count=0;plans.forEach(p=>{if(p.actual===false)return;count++;const v=localStorage.getItem('actual_'+p.id);if(v!==null&&v!==''){total+=Number(v)||0;filled++}});actualThb.textContent='฿'+Math.round(total).toLocaleString();actualJpy.textContent='¥'+Math.round(total*RATE).toLocaleString();filledCount.textContent=filled+' / '+count}
document.querySelectorAll('.langbtn').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem('tripLang',lang);renderAll()});document.querySelectorAll('.currencybtn').forEach(b=>b.onclick=()=>{budgetCurrency=b.dataset.currency;localStorage.setItem('tripBudgetCurrency',budgetCurrency);renderAll()});resetBtn.onclick=()=>{plans.forEach(p=>localStorage.removeItem('actual_'+p.id));renderAll()};
function makeMap(id,pts,lines){const LF=window.L;/* plans-b.js declares a lexical `const L` translation helper that shadows Leaflet's global — always reach Leaflet via window.L */if(!LF||typeof LF.map!=='function'||!document.getElementById(id))return null;const m=LF.map(id,{scrollWheelZoom:false});LF.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(m);pts.forEach(p=>LF.marker([p[0],p[1]]).addTo(m).bindPopup(p[2]));lines.forEach(x=>LF.polyline(x,{weight:4,opacity:.7,dashArray:'8 8'}).addTo(m));m.fitBounds(pts.map(p=>[p[0],p[1]]),{padding:[25,25]});return m}
function renderAll(){renderStatic();renderFlights();[26,27,28,29].forEach(renderTimeline);renderQuickNav();updateSummary();document.dispatchEvent(new CustomEvent('trip:rendered'))}
window.addEventListener('load',()=>{renderAll();if(window.TRIP_SIDE_MAP)return;maps.a=makeMap('map26',[[13.9126,100.6068,'DMK'],[12.9702,100.8864,'Garden Cliff'],[12.9685,100.8834,'Bamboo Beach'],[12.9496,100.8892,'Terminal 21 Pattaya']],[[[13.9126,100.6068],[12.9702,100.8864],[12.9685,100.8834],[12.9496,100.8892]]]);maps.b=makeMap('map27',[[12.9702,100.8864,'Garden Cliff'],[12.9257,100.8676,'Bali Hai'],[12.9238,100.7838,'Tawaen'],[12.9097,100.7758,'Tien Beach'],[12.9231,100.7916,'Na Baan']],[[[12.9702,100.8864],[12.9257,100.8676],[12.9238,100.7838],[12.9097,100.7758],[12.9231,100.7916]]]);maps.c=makeMap('map28',[[12.9702,100.8864,'Garden Cliff'],[12.8645,100.9167,'Shooting Park'],[12.9129,100.9391,'Elephant Village'],[13.7368,100.5617,'Furama Asoke'],[13.7493,100.5282,'Jim Thompson House']],[[[12.9702,100.8864],[12.8645,100.9167],[12.9129,100.9391],[12.9702,100.8864]],[[12.9702,100.8864],[13.7368,100.5617],[13.7493,100.5282]]]);maps.d=makeMap('map29',[[13.7368,100.5617,'Furama Asoke'],[13.7437,100.4888,'Wat Arun'],[13.7465,100.493,'Wat Pho'],[13.9126,100.6068,'DMK']],[[[13.7368,100.5617],[13.7437,100.4888],[13.7465,100.493],[13.7368,100.5617],[13.9126,100.6068]]])});