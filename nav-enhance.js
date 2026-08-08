(function(){
  function enhanceNav(){
    const nav=document.querySelector('.nav');
    if(!nav || document.getElementById('navEnhanceStyle')) return;

    const style=document.createElement('style');
    style.id='navEnhanceStyle';
    style.textContent=`
      .nav{
        padding:8px!important;
        gap:6px!important;
        border:1px solid #d9e1dd!important;
        box-shadow:0 10px 30px rgba(25,38,34,.075)!important;
      }
      .nav>a{
        position:relative!important;
        padding:9px 13px!important;
        border:1px solid #e1e7e4!important;
        background:#f8faf9!important;
        color:#334743!important;
        font-size:12.5px!important;
        font-weight:760!important;
        letter-spacing:.005em!important;
        transition:background .18s ease,color .18s ease,border-color .18s ease,transform .18s ease!important;
      }
      .nav>a:hover{
        background:#edf4f1!important;
        border-color:#cbdad5!important;
        color:#174f48!important;
        transform:translateY(-1px)!important;
      }
      .nav>a.nav-current{
        background:#173f3a!important;
        border-color:#173f3a!important;
        color:#fff!important;
        box-shadow:0 4px 12px rgba(23,63,58,.16)!important;
      }
      #navPrep{
        background:#edf4f1!important;
        border-color:#cdded8!important;
        color:#174f48!important;
      }
      #navPrep.nav-current{
        background:#173f3a!important;
        border-color:#173f3a!important;
        color:#fff!important;
      }
      #navSummary{
        background:#f7f4ee!important;
        border-color:#e6dfd2!important;
        color:#625b4c!important;
      }
      #navSummary.nav-current{
        background:#544c3e!important;
        border-color:#544c3e!important;
        color:#fff!important;
      }
      .quickjump{
        margin-left:auto!important;
        background:#f2f7f5!important;
        border:1px solid #d6e2de!important;
        border-radius:10px!important;
        padding:4px!important;
        gap:5px!important;
      }
      .quicklabel{
        color:#2f5b54!important;
        font-size:11px!important;
        font-weight:800!important;
        padding:0 5px!important;
      }
      .quickselect{
        background:#fff!important;
        border-color:#d7e0dc!important;
        min-height:34px!important;
        font-weight:700!important;
      }
      .quickselect:focus{
        outline:none!important;
        border-color:#7fa39b!important;
        box-shadow:0 0 0 3px rgba(24,95,87,.08)!important;
      }
      @media(max-width:720px){
        .nav{gap:5px!important;padding:7px!important}
        .nav>a{padding:8px 10px!important;font-size:11.5px!important}
        .quickjump{
          margin-top:4px!important;
          padding:6px!important;
          border-top:1px solid #d6e2de!important;
          background:#f2f7f5!important;
        }
        .quicklabel{font-size:10.5px!important}
      }
    `;
    document.head.appendChild(style);

    const pairs=[
      ['prep','navPrep'],
      ['day26','nav26'],
      ['day27','nav27'],
      ['day28','nav28'],
      ['day29','nav29'],
      ['summary','navSummary']
    ];

    function setCurrent(id){
      pairs.forEach(([,navId])=>{
        const a=document.getElementById(navId);
        if(a) a.classList.toggle('nav-current',navId===id);
      });
    }

    pairs.forEach(([,navId])=>{
      const a=document.getElementById(navId);
      if(a) a.addEventListener('click',()=>setCurrent(navId));
    });

    const sections=pairs.map(([sectionId,navId])=>({el:document.getElementById(sectionId),navId})).filter(x=>x.el);
    if('IntersectionObserver' in window){
      const observer=new IntersectionObserver(entries=>{
        const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if(!visible) return;
        const hit=sections.find(x=>x.el===visible.target);
        if(hit) setCurrent(hit.navId);
      },{rootMargin:'-22% 0px -62% 0px',threshold:[0,.05,.15,.3]});
      sections.forEach(x=>observer.observe(x.el));
    }
  }

  window.addEventListener('load',()=>setTimeout(enhanceNav,220));
})();
