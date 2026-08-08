(function(){
  const view=window.TRIP_VIEW||'';
  if(!/^day(26|27|28|29)$/.test(view)) return;
  const day=Number(view.replace('day',''));
  const i18n={
    zh:{map:'路线地图',route:'路线',place:'地点',open:'在 Google Maps 打开 ↗',hint:'点击左侧任一行程，右侧地图会切换到对应路线或地点。',select:'当前行程'},
    en:{map:'Route map',route:'Route',place:'Location',open:'Open in Google Maps ↗',hint:'Select any itinerary item on the left to update this map.',select:'Current item'},
    ja:{map:'ルートマップ',route:'ルート',place:'場所',open:'Google Mapsで開く ↗',hint:'左の予定を選ぶと、右の地図がそのルート／場所に切り替わります。',select:'現在の予定'},
    th:{map:'แผนที่เส้นทาง',route:'เส้นทาง',place:'สถานที่',open:'เปิดใน Google Maps ↗',hint:'เลือกกำหนดการด้านซ้ายเพื่อเปลี่ยนแผนที่ด้านขวา',select:'รายการปัจจุบัน'}
  };
  function currentLang(){return (typeof lang!=='undefined'&&lang)||localStorage.getItem('tripLang')||'zh'}
  function text(v){const l=currentLang();return typeof v==='string'?v:(v&&((v[l])||v.zh))||''}
  function embedSrc(mapUrl){
    try{
      const u=new URL(mapUrl);
      const p=u.searchParams;
      const origin=p.get('origin');
      const dest=p.get('destination');
      if(origin&&dest){return {type:'route',src:`https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(dest)}&output=embed`};}
      const q=p.get('query');
      if(q){return {type:'place',src:`https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`};}
    }catch(e){}
    return null;
  }
  function addStyle(){
    if(document.getElementById('timelineSideMapStyle'))return;
    const s=document.createElement('style');s.id='timelineSideMapStyle';s.textContent=`
      body.day-side-map .section>.grid{grid-template-columns:minmax(0,1.18fr) minmax(330px,.82fr)!important;align-items:start!important;gap:16px!important}
      body.day-side-map .section>.grid>.card:nth-child(2){display:block!important;position:sticky!important;top:92px!important;padding:0!important;overflow:hidden!important;min-height:0!important}
      body.day-side-map .section>.grid>.card:first-child{min-width:0!important}
      .side-map-shell{background:#fff}
      .side-map-head{padding:16px 17px 12px;border-bottom:1px solid #e6ebe8}
      .side-map-kicker{font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#7b8984;margin-bottom:5px}
      .side-map-title{font-size:16px;font-weight:760;line-height:1.45;color:#1c2f2b;margin:0}
      .side-map-sub{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:10px}
      .side-map-kind{font-size:10.5px;font-weight:760;color:#53716b;background:#f0f5f3;border:1px solid #dce7e3;border-radius:7px;padding:5px 7px}
      .side-map-open{text-decoration:none;color:#fff;background:#173f3a;border:1px solid #173f3a;border-radius:8px;padding:7px 9px;font-size:10.5px;font-weight:780;white-space:nowrap}
      .side-map-frame{display:block;width:100%;height:390px;border:0;background:#edf1ef}
      .side-map-hint{padding:9px 13px 11px;font-size:10px;line-height:1.55;color:#87928e;background:#fafbf9;border-top:1px solid #edf0ee}
      .item{cursor:pointer;border-radius:10px;transition:background .16s ease,box-shadow .16s ease}
      .item.side-map-current{background:#f3f7f5;box-shadow:0 0 0 7px #f3f7f5}
      .item.side-map-current .dot{background:#173f3a!important;border-color:#d9e8e3!important}
      .item .inline-map-card{display:none!important}
      .item .projectbar .mapaction{display:none!important}
      .item .projectbar{grid-template-columns:auto minmax(115px,1fr) minmax(115px,1fr)!important}
      @media(max-width:900px){
        body.day-side-map .section>.grid{grid-template-columns:1fr!important}
        body.day-side-map .section>.grid>.card:nth-child(2){position:relative!important;top:auto!important;order:-1!important}
        .side-map-frame{height:280px}
      }
      @media(max-width:720px){
        body.day-side-map .section>.grid>.card:nth-child(2){margin-bottom:2px!important}
        .side-map-head{padding:12px 13px 10px}.side-map-title{font-size:14px}.side-map-frame{height:230px}
        .side-map-hint{display:none}.item.side-map-current{box-shadow:none;background:#f5f8f7;padding:5px 3px}
        .item .projectbar{grid-template-columns:1fr 1fr!important}.item .projectbar .webaction{grid-column:1/-1!important}
      }
    `;document.head.appendChild(s);
  }
  function setup(){
    if(typeof plans==='undefined')return;
    const section=document.getElementById('day'+day);if(!section)return;
    addStyle();document.body.classList.add('day-side-map');
    const right=section.querySelector('.grid>.card:nth-child(2)');if(!right)return;
    right.innerHTML='<div class="side-map-shell"><div class="side-map-head"><div class="side-map-kicker" id="sideMapKicker"></div><h3 class="side-map-title" id="sideMapTitle"></h3><div class="side-map-sub"><span class="side-map-kind" id="sideMapKind"></span><a class="side-map-open" id="sideMapOpen" target="_blank" rel="noopener"></a></div></div><iframe class="side-map-frame" id="sideMapFrame" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><div class="side-map-hint" id="sideMapHint"></div></div>';
    const dayPlans=plans.filter(p=>p.day===day&&embedSrc(p.map));
    function selectPlan(p,scrollOnly){
      if(!p)return;const e=embedSrc(p.map);if(!e)return;
      const l=currentLang(),t=i18n[l]||i18n.zh;
      document.getElementById('sideMapKicker').textContent=t.select;
      document.getElementById('sideMapTitle').textContent=`${p.time} · ${text(p.title)}`;
      document.getElementById('sideMapKind').textContent=e.type==='route'?t.route:t.place;
      const open=document.getElementById('sideMapOpen');open.textContent=t.open;open.href=p.map;
      document.getElementById('sideMapHint').textContent=t.hint;
      const frame=document.getElementById('sideMapFrame');if(frame.src!==e.src)frame.src=e.src;
      document.querySelectorAll('#timeline'+day+' .item').forEach(x=>x.classList.toggle('side-map-current',x.id==='trip_'+p.id));
      if(!scrollOnly) localStorage.setItem('tripMapItem'+day,p.id);
    }
    dayPlans.forEach(p=>{const item=document.getElementById('trip_'+p.id);if(item)item.addEventListener('click',e=>{if(e.target.closest('a,input,button,select'))return;selectPlan(p);});});
    const saved=localStorage.getItem('tripMapItem'+day);selectPlan(dayPlans.find(p=>p.id===saved)||dayPlans[0]);
    if('IntersectionObserver' in window){
      const obs=new IntersectionObserver(entries=>{
        const hit=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if(!hit)return;const p=dayPlans.find(x=>'trip_'+x.id===hit.target.id);if(p)selectPlan(p,true);
      },{rootMargin:'-23% 0px -58% 0px',threshold:[0,.1,.25,.5]});
      dayPlans.forEach(p=>{const item=document.getElementById('trip_'+p.id);if(item)obs.observe(item);});
    }
  }
  window.addEventListener('load',()=>setTimeout(setup,680));
  document.querySelectorAll('.langbtn').forEach(b=>b.addEventListener('click',()=>setTimeout(setup,180)));
})();
