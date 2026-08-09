(function(){
  const buffets=[
    {
      name:'Big Fish Seafood Market & Grill · Siam@Siam Pattaya',
      tag:'第一备选 · 评价更稳',
      note:'North Pattaya一带，比Jomtien顺路得多。当前公开评价约4.7/5；周三可用的海鲜自助时段约17:30–21:30，常见生蚝、螃蟹、虾、当日海鲜和现场烹饪档口。适合26号临时特别想吃海鲜自助时替代原来的日落餐厅。',
      price:'两人先按约 ฿1,600–2,000',
      google:'https://www.google.com/maps/search/?api=1&query=Big+Fish+Seafood+Market+and+Grill+Siam%40Siam+Pattaya',
      site:'https://www.bigfishpattaya.com/'
    },
    {
      name:'Edge Restaurant · Hilton Pattaya',
      tag:'品质型备选 · 景观更好',
      note:'Hilton Pattaya 14楼，海湾景观和环境更好，当前公开评价约4.6/5。适合当天更在意品质、空调和用餐环境时选择；预算会明显高于Big Fish，而且从Garden Cliff往Central Pattaya方向移动后，再回Naklua市场和酒店会更花时间。',
      price:'价格较高｜当天看官方自助报价',
      google:'https://www.google.com/maps/search/?api=1&query=Edge+Restaurant+Hilton+Pattaya',
      site:'https://www.hilton.com/en/hotels/bkkhphi-hilton-pattaya/dining/'
    },
    {
      name:'Jomtien Talay Pao Pattaya',
      tag:'性价比 · 远距离备选',
      note:'Jomtien / Chaiyaphruek一带。当前公开评价约4.3/5；2026年4月游客记录约฿499/人，主打虾、蟹、贝类等自助烧烤。价格最有吸引力，但从Garden Cliff过去明显更远，26号若选它就要压缩散步、Naklua市场或按摩前的缓冲。',
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
    buffets.forEach(o=>{const r=document.createElement('div');r.className='d26-buffet-row';r.innerHTML=`<div class="d26-buffet-head"><span class="d26-buffet-name">${o.name}</span><span class="d26-buffet-tag">${o.tag}</span></div><div class="d26-buffet-note">${o.note}</div><div class="d26-buffet-price">${o.price}</div><div class="d26-buffet-actions"><a href="${o.google}" target="_blank" rel="noopener">Google Maps · 评价/照片</a><a href="${o.site}" target="_blank" rel="noopener">官网 / 价格参考</a></div>`;box.appendChild(r)});
    const links=document.getElementById('d26DinnerLinks');if(links)links.after(box);else event.appendChild(box);
  }
  window.addEventListener('load',()=>setTimeout(patch,1050));
  document.addEventListener('click',e=>{if(e.target.closest('.langbtn,.currencybtn'))setTimeout(patch,220)});
})();