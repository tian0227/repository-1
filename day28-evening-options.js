(function(){
  if(typeof plans28==='undefined')return;
  const p=id=>plans28.find(x=>x.id===id);

  const jim=p('28i');
  if(jim) jim.time='15:20–16:40';

  const transfer=p('28j');
  if(transfer){
    transfer.time='16:40–17:15/17:30';
    transfer.title={zh:'Jim Thompson → 落日飞车集合点',en:'Jim Thompson → sunset ride meeting point',ja:'Jim Thompson → サンセットライド集合場所',th:'Jim Thompson → จุดนัดพบ Sunset Ride'};
    transfer.desc={zh:'参观结束后直接前往集合点。当前短版候选是 Bangkok Funride Night Tour，集合地址在 130 Samsen 2 Alley；具体开场时间以最终预订为准，建议至少提前15分钟到。',en:'Go straight to the meeting point after Jim Thompson. The current short-list option is Bangkok Funride Night Tour at 130 Samsen 2 Alley; confirm the exact start time when booking and arrive at least 15 minutes early.',ja:'Jim Thompson見学後、そのまま集合場所へ。現在の短時間候補はBangkok Funride Night Tour（130 Samsen 2 Alley）。開始時刻は予約時に確認し、15分以上前の到着を目安にする。',th:'หลัง Jim Thompson ให้ตรงไปจุดนัดพบ ตัวเลือกระยะสั้นปัจจุบันคือ Bangkok Funride Night Tour ที่ 130 Samsen 2 Alley เวลาเริ่มจริงให้ยืนยันตอนจองและควรมาถึงก่อนอย่างน้อย 15 นาที'};
    transfer.map='https://www.google.com/maps/dir/?api=1&origin=Jim+Thompson+House+Museum+Bangkok&destination=130+Samsen+2+Alley+Bangkok';
    transfer.web='https://bangkokfunride.com/escooter/night-tour/';
    transfer.est='฿120–250 / ¥580–1,200';
  }

  if(!p('28k')) plans28.push({
    id:'28k',day:28,time:'17:15/17:30–20:00（以预订为准）',
    title:{zh:'Bangkok Funride Night Tour｜落日飞车',en:'Bangkok Funride Night Tour | sunset ride',ja:'Bangkok Funride Night Tour｜サンセットライド',th:'Bangkok Funride Night Tour | Sunset Ride'},
    desc:{zh:'目前最贴合我们时间的是2.5小时电动滑板车夜游：沿湄南河看黄昏与夜景，经过曼谷老城、金色寺庙一带，最后到考山路附近。官网当前成人 ฿1,199/人，含电动滑板车、头盔、当地向导和饮料；两人按 ฿2,398 计。最终是否选这家、具体出发时刻，预订前再确认。',en:'The current best fit is a 2.5-hour e-scooter night tour along the Chao Phraya at sunset and through Bangkok Old Town, finishing around the Khao San area. The official adult price is currently ฿1,199/person and includes the e-scooter, helmet, local guide and a drink. Budget for two: ฿2,398. Confirm the operator and exact departure time before booking.',ja:'現在の時間に最も合うのは2.5時間の電動スクーターナイトツアー。夕暮れのチャオプラヤ川沿い、バンコク旧市街や寺院周辺を走り、カオサン周辺へ。公式成人料金は現在฿1,199/人で、スクーター・ヘルメット・現地ガイド・飲み物込み。2人で฿2,398。最終予約前に催行会社と出発時刻を再確認。',th:'ตัวเลือกที่เข้ากับเวลามากที่สุดตอนนี้คือทัวร์ E-scooter กลางคืน 2.5 ชม. ชมพระอาทิตย์ตกริมเจ้าพระยา ผ่านย่านเมืองเก่าและวัด ก่อนจบใกล้ถนนข้าวสาร ราคาผู้ใหญ่ตามเว็บปัจจุบัน ฿1,199/คน รวม E-scooter หมวก ไกด์ท้องถิ่น และเครื่องดื่ม งบ 2 คน ฿2,398 ให้ยืนยันผู้จัดและเวลาออกจริงก่อนจอง'},
    map:'https://www.google.com/maps/search/?api=1&query=Bangkok+Funride+130+Samsen+2+Alley+Bangkok',
    web:'https://bangkokfunride.com/escooter/night-tour/',est:'฿2,398 / ¥11,510'
  });

  if(!p('28l')) plans28.push({
    id:'28l',day:28,time:'20:00–20:30',
    title:{zh:'落日飞车 → JODD FAIRS Ratchada',en:'Sunset ride → JODD FAIRS Ratchada',ja:'サンセットライド → JODD FAIRS Ratchada',th:'Sunset Ride → JODD FAIRS Ratchada'},
    desc:{zh:'结束后直接Grab/Bolt去夜市，给晚高峰留一点机动时间。',en:'Take Grab/Bolt straight to the night market and keep a little traffic buffer.',ja:'終了後はGrab/Boltで夜市へ。渋滞分の余裕を少し確保。',th:'จบทัวร์แล้วนั่ง Grab/Bolt ไปตลาด เผื่อเวลารถติดเล็กน้อย'},
    map:'https://www.google.com/maps/dir/?api=1&origin=130+Samsen+2+Alley+Bangkok&destination=JODD+FAIRS+Ratchada+Bangkok',
    web:'https://www.thailandtravel.or.jp/jodd-fairs/',est:'฿120–250 / ¥580–1,200'
  });

  if(!p('28m')) plans28.push({
    id:'28m',day:28,time:'20:30–22:30',
    title:{zh:'JODD FAIRS Ratchada｜夜市晚餐 + 逛街',en:'JODD FAIRS Ratchada | night-market dinner',ja:'JODD FAIRS Ratchada｜夜市ディナー',th:'JODD FAIRS Ratchada | มื้อเย็นตลาดกลางคืน'},
    desc:{zh:'晚饭直接在夜市解决，少量多样、两个人分着吃。可以看当天胃口选烤虾/烤鱿鱼、猪肉串、泰式烤鸡、青木瓜沙拉、炒粉/船面、炸物，再加芒果糯米饭、椰子冰淇淋、Roti、泰奶或鲜榨果汁。JODD FAIRS Ratchada目前每天17:00–01:00。若当天下雨、太累或临时不想逛夜市，下方正式餐厅继续作为Plan B。',en:'Have dinner at the market and share small portions so you can try more: grilled prawns/squid, pork skewers, gai yang, som tam, noodles, fried snacks, mango sticky rice, coconut ice cream, roti, Thai tea or fresh juice. JODD FAIRS Ratchada currently opens daily 17:00–01:00. If it rains or you are too tired, keep the sit-down restaurants below as Plan B.',ja:'夜市で少量ずつシェアしながら夕食。エビ・イカのグリル、豚串、ガイヤーン、ソムタム、麺、揚げ物、マンゴースティッキーライス、ココナッツアイス、ロティ、タイティー、フルーツジュースなど。当面の営業時間は毎日17:00–01:00。雨や疲れで夜市をやめる場合は下のレストランをPlan Bにする。',th:'กินมื้อเย็นที่ตลาดแบบสั่งหลายอย่างแบ่งกัน เช่น กุ้ง/ปลาหมึกย่าง หมูปิ้ง ไก่ย่าง ส้มตำ ก๋วยเตี๋ยว ของทอด ข้าวเหนียวมะม่วง ไอศกรีมมะพร้าว โรตี ชาไทย หรือน้ำผลไม้ ปัจจุบัน JODD FAIRS Ratchada เปิดทุกวัน 17:00–01:00 หากฝนตกหรือเหนื่อยมาก ให้ใช้ร้านอาหารด้านล่างเป็น Plan B'},
    map:'https://www.google.com/maps/search/?api=1&query=JODD+FAIRS+Ratchada+Bangkok',
    web:'https://www.thailandtravel.or.jp/jodd-fairs/',est:'฿600–1,400 / ¥2,880–6,720'
  });

  if(!p('28n')) plans28.push({
    id:'28n',day:28,time:'22:30–23:00左右',
    title:{zh:'JODD FAIRS → FuramaXclusive Asoke',en:'JODD FAIRS → FuramaXclusive Asoke',ja:'JODD FAIRS → FuramaXclusive Asoke',th:'JODD FAIRS → FuramaXclusive Asoke'},
    desc:{zh:'逛够就回酒店休息，不再加其他项目。',en:'Return to the hotel and rest; no more scheduled activities.',ja:'十分に楽しんだらホテルへ戻って休む。追加予定なし。',th:'เดินพอแล้วกลับโรงแรมพัก ไม่มีโปรแกรมเพิ่ม'},
    map:'https://www.google.com/maps/dir/?api=1&origin=JODD+FAIRS+Ratchada+Bangkok&destination=FuramaXclusive+Asoke+Bangkok',
    web:'https://www.furama.com/furamaxclusive/asoke/',est:'฿120–250 / ¥580–1,200'
  });

  const options=[
    {group:'主方案',name:'JODD FAIRS Ratchada',note:'落日飞车后去｜夜市晚餐 + 小吃 + 水果甜品',price:'两人约 ฿600–1,400',google:'https://www.google.com/maps/search/?api=1&query=JODD+FAIRS+Ratchada+Bangkok',site:'https://www.thailandtravel.or.jp/jodd-fairs/'},
    {group:'Plan B',name:'Somboon Seafood · CentralWorld',note:'咖喱炒蟹 / 海鲜｜想正式坐下来吃时',price:'两人约 ฿1,200–2,200',google:'https://www.google.com/maps/search/?api=1&query=Somboon+Seafood+CentralWorld+Bangkok',site:'https://www.somboonseafood.com/en/location'},
    {group:'Plan B',name:'Som Tam Nua · Siam Center',note:'东北泰菜｜青木瓜沙拉、炸鸡、烤肉',price:'两人约 ฿600–1,000',google:'https://www.google.com/maps/search/?api=1&query=Som+Tam+Nua+Siam+Center+Bangkok',site:'https://www.google.com/maps/search/?api=1&query=Som+Tam+Nua+Siam+Center+Bangkok'},
    {group:'Plan B',name:'Inter Restaurant · Siam Square',note:'平价泰国菜｜更本地、更实惠',price:'两人约 ฿400–800',google:'https://www.google.com/maps/search/?api=1&query=Inter+Restaurant+Siam+Square+Bangkok',site:'https://www.google.com/maps/search/?api=1&query=Inter+Restaurant+Siam+Square+Bangkok'},
    {group:'Plan B',name:'Kub Kao Kub Pla · CentralWorld',note:'泰式家常菜 + 海鲜｜选择多',price:'两人约 ฿800–2,400',google:'https://www.google.com/maps/search/?api=1&query=Kub+Kao+Kub+Pla+CentralWorld+Bangkok',site:'https://www.google.com/maps/search/?api=1&query=Kub+Kao+Kub+Pla+CentralWorld+Bangkok'},
    {group:'Plan B',name:'Nara Thai Cuisine · CentralWorld',note:'环境舒服｜价格偏高，现场看评价再决定',price:'两人约 ฿1,000–2,400',google:'https://www.google.com/maps/search/?api=1&query=Nara+Thai+Cuisine+CentralWorld+Bangkok',site:'https://www.google.com/maps/search/?api=1&query=Nara+Thai+Cuisine+CentralWorld+Bangkok'}
  ];

  function addStyle(){
    if(document.getElementById('d28EveningStyle'))return;
    const s=document.createElement('style');s.id='d28EveningStyle';
    s.textContent='.d28-evening-options{margin-top:10px;display:grid;gap:7px}.d28-evening-row{border:1px solid #dfe8e5;border-radius:10px;padding:8px 9px;background:#fafcfb}.d28-evening-head{display:flex;justify-content:space-between;gap:10px;align-items:baseline}.d28-evening-name{font-size:11px;font-weight:850;color:#203a36}.d28-evening-tag{font-size:9px;font-weight:850;padding:2px 6px;border-radius:999px;background:#edf4f1;color:#315b54}.d28-evening-note,.d28-evening-price{font-size:10px;color:#697873;margin-top:3px}.d28-evening-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}.d28-evening-actions a{display:inline-block;text-decoration:none;border:1px solid #cbdcd7;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:800;color:#0f625a;background:#fff}';
    document.head.appendChild(s);
  }
  function patch(){
    const event=document.querySelector('#trip_28m .event');if(!event)return;
    addStyle();
    const old=document.getElementById('d28EveningOptions');if(old)old.remove();
    const wrap=document.createElement('div');wrap.id='d28EveningOptions';wrap.className='d28-evening-options';
    options.forEach(o=>{
      const r=document.createElement('div');r.className='d28-evening-row';
      r.innerHTML=`<div class="d28-evening-head"><span class="d28-evening-name">${o.name}</span><span class="d28-evening-tag">${o.group}</span></div><div class="d28-evening-note">${o.note}</div><div class="d28-evening-price">${o.price}</div><div class="d28-evening-actions"><a href="${o.google}" target="_blank" rel="noopener">Google Maps · 评价/照片</a><a href="${o.site}" target="_blank" rel="noopener">官网 / 菜单</a></div>`;
      wrap.appendChild(r);
    });
    const desc=event.querySelector('.desc');if(desc)desc.after(wrap);else event.prepend(wrap);
  }
  window.addEventListener('load',()=>setTimeout(patch,900));
  document.addEventListener('click',e=>{if(e.target.closest('.langbtn,.currencybtn'))setTimeout(patch,180)});
})();