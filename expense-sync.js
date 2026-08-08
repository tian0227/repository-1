(function(){
  function bind(){
    document.addEventListener('input',e=>{const el=e.target.closest('[data-actual]');if(!el||!window.TripSync)return;TripSync.putExpense(el.dataset.actual,el.value);},true);
    const reset=document.getElementById('resetBtn');if(reset)reset.addEventListener('click',()=>setTimeout(()=>{if(typeof plans!=='undefined'&&window.TripSync)plans.filter(p=>p.actual!==false).forEach(p=>TripSync.putExpense(p.id,''));},0));
  }
  window.addEventListener('trip-sync-expense',e=>{const {id,value}=e.detail||{};const input=document.querySelector(`[data-actual="${CSS.escape(id||'')}"]`);if(input&&input.value!==value){input.value=value;const calc=document.getElementById('jpy_'+id);if(calc)calc.textContent=value!==''?`≈ ¥${Math.round(Number(value)*RATE).toLocaleString()}`:'';}if(typeof updateSummary==='function')updateSummary();});
  window.addEventListener('trip-sync-pulled',()=>{if(typeof updateSummary==='function')updateSummary()});
  window.addEventListener('load',()=>setTimeout(bind,250));
})();