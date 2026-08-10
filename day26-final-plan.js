(function(){
  if(typeof plans26==='undefined')return;
  const T=(zh,en,ja,th)=>({zh,en,ja,th});
  const p=id=>plans26.find(x=>x.id===id);

  const dinner=p('d26_5');
  if(dinner){
    dinner.time='17:40–19:10（目标）';
    dinner.title=T(
      'Bamboo Beach 海边晚餐｜主计划 + 3家备用',
      'Bamboo Beach dinner | main plan + 3 backups',
      'Bamboo Beach 海辺ディナー｜主計画 + 3候補',
      'มื้อเย็น Bamboo Beach | แผนหลัก + 3 ตัวสำรอง'
    );
    dinner.desc=T(
      '默认主计划是 Bamboo Beach：离 Garden Cliff 很近、步行可达、海边、价格相对轻松，吃完直接去 Terminal 21 最省事。Moom Aroi 保留为想吃丰盛泰式海鲜时的备用；The Glass House Silver 保留为环境/拍照备用；Chomtalay 仅在航班、入境或堵车严重延误时兜底。四家都保留，不删除。目标19:10左右结束。',
      'The default main plan is Bamboo Beach: very close to Garden Cliff, walkable, seaside and relatively easy on the budget, with the simplest onward trip to Terminal 21. Keep Moom Aroi as the fuller Thai-seafood backup, The Glass House Silver for atmosphere/photos, and Chomtalay only as a serious-delay fallback. Keep all four. Aim to finish around 19:10.',
      'デフォルトの主計画はBamboo Beach。Garden Cliffから近く徒歩圏、海辺で価格も比較的気軽で、食後そのままTerminal 21へ向かう流れが最も楽。Moom Aroiはしっかりしたタイ式シーフードを食べたい時、The Glass House Silverは雰囲気・写真重視、Chomtalayは大幅遅延時の保険として残す。4店すべて保持。19:10頃の終了が目標。',
      'แผนหลักเริ่มต้นคือ Bamboo Beach เพราะอยู่ใกล้ Garden Cliff เดินถึง ริมทะเล ราคาสบายกว่า และไป Terminal 21 ต่อได้ง่ายที่สุด เก็บ Moom Aroi เป็นตัวสำรองเมื่ออยากกินซีฟู้ดไทยจัดเต็ม The Glass House Silver สำหรับบรรยากาศ/ถ่ายรูป และ Chomtalay สำหรับกรณีดีเลย์หนัก เก็บทั้ง 4 ร้านไว้ เป้าหมายเสร็จราว 19:10'
    );
  }

  let massage=p('d26_massage');
  if(!massage){
    massage={
      id:'d26_massage',day:26,time:'弹性 / Flex',optional:true,
      title:T(
        '有时间再考虑｜Nil Spa 按摩 60分钟',
        'If time allows | Nil Spa 60-min massage',
        '時間があれば｜Nil Spa 60分マッサージ',
        'ถ้ามีเวลาค่อยไป | นวด Nil Spa 60 นาที'
      ),
      desc:T(
        '纯备选，不占固定时段，也不要为了按摩赶时间。只有当天明显提前到酒店，或从 Terminal 21 回来后仍有时间、Nil Spa 还营业且两个人都不累时才考虑。入住时顺便问前台营业时间和是否需要预约；任何情况下都以 Bamboo Beach → Terminal 21 → 水果 → 回酒店休息这条主线为优先。',
        'Purely optional with no fixed slot. Do not rush the schedule for a massage. Consider it only if you reach the hotel clearly ahead of schedule, or after returning from Terminal 21 if there is still time, Nil Spa is open and both of you still have energy. Ask reception about hours and booking at check-in. The Bamboo Beach → Terminal 21 → fruit → hotel flow always has priority.',
        '固定時間を持たない完全な任意項目。マッサージのために急がない。ホテルへかなり早く着いた場合、またはTerminal 21から戻った後も時間があり、Nil Spaが営業中で2人とも疲れていない場合だけ検討。チェックイン時に営業時間と予約要否を確認する。Bamboo Beach → Terminal 21 → フルーツ → ホテル休憩の主計画を常に優先。',
        'เป็นตัวเลือกเสริมล้วน ๆ ไม่มีเวลาบังคับ และไม่ต้องรีบเพื่อนวด พิจารณาเฉพาะเมื่อถึงโรงแรมเร็วกว่ากำหนดมาก หรือหลังกลับจาก Terminal 21 แล้วยังมีเวลา Nil Spa ยังเปิด และทั้งสองคนยังไม่เหนื่อย ตอนเช็กอินให้ถามเวลาเปิดและต้องจองไหม แผน Bamboo Beach → Terminal 21 → ซื้อผลไม้ → กลับโรงแรมต้องมาก่อนเสมอ'
      ),
      map:'https://www.google.com/maps/search/?api=1&query=Garden+Cliff+Resort+%26+Spa+Pattaya',
      web:'https://gardencliffpattaya.com/facilities.html',
      est:'฿1,000–1,800 / ¥4,800–8,600'
    };
    plans26.push(massage);
  }else{
    massage.time='弹性 / Flex';
    massage.optional=true;
  }

  const order=['d26_f1','d26_f2','d26_1','d26_snack','d26_wait','d26_2','d26_lunch','d26_3','d26_4','d26_5','d26_terminal21','d26_6','d26_7','d26_massage'];
  const rank=new Map(order.map((id,i)=>[id,i]));
  plans26.sort((a,b)=>(rank.has(a.id)?rank.get(a.id):999)-(rank.has(b.id)?rank.get(b.id):999));

  function styleOptional(){
    if(!document.getElementById('d26FinalPlanStyle')){
      const s=document.createElement('style');s.id='d26FinalPlanStyle';s.textContent='\n#trip_d26_massage{opacity:.78;border:1px dashed #ccd8d4;border-radius:12px;padding:9px 7px 7px;background:#fbfcfb}\n#trip_d26_massage .dot{background:#8aa099!important;border-color:#eef3f1!important}\n#trip_d26_massage .time{color:#7b8a85!important}\n#trip_d26_massage .event strong{color:#53645f!important}\n';document.head.appendChild(s);
    }
  }
  window.addEventListener('load',()=>setTimeout(styleOptional,700));
})();
