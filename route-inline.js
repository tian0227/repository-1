(function(){
  const view=window.TRIP_VIEW||'';
  if(!/^day(26|27|28|29)$/.test(view)) return;
  const day=Number(view.replace('day',''));
  const i18n={
    zh:{map:'路线地图',route:'路线',place:'地点',open:'在 Google Maps 打开 ↗',hint:'点击左侧任一行程，右侧地图会切换到对应路线或地点。',select:'当前行程',mobileMap:'地图',close:'关闭地图'},
    en:{map:'Route map',route:'Route',place:'Location',open:'Open in Google Maps ↗',hint:'Select any itinerary item on the left to update this map.',select:'Current item',mobileMap:'Map',close:'Close map'},
    ja:{map:'ルートマップ',route:'ルート',place:'場所',open:'Google Mapsで開く ↗',hint:'左の予定を選ぶと、右の地図がそのルート／場所に切り替わります。',select:'現在の予定',mobileMap:'地図',close:'地図を閉じる'},
    th:{map:'แผนที่เส้นทาง',route:'เส้นทาง',place:'สถานที่',open:'เปิดใน Google Maps ↗',hint:'เลือกกำหนดการด้านซ้ายเพื่อเปลี่ยนแผนที่ด้านขวา',select:'รายการปัจจุบัน',mobileMap:'แผนที่',close:'ปิดแผนที่'}
  };
  function currentLang(){return (typeof lang!=='undefined'&&lang)||localStorage.getItem('tripLang')||'zh'}
  function text(v){const l=currentLang();return typeof v==='string'?v:(v&&((v[l])||v.zh))||''}
  function isMobile(){return window.matchMedia('(max-width:900px)').matches}
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
      .side-map-head{padding:16px 17px 12px;border-bottom:1px solid #e6ebe8;position:relative}
      .side-map-kicker{font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#7b8984;margin-bottom:5px}
      .side-map-title{font-size:16px;font-weight:760;line-height:1.45;color:#1c2f2b;margin:0}
      .side-map-sub{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:10px}
      .side-map-kind{font-size:10.5px;font-weight:760;color:#53716b;background:#f0f5f3;border:1px solid #dce7e3;border-radius:7px;padding:5px 7px}
      .side-map-open{text-decoration:none;color:#fff;background:#173f3a;border:1px solid #173f3a;border-radius:8px;padding:7px 9px;font-size:10.5px;font-weight:780;white-space:nowrap}
      .side-map-close{display:none;border:0;background:#eef3f1;color:#34504a;width:32px;height:32px;border-radius:50%;font-size:20px;line-height:1;cursor:pointer;position:absolute;right:12px;top:12px}
      .side-map-frame{display:block;width:100%;height:390px;border:0;background:#edf1ef}
      .side-map-hint{padding:9px 13px 11px;font-size:10px;line-height:1.55;color:#87928e;background:#fafbf9;border-top:1px solid #edf0ee}
      .item{cursor:pointer;border-radius:10px;transition:background .16s ease,box-shadow .16s ease}
      .item.side-map-current{background:#f3f7f5;box-shadow:0 0 0 7px #f3f7f5}
      .item.side-map-current .dot{background:#173f3a!important;border-color:#d9e8e3!important}
      .item .inline-map-card{display:none!important}
      .item .projectbar .mapaction{display:none!important}
      .item .projectbar{grid-template-columns:auto minmax(115px,1fr) minmax(115px,1fr)!important}
      .mobile-map-fab,.mobile-map-backdrop{display:none}
      @media(max-width:900px){
        body.day-side-map .section>.grid{grid-template-columns:1fr!important;display:block!important}
        body.day-side-map .section>.grid>.card:first-child{width:100%!important}
        body.day-side-map .section>.grid>.card:nth-child(2){position:fixed!important;left:8px!important;right:8px!important;bottom:0!important;top:auto!important;width:auto!important;max-height:84vh!important;z-index:1002!important;margin:0!important;border-radius:18px 18px 0 0!important;box-shadow:0 -14px 42px rgba(17,39,34,.22)!important;transform:translateY(110%);transition:transform .24s ease;visibility:hidden}
        body.mobile-map-open .section>.grid>.card:nth-child(2){transform:translateY(0);visibility:visible}
        body.mobile-map-open{overflow:hidden}
        .mobile-map-fab{display:inline-flex;align-items:center;gap:7px;position:fixed;right:14px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:998;border:0;border-radius:999px;padding:11px 15px;background:#173f3a;color:#fff;font-size:13px;font-weight:850;box-shadow:0 7px 22px rgba(23,63,58,.28);cursor:pointer}
        .mobile-map-fab:before{content:'⌖';font-size:16px;line-height:1}
        .mobile-map-backdrop{position:fixed;inset:0;background:rgba(17,31,28,.38);z-index:1001}
        body.mobile-map-open .mobile-map-backdrop{display:block}
        .side-map-close{display:block}
        .side-map-head{padding:15px 54px 12px 15px}
        .side-map-title{font-size:14px}
        .side-map-frame{height:min(52vh,360px)}
        .side-map-hint{display:none}
        .item.side-map-current{box-shadow:none;background:#f5f8f7;padding:5px 3px}
      }
      @media(max-width:720px){
        .item .projectbar{grid-template-columns:1fr 1fr!important}.item .projectbar .webaction{grid-column:1/-1!important}
        .side-map-frame{height:min(48vh,320px)}
      }
    `;document.head.appendChild(s);
  }
  function setup(){
    if(typeof plans==='undefined')return;
    const section=document.getElementById('day'+day);if(!section)return;
    addStyle();document.body.classList.add('day-side-map');
    const right=section.querySelector('.grid>.card:nth-child(2)');if(!right)return;
    const l=currentLang(),t=i18n[l]||i18n.zh;
    right.innerHTML='<div class="side-map-shell"><div class="side-map-head"><button class="side-map-close" id="sideMapClose" type="button" aria-label=""></button><div class="side-map-kicker" id="sideMapKicker"></div><h3 class="side-map-title" id="sideMapTitle"></h3><div class="side-map-sub"><span class="side-map-kind" id="sideMapKind"></span><a class="side-map-open" id="sideMapOpen" target="_blank" rel="noopener"></a></div></div><iframe class="side-map-frame" id="sideMapFrame" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><div class="side-map-hint" id="sideMapHint"></div></div>';
    let fab=document.getElementById('mobileMapFab');
    if(!fab){fab=document.createElement('button');fab.id='mobileMapFab';fab.className='mobile-map-fab';fab.type='button';document.body.appendChild(fab)}
    let backdrop=document.getElementById('mobileMapBackdrop');
    if(!backdrop){backdrop=document.createElement('div');backdrop.id='mobileMapBackdrop';backdrop.className='mobile-map-backdrop';document.body.appendChild(backdrop)}
    function refreshMobileLabels(){const ll=currentLang(),tt=i18n[ll]||i18n.zh;fab.textContent=tt.mobileMap;const close=document.getElementById('sideMapClose');close.setAttribute('aria-label',tt.close);close.title=tt.close;close.textContent='×'}
    function openMobileMap(){if(isMobile())document.body.classList.add('mobile-map-open')}
    function closeMobileMap(){document.body.classList.remove('mobile-map-open')}
    fab.onclick=openMobileMap;backdrop.onclick=closeMobileMap;document.getElementById('sideMapClose').onclick=closeMobileMap;
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobileMap()});
    window.addEventListener('resize',()=>{if(!isMobile())closeMobileMap()});
    refreshMobileLabels();
    const dayPlans=plans.filter(p=>p.day===day&&embedSrc(p.map));
    function selectPlan(p,scrollOnly){
      if(!p)return;const e=embedSrc(p.map);if(!e)return;
      const ll=currentLang(),tt=i18n[ll]||i18n.zh;
      document.getElementById('sideMapKicker').textContent=tt.select;
      document.getElementById('sideMapTitle').textContent=`${p.time} · ${text(p.title)}`;
      document.getElementById('sideMapKind').textContent=e.type==='route'?tt.route:tt.place;
      const open=document.getElementById('sideMapOpen');open.textContent=tt.open;open.href=p.map;
      document.getElementById('sideMapHint').textContent=tt.hint;
      const frame=document.getElementById('sideMapFrame');if(frame.src!==e.src)frame.src=e.src;
      document.querySelectorAll('#timeline'+day+' .item').forEach(x=>x.classList.toggle('side-map-current',x.id==='trip_'+p.id));
      refreshMobileLabels();
      if(!scrollOnly) localStorage.setItem('tripMapItem'+day,p.id);
    }
    dayPlans.forEach(p=>{const item=document.getElementById('trip_'+p.id);if(item)item.addEventListener('click',e=>{if(e.target.closest('a,input,button,select'))return;selectPlan(p);if(isMobile())openMobileMap();});});
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
