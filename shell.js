(function(){
  const view=window.TRIP_VIEW||'home';
  const show=id=>view===id?'':' style="display:none"';
  document.body.innerHTML=`<div class="wrap">
<header class="hero">
  <div class="topbar">
    <div class="brand"><a href="index.html">Thailand Trip · Pattaya · Koh Larn · Bangkok</a></div>
    <div class="langbox"><span id="languageLabel">语言</span><button class="langbtn active" data-lang="zh">中文</button><button class="langbtn" data-lang="en">English</button><button class="langbtn" data-lang="ja">日本語</button><button class="langbtn" data-lang="th">ไทย</button></div>
    <div class="currencybox"><span id="currencyLabel">预算币种</span><button class="currencybtn active" data-currency="THB">THB ฿</button><button class="currencybtn" data-currency="JPY">JPY ¥</button></div>
  </div>
  <h1 id="heroTitle"></h1><p id="heroSubtitle"></p>
  <div class="badges"><span class="badge" id="hotelBadge"></span><span class="badge" id="rateBadge"></span><span class="badge" id="saveBadge"></span></div>
</header>
<nav class="nav">
  <a href="index.html" id="navHome">⌂ 首页</a><a href="day26.html" id="nav26"></a><a href="day27.html" id="nav27"></a><a href="day28.html" id="nav28"></a><a href="day29.html" id="nav29"></a><a href="summary.html" id="navSummary"></a>
</nav>
<div id="homeView"${show('home')}></div>
<section class="section" id="day26"${show('day26')}><div class="dayhead"><h2 id="day26Title"></h2><div class="daytheme" id="day26Theme"></div></div><div class="grid"><div class="card"><div class="timeline" id="timeline26"></div></div><div class="card"><h3 id="map26Title" style="margin:0 0 11px"></h3><div class="map" id="map26"></div><div class="mapnote" id="map26Note"></div></div></div></section>
<section class="section" id="day27"${show('day27')}><div class="dayhead"><h2 id="day27Title"></h2><div class="daytheme" id="day27Theme"></div></div><div class="grid"><div class="card"><div class="timeline" id="timeline27"></div></div><div class="card"><h3 id="map27Title" style="margin:0 0 11px"></h3><div class="map" id="map27"></div><div class="mapnote" id="map27Note"></div></div></div></section>
<section class="section" id="day28"${show('day28')}><div class="dayhead"><h2 id="day28Title"></h2><div class="daytheme" id="day28Theme"></div></div><div class="grid"><div class="card"><div class="timeline" id="timeline28"></div></div><div class="card"><h3 id="map28Title" style="margin:0 0 11px"></h3><div class="map" id="map28"></div><div class="mapnote" id="map28Note"></div></div></div></section>
<section class="section" id="day29"${show('day29')}><div class="dayhead"><h2 id="day29Title"></h2><div class="daytheme" id="day29Theme"></div></div><div class="grid"><div class="card"><div class="timeline" id="timeline29"></div></div><div class="card"><h3 id="map29Title" style="margin:0 0 11px"></h3><div class="map" id="map29"></div><div class="mapnote" id="map29Note"></div></div></div></section>
<section class="summary section" id="summary"${show('summary')}><div class="summarytop"><h3 id="summaryTitle"></h3><button class="reset" id="resetBtn"></button></div><div class="sumgrid"><div class="sumcard"><div class="sumlabel" id="actualThbLabel"></div><div class="sumvalue" id="actualThb">฿0</div></div><div class="sumcard"><div class="sumlabel" id="actualJpyLabel"></div><div class="sumvalue" id="actualJpy">¥0</div></div><div class="sumcard"><div class="sumlabel" id="filledLabel"></div><div class="sumvalue" id="filledCount">0 / 0</div></div></div></section>
<div class="footer" id="footer"></div></div>`;
})();