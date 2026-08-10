(function(){
  if(window.TRIP_VIEW!=='day26')return;

  const HOTEL='Garden Cliff Resort & Spa Pattaya';
  const TERMINAL='Terminal 21 Pattaya';
  const restaurants=[
    {name:'Bamboo Beach',dest:'Bamboo Beach Pattaya',mode:'walking'},
    {name:'The Glass House Silver',dest:'The Glass House Silver Pattaya',mode:'driving'},
    {name:'Moom Aroi Na Kluea',dest:'Moom Aroi Na Kluea Pattaya',mode:'driving'},
    {name:'Chomtalay',dest:'Chom Talay Restaurant Garden Cliff Pattaya',mode:'walking'}
  ];

  function planById(id){
    try{if(typeof plans26!=='undefined'){const p=plans26.find(x=>x.id===id);if(p)return p}}catch(e){}
    try{if(typeof plans!=='undefined'){const p=plans.find(x=>x.id===id);if(p)return p}}catch(e){}
    return null;
  }
  function currentLang(){try{return typeof lang!=='undefined'?lang:(localStorage.getItem('tripLang')||'zh')}catch(e){return 'zh'}}
  function text(v){const l=currentLang();return typeof v==='string'?v:(v&&((v[l])||v.zh))||''}
  function routeUrl(origin,dest,mode){return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(dest)}&travelmode=${mode||'driving'}`}
  function routeEmbed(origin,dest,mode){const walk=mode==='walking'?'&dirflg=w':'';return `https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(dest)}${walk}&output=embed`}
  function mapEmbed(mapUrl){
    try{
      const u=new URL(mapUrl,location.href),p=u.searchParams;
      const origin=p.get('origin'),dest=p.get('destination'),mode=p.get('travelmode')||'driving';
      if(origin&&dest)return {src:routeEmbed(origin,dest,mode),kind:mode==='walking'?'步行路线':'路线',open:mapUrl};
      const q=p.get('query');
      if(q)return {src:`https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`,kind:'地点',open:mapUrl};
    }catch(e){}
    return null;
  }
  function ensureStyle(){
    if(document.getElementById('d26MapFixStyle'))return;
    const s=document.createElement('style');s.id='d26MapFixStyle';s.textContent=`
      body.d26-map-restored #day26>.grid{grid-template-columns:minmax(0,1.18fr) minmax(330px,.82fr)!important;align-items:start!important;gap:16px!important}
      body.d26-map-restored #day26>.grid>.card:nth-child(2){display:block!important;position:sticky!important;top:92px!important;padding:0!important;overflow:hidden!important;min-height:0!important}
      .d26-map-shell{background:#fff}.d26-map-head{padding:16px 17px 12px;border-bottom:1px solid #e6ebe8}.d26-map-kicker{font-size:10px;font-weight:800;letter-spacing:.08em;color:#7b8984;margin-bottom:5px}.d26-map-title{font-size:16px;font-weight:760;line-height:1.45;color:#1c2f2b;margin:0}.d26-map-sub{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:10px}.d26-map-kind{font-size:10.5px;font-weight:760;color:#53716b;background:#f0f5f3;border:1px solid #dce7e3;border-radius:7px;padding:5px 7px}.d26-map-open{text-decoration:none;color:#fff;background:#173f3a;border:1px solid #173f3a;border-radius:8px;padding:7px 9px;font-size:10.5px;font-weight:780;white-space:nowrap}.d26-map-frame{display:block;width:100%;height:390px;border:0;background:#edf1ef}.d26-map-hint{padding:9px 13px 11px;font-size:10px;line-height:1.55;color:#87928e;background:#fafbf9;border-top:1px solid #edf0ee}.d26-dinner-row.map-selected{border-color:#79aaa0!important;background:#eef7f4!important;box-shadow:0 0 0 2px rgba(121,170,160,.12)!important}
      @media(max-width:900px){body.d26-map-restored #day26>.grid{grid-template-columns:1fr!important}body.d26-map-restored #day26>.grid>.card:nth-child(2){position:relative!important;top:auto!important;margin-top:12px!important}.d26-map-frame{height:300px}}
    `;document.head.appendChild(s);
  }
  function ensureShell(){
    const section=document.getElementById('day26');if(!section)return null;
    const grid=section.querySelector('.grid');if(!grid)return null;
    let right=grid.querySelector(':scope>.card:nth-child(2)');
    if(!right){right=document.createElement('div');right.className='card';grid.appendChild(right)}
    ensureStyle();document.body.classList.add('d26-map-restored');
    if(!document.getElementById('sideMapFrame')){
      right.innerHTML='<div class="d26-map-shell"><div class="d26-map-head"><div class="d26-map-kicker" id="sideMapKicker">路线地图</div><h3 class="d26-map-title" id="sideMapTitle">选择左侧行程</h3><div class="d26-map-sub"><span class="d26-map-kind" id="sideMapKind">路线</span><a class="d26-map-open" id="sideMapOpen" target="_blank" rel="noopener">在 Google Maps 打开 ↗</a></div></div><iframe class="d26-map-frame" id="sideMapFrame" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><div class="d26-map-hint" id="sideMapHint">点击左侧行程或晚餐备选，右侧显示路线和距离。</div></div>';
    }
    return right;
  }
  function paint(title,kind,src,openUrl,kicker,hint){
    if(!ensureShell())return;
    const t=document.getElementById('sideMapTitle'),k=document.getElementById('sideMapKicker'),kd=document.getElementById('sideMapKind'),o=document.getElementById('sideMapOpen'),f=document.getElementById('sideMapFrame'),h=document.getElementById('sideMapHint');
    if(k)k.textContent=kicker||'当前行程';if(t)t.textContent=title;if(kd)kd.textContent=kind||'路线';if(o){o.href=openUrl||'#';o.textContent='在 Google Maps 打开 ↗'};if(h)h.textContent=hint||'右侧地图可直接查看路线、距离和预计时间。';if(f&&f.src!==src)f.src=src;
  }
  function showRoute(title,origin,dest,mode,kicker){paint(title,mode==='walking'?'步行路线':'驾车路线',routeEmbed(origin,dest,mode),routeUrl(origin,dest,mode),kicker,'右侧地图可直接查看路线、距离和预计时间。')}
  function showPlan(p){
    if(!p)return;
    if(p.id==='d26_terminal21'){
      const chosen=restaurants.find(x=>x.name===localStorage.getItem('d26DinnerChoice'))||restaurants[0];
      showRoute(`${chosen.name} → Terminal 21 Pattaya`,chosen.dest,TERMINAL,'driving','晚餐后去购物');return;
    }
    if(p.id==='d26_7'){
      showRoute('Terminal 21 Pattaya → Garden Cliff',TERMINAL,HOTEL,'driving','返回酒店');return;
    }
    const e=mapEmbed(p.map);if(!e)return;
    paint(`${p.time} · ${text(p.title)}`,e.kind,e.src,e.open,'当前行程','点击左侧其他行程，右侧地图会同步切换。');
  }
  function markDinner(row){document.querySelectorAll('.d26-dinner-row').forEach(x=>x.classList.toggle('map-selected',x===row))}
  function selectDinner(row){
    const rows=[...document.querySelectorAll('.d26-dinner-row')],idx=rows.indexOf(row),o=restaurants[idx]||restaurants[0];
    localStorage.setItem('d26DinnerChoice',o.name);markDinner(row);showRoute(`Garden Cliff → ${o.name}`,HOTEL,o.dest,o.mode,'晚餐备选');
  }
  function handleClick(e){
    const row=e.target.closest('.d26-dinner-row');
    if(row&&!e.target.closest('a,input,button,select')){selectDinner(row);return}
    const item=e.target.closest('#timeline26 .item');
    if(!item||e.target.closest('a,input,button,select'))return;
    const id=item.id.replace(/^trip_/,'');showPlan(planById(id));
  }
  document.addEventListener('click',handleClick);
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('d26-dinner-row')){e.preventDefault();selectDinner(e.target)}});

  function init(attempt){
    ensureShell();
    const saved=localStorage.getItem('tripMapItem26');
    const p=planById(saved)||planById('d26_3')||planById('d26_1');if(p)showPlan(p);
    if((!document.getElementById('sideMapFrame')||!document.getElementById('trip_d26_terminal21'))&&(attempt||0)<12)setTimeout(()=>init((attempt||0)+1),250);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>init(0),150));else setTimeout(()=>init(0),150);
  window.addEventListener('load',()=>setTimeout(()=>init(0),850));
})();
