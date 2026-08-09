(function(){
  const FIXED={flights:120000,pattaya:21000,bangkok:8707};
  const FIXED_IDS=new Set(['d26_f1','d26_f2','d26_4','28h0','29k']);
  const PER_PERSON_IDS=new Set(['27c','27d','27e','27h','28c','28e','28i','29d','29e','29f','29g']);
  const TRANSPORT_IDS=new Set(['d26_3','d26_7','27b','27c','27f','28b','28d','28f','28g','28h','29c','29f','29i','29j']);
  const FOOD_IDS=new Set(['d26_snack','d26_5','d26_6','27e','28j','29h']);

  const T={
    zh:{title:'两人旅行预算',sub:'预计金额会直接读取当前行程并自动重新计算；机票与酒店使用已订实际金额。',booked:'已知固定支出',flights:'往返机票｜2人',pattaya:'Garden Cliff｜2晚 · 2人',bangkok:'FuramaXclusive Asoke｜1晚 · 2人',local:'泰国当地预计支出｜2人',transport:'交通',food:'餐饮与水果',activities:'活动与门票',total:'两人全程预计',typical:'当前中间预算',person:'平均每人约',note:'自动汇总当前行程中的预计金额。标有“+”的开放式价格，汇总上限暂按标示金额的1.5倍预留；不含额外购物和伴手礼。',flightNote:'往返机票 ¥60,000 / 人',pattayaNote:'酒店已订｜两晚 · 两人合计 ¥21,000',bangkokNote:'酒店已订｜一晚 · 两人合计 ¥8,707'},
    en:{title:'Budget for two',sub:'Estimated totals are recalculated automatically from the current itinerary; booked flights and hotels use actual paid amounts.',booked:'Booked fixed costs',flights:'Round-trip flights | 2 people',pattaya:'Garden Cliff | 2 nights · 2 people',bangkok:'FuramaXclusive Asoke | 1 night · 2 people',local:'Estimated Thailand spending | 2 people',transport:'Transport',food:'Food & fruit',activities:'Activities & admission',total:'Estimated trip total for two',typical:'Current midpoint budget',person:'Average per person',note:'Automatically totals the current itinerary estimates. Open-ended prices marked “+” reserve an upper allowance of 1.5× the displayed amount. Extra shopping and souvenirs are excluded.',flightNote:'Round-trip flight ¥60,000 / person',pattayaNote:'Booked | 2 nights · 2 people ¥21,000 total',bangkokNote:'Booked | 1 night · 2 people ¥8,707 total'},
    ja:{title:'2人分の旅行予算',sub:'予想金額は現在の旅程から自動再計算。航空券・ホテルは予約済みの実額を使用。',booked:'確定済み固定費',flights:'往復航空券｜2人',pattaya:'Garden Cliff｜2泊 · 2人',bangkok:'FuramaXclusive Asoke｜1泊 · 2人',local:'タイ現地の予想支出｜2人',transport:'交通',food:'食事・フルーツ',activities:'体験・入場料',total:'2人の旅行総額予想',typical:'現在の中間予算',person:'1人あたり約',note:'現在の旅程にある予想金額を自動集計。「+」付きの価格は上限を表示額の1.5倍として一時的に余裕を持たせています。追加の買い物・お土産は含みません。',flightNote:'往復航空券 ¥60,000 / 人',pattayaNote:'予約済み｜2泊 · 2人 合計¥21,000',bangkokNote:'予約済み｜1泊 · 2人 合計¥8,707'},
    th:{title:'งบเดินทางสำหรับ 2 คน',sub:'ยอดประมาณการคำนวณใหม่อัตโนมัติจากแผนปัจจุบัน ส่วนตั๋วเครื่องบินและโรงแรมใช้ยอดที่จ่ายจริงแล้ว',booked:'ค่าใช้จ่ายคงที่ที่จองแล้ว',flights:'ตั๋วไป-กลับ | 2 คน',pattaya:'Garden Cliff | 2 คืน · 2 คน',bangkok:'FuramaXclusive Asoke | 1 คืน · 2 คน',local:'ค่าใช้จ่ายในไทยโดยประมาณ | 2 คน',transport:'การเดินทาง',food:'อาหารและผลไม้',activities:'กิจกรรมและค่าเข้า',total:'รวมทั้งทริปสำหรับ 2 คน',typical:'งบกลางปัจจุบัน',person:'เฉลี่ยต่อคน',note:'รวมยอดประมาณการจากแผนปัจจุบันโดยอัตโนมัติ ราคาที่มี “+” จะเผื่อเพดานไว้ที่ 1.5 เท่าของยอดที่แสดง ไม่รวมช้อปปิ้งและของฝากเพิ่มเติม',flightNote:'ตั๋วไป-กลับ ¥60,000 / คน',pattayaNote:'จองแล้ว | 2 คืน · 2 คน รวม ¥21,000',bangkokNote:'จองแล้ว | 1 คืน · 2 คน รวม ¥8,707'}
  };

  const currentLang=()=>typeof lang!=='undefined'?lang:(localStorage.getItem('tripLang')||'zh');
  const yen=n=>'¥'+Math.round(n).toLocaleString();
  const range=a=>yen(a[0])+'–'+yen(a[1]);
  const estText=v=>typeof v==='string'?v:((v&&v.zh)||'');
  function parseJPY(v){
    const s=estText(v);const i=s.indexOf('¥');if(i<0)return null;
    const part=s.slice(i+1);const nums=(part.match(/[\d,]+/g)||[]).map(x=>Number(x.replace(/,/g,''))).filter(Number.isFinite);
    if(!nums.length)return null;
    const lo=nums[0], rawHi=nums.length>1?nums[1]:nums[0];
    const hi=part.includes('+')?Math.round(rawHi*1.5):rawHi;
    return [lo,hi];
  }
  function titleText(p){const v=p&&p.title;return typeof v==='string'?v:((v&&v.zh)||'');}
  function category(p){
    if(TRANSPORT_IDS.has(p.id))return 'transport';
    if(FOOD_IDS.has(p.id))return 'food';
    const s=titleText(p);
    if(/晚餐|午餐|早餐|水果|餐|dinner|lunch|breakfast|fruit|food/i.test(s))return 'food';
    if(/→|Grab|Bolt|Taxi|渡轮|ferry|Pier|机场|DMK|取行李|return to/i.test(s))return 'transport';
    return 'activities';
  }
  function calc(){
    const fixed={...FIXED,total:FIXED.flights+FIXED.pattaya+FIXED.bangkok};
    const local={transport:[0,0],food:[0,0],activities:[0,0],total:[0,0]};
    const list=typeof plans!=='undefined'?plans:[];
    list.forEach(p=>{
      if(FIXED_IDS.has(p.id)||p.actual===false&&parseJPY(p.est)?.[1]===0)return;
      const r=parseJPY(p.est);if(!r||(!r[0]&&!r[1]))return;
      const m=PER_PERSON_IDS.has(p.id)?2:1;
      const c=category(p);local[c][0]+=r[0]*m;local[c][1]+=r[1]*m;
    });
    local.total=[local.transport[0]+local.food[0]+local.activities[0],local.transport[1]+local.food[1]+local.activities[1]];
    const trip=[fixed.total+local.total[0],fixed.total+local.total[1]];
    const typical=Math.round(((trip[0]+trip[1])/2)/1000)*1000;
    const perPerson=Math.round((typical/2)/500)*500;
    return {fixed,local,trip,typical,perPerson};
  }

  function style(){if(document.getElementById('budgetOverviewStyle'))return;const s=document.createElement('style');s.id='budgetOverviewStyle';s.textContent=`
    .fixed-cost-note{margin-top:7px;padding:7px 9px;border-radius:8px;background:#f3f7f5;border:1px solid #dce7e3;color:#31534d;font-size:10.5px;font-weight:780;line-height:1.45;display:inline-block}
    .budget-overview{margin-top:16px}.budget-title-row{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;margin-bottom:10px}.budget-title-row h3{margin:0;font-size:18px}.budget-title-row p{margin:0;max-width:620px;color:#6b7874;font-size:11px;line-height:1.55;text-align:right}
    .budget-panels{display:grid;grid-template-columns:1fr 1fr;gap:12px}.budget-panel{background:#fff;border:1px solid #dfe7e4;border-radius:15px;padding:14px}.budget-panel h4{margin:0 0 10px;font-size:13px;color:#173f3a}.budget-row{display:flex;justify-content:space-between;gap:14px;padding:7px 0;border-bottom:1px solid #edf1ef;font-size:11.5px}.budget-row:last-child{border-bottom:0}.budget-row strong{white-space:nowrap}.budget-total{margin-top:12px;background:#173f3a;color:#fff;border-radius:15px;padding:14px;display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:12px;align-items:center}.budget-total .k{font-size:10.5px;opacity:.76;margin-bottom:4px}.budget-total .v{font-size:19px;font-weight:850;line-height:1.2}.budget-note{margin:9px 2px 0;color:#7a8682;font-size:10.5px;line-height:1.55}
    @media(max-width:720px){.budget-title-row{display:block}.budget-title-row p{text-align:left;margin-top:5px}.budget-panels{grid-template-columns:1fr}.budget-total{grid-template-columns:1fr 1fr}.budget-total>div:first-child{grid-column:1/-1}.budget-total .v{font-size:17px}}
  `;document.head.appendChild(s)}
  function addTimelineNotes(){const t=T[currentLang()]||T.zh;const notes=[['d26_f1',t.flightNote],['d26_f2',t.flightNote],['d26_4',t.pattayaNote],['28h0',t.bangkokNote]];notes.forEach(([id,text])=>{const d=document.querySelector('#trip_'+id+' .desc');if(!d)return;let n=d.parentElement.querySelector('.fixed-cost-note');if(!n){n=document.createElement('div');n.className='fixed-cost-note';d.after(n)}n.textContent=text})}
  function renderSummary(){if((window.TRIP_VIEW||'')!=='summary')return;const sec=document.getElementById('summary');if(!sec)return;style();const t=T[currentLang()]||T.zh;const data=calc();let box=document.getElementById('budgetOverview');if(!box){box=document.createElement('div');box.id='budgetOverview';box.className='budget-overview';sec.appendChild(box)}box.innerHTML=`
    <div class="budget-title-row"><h3>${t.title}</h3><p>${t.sub}</p></div>
    <div class="budget-panels">
      <div class="budget-panel"><h4>${t.booked}</h4><div class="budget-row"><span>${t.flights}</span><strong>${yen(data.fixed.flights)}</strong></div><div class="budget-row"><span>${t.pattaya}</span><strong>${yen(data.fixed.pattaya)}</strong></div><div class="budget-row"><span>${t.bangkok}</span><strong>${yen(data.fixed.bangkok)}</strong></div><div class="budget-row"><span>${t.booked}</span><strong>${yen(data.fixed.total)}</strong></div></div>
      <div class="budget-panel"><h4>${t.local}</h4><div class="budget-row"><span>${t.transport}</span><strong>${range(data.local.transport)}</strong></div><div class="budget-row"><span>${t.food}</span><strong>${range(data.local.food)}</strong></div><div class="budget-row"><span>${t.activities}</span><strong>${range(data.local.activities)}</strong></div><div class="budget-row"><span>${t.local}</span><strong>${range(data.local.total)}</strong></div></div>
    </div>
    <div class="budget-total"><div><div class="k">${t.total}</div><div class="v">${range(data.trip)}</div></div><div><div class="k">${t.typical}</div><div class="v">${yen(data.typical)}</div></div><div><div class="k">${t.person}</div><div class="v">${yen(data.perPerson)}</div></div></div><div class="budget-note">${t.note}</div>`;
  }
  function render(){style();addTimelineNotes();renderSummary()}
  window.addEventListener('load',()=>setTimeout(render,850));
  document.querySelectorAll('.langbtn').forEach(b=>b.addEventListener('click',()=>setTimeout(render,120)));
})();