(function(){
  const view=window.TRIP_VIEW||'home';
  const routes={navPrep:'prep.html',nav26:'day26.html',nav27:'day27.html',nav28:'day28.html',nav29:'day29.html',navSummary:'summary.html'};
  const active={prep:'navPrep',day26:'nav26',day27:'nav27',day28:'nav28',day29:'nav29',summary:'navSummary'};
  const homeText={
    zh:{title:'旅行目录',prep:['行程准备','入境要求、TDAC、行李清单与准备进度'],d26:['8月26日','航班 · DMK汇合 · 芭提雅入住 · 海鲜 · 水果'],d27:['8月27日','格兰岛 · 拖曳伞 · 游泳 · 夜钓鱿鱼'],d28:['8月28日','射击 · 骑象 · 前往曼谷 · Jim Thompson House'],d29:['8月29日','泰服 · 郑王庙 · 卧佛寺 · DMK返程'],sum:['金额统计','查看实际消费 THB / JPY 与填写进度']},
    en:{title:'Trip directory',prep:['Trip preparation','Entry rules, TDAC and packing checklist'],d26:['Aug 26','Flights · DMK meet-up · Pattaya · seafood · fruit'],d27:['Aug 27','Koh Larn · parasailing · swimming · squid fishing'],d28:['Aug 28','Shooting · elephant ride · Bangkok · Jim Thompson House'],d29:['Aug 29','Thai costume · Wat Arun · Wat Pho · DMK'],sum:['Expense summary','Actual spending in THB / JPY and entry progress']},
    ja:{title:'旅行メニュー',prep:['旅行準備','入国条件・TDAC・持ち物チェック'],d26:['8月26日','フライト · DMK合流 · パタヤ · 海鮮 · フルーツ'],d27:['8月27日','ラン島 · パラセーリング · 海水浴 · イカ釣り'],d28:['8月28日','射撃 · 象乗り · バンコク · Jim Thompson House'],d29:['8月29日','タイ衣装 · ワットアルン · ワットポー · DMK'],sum:['金額集計','実際支出 THB / JPY と入力状況']},
    th:{title:'เมนูทริป',prep:['เตรียมทริป','การเข้าเมือง TDAC และเช็กลิสต์กระเป๋า'],d26:['26 ส.ค.','เที่ยวบิน · พบกันที่ DMK · พัทยา · ซีฟู้ด · ผลไม้'],d27:['27 ส.ค.','เกาะล้าน · พาราเซลลิ่ง · ว่ายน้ำ · ตกหมึก'],d28:['28 ส.ค.','ยิงปืน · ขี่ช้าง · กรุงเทพฯ · Jim Thompson House'],d29:['29 ส.ค.','ชุดไทย · วัดอรุณ · วัดโพธิ์ · DMK'],sum:['สรุปค่าใช้จ่าย','ยอดจริง THB / JPY และความคืบหน้า']}
  };
  function setRoutes(){
    Object.entries(routes).forEach(([id,href])=>{const a=document.getElementById(id);if(a)a.href=href});
    const brand=document.querySelector('.brand a');if(brand)brand.href='index.html';
    document.querySelectorAll('.nav>a').forEach(a=>a.classList.remove('nav-current'));
    const id=active[view];if(id){const a=document.getElementById(id);if(a)a.classList.add('nav-current')}
  }
  function renderHome(){
    const h=document.getElementById('homeView');if(!h||view!=='home')return;
    const l=(typeof lang!=='undefined'?lang:'zh'),t=homeText[l]||homeText.zh;
    h.innerHTML=`<div class="homeintro"><h2>${t.title}</h2></div><div class="homegrid">
      <a class="homecard" href="prep.html"><div class="homeeyebrow">PREP</div><strong>${t.prep[0]}</strong><p>${t.prep[1]}</p></a>
      <a class="homecard" href="day26.html"><div class="homeeyebrow">DAY 01</div><strong>${t.d26[0]}</strong><p>${t.d26[1]}</p></a>
      <a class="homecard" href="day27.html"><div class="homeeyebrow">DAY 02</div><strong>${t.d27[0]}</strong><p>${t.d27[1]}</p></a>
      <a class="homecard" href="day28.html"><div class="homeeyebrow">DAY 03</div><strong>${t.d28[0]}</strong><p>${t.d28[1]}</p></a>
      <a class="homecard" href="day29.html"><div class="homeeyebrow">DAY 04</div><strong>${t.d29[0]}</strong><p>${t.d29[1]}</p></a>
      <a class="homecard" href="summary.html"><div class="homeeyebrow">BUDGET</div><strong>${t.sum[0]}</strong><p>${t.sum[1]}</p></a></div>`;
  }
  function applyView(){
    const prep=document.getElementById('prep');
    ['day26','day27','day28','day29','summary'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display=(view===id?'':'none')});
    if(prep)prep.style.display=(view==='prep'?'':'none');
    const home=document.getElementById('homeView');if(home)home.style.display=(view==='home'?'':'none');
    const q=document.getElementById('quickJump');
    if(view.startsWith('day')){
      const d=view.replace('day','');
      try{quickDay=d;fillQuickItems();}catch(e){}
      if(q){const ds=document.getElementById('quickDaySelect');if(ds)ds.style.display='none';const lab=document.getElementById('quickLabel');if(lab){const labels={zh:'时间定位',en:'Time jump',ja:'時間移動',th:'เลือกเวลา'};lab.textContent=labels[typeof lang!=='undefined'?lang:'zh']||labels.zh}}
    }else if(q){q.style.display='none'}
    setRoutes();renderHome();
  }
  window.addEventListener('load',()=>setTimeout(applyView,380));
  document.querySelectorAll('.langbtn').forEach(b=>b.addEventListener('click',()=>setTimeout(()=>{setRoutes();renderHome();applyView()},30)));
})();