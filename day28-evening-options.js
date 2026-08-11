(function(){
  if(typeof plans28==='undefined')return;
  const T=(zh,en,ja,th)=>({zh,en,ja,th});
  const p=id=>plans28.find(x=>x.id===id);

  const jim=p('28i');
  if(jim){
    jim.time='15:20–16:45';
    jim.title=T('Jim Thompson House','Jim Thompson House','Jim Thompson House','Jim Thompson House');
    jim.desc=T(
      '参观主宅与庭院，16:45左右离开，给前往 Asiatique 和 SkyFlyers 落日时段留足余量。',
      'Visit the house and garden, then leave around 16:45, keeping enough buffer for Asiatique and the SkyFlyers sunset window.',
      '邸宅と庭園を見学し、16:45頃に出発。Asiatiqueへの移動とSkyFlyersの夕暮れ時間に余裕を残す。',
      'เที่ยวบ้านและสวน แล้วออกประมาณ 16:45 เพื่อเผื่อเวลาเดินทางไป Asiatique และช่วงพระอาทิตย์ตกของ SkyFlyers'
    );
  }

  const transfer=p('28j');
  if(transfer){
    transfer.time='16:45–17:50';
    transfer.title=T('Jim Thompson → Asiatique The Riverfront','Jim Thompson → Asiatique The Riverfront','Jim Thompson → Asiatique The Riverfront','Jim Thompson → Asiatique The Riverfront');
    transfer.desc=T(
      '推荐公共交通：步行到 BTS National Stadium，经 Siam 换乘 Silom Line 到 Saphan Taksin，2号口前往 Sathorn Pier，再搭 Asiatique 接驳船。若等车或等船时间过长，直接 Grab/Bolt 去 Asiatique，优先保证 SkyFlyers 落日时间。',
      'Recommended route: walk to BTS National Stadium, change at Siam to the Silom Line for Saphan Taksin, use Exit 2 for Sathorn Pier, then take the Asiatique shuttle boat. If waiting becomes too long, use Grab/Bolt directly and protect the SkyFlyers sunset timing.',
      'BTS National Stadiumまで歩き、SiamでSilom Lineへ乗換え、Saphan Taksinへ。2番出口からSathorn Pierへ行き、Asiatiqueのシャトル船を利用。待ち時間が長ければGrab/Boltに切り替え、SkyFlyersの夕暮れ時間を優先。',
      'เดินไป BTS National Stadium เปลี่ยนสายที่ Siam ไป Silom Line ลง Saphan Taksin ออกทางออก 2 ไป Sathorn Pier แล้วขึ้นเรือไป Asiatique หากรอนานให้ใช้ Grab/Bolt ตรงไปเพื่อรักษาเวลาพระอาทิตย์ตกของ SkyFlyers'
    );
    transfer.map='https://www.google.com/maps/dir/?api=1&origin=Jim+Thompson+House+Museum+Bangkok&destination=Asiatique+The+Riverfront+Bangkok&travelmode=transit';
    transfer.web='https://www.thailandtravel.or.jp/asiatique-the-riverfront/';
    transfer.est='฿100–250 / ¥480–1,200';
  }

  ['28k','28l','28m','28n','28o'].forEach(id=>{
    const i=plans28.findIndex(x=>x.id===id);
    if(i>=0)plans28.splice(i,1);
  });

  plans28.push(
    {id:'28k',day:28,time:'17:50–18:45',
      title:T('Asiatique｜SkyFlyers 落日飞车','Asiatique | SkyFlyers sunset ride','Asiatique｜SkyFlyers サンセット','Asiatique | SkyFlyers ช่วงพระอาทิตย์ตก'),
      desc:T(
        '到 Asiatique 后直接去 SkyFlyers，目标18:10–18:40之间完成排队、乘坐和拍照，尽量覆盖18:30前后的落日。当前参考票价约 ฿320/人；天气、排队和实际运营时间以当天为准。',
        'Go straight to SkyFlyers after arriving at Asiatique. Aim to queue, ride and take photos between about 18:10 and 18:40 to catch the sunset around 18:30. Current reference price is about THB 320/person; weather, queues and operating conditions may change on the day.',
        'Asiatique到着後はSkyFlyersへ直行。18:10〜18:40頃に待ち時間・乗車・写真をまとめ、18:30前後の夕日を狙う。現在の参考料金は1人約฿320。天候・待ち時間・当日の運行状況を優先。',
        'ถึง Asiatique แล้วตรงไป SkyFlyers เป้าหมายคือเข้าแถว เล่น และถ่ายรูปช่วงประมาณ 18:10–18:40 เพื่อชมพระอาทิตย์ตกราว 18:30 ราคาปัจจุบันอ้างอิงประมาณ ฿320/คน โดยให้ยึดสภาพอากาศ คิว และการให้บริการจริงในวันนั้น'
      ),
      map:'https://www.google.com/maps/search/?api=1&query=SkyFlyers+Wings+of+Garudapterus+Asiatique+Bangkok',
      web:'https://www.thailandtravel.or.jp/skyflyers/',est:'฿640 / ¥3,070'},

    {id:'28l',day:28,time:'18:45–22:30',
      title:T('PLAN A｜JODD FAIRS Ratchada（主计划）','PLAN A | JODD FAIRS Ratchada (main plan)','PLAN A｜JODD FAIRS Ratchada（主プラン）','PLAN A | JODD FAIRS Ratchada (แผนหลัก)'),
      desc:T(
        'SkyFlyers 后先在 Asiatique 河边拍照、简单逛到约19:15；随后 Grab/Bolt 前往 JODD FAIRS Ratchada，目标20:00左右到。20:00–22:00在夜市吃晚饭、小吃和水果，再回 FuramaXclusive Asoke。若 SkyFlyers 排队较久，就缩短 Asiatique 散步时间，优先保留 JODD FAIRS。',
        'After SkyFlyers, spend a short time by the river at Asiatique until about 19:15, then take Grab/Bolt to JODD FAIRS Ratchada and aim to arrive around 20:00. Eat dinner, snacks and fruit there from about 20:00–22:00, then return to FuramaXclusive Asoke. If SkyFlyers runs late, shorten the Asiatique stroll and keep JODD FAIRS.',
        'SkyFlyers後はAsiatiqueの川沿いで19:15頃まで写真・軽い散策。その後Grab/BoltでJODD FAIRS Ratchadaへ向かい、20:00頃到着を目標。20:00〜22:00は夜市で夕食・軽食・フルーツを楽しみ、FuramaXclusive Asokeへ戻る。SkyFlyersが遅れた場合はAsiatique散策を短縮し、JODD FAIRSを優先。',
        'หลัง SkyFlyers เดินเล่นและถ่ายรูปริมแม่น้ำที่ Asiatique ถึงประมาณ 19:15 แล้วใช้ Grab/Bolt ไป JODD FAIRS Ratchada ตั้งเป้าถึงราว 20:00 กินมื้อเย็น ของว่าง และผลไม้ถึงประมาณ 22:00 แล้วกลับ FuramaXclusive Asoke หาก SkyFlyers ล่าช้า ให้ลดเวลาเดินที่ Asiatique และเก็บ JODD FAIRS ไว้'
      ),
      map:'https://www.google.com/maps/dir/?api=1&origin=Asiatique+The+Riverfront+Bangkok&destination=JODD+FAIRS+Ratchada+Bangkok&travelmode=driving',
      web:'https://www.thailandtravel.or.jp/jodd-fairs/',est:'฿800–1,800 / ¥3,840–8,640'},

    {id:'28m',day:28,time:'18:45–21:45',optional:true,actual:false,
      title:T('PLAN B｜留在 Asiatique（轻松备选）','PLAN B | Stay at Asiatique (easy backup)','PLAN B｜Asiatiqueに滞在（ゆったり案）','PLAN B | อยู่ต่อที่ Asiatique (แผนสบาย)'),
      desc:T(
        '如果当天太累、下雨、堵车严重，或 SkyFlyers 排队明显超时，就不再赶 JODD FAIRS。直接留在 Asiatique 吃泰餐/海鲜、看湄南河夜景、逛园区，约21:15左右离开并返回 FuramaXclusive Asoke。这个方案是备选，不与 Plan A 同时执行。',
        'If you are tired, it rains, traffic is severe, or the SkyFlyers queue runs very late, skip JODD FAIRS. Stay at Asiatique for Thai food or seafood, river views and browsing, then leave around 21:15 for FuramaXclusive Asoke. This is an alternative to Plan A, not an additional stop.',
        '疲れ・雨・ひどい渋滞・SkyFlyersの大幅な待ち時間がある場合はJODD FAIRSへ行かず、Asiatiqueでタイ料理/シーフード、川沿いの夜景、散策を楽しむ。21:15頃に出発してFuramaXclusive Asokeへ戻る。Plan Aとの二者択一。',
        'หากเหนื่อย ฝนตก รถติดหนัก หรือคิว SkyFlyers ล่าช้ามาก ให้ข้าม JODD FAIRS และอยู่ที่ Asiatique กินอาหารไทย/ซีฟู้ด ชมวิวแม่น้ำ และเดินเล่น แล้วออกประมาณ 21:15 กลับ FuramaXclusive Asoke เป็นตัวเลือกแทน Plan A ไม่ทำทั้งสองแผนพร้อมกัน'
      ),
      map:'https://www.google.com/maps/dir/?api=1&origin=Asiatique+The+Riverfront+Bangkok&destination=FuramaXclusive+Asoke+Bangkok&travelmode=driving',
      web:'https://www.thailandtravel.or.jp/asiatique-the-riverfront/',
      est:T('备选｜不计入主预算','Backup | not counted in main budget','予備案｜主予算に含めない','แผนสำรอง | ไม่รวมในงบหลัก')}
  );
})();
