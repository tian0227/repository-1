(function(){
  if(typeof plans26==='undefined')return;
  const p=id=>plans26.find(x=>x.id===id);
  const rm=id=>{const i=plans26.findIndex(x=>x.id===id);if(i>=0)plans26.splice(i,1)};

  const hotel=p('d26_4');
  if(hotel){
    hotel.time='17:00–17:20（目标）';
    hotel.desc={
      zh:'到店后快速办理入住、放行李。酒店已订，8月26–27日两晚，两人合计 ¥21,000。入住时可顺便确认酒店往返 Terminal 21 Gate 2 的免费 Shuttle Bus 当天班次；若时间不合适就直接叫车。',
      en:'Check in quickly and drop the luggage. The hotel is booked for Aug 26–27, two nights for two, ¥21,000 total. At check-in, confirm the complimentary shuttle schedule to Terminal 21 Gate 2; use a car if the timing does not fit.',
      ja:'到着後すぐチェックインして荷物を置く。8月26–27日2泊、2人合計¥21,000で予約済み。チェックイン時にTerminal 21 Gate 2往復の無料シャトル当日便を確認し、時間が合わなければ車で移動。',
      th:'เช็กอินและวางกระเป๋าอย่างรวดเร็ว จอง 26–27 ส.ค. 2 คืน 2 คน รวม ¥21,000 ตอนเช็กอินให้ถามรอบรถรับส่งฟรีไป Terminal 21 Gate 2 หากเวลาไม่พอดีให้เรียกรถแทน'
    };
  }

  rm('d26_walk');
  rm('d26_massage');
  rm('d26_fruit_room');

  const dinner=p('d26_5');
  if(dinner){
    dinner.time='17:40–19:10（目标）';
    dinner.title={
      zh:'海边晚餐｜4家保留备选，按当天情况选',
      en:'Seaside dinner | keep 4 options and choose on the day',
      ja:'海辺ディナー｜4店を候補に残し当日決定',
      th:'มื้อเย็นริมทะเล | เก็บ 4 ร้านไว้แล้วเลือกวันจริง'
    };
    dinner.desc={
      zh:'四家全部保留，不提前锁死。选择规则：① The Glass House Silver｜优先推荐：顺利到酒店、时间充裕，想要第一晚更有海边度假氛围；② Moom Aroi Na Kluea｜海鲜优先：当天特别想认真吃一顿泰式海鲜；③ Bamboo Beach｜轻松省时：有点累，但还想在海边吃，方便控制用餐时间；④ Garden Cliff Chomtalay｜晚到备用：堵车、入住较晚或已经很累时直接在酒店吃，最大限度保留 Terminal 21 购物时间。目标19:10左右结束；若抵达明显延误，优先从 Bamboo Beach / Chomtalay 中选择。',
      en:'Keep all four options and decide on the day. ① The Glass House Silver | top choice when arrival is smooth and you want a more atmospheric first-night seaside dinner; ② Moom Aroi Na Kluea | seafood-first choice for a proper Thai seafood meal; ③ Bamboo Beach | easy and time-efficient when tired but still wanting the beach; ④ Garden Cliff Chomtalay | late-arrival backup inside the hotel to preserve shopping time at Terminal 21. Aim to finish around 19:10; if arrival is delayed, favor Bamboo Beach or Chomtalay.',
      ja:'4店すべて候補として残し、当日の状況で決定。① The Glass House Silver｜第一候補：到着が順調で、初日の海辺リゾート感を重視したい時；② Moom Aroi Na Kluea｜シーフード優先：タイ式シーフードをしっかり食べたい時；③ Bamboo Beach｜気軽・時短：少し疲れているが海辺で食べたい時；④ Garden Cliff Chomtalay｜遅着バックアップ：渋滞や遅いチェックイン、疲労時にホテル内で食べてTerminal 21の買い物時間を確保。19:10頃の終了を目標にし、遅れた場合はBamboo Beach / Chomtalayを優先。',
      th:'เก็บทั้ง 4 ร้านไว้และเลือกตามสถานการณ์วันจริง ① The Glass House Silver | ตัวเลือกหลักเมื่อถึงโรงแรมตรงเวลาและอยากได้บรรยากาศริมทะเลคืนแรก ② Moom Aroi Na Kluea | เน้นซีฟู้ดไทยแบบจริงจัง ③ Bamboo Beach | สบายและประหยัดเวลาเมื่อเหนื่อยแต่ยังอยากกินริมทะเล ④ Garden Cliff Chomtalay | สำรองกรณีมาถึงช้า รถติด หรือเหนื่อย เพราะอยู่ในโรงแรมและช่วยเก็บเวลาไปช้อปที่ Terminal 21 เป้าหมายกินเสร็จราว 19:10 หากล่าช้ามากให้เลือก Bamboo Beach หรือ Chomtalay ก่อน'
    };
    dinner.est='฿500–2,200 / ¥2,400–10,560';
  }

  let terminal=p('d26_terminal21');
  if(!terminal){
    terminal={id:'d26_terminal21',day:26,time:'19:30–21:35',
      title:{zh:'Terminal 21 Pattaya｜泳装 + 罩衫 + 女装',en:'Terminal 21 Pattaya | swimwear + cover-up + womenswear',ja:'Terminal 21 Pattaya｜水着 + カバーアップ + レディース',th:'Terminal 21 Pattaya | ชุดว่ายน้ำ + ชุดคลุม + เสื้อผ้าผู้หญิง'},
      desc:{zh:'26号只解决27号格兰岛必须用的购物：先看 GENTLEWOMAN 的泳装/罩衫，再看裙子、短裤、吊带和其他女装；看到特别喜欢的再买，不要求把整个商场逛完。目标21:35左右结束，给买水果留时间。',en:'Focus only on what is useful for Koh Larn on the 27th: start with GENTLEWOMAN for swimwear/cover-ups, then browse dresses, shorts, camisoles and other womenswear. Buy only what you genuinely like; do not try to cover the whole mall. Aim to finish around 21:35 and leave time for fruit.',ja:'27日のラン島で必要な買い物を優先。まずGENTLEWOMANで水着・カバーアップを見て、その後ワンピース、ショートパンツ、キャミソールなどのレディースをチェック。気に入った物だけ買い、全館制覇は狙わない。21:35頃に終えてフルーツ購入時間を確保。',th:'เน้นซื้อของที่ต้องใช้สำหรับเกาะล้านวันที่ 27 เริ่มจาก GENTLEWOMAN ดูชุดว่ายน้ำและชุดคลุม แล้วค่อยดูเดรส กางเกงขาสั้น เสื้อสายเดี่ยว และเสื้อผ้าผู้หญิงอื่นๆ ซื้อเฉพาะที่ชอบ ไม่ต้องเดินทั้งห้าง เป้าหมายเสร็จราว 21:35 เพื่อเหลือเวลาซื้อผลไม้'},
      map:'https://www.google.com/maps/search/?api=1&query=Terminal+21+Pattaya',
      web:'https://www.terminal21.co.th/pattaya/',est:'购物自定',actual:false};
    plans26.push(terminal);
  }else{
    terminal.time='19:30–21:35';
  }

  const fruit=p('d26_6');
  if(fruit){
    fruit.time='21:35–21:55';
    fruit.title={zh:'Terminal 21｜顺路买水果',en:'Terminal 21 | buy fruit before leaving',ja:'Terminal 21｜帰る前にフルーツ購入',th:'Terminal 21 | ซื้อผลไม้ก่อนกลับ'};
    fruit.desc={zh:'购物结束后直接在商场里的超市/食品区买水果，不再专程去 New Naklua Market。按当天品质挑芒果、山竹、红毛丹、龙眼、椰子等，带回酒店晚上吃或第二天早上吃。',en:'After shopping, buy fruit directly in the mall supermarket/food area instead of making a separate trip to New Naklua Market. Choose mango, mangosteen, rambutan, longan, coconut or other fruit based on freshness and take it back to the hotel.',ja:'買い物後はNew Naklua Marketへ別移動せず、モール内のスーパー／食品エリアでフルーツを購入。マンゴー、マンゴスチン、ランブータン、ロンガン、ココナッツなどを当日の状態で選びホテルへ持ち帰る。',th:'หลังช้อปให้ซื้อผลไม้ในซูเปอร์มาร์เก็ต/โซนอาหารของห้างเลย ไม่ต้องไป New Naklua Market เพิ่ม เลือกมะม่วง มังคุด เงาะ ลำไย มะพร้าว ฯลฯ ตามความสด แล้วนำกลับโรงแรม'};
    fruit.map='https://www.google.com/maps/search/?api=1&query=Terminal+21+Pattaya';
    fruit.web='https://www.terminal21.co.th/pattaya/';
    fruit.est='฿150–400 / ¥720–1,920';
  }

  const back=p('d26_7');
  if(back){
    back.time='22:00+';
    back.title={zh:'回 Garden Cliff｜水果 + 休息',en:'Return to Garden Cliff | fruit & rest',ja:'Garden Cliffへ戻る｜フルーツ・休憩',th:'กลับ Garden Cliff | กินผลไม้และพักผ่อน'};
    back.desc={zh:'买完水果直接回酒店。当天不再安排按摩，回房间吃水果、洗澡休息，为27号格兰岛留体力。',en:'Return directly to the hotel after buying fruit. No massage is scheduled tonight; have fruit, shower and rest for Koh Larn the next day.',ja:'フルーツ購入後はホテルへ直帰。この夜はマッサージを入れず、部屋でフルーツ・シャワー・休憩。翌日のラン島に備える。',th:'ซื้อผลไม้แล้วกลับโรงแรมตรง คืนนี้ไม่ใส่นวด กลับห้องกินผลไม้ อาบน้ำ และพักผ่อนเพื่อเกาะล้านวันถัดไป'};
    back.map='https://www.google.com/maps/search/?api=1&query=Garden+Cliff+Resort+%26+Spa+Pattaya';
    back.web='https://gardencliffpattaya.com/';
    back.est='交通按实际';
  }

  const order=['d26_f1','d26_f2','d26_1','d26_snack','d26_wait','d26_2','d26_lunch','d26_3','d26_4','d26_5','d26_terminal21','d26_6','d26_7'];
  const rank=new Map(order.map((id,i)=>[id,i]));
  plans26.sort((a,b)=>(rank.has(a.id)?rank.get(a.id):999)-(rank.has(b.id)?rank.get(b.id):999));
})();
