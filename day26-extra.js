(function(){
  if(typeof plans26==='undefined'||plans26.some(p=>p.id==='26massage'))return;
  const item={
    id:'26massage',day:26,time:'18:10–19:10',
    title:{zh:'Garden Cliff｜Nil Spa 按摩 60分钟',en:'Garden Cliff | Nil Spa 60-min massage',ja:'Garden Cliff｜Nil Spa 60分マッサージ',th:'Garden Cliff | นวด Nil Spa 60 นาที'},
    desc:{
      zh:'吃晚饭前在酒店做1小时按摩。两人预计约 ฿1,000–1,800（约 ¥4,800–8,600）；不同按摩项目价格会有差异，入住后看当日价目表确认。',
      en:'Have a 60-minute massage at the hotel before dinner. Estimated total for two: about ฿1,000–1,800 (≈ ¥4,800–8,600). Exact prices vary by treatment; confirm the current menu after check-in.',
      ja:'夕食前にホテルで60分マッサージ。2人合計の目安は約฿1,000–1,800（約¥4,800–8,600）。メニューにより料金が異なるため、チェックイン後に当日の料金表を確認。',
      th:'นวดที่โรงแรม 60 นาทีก่อนอาหารเย็น งบรวม 2 คนประมาณ ฿1,000–1,800 (ประมาณ ¥4,800–8,600) ราคาจริงขึ้นอยู่กับประเภทการนวด ให้เช็กราคาหลังเช็กอิน'
    },
    map:'https://www.google.com/maps/search/?api=1&query=Garden+Cliff+Resort+%26+Spa+Pattaya',
    web:'https://gardencliffpattaya.com/facilities.html',
    est:'฿1,000–1,800 / ¥4,800–8,600'
  };
  const i=plans26.findIndex(p=>p.id==='d26_5');
  if(i>=0)plans26.splice(i,0,item);else plans26.push(item);
})();
