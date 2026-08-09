(function(){
  if(typeof plans26!=='undefined'){
    const dinner=plans26.find(p=>p.id==='d26_5');
    if(dinner){
      dinner.title={
        zh:'日落海边晚餐｜首选 The Glass House Silver',
        en:'Sunset seaside dinner | preferred: The Glass House Silver',
        ja:'夕日を見ながら海辺ディナー｜第一候補 The Glass House Silver',
        th:'มื้อเย็นริมทะเลชมพระอาทิตย์ตก | ตัวเลือกแรก The Glass House Silver'
      };
    }
  }
  function mark(){
    const rows=[...document.querySelectorAll('#d26DinnerLinks .d26-dinner-row')];
    const row=rows.find(r=>r.textContent.includes('The Glass House Silver'));
    if(!row||row.querySelector('.d26-preferred'))return;
    const head=row.querySelector('.d26-dinner-head');
    if(head){
      const badge=document.createElement('span');
      badge.className='d26-preferred';
      badge.textContent='当前首选';
      badge.style.cssText='display:inline-block;margin-left:7px;padding:2px 6px;border-radius:999px;background:#173f3a;color:#fff;font-size:9px;font-weight:850;vertical-align:middle';
      const name=head.querySelector('span');if(name)name.appendChild(badge);
    }
  }
  window.addEventListener('load',()=>setTimeout(mark,1100));
  document.addEventListener('click',e=>{if(e.target.closest('.langbtn,.currencybtn'))setTimeout(mark,250)});
})();
