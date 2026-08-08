(function(){
  const data={
    fixed:{flights:120000,pattaya:21000,bangkok:8707,total:149707},
    local:{transport:[20922,26342],food:[15360,36480],activities:[36480,58080],total:[72762,120902]},
    trip:[222469,270609],typical:245000,perPerson:122500
  };
  const T={
    zh:{
      title:'两人旅行预算',sub:'机票与酒店按已订金额；当地支出按当前行程中的交通、餐饮和活动预估。',
      booked:'已知固定支出',flights:'往返机票｜2人',pattaya:'Garden Cliff｜2晚 · 2人',bangkok:'FuramaXclusive Asoke｜1晚 · 2人',
      local:'泰国当地预计支出｜2人',transport:'交通',food:'餐饮与水果',activities:'活动与门票',
      total:'两人全程预计',typical:'较现实的中间预算',person:'平均每人约',note:'不含额外购物、伴手礼和临时新增项目。活动区间中已为射击套餐预留较大浮动。',
      flightNote:'往返机票约 ¥60,000 / 人',pattayaNote:'酒店已订｜两晚 · 两人合计 ¥21,000',bangkokNote:'酒店已订｜一晚 · 两人合计 ¥8,707'
    },
    en:{
      title:'Budget for two',sub:'Flights and hotels use booked amounts; local spending uses the current itinerary estimates.',
      booked:'Booked fixed costs',flights:'Round-trip flights | 2 people',pattaya:'Garden Cliff | 2 nights · 2 people',bangkok:'FuramaXclusive Asoke | 1 night · 2 people',
      local:'Estimated Thailand spending | 2 people',transport:'Transport',food:'Food & fruit',activities:'Activities & admission',
      total:'Estimated trip total for two',typical:'Realistic mid-range budget',person:'Average per person',note:'Excludes extra shopping, souvenirs and newly added activities. A wider allowance is included for the shooting package.',
      flightNote:'Round-trip flight: about ¥60,000 / person',pattayaNote:'Booked hotel | 2 nights · 2 people: ¥21,000 total',bangkokNote:'Booked hotel | 1 night · 2 people: ¥8,707 total'
    },
    ja:{
      title:'2人分の旅行予算',sub:'航空券・ホテルは予約済み金額、現地費用は現在の旅程の交通・食事・アクティビティ予算から計算。',
      booked:'確定済み固定費',flights:'往復航空券｜2人',pattaya:'Garden Cliff｜2泊 · 2人',bangkok:'FuramaXclusive Asoke｜1泊 · 2人',
      local:'タイ現地の予想支出｜2人',transport:'交通',food:'食事・フルーツ',activities:'体験・入場料',
      total:'2人の旅行総額予想',typical:'現実的な中間予算',person:'1人あたり約',note:'追加の買い物、お土産、当日追加する予定は含みません。射撃プランは幅を広めに取っています。',
      flightNote:'往復航空券 約¥60,000 / 人',pattayaNote:'予約済み｜2泊 · 2人 合計¥21,000',bangkokNote:'予約済み｜1泊 · 2人 合計¥8,707'
    },
    th:{
      title:'งบเดินทางสำหรับ 2 คน',sub:'ตั๋วเครื่องบินและโรงแรมใช้ยอดที่จองแล้ว ค่าใช้จ่ายในไทยอิงจากประมาณการในแผนปัจจุบัน',
      booked:'ค่าใช้จ่ายคงที่ที่ทราบแล้ว',flights:'ตั๋วไป-กลับ | 2 คน',pattaya:'Garden Cliff | 2 คืน · 2 คน',bangkok:'FuramaXclusive Asoke | 1 คืน · 2 คน',
      local:'ค่าใช้จ่ายในไทยโดยประมาณ | 2 คน',transport:'การเดินทาง',food:'อาหารและผลไม้',activities:'กิจกรรมและค่าเข้า',
      total:'รวมทั้งทริปสำหรับ 2 คน',typical:'งบกลางที่ค่อนข้างเป็นจริง',person:'เฉลี่ยต่อคน',note:'ไม่รวมช้อปปิ้ง ของฝาก และกิจกรรมที่เพิ่มภายหลัง โดยเผื่องบยิงปืนไว้ค่อนข้างกว้าง',
      flightNote:'ตั๋วไป-กลับประมาณ ¥60,000 / คน',pattayaNote:'จองแล้ว | 2 คืน · 2 คน รวม ¥21,000',bangkokNote:'จองแล้ว | 1 คืน · 2 คน รวม ¥8,707'
    }
  };
  const currentLang=()=>typeof lang!=='undefined'?lang:(localStorage.getItem('tripLang')||'zh');
  const yen=n=>'¥'+Math.round(n).toLocaleString();
  const range=a=>yen(a[0])+'–'+yen(a[1]);
  function style(){if(document.getElementById('budgetOverviewStyle'))return;const s=document.createElement('style');s.id='budgetOverviewStyle';s.textContent=`
    .fixed-cost-note{margin-top:7px;padding:7px 9px;border-radius:8px;background:#f3f7f5;border:1px solid #dce7e3;color:#31534d;font-size:10.5px;font-weight:780;line-height:1.45;display:inline-block}
    .budget-overview{margin-top:16px}.budget-title-row{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;margin-bottom:10px}.budget-title-row h3{margin:0;font-size:18px}.budget-title-row p{margin:0;max-width:620px;color:#6b7874;font-size:11px;line-height:1.55;text-align:right}
    .budget-panels{display:grid;grid-template-columns:1fr 1fr;gap:12px}.budget-panel{background:#fff;border:1px solid #dfe7e4;border-radius:15px;padding:14px}.budget-panel h4{margin:0 0 10px;font-size:13px;color:#173f3a}.budget-row{display:flex;justify-content:space-between;gap:14px;padding:7px 0;border-bottom:1px solid #edf1ef;font-size:11.5px}.budget-row:last-child{border-bottom:0}.budget-row strong{white-space:nowrap}.budget-total{margin-top:12px;background:#173f3a;color:#fff;border-radius:15px;padding:14px;display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:12px;align-items:center}.budget-total .k{font-size:10.5px;opacity:.76;margin-bottom:4px}.budget-total .v{font-size:19px;font-weight:850;line-height:1.2}.budget-note{margin:9px 2px 0;color:#7a8682;font-size:10.5px;line-height:1.55}
    @media(max-width:720px){.budget-title-row{display:block}.budget-title-row p{text-align:left;margin-top:5px}.budget-panels{grid-template-columns:1fr}.budget-total{grid-template-columns:1fr 1fr}.budget-total>div:first-child{grid-column:1/-1}.budget-total .v{font-size:17px}}
  `;document.head.appendChild(s)}
  function addTimelineNotes(){const t=T[currentLang()]||T.zh;const notes=[['d26_f1',t.flightNote],['d26_f2',t.flightNote],['d26_4',t.pattayaNote],['28h',t.bangkokNote]];notes.forEach(([id,text])=>{const d=document.querySelector('#trip_'+id+' .desc');if(!d)return;let n=d.parentElement.querySelector('.fixed-cost-note');if(!n){n=document.createElement('div');n.className='fixed-cost-note';d.after(n)}n.textContent=text})}
  function renderSummary(){if((window.TRIP_VIEW||'')!=='summary')return;const sec=document.getElementById('summary');if(!sec)return;style();const t=T[currentLang()]||T.zh;let box=document.getElementById('budgetOverview');if(!box){box=document.createElement('div');box.id='budgetOverview';box.className='budget-overview';sec.appendChild(box)}box.innerHTML=`
    <div class="budget-title-row"><h3>${t.title}</h3><p>${t.sub}</p></div>
    <div class="budget-panels">
      <div class="budget-panel"><h4>${t.booked}</h4><div class="budget-row"><span>${t.flights}</span><strong>${yen(data.fixed.flights)}</strong></div><div class="budget-row"><span>${t.pattaya}</span><strong>${yen(data.fixed.pattaya)}</strong></div><div class="budget-row"><span>${t.bangkok}</span><strong>${yen(data.fixed.bangkok)}</strong></div><div class="budget-row"><span>${t.booked}</span><strong>${yen(data.fixed.total)}</strong></div></div>
      <div class="budget-panel"><h4>${t.local}</h4><div class="budget-row"><span>${t.transport}</span><strong>${range(data.local.transport)}</strong></div><div class="budget-row"><span>${t.food}</span><strong>${range(data.local.food)}</strong></div><div class="budget-row"><span>${t.activities}</span><strong>${range(data.local.activities)}</strong></div><div class="budget-row"><span>${t.local}</span><strong>${range(data.local.total)}</strong></div></div>
    </div>
    <div class="budget-total"><div><div class="k">${t.total}</div><div class="v">${range(data.trip)}</div></div><div><div class="k">${t.typical}</div><div class="v">${yen(data.typical)}</div></div><div><div class="k">${t.person}</div><div class="v">${yen(data.perPerson)}</div></div></div><div class="budget-note">${t.note}</div>`}
  function render(){style();addTimelineNotes();renderSummary()}
  window.addEventListener('load',()=>setTimeout(render,850));
  document.querySelectorAll('.langbtn').forEach(b=>b.addEventListener('click',()=>setTimeout(render,120)));
})();