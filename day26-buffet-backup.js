(function(){
  const buffets=[
    {
      name:'Amporn Seafood Buffet',
      tag:'较近 · 实用备选',
      note:'Pattaya 3rd Road一带，当前营业信息为每天16:00–23:00。价格约฿400–600/人，两人约฿800–1,200。离Garden Cliff比Jomtien近得多，但当前Google综合评分约3.8，所以定位为“想吃自助、又不想跑太远”的实用Plan B。',
      price:'两人约 ฿800–1,200',
      google:'https://www.google.com/maps/search/?api=1&query=Amporn+Seafood+Buffet+Pattaya',
      site:'https://www.facebook.com/search/top?q=Amporn%20Seafood%20Buffet%20Pattaya'
    },
    {
      name:'Jomtien Talay Pao Pattaya',
      tag:'更远 · 海鲜自助备选',
      note:'Jomtien / Chaiyaphruek一带。2026年4月最新游客记录为฿499/人，主打虾、蟹、贝类等自助烧烤；两人约฿998，另可能有防浪费押金。评价整体比Amporn更好，但从Garden Cliff过去明显更远，26号若选它就要压缩日落散步/市场时间。',
      price:'两人约 ฿998（到店再确认）',
      google:'https://www.google.com/maps/search/?api=1&query=Jomtien+Talay+Pao+Pattaya',
      site:'https://www.tripadvisor.com/Restaurant_Review-g293919-d20323599-Reviews-Jomtien_Talay_Pao-Pattaya_Chonburi_Province.html'
    }
  ];
  function style(){if(document.getElementById('d26BuffetStyle'))return;const s=document.createElement('style');s.id='d26BuffetStyle';s.textContent='.d26-buffet-box{margin-top:11px;border-top:1px dashed #cbdcd7;padding-top:10px}.d26-buffet-title{font-size:11px;font-weight:900;color:#173f3a;margin-bottom:7px}.d26-buffet-row{border:1px solid #dfe8e5;border-radius:10px;padding:8px 9px;background:#fff;margin-top:7px}.d26-buffet-head{display:flex;justify-content:space-between;gap:10px;align-items:baseline}.d26-buffet-name{font-size:11px;font-weight:850;color:#203a36}.d26-buffet-tag{font-size:9px;font-weight:850;padding:2px 6px;border-radius:999px;background:#edf4f1;color:#315b54}.d26-buffet-note,.d26-buffet-price{font-size:10px;color:#697873;margin-top:4px;line-height:1.5}.d26-buffet-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}.d26-buffet-actions a{display:inline-block;text-decoration:none;border:1px solid #cbdcd7;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:800;color:#0f625a;background:#fff}';document.head.appendChild(s)}
  function patch(){
    const event=document.querySelector('#trip_d26_5 .event');if(!event)return;
    style();const old=document.getElementById('d26BuffetBackup');if(old)old.remove();
    const box=document.createElement('div');box.id='d26BuffetBackup';box.className='d26-buffet-box';
    box.innerHTML='<div class="d26-buffet-title">海鲜自助特别备选｜主行程仍按原计划</div>';
    buffets.forEach(o=>{const r=document.createElement('div');r.className='d26-buffet-row';r.innerHTML=`<div class="d26-buffet-head"><span class="d26-buffet-name">${o.name}</span><span class="d26-buffet-tag">${o.tag}</span></div><div class="d26-buffet-note">${o.note}</div><div class="d26-buffet-price">${o.price}</div><div class="d26-buffet-actions"><a href="${o.google}" target="_blank" rel="noopener">Google Maps · 评价/照片</a><a href="${o.site}" target="_blank" rel="noopener">详情 / 价格参考</a></div>`;box.appendChild(r)});
    const links=document.getElementById('d26DinnerLinks');if(links)links.after(box);else event.appendChild(box);
  }
  window.addEventListener('load',()=>setTimeout(patch,1050));
  document.addEventListener('click',e=>{if(e.target.closest('.langbtn,.currencybtn'))setTimeout(patch,220)});
})();