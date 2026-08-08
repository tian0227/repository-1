(function(){
  const CFG={
    url:'https://treauhepmcpwmtdzbzqv.supabase.co',
    key:'sb_publishable_x4U_m586dl80wHjLhXN0xA_Wo0JSbz6',
    trip:'thailand-2026-08-ma-morita'
  };
  const qkey='tripSyncQueueV1', metaPrefix='tripSyncMeta:';
  const headers={'apikey':CFG.key,'Authorization':'Bearer '+CFG.key,'Content-Type':'application/json','Prefer':'resolution=merge-duplicates,return=minimal'};
  const now=()=>new Date().toISOString();
  const readJSON=(k,d)=>{try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(d))}catch(e){return d}};
  const queue=()=>readJSON(qkey,[]);
  const saveQueue=q=>localStorage.setItem(qkey,JSON.stringify(q));
  const setMeta=(kind,id,ts)=>localStorage.setItem(metaPrefix+kind+':'+id,ts);
  const getMeta=(kind,id)=>localStorage.getItem(metaPrefix+kind+':'+id)||'';
  const online=()=>navigator.onLine;
  function enqueue(op){const q=queue();const key=op.kind+'|'+op.person+'|'+op.id;const filtered=q.filter(x=>(x.kind+'|'+x.person+'|'+x.id)!==key);filtered.push(op);saveQueue(filtered);dispatchStatus();if(online())flush();}
  async function request(path,opt={}){const r=await fetch(CFG.url+'/rest/v1/'+path,{...opt,headers:{...headers,...(opt.headers||{})}});if(!r.ok)throw new Error(await r.text());if(r.status===204)return null;return r.json();}
  async function flush(){if(!online())return;let q=queue();if(!q.length){await pull();return;}const remain=[];for(const op of q){try{
      if(op.kind==='prep') await request('trip_prep_state?on_conflict=trip_id,person,item_id',{method:'POST',body:JSON.stringify({trip_id:CFG.trip,person:op.person,item_id:op.id,checked:!!op.checked,deleted:!!op.deleted,custom_name:op.custom_name||null,category:op.category||null,updated_at:op.updated_at})});
      if(op.kind==='expense') await request('trip_expenses?on_conflict=trip_id,expense_id',{method:'POST',body:JSON.stringify({trip_id:CFG.trip,expense_id:op.id,amount_thb:op.amount===''?null:Number(op.amount),updated_at:op.updated_at})});
    }catch(e){remain.push(op)}}saveQueue(remain);dispatchStatus();if(!remain.length)await pull();}
  async function pull(){if(!online())return;try{
    const prep=await request('trip_prep_state?trip_id=eq.'+encodeURIComponent(CFG.trip)+'&select=*');
    (prep||[]).forEach(r=>{const id=r.person+':'+r.item_id;if((r.updated_at||'')>=getMeta('prep',id)){setMeta('prep',id,r.updated_at||now());window.dispatchEvent(new CustomEvent('trip-sync-prep',{detail:r}));}});
    const expenses=await request('trip_expenses?trip_id=eq.'+encodeURIComponent(CFG.trip)+'&select=*');
    (expenses||[]).forEach(r=>{if((r.updated_at||'')>=getMeta('expense',r.expense_id)){setMeta('expense',r.expense_id,r.updated_at||now());const val=r.amount_thb==null?'':String(r.amount_thb);if(val==='')localStorage.removeItem('actual_'+r.expense_id);else localStorage.setItem('actual_'+r.expense_id,val);window.dispatchEvent(new CustomEvent('trip-sync-expense',{detail:{id:r.expense_id,value:val}}));}});
    window.dispatchEvent(new Event('trip-sync-pulled'));dispatchStatus();
  }catch(e){dispatchStatus()}}
  function putPrep(person,id,data){const ts=now();setMeta('prep',person+':'+id,ts);enqueue({kind:'prep',person,id,updated_at:ts,...data});}
  function putExpense(id,amount){const ts=now();setMeta('expense',id,ts);enqueue({kind:'expense',person:'shared',id,amount,updated_at:ts});}
  function dispatchStatus(){window.dispatchEvent(new CustomEvent('trip-sync-status',{detail:{online:online(),pending:queue().length}}));}
  window.TripSync={putPrep,putExpense,pull,flush,status:()=>({online:online(),pending:queue().length})};
  window.addEventListener('online',flush);window.addEventListener('offline',dispatchStatus);
  window.addEventListener('load',()=>setTimeout(()=>{pull();dispatchStatus()},900));
})();