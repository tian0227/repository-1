(function(){
  if(typeof plans26==='undefined')return;
  const p=id=>plans26.find(x=>x.id===id);

  const snack=p('d26_snack');
  if(snack){
    snack.time='12:20–13:40';
    snack.title={zh:'DMK休息 + 买两人路上吃的外带',en:'Rest at DMK + buy takeaway for the car',ja:'DMKで休憩 + 車内用テイクアウト購入',th:'พักที่ DMK + ซื้ออาหารกลับไปกินบนรถ'};
    snack.desc={zh:'机场不安排正式午餐。你先休息，并提前买两个人路上吃的外带和饮料；选择方便在车上吃、气味不重的食物。森田到达后尽快汇合出发。',en:'Skip a sit-down airport lunch. Rest and buy takeaway food and drinks for both of you to eat in the car; choose tidy, low-odor food. Leave as soon as Morita clears arrivals.',ja:'空港では正式な昼食を取らず、休憩しながら2人分の車内用テイクアウトと飲み物を購入。車内で食べやすく匂いの強くない物を選び、森田到着後できるだけ早く出発。',th:'ไม่กินมื้อกลางวันแบบนั่งที่สนามบิน พักและซื้ออาหารกลับพร้อมเครื่องดื่มสำหรับ 2 คนไว้กินบนรถ เลือกอาหารที่กินง่ายและกลิ่นไม่แรง แล้วออกเดินทางทันทีหลัง Morita ผ่าน ตม.'};
    snack.est='฿300–600 / ¥1,440–2,880';
  }
  const wait=p('d26_wait');if(wait){wait.time='13:40–14:00';wait.desc={zh:'到到达区附近等森田，预约车保持联系。',en:'Wait near arrivals for Morita and stay in contact with the booked driver.',ja:'到着ロビー付近で森田を待ち、予約車と連絡を取る。',th:'รอ Morita ใกล้โถงผู้โดยสารขาเข้าและติดต่อรถที่จองไว้'};}
  const meet=p('d26_2');if(meet){meet.time='14:00–14:35（目标）';meet.desc={zh:'森田14:00落地后尽快完成入境、取行李并汇合。目标14:35左右出到达区；实际时间取决于入境排队和行李。',en:'After Morita lands at 14:00, clear immigration and baggage as quickly as practical. Target arrivals around 14:35; actual timing depends on queues and bags.',ja:'森田14:00到着後、入国審査・荷物受取を済ませて合流。14:35頃に到着ロビーへ出るのが目標。実際は入国審査と荷物次第。',th:'หลัง Morita ลงเครื่อง 14:00 ผ่าน ตม. รับกระเป๋าและพบกันให้เร็วที่สุด เป้าหมายออกมาราว 14:35 เวลาจริงขึ้นอยู่กับคิว ตม. และกระเป๋า'};}
  const lunch=p('d26_lunch');if(lunch){
    lunch.time='14:35–14:45';
    lunch.title={zh:'汇合后直接上预约车｜路上吃外带',en:'Meet → straight to booked car | eat takeaway en route',ja:'合流後すぐ予約車へ｜車内でテイクアウト',th:'พบกันแล้วขึ้นรถที่จองทันที | กินอาหารบนรถ'};
    lunch.desc={zh:'不在机场停下来吃饭。拿好外带直接去预约车，目标14:45前离开DMK；上车前确认司机是否方便车内饮食。',en:'Do not stop for a sit-down meal. Take the takeaway straight to the booked car and aim to leave DMK by 14:45; confirm with the driver before eating in the vehicle.',ja:'空港で食事のために止まらず、テイクアウトを持ってそのまま予約車へ。14:45までのDMK出発を目標にし、車内飲食は乗車前に運転手へ確認。',th:'ไม่หยุดกินที่สนามบิน ถืออาหารกลับไปขึ้นรถที่จองทันที เป้าหมายออกจาก DMK ก่อน 14:45 และถามคนขับก่อนกินอาหารบนรถ'};
    lunch.est='฿0 / ¥0';lunch.actual=false;
  }
  const transfer=p('d26_3');if(transfer){
    transfer.time='14:45–17:00（目标）';
    transfer.desc={zh:'预约车直达Garden Cliff。目标17:00左右到酒店；遇入境慢或堵车则可能顺延到17:30以后。路上吃提前买好的外带。',en:'Booked car straight to Garden Cliff. Target hotel arrival around 17:00, with 17:30+ possible if immigration or traffic is slow. Eat the takeaway en route.',ja:'予約車でGarden Cliffへ直行。17:00頃のホテル到着を目標とし、入国審査や渋滞で17:30以降になる可能性あり。車内でテイクアウトを食べる。',th:'รถที่จองตรงไป Garden Cliff เป้าหมายถึงโรงแรมประมาณ 17:00 แต่อาจเป็นหลัง 17:30 หาก ตม. ช้าหรือรถติด กินอาหารที่ซื้อไว้ระหว่างทาง'};
  }

  const options=[
    {name:'The Glass House Silver',tag:'优先推荐',reason:'顺利到酒店、时间充裕；第一晚想要更好的海边度假氛围。',price:'฿1,000–2,000 · ¥4,800–9,600',google:'https://www.google.com/maps/search/?api=1&query=The+Glass+House+Silver+Pattaya',menu:'https://www.glasshouse-pattaya.com/en/glasshouse-silver-menu.php'},
    {name:'Moom Aroi Na Kluea',tag:'海鲜优先',reason:'当天特别想认真吃一顿泰式海鲜，虾、蟹、鱼、鱿鱼等选择更丰富。',price:'฿1,200–2,200 · ¥5,760–10,560',google:'https://www.google.com/maps/search/?api=1&query=Moom+Aroi+Na+Kluea+Pattaya',menu:'https://www.google.com/maps/search/?api=1&query=Moom+Aroi+Na+Kluea+Pattaya'},
    {name:'Bamboo Beach',tag:'轻松省时',reason:'有点累但仍想在海边吃；更容易控制用餐时间，方便之后去 Terminal 21。',price:'฿500–1,200 · ¥2,400–5,760',google:'https://www.google.com/maps/search/?api=1&query=Bamboo+Beach+Pattaya',menu:'https://www.facebook.com/BambooBeachPattaya/'},
    {name:'Chomtalay',tag:'晚到备用',reason:'堵车、入住较晚或已经很累时直接在酒店吃，尽量保留 Terminal 21 购物时间。',price:'฿1,000–1,800 · ¥4,800–8,640',google:'https://www.google.com/maps/search/?api=1&query=Chom+Talay+Restaurant+Garden+Cliff+Pattaya',menu:'https://gardencliffpattaya.com/restaurant.html'}
  ];
  function addStyle(){if(document.getElementById('d26DinnerStyle'))return;const s=document.createElement('style');s.id='d26DinnerStyle';s.textContent='.d26-dinner-links{margin-top:10px;display:grid;gap:8px}.d26-dinner-row{border:1px solid #dfe8e5;border-radius:12px;padding:9px 10px;background:#fafcfb}.d26-dinner-head{display:flex;justify-content:space-between;gap:10px;align-items:baseline;font-size:11px;font-weight:850;color:#203a36}.d26-dinner-tag{display:inline-block;margin-left:6px;padding:2px 6px;border-radius:999px;background:#eef5f3;color:#0f625a;font-size:9px}.d26-dinner-price{font-size:10px;color:#697873;text-align:right}.d26-dinner-reason{margin-top:5px;font-size:10px;line-height:1.55;color:#53635e}.d26-dinner-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:7px}.d26-dinner-actions a{display:inline-block;text-decoration:none;border:1px solid #cbdcd7;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:800;color:#0f625a;background:#fff}@media(max-width:520px){.d26-dinner-head{display:block}.d26-dinner-price{text-align:left;margin-top:3px}}';document.head.appendChild(s)}
  function patchLinks(){
    const event=document.querySelector('#trip_d26_5 .event');if(!event)return;
    addStyle();const old=document.getElementById('d26DinnerLinks');if(old)old.remove();
    const wrap=document.createElement('div');wrap.id='d26DinnerLinks';wrap.className='d26-dinner-links';
    options.forEach(o=>{const r=document.createElement('div');r.className='d26-dinner-row';r.innerHTML=`<div class="d26-dinner-head"><span>${o.name}<span class="d26-dinner-tag">${o.tag}</span></span><span class="d26-dinner-price">${o.price} / 2人</span></div><div class="d26-dinner-reason">${o.reason}</div><div class="d26-dinner-actions"><a href="${o.google}" target="_blank" rel="noopener">Google Maps · 菜单/评价</a><a href="${o.menu}" target="_blank" rel="noopener">菜单 / 官网</a></div>`;wrap.appendChild(r)});
    const desc=event.querySelector('.desc');if(desc)desc.after(wrap);else event.prepend(wrap);
  }
  window.addEventListener('load',()=>setTimeout(patchLinks,900));
  document.addEventListener('click',e=>{if(e.target.closest('.langbtn,.currencybtn'))setTimeout(patchLinks,150)});
})();
