(function(){
  if(typeof plans26==='undefined')return;
  const p=id=>plans26.find(x=>x.id===id);

  const hotel=p('d26_4');
  if(hotel) hotel.time='17:00–17:20（目标）';

  const dinner=p('d26_5');
  if(dinner){
    dinner.time='17:40–19:10';
    dinner.title={
      zh:'日落海边晚餐｜4家到场再选',
      en:'Sunset seaside dinner | choose among 4 on the day',
      ja:'夕日を見ながら海辺ディナー｜当日4店から選択',
      th:'มื้อเย็นริมทะเลชมพระอาทิตย์ตก | เลือกจาก 4 ร้านวันจริง'
    };
    dinner.desc={
      zh:'8月26日芭提雅日落约18:31。到酒店后放好行李就去吃饭，尽量17:40–18:00入座，把日落优先保住。四家都保留，按当天Google评价、菜单、海景座位和体力决定：① Garden Cliff Chomtalay｜酒店内，约 ฿1,000–1,800（¥4,800–8,640）；② Bamboo Beach｜轻松随意，约 ฿500–1,200（¥2,400–5,760）；③ The Glass House Silver｜海边氛围好、菜单丰富，约 ฿1,000–2,000（¥4,800–9,600）；④ Moom Aroi Na Kluea｜泰式海鲜选择最多，约 ฿1,200–2,200（¥5,760–10,560）。下方均保留Google Maps和菜单/评价入口。',
      en:'Pattaya sunset on Aug 26 is around 18:31. After checking in and dropping bags, go straight to dinner and aim to be seated around 17:40–18:00. Keep all four options and decide on the day based on Google reviews, menu, sea-view seating and energy: ① Garden Cliff Chomtalay ฿1,000–1,800 (¥4,800–8,640); ② Bamboo Beach ฿500–1,200 (¥2,400–5,760); ③ The Glass House Silver ฿1,000–2,000 (¥4,800–9,600); ④ Moom Aroi Na Kluea ฿1,200–2,200 (¥5,760–10,560). Google Maps and menu/review links remain below.',
      ja:'8月26日のパタヤの日没は約18:31。ホテル到着後は荷物を置いてすぐ夕食へ向かい、17:40–18:00頃の着席を目標にする。4店はすべて候補として残し、当日のGoogle口コミ・メニュー・海が見える席・体力で決定：① Garden Cliff Chomtalay 約฿1,000–1,800（¥4,800–8,640）；② Bamboo Beach 約฿500–1,200（¥2,400–5,760）；③ The Glass House Silver 約฿1,000–2,000（¥4,800–9,600）；④ Moom Aroi Na Kluea 約฿1,200–2,200（¥5,760–10,560）。Google Mapsとメニュー/口コミリンクは下に残す。',
      th:'วันที่ 26 ส.ค. พระอาทิตย์ตกที่พัทยาประมาณ 18:31 หลังเช็กอินและวางกระเป๋าให้ออกไปกินมื้อเย็นทันที เป้าหมายนั่งโต๊ะประมาณ 17:40–18:00 เก็บทั้ง 4 ร้านไว้แล้วเลือกวันจริงจากรีวิว Google เมนู ที่นั่งวิวทะเล และแรงของวันนั้น: ① Garden Cliff Chomtalay ฿1,000–1,800 (¥4,800–8,640); ② Bamboo Beach ฿500–1,200 (¥2,400–5,760); ③ The Glass House Silver ฿1,000–2,000 (¥4,800–9,600); ④ Moom Aroi Na Kluea ฿1,200–2,200 (¥5,760–10,560) ลิงก์ Google Maps และเมนู/รีวิวยังคงอยู่ด้านล่าง'
    };
  }

  let walk=p('d26_walk');
  if(!walk){
    walk={id:'d26_walk',day:26,time:'19:10–19:30',
      title:{zh:'饭后海边散步',en:'Seaside walk after dinner',ja:'夕食後の海辺散歩',th:'เดินเล่นริมทะเลหลังอาหารเย็น'},
      desc:{zh:'吃完不要马上赶行程，沿海边或餐厅附近散步约20分钟。若晚餐拖到19:30以后，这一段可以缩短或跳过。',en:'Take an easy ~20-minute walk by the sea or near the restaurant. If dinner runs past 19:30, shorten or skip this part.',ja:'食後はすぐ移動せず、海辺やレストラン周辺を約20分散歩。夕食が19:30以降まで延びたら短縮または省略。',th:'เดินเล่นริมทะเลหรือรอบร้านประมาณ 20 นาที หากมื้อเย็นยาวเกิน 19:30 ให้ลดเวลาหรือข้ามช่วงนี้'},
      map:'https://www.google.com/maps/search/?api=1&query=Wong+Amat+Beach+Pattaya',
      web:'https://www.google.com/maps/search/?api=1&query=Wong+Amat+Beach+Pattaya',est:'฿0 / ¥0',actual:false};
    plans26.push(walk);
  }

  const fruit=p('d26_6');
  if(fruit){
    fruit.time='19:30–20:05';
    fruit.title={zh:'逛 New Naklua Market｜买水果',en:'New Naklua Market | fruit shopping',ja:'New Naklua Market散策｜フルーツ購入',th:'เดิน New Naklua Market | ซื้อผลไม้'};
    fruit.desc={zh:'逛一圈市场再买水果，山竹、红毛丹、龙眼、芒果、椰子等按当天品质挑。水果带回酒店，按摩后在房间吃。',en:'Walk around the market and buy fruit such as mangosteen, rambutan, longan, mango or coconut based on quality. Take it back to the hotel and eat it after the massage.',ja:'市場を少し見て回り、マンゴスチン、ランブータン、ロンガン、マンゴー、ココナッツなどを当日の状態で選ぶ。ホテルへ持ち帰り、マッサージ後に部屋で食べる。',th:'เดินดูตลาดแล้วเลือกมังคุด เงาะ ลำไย มะม่วง มะพร้าว ฯลฯ ตามคุณภาพวันนั้น นำกลับโรงแรมไว้กินหลังนวด'};
  }

  const back=p('d26_7');
  if(back){
    back.time='20:05–20:20';
    back.title={zh:'回 Garden Cliff｜准备按摩',en:'Return to Garden Cliff | get ready for massage',ja:'Garden Cliffへ戻る｜マッサージ準備',th:'กลับ Garden Cliff | เตรียมไปนวด'};
    back.desc={zh:'从市场回酒店，把水果先放回房间，然后去Nil Spa。',en:'Return from the market, leave the fruit in the room, then head to Nil Spa.',ja:'市場からホテルへ戻り、フルーツを部屋に置いてからNil Spaへ。',th:'กลับจากตลาด นำผลไม้ไว้ที่ห้อง แล้วไป Nil Spa'};
  }

  const massage=p('d26_massage');
  if(massage){
    massage.time='20:30–21:30';
    massage.desc={zh:'晚饭、散步和市场之后做60分钟按摩。建议提前向酒店预约20:30–21:30；Nil Spa目前营业到22:00。两人预计约 ฿1,000–1,800（¥4,800–8,600）。若晚餐明显拖延，优先保留市场和按摩，缩短散步。',en:'Have a 60-minute massage after dinner, the walk and market. Pre-book 20:30–21:30 if possible; Nil Spa currently closes at 22:00. Estimated total for two: ฿1,000–1,800 (¥4,800–8,600). If dinner runs late, keep the market and massage and shorten the walk.',ja:'夕食・散歩・市場の後に60分マッサージ。可能なら20:30–21:30を事前予約。Nil Spaは現在22:00まで。2人合計約฿1,000–1,800（¥4,800–8,600）。夕食が長引いたら散歩を短縮し、市場とマッサージを優先。',th:'นวด 60 นาทีหลังอาหารเย็น เดินเล่น และตลาด หากเป็นไปได้ให้จอง 20:30–21:30 ล่วงหน้า ปัจจุบัน Nil Spa ปิด 22:00 งบรวม 2 คนประมาณ ฿1,000–1,800 (¥4,800–8,600) หากมื้อเย็นล่าช้า ให้ลดเวลาเดินเล่นและเก็บตลาดกับนวดไว้'};
  }

  let roomFruit=p('d26_fruit_room');
  if(!roomFruit){
    roomFruit={id:'d26_fruit_room',day:26,time:'21:30+',
      title:{zh:'回房间吃水果、休息',en:'Fruit in the room & rest',ja:'部屋でフルーツ・休憩',th:'กินผลไม้ในห้องและพักผ่อน'},
      desc:{zh:'按摩结束后回房间吃刚买的水果，早点休息，为27号格兰岛留体力。',en:'After the massage, return to the room, eat the fruit you bought and rest early for Koh Larn the next day.',ja:'マッサージ後は部屋に戻り、買ったフルーツを食べて翌日のラン島に備えて早めに休む。',th:'หลังนวดกลับห้อง กินผลไม้ที่ซื้อมา และพักผ่อนให้เพียงพอสำหรับเกาะล้านวันถัดไป'},
      map:'https://www.google.com/maps/search/?api=1&query=Garden+Cliff+Resort+%26+Spa+Pattaya',
      web:'https://gardencliffpattaya.com/',est:'฿0 / ¥0',actual:false};
    plans26.push(roomFruit);
  }

  const order=['d26_f1','d26_f2','d26_1','d26_snack','d26_wait','d26_2','d26_lunch','d26_3','d26_4','d26_5','d26_walk','d26_6','d26_7','d26_massage','d26_fruit_room'];
  const rank=new Map(order.map((id,i)=>[id,i]));
  plans26.sort((a,b)=>(rank.has(a.id)?rank.get(a.id):999)-(rank.has(b.id)?rank.get(b.id):999));
})();
