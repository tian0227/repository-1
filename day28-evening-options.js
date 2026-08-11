(function(){
  if(typeof plans28==='undefined')return;
  const T=(zh,en,ja,th)=>({zh,en,ja,th});
  const p=id=>plans28.find(x=>x.id===id);

  const jim=p('28i');
  if(jim){
    jim.time='15:20–16:40';
    jim.title=T('Jim Thompson House','Jim Thompson House','Jim Thompson House','Jim Thompson House');
    jim.desc=T(
      '参观主宅与庭院，16:40左右离开。当天后半程以 SkyFlyers 落日时间为核心，不在这里拖到闭馆。',
      'Visit the house and garden, then leave around 16:40. Keep the SkyFlyers sunset window as the key timing for the rest of the day.',
      '邸宅と庭園を見学し、16:40頃に出発。後半はSkyFlyersの夕暮れ時間を最優先にする。',
      'เที่ยวบ้านและสวน แล้วออกประมาณ 16:40 โดยให้ช่วงพระอาทิตย์ตกของ SkyFlyers เป็นเวลาหลักของช่วงเย็น'
    );
  }

  const transfer=p('28j');
  if(transfer){
    transfer.time='16:40–17:20左右';
    transfer.title=T('Jim Thompson → Asiatique｜Grab/Bolt','Jim Thompson → Asiatique | Grab/Bolt','Jim Thompson → Asiatique｜Grab/Bolt','Jim Thompson → Asiatique | Grab/Bolt');
    transfer.desc=T(
      '主方案直接 Grab/Bolt，按30–40分钟预留。出发前看实时路况；如果道路ETA明显失控，再临时改 BTS National Stadium → Siam → Saphan Taksin → 接驳船。目标17:20左右到 Asiatique。',
      'Main plan: take Grab/Bolt and allow 30–40 minutes. Check live traffic before leaving; if road ETA becomes excessive, switch to BTS National Stadium → Siam → Saphan Taksin → shuttle boat. Target arrival is around 17:20.',
      '基本はGrab/Boltで30〜40分を確保。出発前に交通状況を確認し、道路の所要時間が大幅に伸びる場合はBTS National Stadium → Siam → Saphan Taksin → シャトル船へ切り替える。17:20頃到着を目標。',
      'แผนหลักใช้ Grab/Bolt เผื่อ 30–40 นาที เช็กการจราจรแบบเรียลไทม์ก่อนออก หากเวลารถติดยาวมากค่อยเปลี่ยนเป็น BTS National Stadium → Siam → Saphan Taksin → เรือรับส่ง เป้าหมายถึงประมาณ 17:20'
    );
    transfer.map='https://www.google.com/maps/dir/?api=1&origin=Jim+Thompson+House+Museum+Bangkok&destination=Asiatique+The+Riverfront+Bangkok&travelmode=driving';
    transfer.web='https://www.thailandtravel.or.jp/asiatique-the-riverfront/';
    transfer.est='฿150–300 / ¥720–1,440';
  }

  ['28k','28l','28m','28n','28o','28p','28q'].forEach(id=>{
    const i=plans28.findIndex(x=>x.id===id);
    if(i>=0)plans28.splice(i,1);
  });

  plans28.push(
    {id:'28k',day:28,time:'17:20–18:45',
      title:T('Asiatique + SkyFlyers｜落日','Asiatique + SkyFlyers | sunset','Asiatique + SkyFlyers｜夕暮れ','Asiatique + SkyFlyers | พระอาทิตย์ตก'),
      desc:T(
        '17:20左右到达后先找入口、拍照。目标18:10–18:40之间乘坐 SkyFlyers，看18:30前后的落日；天气、排队和当天运营情况优先。',
        'Arrive around 17:20, locate the entrance and take a few photos. Aim to ride SkyFlyers between about 18:10 and 18:40 for the sunset around 18:30; adjust for weather, queues and actual operations.',
        '17:20頃到着後、入口確認と写真。18:10〜18:40頃の乗車を目標に、18:30前後の夕日を見る。天候・待ち時間・当日の運行状況を優先。',
        'ถึงประมาณ 17:20 หา入口และถ่ายรูปก่อน ตั้งเป้านั่ง SkyFlyers ช่วง 18:10–18:40 เพื่อชมพระอาทิตย์ตกราว 18:30 โดยยึดสภาพอากาศ คิว และการเปิดให้บริการจริง'
      ),
      map:'https://www.google.com/maps/search/?api=1&query=SkyFlyers+Wings+of+Garudapterus+Asiatique+Bangkok',
      web:'https://www.thailandtravel.or.jp/skyflyers/',est:'฿640 / ¥3,070'},

    {id:'28l',day:28,time:'18:45–19:00',actual:false,
      title:T('PLAN A｜Asiatique 河景 + 拍照','PLAN A | Asiatique river view + photos','PLAN A｜Asiatique 川沿い + 写真','PLAN A | วิวแม่น้ำ Asiatique + ถ่ายรูป'),
      desc:T(
        'SkyFlyers 结束后只留15分钟左右看河景、拍照，不在这里正式吃晚饭。真正的晚餐和夜市体验留给 JODD FAIRS。',
        'After SkyFlyers, keep only about 15 minutes for the river view and photos. Do not have the main dinner here; save dinner and the night-market experience for JODD FAIRS.',
        'SkyFlyers後は川沿いの景色と写真に約15分だけ使い、ここでは本格的な夕食を取らない。夕食と夜市体験はJODD FAIRSへ。',
        'หลัง SkyFlyers ใช้เวลาประมาณ 15 นาทีชมวิวแม่น้ำและถ่ายรูป ไม่กินมื้อหลักที่นี่ เก็บมื้อเย็นและประสบการณ์ตลาดกลางคืนไว้ที่ JODD FAIRS'
      ),
      map:'https://www.google.com/maps/search/?api=1&query=Asiatique+The+Riverfront+Bangkok',
      web:'https://www.thailandtravel.or.jp/asiatique-the-riverfront/',est:'฿0 / ¥0'},

    {id:'28m',day:28,time:'19:00–19:40左右',
      title:T('PLAN A｜Asiatique → JODD FAIRS Ratchada','PLAN A | Asiatique → JODD FAIRS Ratchada','PLAN A｜Asiatique → JODD FAIRS Ratchada','PLAN A | Asiatique → JODD FAIRS Ratchada'),
      desc:T(
        '直接 Grab/Bolt，按30–40分钟预留。目标19:40–20:00之间到夜市；如果路况稍慢也没关系，JODD FAIRS 是晚上的主要停留点。',
        'Take Grab/Bolt directly and allow 30–40 minutes. Aim to reach the market between about 19:40 and 20:00; a small delay is fine because JODD FAIRS is the main evening stop.',
        'Grab/Boltで直行し30〜40分を確保。19:40〜20:00頃の到着を目標。多少遅れても問題なく、JODD FAIRSが夜のメイン。',
        'ใช้ Grab/Bolt ตรงไป เผื่อ 30–40 นาที เป้าหมายถึงประมาณ 19:40–20:00 ช้ากว่านี้เล็กน้อยก็ไม่เป็นไร เพราะ JODD FAIRS เป็นจุดหลักของช่วงค่ำ'
      ),
      map:'https://www.google.com/maps/dir/?api=1&origin=Asiatique+The+Riverfront+Bangkok&destination=JODD+FAIRS+Ratchada+Bangkok&travelmode=driving',
      web:'https://www.thailandtravel.or.jp/jodd-fairs/',est:'฿180–320 / ¥860–1,540'},

    {id:'28n',day:28,time:'19:40/20:00–22:00',
      title:T('PLAN A｜JODD FAIRS｜晚餐 + 小吃 + 水果','PLAN A | JODD FAIRS | dinner + snacks + fruit','PLAN A｜JODD FAIRS｜夕食 + 軽食 + フルーツ','PLAN A | JODD FAIRS | มื้อเย็น + ของกินเล่น + ผลไม้'),
      desc:T(
        '这里才是当天晚餐和夜市体验的主场。边逛边吃泰国小吃、海鲜、甜品和水果，约22:00离开。',
        'This is the main dinner and night-market experience. Browse while eating Thai snacks, seafood, desserts and fruit, then leave around 22:00.',
        'ここが夕食と夜市体験のメイン。タイの軽食、シーフード、デザート、フルーツを食べ歩き、22:00頃に出発。',
        'นี่คือจุดหลักสำหรับมื้อเย็นและตลาดกลางคืน เดินกินของว่างไทย ซีฟู้ด ของหวาน และผลไม้ แล้วออกประมาณ 22:00'
      ),
      map:'https://www.google.com/maps/search/?api=1&query=JODD+FAIRS+Ratchada+Bangkok',
      web:'https://www.thailandtravel.or.jp/jodd-fairs/',est:'฿600–1,400 / ¥2,880–6,720'},

    {id:'28o',day:28,time:'22:00–22:25',
      title:T('PLAN A｜JODD FAIRS → Furama','PLAN A | JODD FAIRS → Furama','PLAN A｜JODD FAIRS → Furama','PLAN A | JODD FAIRS → Furama'),
      desc:T(
        '步行到 MRT Thailand Cultural Centre，蓝线直达 Sukhumvit，再步行回 FuramaXclusive Asoke。',
        'Walk to MRT Thailand Cultural Centre, take the Blue Line directly to Sukhumvit, then walk back to FuramaXclusive Asoke.',
        'MRT Thailand Cultural Centreまで歩き、Blue LineでSukhumvitへ直行。その後FuramaXclusive Asokeまで徒歩。',
        'เดินไป MRT Thailand Cultural Centre นั่งสายสีน้ำเงินตรงไป Sukhumvit แล้วเดินกลับ FuramaXclusive Asoke'
      ),
      map:'https://www.google.com/maps/dir/?api=1&origin=JODD+FAIRS+Ratchada+Bangkok&destination=FuramaXclusive+Asoke+Bangkok&travelmode=transit',
      web:'https://metro.bemplc.co.th/',est:'฿60–100 / ¥290–480'},

    {id:'28p',day:28,time:'18:45–21:45',optional:true,actual:false,
      title:T('PLAN B｜时间/体力不足：留在 Asiatique','PLAN B | If short on time/energy: stay at Asiatique','PLAN B｜時間・体力不足：Asiatiqueに滞在','PLAN B | ถ้าเวลา/แรงไม่พอ: อยู่ Asiatique'),
      desc:T(
        '只有当天明显太累、下雨或交通异常时才启用。SkyFlyers 后直接留在 Asiatique 吃泰餐/海鲜、看河景，再回酒店。Plan B 与 Plan A 二选一。',
        'Use only if you are clearly too tired, it rains, or transport is unusually disrupted. After SkyFlyers, stay at Asiatique for Thai food/seafood and river views, then return to the hotel. Choose either Plan A or Plan B.',
        '明らかに疲れている、雨、交通の大きな乱れがある場合のみ使用。SkyFlyers後はAsiatiqueでタイ料理/シーフードと川景色を楽しみ、ホテルへ戻る。Plan Aとの二者択一。',
        'ใช้เฉพาะกรณีเหนื่อยมาก ฝนตก หรือการเดินทางผิดปกติ หลัง SkyFlyers อยู่ Asiatique กินอาหารไทย/ซีฟู้ด ชมวิวแม่น้ำ แล้วกลับโรงแรม เลือก Plan A หรือ Plan B อย่างใดอย่างหนึ่ง'
      ),
      map:'https://www.google.com/maps/dir/?api=1&origin=Asiatique+The+Riverfront+Bangkok&destination=FuramaXclusive+Asoke+Bangkok&travelmode=driving',
      web:'https://www.thailandtravel.or.jp/asiatique-the-riverfront/',
      est:T('备选｜不计入主预算','Backup | not counted in main budget','予備案｜主予算に含めない','แผนสำรอง | ไม่รวมในงบหลัก')}
  );
})();
