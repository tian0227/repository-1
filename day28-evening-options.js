(function(){
  if(typeof plans28==='undefined')return;
  const T=(zh,en,ja,th)=>({zh,en,ja,th});
  const p=id=>plans28.find(x=>x.id===id);

  const jim=p('28i');
  if(jim){
    jim.time='15:20–16:45';
    jim.title=T('Jim Thompson House','Jim Thompson House','Jim Thompson House','Jim Thompson House');
    jim.desc=T(
      '参观主宅与庭院，16:45左右离开。不要拖到闭馆，给前往 Asiatique 和 SkyFlyers 落日时段留足余量。',
      'Visit the house and garden, then leave around 16:45. Do not stay until closing; keep enough buffer for Asiatique and the SkyFlyers sunset window.',
      '邸宅と庭園を見学し、16:45頃に出発。閉館まで滞在せず、Asiatiqueへの移動とSkyFlyersの夕暮れ時間に余裕を残す。',
      'เที่ยวบ้านและสวน แล้วออกประมาณ 16:45 ไม่ควรอยู่จนปิด เพื่อเผื่อเวลาเดินทางไป Asiatique และช่วงพระอาทิตย์ตกของ SkyFlyers'
    );
  }

  const transfer=p('28j');
  if(transfer){
    transfer.time='16:45–17:50';
    transfer.title=T(
      'Jim Thompson → Asiatique The Riverfront',
      'Jim Thompson → Asiatique The Riverfront',
      'Jim Thompson → Asiatique The Riverfront',
      'Jim Thompson → Asiatique The Riverfront'
    );
    transfer.desc=T(
      '推荐公共交通：从 Jim Thompson 步行到 BTS National Stadium，经 Siam 换乘 Silom Line 到 Saphan Taksin，2号口前往 Sathorn Pier，再搭 Asiatique 免费接驳船。若等车/等船时间过长，直接 Grab/Bolt 去 Asiatique，优先保证 SkyFlyers 落日时间。',
      'Recommended route: walk to BTS National Stadium, change at Siam to the Silom Line for Saphan Taksin, use Exit 2 for Sathorn Pier, then take the free Asiatique shuttle boat. If rail/boat waiting becomes too long, use Grab/Bolt directly and protect the SkyFlyers sunset timing.',
      'おすすめは公共交通。Jim ThompsonからBTS National Stadiumへ歩き、SiamでSilom Lineに乗換えてSaphan Taksinへ。2番出口からSathorn Pierへ行き、Asiatiqueの無料シャトル船を利用。待ち時間が長ければGrab/Boltへ切り替え、SkyFlyersの夕暮れ時間を優先。',
      'แนะนำขนส่งสาธารณะ: เดินจาก Jim Thompson ไป BTS National Stadium เปลี่ยนสายที่ Siam ไป Silom Line ลง Saphan Taksin ออกทางออก 2 ไป Sathorn Pier แล้วขึ้นเรือรับส่งฟรีของ Asiatique หากรอรถหรือเรือนาน ให้ใช้ Grab/Bolt ตรงไปเพื่อรักษาเวลาพระอาทิตย์ตกของ SkyFlyers'
    );
    transfer.map='https://www.google.com/maps/dir/?api=1&origin=Jim+Thompson+House+Museum+Bangkok&destination=Asiatique+The+Riverfront+Bangkok&travelmode=transit';
    transfer.web='https://www.thailandtravel.or.jp/asiatique-the-riverfront/';
    transfer.est='฿100–250 / ¥480–1,200';
  }

  ['28k','28l','28m','28n'].forEach(id=>{
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
    {id:'28l',day:28,time:'18:45–21:15',
      title:T('Asiatique｜河边晚餐 + 夜景 + 随意逛','Asiatique | riverside dinner + night views','Asiatique｜川沿いディナー + 夜景','Asiatique | อาหารเย็นริมแม่น้ำ + วิวกลางคืน'),
      desc:T(
        '坐完 SkyFlyers 后不再赶下一站，就留在 Asiatique。找一家河边或园区内的泰餐/海鲜餐厅吃晚饭，之后沿湄南河散步、拍夜景，看到喜欢的小店再逛。节奏放松，不安排必须打卡的第二个夜市。',
        'After SkyFlyers, stay at Asiatique rather than rushing elsewhere. Have Thai food or seafood at a riverside or on-site restaurant, then walk along the Chao Phraya, take night photos and browse only shops that look interesting. No second night market is required.',
        'SkyFlyers後は次の場所へ急がずAsiatiqueに滞在。川沿いまたは園内でタイ料理・シーフードの夕食を取り、チャオプラヤ川沿いを散歩して夜景を撮影。気になる店だけ見て、別の夜市は入れない。',
        'หลัง SkyFlyers อยู่ต่อที่ Asiatique ไม่ต้องรีบไปที่อื่น กินอาหารไทยหรือซีฟู้ดที่ร้านริมแม่น้ำหรือในโครงการ แล้วเดินริมเจ้าพระยา ถ่ายรูปกลางคืน และแวะร้านที่สนใจ ไม่ต้องใส่ตลาดกลางคืนแห่งที่สอง'
      ),
      map:'https://www.google.com/maps/search/?api=1&query=Asiatique+The+Riverfront+Bangkok',
      web:'https://www.thailandtravel.or.jp/asiatique-the-riverfront/',est:'฿800–1,800 / ¥3,840–8,640'},
    {id:'28m',day:28,time:'21:15–22:00',
      title:T('Asiatique → FuramaXclusive Asoke','Asiatique → FuramaXclusive Asoke','Asiatique → FuramaXclusive Asoke','Asiatique → FuramaXclusive Asoke'),
      desc:T(
        '晚上直接回酒店休息。体力好且接驳船/BTS顺的话可原路公共交通返回；更省事就直接 Grab/Bolt 回 FuramaXclusive Asoke。',
        'Return to the hotel for the night. If you still have energy and the boat/BTS connection is smooth, use public transit; otherwise take Grab/Bolt directly to FuramaXclusive Asoke.',
        '夜はそのままホテルへ。体力があり船/BTSの接続が良ければ公共交通、楽に戻りたい場合はGrab/BoltでFuramaXclusive Asokeへ直行。',
        'กลับโรงแรมช่วงค่ำ หากยังมีแรงและเรือ/BTS ต่อสะดวกก็ใช้ขนส่งสาธารณะ หรือเรียก Grab/Bolt ตรงกลับ FuramaXclusive Asoke เพื่อความสะดวก'
      ),
      map:'https://www.google.com/maps/dir/?api=1&origin=Asiatique+The+Riverfront+Bangkok&destination=FuramaXclusive+Asoke+Bangkok&travelmode=driving',
      web:'https://www.furama.com/furamaxclusive/asoke/',est:'฿150–300 / ¥720–1,440'}
  );
})();
