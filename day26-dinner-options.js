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
    transfer.desc={zh:'预约车直达Garden Cliff。路程约146 km；无明显拥堵时车程约1小时47分，目标17:00左右到酒店。遇入境慢或堵车则可能顺延到17:30以后。路上吃提前买好的外带。',en:'Booked car straight to Garden Cliff. The road distance is about 146 km; driving can be about 1h47 without major delays. Target hotel arrival around 17:00, with 17:30+ possible if immigration or traffic is slow. Eat the takeaway en route.',ja:'予約車でGarden Cliffへ直行。道路距離は約146kmで、大きな渋滞がなければ約1時間47分。17:00頃のホテル到着を目標とし、入国審査や渋滞で17:30以降になる可能性あり。車内でテイクアウトを食べる。',th:'รถที่จองตรงไป Garden Cliff ระยะทางถนนประมาณ 146 กม. หากรถไม่ติดมากใช้เวลาราว 1 ชม. 47 นาที เป้าหมายถึงโรงแรมประมาณ 17:00 แต่อาจเป็นหลัง 17:30 หาก ตม. ช้าหรือรถติด กินอาหารที่ซื้อไว้ระหว่างทาง'};
  }
  const hotel=p('d26_4');if(hotel){hotel.time='17:00–17:10（目标）';hotel.desc={zh:'到店后快速办理入住、放行李。酒店已订，8月26–27日两晚，两人合计 ¥21,000。入住时同时确认Nil Spa预约，以及免费 Shuttle Bus：住客可往返 Terminal 21 Gate 2，10座、先到先得，建议提前5–10分钟到集合点。',en:'Quick check-in and luggage drop. Booked Aug 26–27, two nights for two, ¥21,000 total. Confirm the Nil Spa appointment and the complimentary shuttle to/from Terminal 21 Gate 2 (10 seats, first come first served; arrive 5–10 minutes early).',ja:'到着後すぐチェックインして荷物を置く。8月26–27日2泊、2人合計¥21,000で予約済み。Nil Spaの予約と、Terminal 21 Gate 2往復の無料シャトル（10席・先着順、5〜10分前集合）も確認。',th:'เช็กอินและวางกระเป๋าอย่างรวดเร็ว จอง 26–27 ส.ค. 2 คืน 2 คน รวม ¥21,000 พร้อมยืนยันนัด Nil Spa และรถรับส่งฟรีไป-กลับ Terminal 21 Gate 2 (10 ที่นั่ง มาก่อนได้ก่อน ควรมาถึงก่อน 5–10 นาที)'};}
  const massage=p('d26_massage');if(massage){massage.time='17:10–18:10';massage.desc={zh:'Nil Spa按摩60分钟。为了赶18:31左右的日落，建议提前向酒店预约17:10–18:10时段；两人预计约 ฿1,000–1,800（¥4,800–8,600）。如果到店明显晚于17:10，当天日落晚餐会变得很赶。',en:'60-minute massage at Nil Spa. To make the ~18:31 sunset, pre-book the 17:10–18:10 slot if possible. Estimated total for two: ฿1,000–1,800 (¥4,800–8,600). If hotel arrival is much later than 17:10, sunset dinner becomes tight.',ja:'Nil Spaで60分マッサージ。18:31頃の日没に間に合わせるため、可能なら17:10–18:10を事前予約。2人合計約฿1,000–1,800（¥4,800–8,600）。17:10より大幅に遅れて到着すると夕日ディナーはかなりタイト。',th:'นวด Nil Spa 60 นาที เพื่อให้ทันพระอาทิตย์ตกราว 18:31 ควรจองช่วง 17:10–18:10 ล่วงหน้า งบ 2 คนประมาณ ฿1,000–1,800 (¥4,800–8,600) หากถึงโรงแรมช้ากว่า 17:10 มาก มื้อเย็นชมพระอาทิตย์ตกจะค่อนข้างรีบ'};}

  const dinner=p('d26_5');
  if(dinner){
    dinner.time='18:15–19:30';
    dinner.title={zh:'日落海边晚餐｜4选1',en:'Sunset seaside dinner | choose 1 of 4',ja:'夕日を見ながら海辺ディナー｜4択',th:'มื้อเย็นริมทะเลชมพระอาทิตย์ตก | เลือก 1 จาก 4'};
    dinner.desc={
      zh:'8月26日芭提雅日落约18:31，民用暮光约18:52结束。按摩18:10结束后立刻去吃饭。四个备选均标两人预算：① Garden Cliff Chomtalay｜酒店内，最稳看日落，约 ฿1,000–1,800（¥4,800–8,640）；② Bamboo Beach｜离酒店约0.5 km、步行约5分钟，轻松随意，约 ฿500–1,200（¥2,400–5,760）；③ The Glass House Silver｜海边氛围和菜单更丰富，约 ฿1,000–2,000（¥4,800–9,600），按摩后立即打车；④ Moom Aroi Na Kluea｜泰式海鲜最丰富，约 ฿1,200–2,200（¥5,760–10,560），距离更远，若日落优先当天不首选。下方提供每家Google地图链接，可直接看菜单照片和评价。',
      en:'Pattaya sunset on Aug 26 is about 18:31; civil twilight ends around 18:52. Leave for dinner immediately after the massage ends at 18:10. Two-person estimates: ① Garden Cliff Chomtalay | inside the hotel, safest for sunset, ฿1,000–1,800 (¥4,800–8,640); ② Bamboo Beach | about 0.5 km / ~5 min walk from the hotel, casual, ฿500–1,200 (¥2,400–5,760); ③ The Glass House Silver | stronger beachfront atmosphere and broader menu, ฿1,000–2,000 (¥4,800–9,600), take a car immediately after massage; ④ Moom Aroi Na Kluea | broadest Thai seafood choice, ฿1,200–2,200 (¥5,760–10,560), farther away and not first choice if sunset is the priority. Google Maps links below open menus/photos and reviews.',
      ja:'8月26日のパタヤの日没は約18:31、薄明終了は約18:52。マッサージ18:10終了後すぐ夕食へ。2人分目安：① Garden Cliff Chomtalay｜ホテル内で夕日に最も確実、約฿1,000–1,800（¥4,800–8,640）；② Bamboo Beach｜ホテルから約0.5km・徒歩約5分、気軽、約฿500–1,200（¥2,400–5,760）；③ The Glass House Silver｜海辺の雰囲気とメニューが充実、約฿1,000–2,000（¥4,800–9,600）、マッサージ後すぐ車で移動；④ Moom Aroi Na Kluea｜タイ系シーフードが最も豊富、約฿1,200–2,200（¥5,760–10,560）、少し遠いため夕日優先なら第一候補にはしない。下のGoogle Mapsリンクでメニュー写真・口コミを確認可能。',
      th:'วันที่ 26 ส.ค. พระอาทิตย์ตกที่พัทยาประมาณ 18:31 และแสงพลบค่ำสิ้นสุดราว 18:52 หลังนวดเสร็จ 18:10 ให้ไปกินทันที งบ 2 คน: ① Garden Cliff Chomtalay อยู่ในโรงแรม เหมาะสุดถ้าจะดูพระอาทิตย์ตก ฿1,000–1,800 (¥4,800–8,640); ② Bamboo Beach ห่างโรงแรมประมาณ 0.5 กม. เดินราว 5 นาที สบายๆ ฿500–1,200 (¥2,400–5,760); ③ The Glass House Silver บรรยากาศริมทะเลและเมนูหลากหลาย ฿1,000–2,000 (¥4,800–9,600) ให้ออกรถทันทีหลังนวด; ④ Moom Aroi Na Kluea ซีฟู้ดไทยหลากหลายที่สุด ฿1,200–2,200 (¥5,760–10,560) อยู่ไกลกว่า จึงไม่ใช่ตัวเลือกแรกถ้าเน้นพระอาทิตย์ตก ลิงก์ Google Maps ด้านล่างใช้ดูรูปเมนูและรีวิวได้'
    };
    dinner.map='https://www.google.com/maps/search/?api=1&query=Chom+Talay+Restaurant+Garden+Cliff+Pattaya';
    dinner.web='https://gardencliffpattaya.com/restaurant.html';
    dinner.est='฿500–2,200 / ¥2,400–10,560';
  }
  const fruit=p('d26_6');if(fruit)fruit.time='19:40–20:10';
  const rest=p('d26_7');if(rest)rest.time='20:20+';

  const options=[
    {name:'Chomtalay',price:'฿1,000–1,800 · ¥4,800–8,640',google:'https://www.google.com/maps/search/?api=1&query=Chom+Talay+Restaurant+Garden+Cliff+Pattaya',menu:'https://gardencliffpattaya.com/restaurant.html'},
    {name:'Bamboo Beach',price:'฿500–1,200 · ¥2,400–5,760',google:'https://www.google.com/maps/search/?api=1&query=Bamboo+Beach+Pattaya',menu:'https://www.facebook.com/BambooBeachPattaya/'},
    {name:'The Glass House Silver',price:'฿1,000–2,000 · ¥4,800–9,600',google:'https://www.google.com/maps/search/?api=1&query=The+Glass+House+Silver+Pattaya',menu:'https://www.glasshouse-pattaya.com/en/glasshouse-silver-menu.php'},
    {name:'Moom Aroi Na Kluea',price:'฿1,200–2,200 · ¥5,760–10,560',google:'https://www.google.com/maps/search/?api=1&query=Moom+Aroi+Na+Kluea+Pattaya',menu:'https://www.google.com/maps/search/?api=1&query=Moom+Aroi+Na+Kluea+Pattaya'}
  ];
  function addStyle(){if(document.getElementById('d26DinnerStyle'))return;const s=document.createElement('style');s.id='d26DinnerStyle';s.textContent='.d26-dinner-links{margin-top:10px;display:grid;gap:7px}.d26-dinner-row{border:1px solid #dfe8e5;border-radius:10px;padding:8px 9px;background:#fafcfb}.d26-dinner-head{display:flex;justify-content:space-between;gap:10px;align-items:baseline;font-size:11px;font-weight:850;color:#203a36}.d26-dinner-price{font-size:10px;color:#697873;text-align:right}.d26-dinner-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}.d26-dinner-actions a{display:inline-block;text-decoration:none;border:1px solid #cbdcd7;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:800;color:#0f625a;background:#fff}@media(max-width:520px){.d26-dinner-head{display:block}.d26-dinner-price{text-align:left;margin-top:2px}}';document.head.appendChild(s)}
  function patchLinks(){
    const event=document.querySelector('#trip_d26_5 .event');if(!event)return;
    addStyle();const old=document.getElementById('d26DinnerLinks');if(old)old.remove();
    const wrap=document.createElement('div');wrap.id='d26DinnerLinks';wrap.className='d26-dinner-links';
    options.forEach(o=>{const r=document.createElement('div');r.className='d26-dinner-row';r.innerHTML=`<div class="d26-dinner-head"><span>${o.name}</span><span class="d26-dinner-price">${o.price} / 2人</span></div><div class="d26-dinner-actions"><a href="${o.google}" target="_blank" rel="noopener">Google Maps · 菜单/评价</a><a href="${o.menu}" target="_blank" rel="noopener">菜单 / 官网</a></div>`;wrap.appendChild(r)});
    const desc=event.querySelector('.desc');if(desc)desc.after(wrap);else event.prepend(wrap);
  }
  window.addEventListener('load',()=>setTimeout(patchLinks,900));
  document.addEventListener('click',e=>{if(e.target.closest('.langbtn,.currencybtn'))setTimeout(patchLinks,150)});
})();
