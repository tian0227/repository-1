(function(){
  const FIXED={d26_f1:60000,d26_f2:60000,d26_4:21000,'28h0':8707};
  const totalFixedJPY=Object.values(FIXED).reduce((a,b)=>a+b,0);
  const paidLabel={zh:'已支付',en:'Paid',ja:'支払済み',th:'ชำระแล้ว'};
  function curLang(){return (typeof lang!=='undefined'&&lang)||localStorage.getItem('tripLang')||'zh'}
  function yen(n){return '¥'+Math.round(n).toLocaleString()}
  function patchPlanData(){
    if(typeof plans==='undefined')return;
    Object.keys(FIXED).forEach(id=>{const p=plans.find(x=>x.id===id);if(!p)return;p.est='—';p.actual=false;});
  }
  function patchCard(id){
    const item=document.getElementById('trip_'+id);if(!item)return;
    const boxes=item.querySelectorAll('.projectbar .moneybox');if(boxes.length<2)return;
    const t=(typeof ui!=='undefined'&&ui[curLang()])||{};
    boxes[0].querySelector('.estimate').textContent='—';
    boxes[1].innerHTML=`<div class="moneylabel">${t.actual||'实际金额'}</div><div class="fixed-actual-value">${yen(FIXED[id])}</div><div class="fixed-actual-paid">${paidLabel[curLang()]||paidLabel.zh}</div>`;
  }
  function patchAllCards(){Object.keys(FIXED).forEach(patchCard)}
  function addStyle(){if(document.getElementById('fixedActualStyle'))return;const s=document.createElement('style');s.id='fixedActualStyle';s.textContent='.fixed-actual-value{font-size:13px;font-weight:850;color:#173f3a;line-height:1.35}.fixed-actual-paid{font-size:9.5px;font-weight:800;color:#5d7771;margin-top:2px}';document.head.appendChild(s)}
  function recalcSummary(){
    if(typeof plans==='undefined'||typeof RATE==='undefined')return;
    let thb=0,filled=0,count=0;
    plans.forEach(p=>{
      if(FIXED[p.id]!=null){count++;filled++;return;}
      if(p.actual===false)return;
      count++;
      const v=localStorage.getItem('actual_'+p.id);
      if(v!==null&&v!==''){thb+=Number(v)||0;filled++;}
    });
    const jpy=totalFixedJPY+thb*RATE;
    const thbEq=thb+totalFixedJPY/RATE;
    const aThb=document.getElementById('actualThb'),aJpy=document.getElementById('actualJpy'),fc=document.getElementById('filledCount');
    if(aThb)aThb.textContent='฿'+Math.round(thbEq).toLocaleString();
    if(aJpy)aJpy.textContent='¥'+Math.round(jpy).toLocaleString();
    if(fc)fc.textContent=filled+' / '+count;
  }
  patchPlanData();addStyle();
  if(typeof renderTimeline==='function'){
    const originalRenderTimeline=renderTimeline;
    window.renderTimeline=function(day){originalRenderTimeline(day);patchAllCards();};
  }
  if(typeof updateSummary==='function')window.updateSummary=recalcSummary;
  window.addEventListener('load',()=>setTimeout(()=>{patchPlanData();patchAllCards();recalcSummary();},350));
  document.querySelectorAll('.langbtn,.currencybtn').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>{patchAllCards();recalcSummary();},80)));
})();
