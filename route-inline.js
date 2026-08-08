(function(){
  const view=window.TRIP_VIEW||'';
  if(!/^day(26|27|28|29)$/.test(view)) return;
  const day=Number(view.replace('day',''));
  const i18n={
    zh:{route:'路线',place:'地点',open:'Google Maps ↗',hint:'地图可直接查看；需要导航时打开 Google Maps。'},
    en:{route:'Route',place:'Location',open:'Google Maps ↗',hint:'Preview here; open Google Maps for navigation.'},
    ja:{route:'ルート',place:'場所',open:'Google Maps ↗',hint:'ここで地図を確認し、ナビは Google Maps で開けます。'},
    th:{route:'เส้นทาง',place:'สถานที่',open:'Google Maps ↗',hint:'ดูแผนที่ได้ที่นี่ และเปิด Google Maps เมื่อต้องการนำทาง'}
  };
  function currentLang(){return (typeof lang!=='undefined'&&lang)||localStorage.getItem('tripLang')||'zh'}
  function embedSrc(mapUrl){
    try{
      const u=new URL(mapUrl);
      const p=u.searchParams;
      const origin=p.get('origin');
      const dest=p.get('destination');
      if(origin&&dest){
        return {type:'route',src:`https://maps.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(dest)}&output=embed`};
      }
      const q=p.get('query');
      if(q){return {type:'place',src:`https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`};}
    }catch(e){}
    return null;
  }
  function addStyle(){
    if(document.getElementById('inlineRouteStyle'))return;
    const s=document.createElement('style');s.id='inlineRouteStyle';s.textContent=`
      body.day-inline-map .section>.grid{grid-template-columns:1fr!important}
      body.day-inline-map .section>.grid>.card:nth-child(2){display:none!important}
      body.day-inline-map .section>.grid>.card:first-child{max-width:none!important}
      .inline-map-card{margin:13px 0 11px;border:1px solid #dde4e1;border-radius:12px;overflow:hidden;background:#f8faf9}
      .inline-map-head{height:38px;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 11px;border-bottom:1px solid #e4e9e6;background:#f7f9f8}
      .inline-map-kind{font-size:10.5px;font-weight:800;letter-spacing:.04em;color:#57716b;text-transform:uppercase}
      .inline-map-open{text-decoration:none;color:#174f48;font-size:10.5px;font-weight:800;padding:6px 8px;border:1px solid #d5dfdb;border-radius:7px;background:#fff;white-space:nowrap}
      .inline-map-frame{display:block;width:100%;height:220px;border:0;background:#edf1ef}
      .inline-map-card.place-map .inline-map-frame{height:175px}
      .inline-map-hint{padding:7px 10px;font-size:9.5px;line-height:1.45;color:#8a9490;background:#fff}
      .item .projectbar .mapaction{display:none!important}
      .item .projectbar{grid-template-columns:auto minmax(120px,1fr) minmax(120px,1fr)!important}
      @media(max-width:720px){
        .inline-map-frame{height:205px}.inline-map-card.place-map .inline-map-frame{height:160px}
        .inline-map-card{margin:11px 0 9px;border-radius:10px}
        .inline-map-head{height:36px;padding:0 9px}
        .item .projectbar{grid-template-columns:1fr 1fr!important}
        .item .projectbar .webaction{grid-column:1/-1!important}
      }
    `;document.head.appendChild(s);
  }
  function renderMaps(){
    if(typeof plans==='undefined')return;
    addStyle();document.body.classList.add('day-inline-map');
    const l=currentLang(),t=i18n[l]||i18n.zh;
    plans.filter(p=>p.day===day).forEach(p=>{
      const item=document.getElementById('trip_'+p.id);if(!item)return;
      const event=item.querySelector('.event');if(!event)return;
      let card=event.querySelector('.inline-map-card');
      const e=embedSrc(p.map);if(!e)return;
      if(!card){
        card=document.createElement('div');card.className='inline-map-card '+(e.type==='place'?'place-map':'route-map');
        const bar=event.querySelector('.projectbar');event.insertBefore(card,bar||null);
      }
      card.innerHTML=`<div class="inline-map-head"><span class="inline-map-kind">${e.type==='route'?t.route:t.place}</span><a class="inline-map-open" href="${p.map}" target="_blank" rel="noopener">${t.open}</a></div><iframe class="inline-map-frame" src="${e.src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen title="${e.type==='route'?t.route:t.place}"></iframe><div class="inline-map-hint">${t.hint}</div>`;
    });
  }
  window.addEventListener('load',()=>setTimeout(renderMaps,620));
  document.querySelectorAll('.langbtn').forEach(b=>b.addEventListener('click',()=>setTimeout(renderMaps,120)));
})();
