(function(){
  if(typeof plans28==='undefined')return;
  const dinner=plans28.find(p=>p.id==='28j');
  if(dinner){
    dinner.time='17:00–22:00';
    dinner.title={
      zh:'曼谷晚餐二选一｜正式餐厅 / JODD FAIRS Ratchada 夜市',
      en:'Bangkok dinner | restaurant or JODD FAIRS Ratchada',
      ja:'バンコク夕食｜レストラン / JODD FAIRS Ratchada の2択',
      th:'มื้อเย็นกรุงเทพ | ร้านอาหาร หรือ JODD FAIRS Ratchada'
    };
    dinner.desc={
      zh:'当天按体力和口味二选一。A｜正式餐厅：继续逛 Siam / CentralWorld 后，从 Somboon Seafood、Som Tam Nua、Inter Restaurant、Kub Kao Kub Pla、Nara 中选一家坐下来吃。B｜夜市：18:45左右从 Siam / CentralWorld 出发，约19:15到 JODD FAIRS Ratchada，边逛边吃到约22:00。夜市常见有烤虾/烤鱿鱼等海鲜、泰式烤鸡、青木瓜沙拉、冬阴功、船面/炒粉、猪肉串、炸物，以及芒果糯米饭、椰子冰淇淋、Roti、泰奶和鲜榨果汁。预算按二选一计算，不会把餐厅和夜市重复相加。',
      en:'Choose one based on energy and appetite. A | Sit-down restaurant: after Siam / CentralWorld, choose Somboon Seafood, Som Tam Nua, Inter Restaurant, Kub Kao Kub Pla or Nara. B | Night market: leave Siam / CentralWorld around 18:45, reach JODD FAIRS Ratchada around 19:15 and eat while browsing until about 22:00. Typical market choices include grilled seafood, gai yang, som tam, tom yum, noodles/pad Thai, pork skewers, fried snacks, mango sticky rice, coconut ice cream, roti, Thai tea and fresh juices. Budget is for one option only, not both.',
      ja:'当日の体力と食欲でどちらかを選択。A｜レストラン：Siam / CentralWorld散策後、Somboon Seafood、Som Tam Nua、Inter Restaurant、Kub Kao Kub Pla、Naraのいずれかへ。B｜夜市：18:45頃Siam / CentralWorldを出発し、19:15頃JODD FAIRS Ratchadaへ。22:00頃まで食べ歩き。グリル海鮮、ガイヤーン、ソムタム、トムヤム、麺・パッタイ、豚串、揚げ物、マンゴースティッキーライス、ココナッツアイス、ロティ、タイティー、フルーツジュースなど。予算は2案のどちらか一方のみを計上。',
      th:'เลือก 1 แบบตามแรงและความอยากอาหาร A | ร้านอาหารนั่งกิน หลังเดิน Siam / CentralWorld เลือก Somboon Seafood, Som Tam Nua, Inter Restaurant, Kub Kao Kub Pla หรือ Nara B | ตลาดกลางคืน ออกจาก Siam / CentralWorld ราว 18:45 ถึง JODD FAIRS Ratchada ราว 19:15 เดินกินถึงประมาณ 22:00 มีซีฟู้ดย่าง ไก่ย่าง ส้มตำ ต้มยำ ก๋วยเตี๋ยว/ผัดไทย หมูปิ้ง ของทอด ข้าวเหนียวมะม่วง ไอศกรีมมะพร้าว โรตี ชาไทย และน้ำผลไม้ งบคิดเพียงหนึ่งตัวเลือก ไม่รวมซ้ำทั้งสองแบบ'
    };
    dinner.map='https://www.google.com/maps/search/?api=1&query=JODD+FAIRS+Ratchada+Bangkok';
    dinner.web='https://www.thailandtravel.or.jp/jodd-fairs/';
    dinner.est='฿600–2,200 / ¥2,880–10,560';
  }

  const options=[
    {group:'夜市',name:'JODD FAIRS Ratchada',note:'更推荐体验｜17:00–01:00｜边逛边吃',price:'两人约 ฿600–1,400',google:'https://www.google.com/maps/search/?api=1&query=JODD+FAIRS+Ratchada+Bangkok',site:'https://www.thailandtravel.or.jp/jodd-fairs/'},
    {group:'餐厅',name:'Somboon Seafood · CentralWorld',note:'咖喱炒蟹 / 海鲜｜正式坐下来吃',price:'两人约 ฿1,200–2,200',google:'https://www.google.com/maps/search/?api=1&query=Somboon+Seafood+CentralWorld+Bangkok',site:'https://www.somboonseafood.com/en/location'},
    {group:'餐厅',name:'Som Tam Nua · Siam Center',note:'东北泰菜｜青木瓜沙拉、炸鸡、烤肉',price:'两人约 ฿600–1,000',google:'https://www.google.com/maps/search/?api=1&query=Som+Tam+Nua+Siam+Center+Bangkok',site:'https://www.google.com/maps/search/?api=1&query=Som+Tam+Nua+Siam+Center+Bangkok'},
    {group:'餐厅',name:'Inter Restaurant · Siam Square',note:'平价泰国菜｜更本地、更实惠',price:'两人约 ฿400–800',google:'https://www.google.com/maps/search/?api=1&query=Inter+Restaurant+Siam+Square+Bangkok',site:'https://www.google.com/maps/search/?api=1&query=Inter+Restaurant+Siam+Square+Bangkok'},
    {group:'餐厅',name:"Kub Kao Kub Pla · CentralWorld",note:'泰式家常菜 + 海鲜｜选择多',price:'两人约 ฿800–2,400',google:'https://www.google.com/maps/search/?api=1&query=Kub+Kao+Kub+Pla+CentralWorld+Bangkok',site:'https://www.google.com/maps/search/?api=1&query=Kub+Kao+Kub+Pla+CentralWorld+Bangkok'},
    {group:'餐厅',name:'Nara Thai Cuisine · CentralWorld',note:'环境舒服｜价格偏高，现场看评价再决定',price:'两人约 ฿1,000–2,400',google:'https://www.google.com/maps/search/?api=1&query=Nara+Thai+Cuisine+CentralWorld+Bangkok',site:'https://www.google.com/maps/search/?api=1&query=Nara+Thai+Cuisine+CentralWorld+Bangkok'}
  ];

  function addStyle(){
    if(document.getElementById('d28EveningStyle'))return;
    const s=document.createElement('style');s.id='d28EveningStyle';
    s.textContent='.d28-evening-options{margin-top:10px;display:grid;gap:7px}.d28-evening-row{border:1px solid #dfe8e5;border-radius:10px;padding:8px 9px;background:#fafcfb}.d28-evening-head{display:flex;justify-content:space-between;gap:10px;align-items:baseline}.d28-evening-name{font-size:11px;font-weight:850;color:#203a36}.d28-evening-tag{font-size:9px;font-weight:850;padding:2px 6px;border-radius:999px;background:#edf4f1;color:#315b54}.d28-evening-note,.d28-evening-price{font-size:10px;color:#697873;margin-top:3px}.d28-evening-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}.d28-evening-actions a{display:inline-block;text-decoration:none;border:1px solid #cbdcd7;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:800;color:#0f625a;background:#fff}';
    document.head.appendChild(s);
  }
  function patch(){
    const event=document.querySelector('#trip_28j .event');if(!event)return;
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
