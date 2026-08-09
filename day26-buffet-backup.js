(function(){
  const buffets=[
    {
      name:'Big Whale Buffet Seafood',
      tag:'海鲜自助备选 · 种类丰富',
      note:'地址：240/29 Jomtien Sai 2。主打虾、蟹、贝类、鱿鱼、鱼类等海鲜烧烤，同时还有火锅、熟食、水果和甜品，更符合“海鲜种类多、吃到饱”的需求。缺点是离 Garden Cliff 较远，正常车程先按约30分钟，傍晚堵车预留35–45分钟；26号如果临时选它，就需要压缩散步、Naklua市场或按摩前的缓冲。',
      price:'两人先按约 ฿800–1,200（当天再确认最新价格）',
      google:'https://www.google.com/maps/search/?api=1&query=Big+Whale+Buffet+Seafood+240%2F29+Jomtien+Sai+2+Pattaya',
      site:'https://www.google.com/maps/search/?api=1&query=Big+Whale+Buffet+Seafood+240%2F29+Jomtien+Sai+2+Pattaya'
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