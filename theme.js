(function(){
  function applyTheme(){
    if(document.getElementById('refinedTheme')) return;
    const style=document.createElement('style');
    style.id='refinedTheme';
    style.textContent=`
      :root{
        --bg:#f6f5f1!important;
        --card:#ffffff!important;
        --ink:#17211f!important;
        --sub:#6d7774!important;
        --teal:#185f57!important;
        --teal2:#185f57!important;
        --line:#e4e7e4!important;
        --soft:#f0f4f2!important;
        --warm:#f6f3ec!important;
        --shadow:0 8px 28px rgba(25,38,34,.055)!important;
      }
      body{
        background:#f6f5f1!important;
        color:#17211f!important;
        letter-spacing:.005em;
      }
      .wrap{max-width:1180px!important;padding:30px 22px 70px!important}
      .hero{
        background:#173f3a!important;
        border-radius:20px!important;
        padding:28px 30px 26px!important;
        box-shadow:none!important;
        border:1px solid rgba(255,255,255,.07)!important;
      }
      .topbar{margin-bottom:22px!important;gap:12px!important}
      .brand{font-size:11px!important;letter-spacing:.16em!important;opacity:.68!important}
      .langbox,.currencybox{gap:5px!important}
      .langbox span,.currencybox span{font-size:10.5px!important;opacity:.65!important}
      .langbtn,.currencybtn{
        padding:6px 9px!important;
        font-size:11px!important;
        border-radius:8px!important;
        border-color:rgba(255,255,255,.18)!important;
        background:transparent!important;
      }
      .langbtn.active,.currencybtn.active{
        background:#fff!important;color:#173f3a!important;border-color:#fff!important;
      }
      h1{font-size:clamp(31px,4.2vw,44px)!important;font-weight:760!important;letter-spacing:-.025em!important;margin:2px 0 10px!important}
      .hero p{font-size:13.5px!important;line-height:1.7!important;color:rgba(255,255,255,.78)!important;max-width:900px}
      .badges{margin-top:18px!important;gap:6px!important}
      .badge{
        border-radius:8px!important;background:rgba(255,255,255,.065)!important;
        border-color:rgba(255,255,255,.11)!important;padding:6px 9px!important;font-size:10.5px!important;
        color:rgba(255,255,255,.82)!important;
      }

      .nav{
        top:8px!important;z-index:900!important;margin:14px 0 0!important;padding:7px!important;
        background:rgba(255,255,255,.94)!important;border:1px solid #e3e7e4!important;border-radius:14px!important;
        box-shadow:0 8px 24px rgba(25,38,34,.06)!important;backdrop-filter:blur(14px)!important;
        gap:4px!important;align-items:center!important;
      }
      .nav>a{
        background:transparent!important;box-shadow:none!important;border:0!important;border-radius:9px!important;
        padding:8px 11px!important;color:#4d5b57!important;font-size:12px!important;font-weight:700!important;
      }
      .nav>a:hover{background:#f1f5f3!important;color:#174f48!important}
      #navPrep{color:#174f48!important;background:#edf4f1!important}
      .quickjump{
        margin-left:auto!important;background:transparent!important;border:0!important;box-shadow:none!important;
        padding:0!important;gap:5px!important;border-radius:0!important;
      }
      .quicklabel{font-size:10.5px!important;color:#74807c!important;font-weight:700!important}
      .quickselect{
        min-height:32px!important;border-radius:8px!important;border:1px solid #dfe5e2!important;
        background:#fafbf9!important;color:#283633!important;padding:6px 27px 6px 9px!important;
        font-size:11.5px!important;font-weight:650!important;
      }

      .section{margin-top:34px!important;scroll-margin-top:112px!important}
      .dayhead{margin-bottom:12px!important;align-items:center!important}
      .dayhead h2{font-size:23px!important;font-weight:760!important;letter-spacing:-.018em!important}
      .daytheme{
        background:transparent!important;border:1px solid #dfe6e2!important;border-radius:8px!important;
        color:#71807b!important;padding:5px 8px!important;font-size:10.5px!important;font-weight:650!important;
      }
      .grid{grid-template-columns:minmax(0,1.18fr) minmax(300px,.82fr)!important;gap:14px!important}
      .card,.summary,.prep-card{
        border-radius:16px!important;border:1px solid #e2e6e3!important;box-shadow:none!important;background:#fff!important;
      }
      .card{padding:22px!important}
      .timeline{margin-left:0!important}
      .timeline:before{left:7px!important;background:#e4e9e6!important;width:1px!important;top:12px!important;bottom:12px!important}
      .item{
        grid-template-columns:16px 96px 1fr!important;gap:12px!important;margin-bottom:27px!important;
        scroll-margin-top:150px!important;
      }
      .item:last-child{margin-bottom:4px!important}
      .dot{
        width:15px!important;height:15px!important;border-radius:50%!important;background:#185f57!important;
        border:4px solid #eaf2ef!important;margin-top:3px!important;
      }
      .time{font-size:12.5px!important;font-weight:760!important;color:#25423d!important;padding-top:2px!important;line-height:1.45!important}
      .event strong{font-size:15.5px!important;font-weight:730!important;letter-spacing:-.006em!important;margin-bottom:5px!important}
      .desc{font-size:13px!important;line-height:1.65!important;color:#66736f!important;margin-bottom:10px!important}
      .projectbar{grid-template-columns:auto auto minmax(110px,1fr) minmax(110px,1fr)!important;gap:6px!important;margin-top:9px!important}
      .action{
        border-radius:8px!important;padding:8px 9px!important;font-size:10.5px!important;box-shadow:none!important;font-weight:720!important;
      }
      .mapaction{background:#eef4f2!important;color:#174f48!important;border:1px solid #dbe7e3!important}
      .webaction{background:#fff!important;color:#56645f!important;border:1px solid #dfe5e2!important}
      .moneybox{border-radius:8px!important;border:1px solid #e4e8e5!important;background:#fafbf9!important;padding:7px 9px!important}
      .moneylabel{font-size:9.5px!important;color:#8a9490!important;font-weight:700!important;letter-spacing:.02em!important}
      .estimate{font-size:11.5px!important;color:#2f4e49!important;font-weight:740!important}
      .actualrow input{border-radius:7px!important;border-color:#dce3df!important;padding:5px 7px!important}
      .map{height:350px!important;border-radius:11px!important}
      .mapnote{font-size:10.5px!important;color:#89928f!important;margin-top:9px!important}

      #prep .dayhead{margin-top:2px!important}
      .prep-grid{gap:12px!important}
      .prep-policy{gap:0!important}
      .prep-card{padding:20px!important}
      .prep-card h3{font-size:16.5px!important;font-weight:740!important;letter-spacing:-.01em!important}
      .prep-card h4{font-size:10.5px!important;letter-spacing:.04em!important;text-transform:uppercase!important;color:#467069!important;margin:15px 0 5px!important}
      .prep-card p{font-size:12.5px!important;line-height:1.72!important;color:#687570!important}
      .prep-policy>div{padding:2px 18px 2px 2px!important}
      .prep-policy>div+div{border-left:1px solid #e7eae8!important;padding-left:20px!important;padding-right:2px!important}
      .prep-alert{
        background:#f8f6f0!important;border:1px solid #ece7dc!important;border-radius:9px!important;
        color:#766a51!important;padding:9px 11px!important;font-size:11px!important;line-height:1.55!important;margin-bottom:16px!important;
      }
      .prep-links{gap:5px!important;margin-top:13px!important}
      .prep-link{
        background:#f5f8f7!important;color:#3f625c!important;border:1px solid #e0e7e4!important;
        border-radius:7px!important;padding:7px 8px!important;font-size:10px!important;font-weight:700!important;
      }
      .pack-head{align-items:center!important}
      .pack-progress{font-size:11.5px!important;color:#53726c!important;font-weight:720!important}
      .pack-bar{height:4px!important;background:#ebefed!important;margin:10px 0 18px!important}
      .pack-fill{background:#3f746b!important}
      .pack-add{grid-template-columns:150px 1fr auto!important;gap:6px!important;margin-bottom:18px!important}
      .pack-add select,.pack-add input{
        border-radius:8px!important;border:1px solid #dde4e0!important;background:#fafbf9!important;
        padding:9px 10px!important;font-size:11.5px!important;
      }
      .pack-add button{
        border-radius:8px!important;background:#1d5b53!important;padding:9px 13px!important;font-size:10.5px!important;
      }
      .pack-category{
        margin:19px 0 5px!important;padding-bottom:6px!important;border-bottom:1px solid #ecefed!important;
        font-size:10.5px!important;text-transform:uppercase!important;letter-spacing:.06em!important;color:#84908c!important;font-weight:760!important;
      }
      .pack-row{
        grid-template-columns:26px 1fr auto!important;gap:8px!important;padding:10px 3px!important;border-bottom:1px solid #f0f2f1!important;
      }
      .pack-check{width:18px!important;height:18px!important;accent-color:#275f57!important}
      .pack-name{font-size:12.5px!important;color:#2c3936!important}
      .pack-status{font-size:9.5px!important;font-weight:650!important;color:#9a8d73!important;margin-top:2px!important}
      .pack-row.done .pack-name{color:#a0a8a5!important}
      .pack-row.done .pack-status{color:#608078!important}
      .pack-delete{font-size:9.5px!important;color:#9b6a60!important;opacity:.45!important}
      .pack-row:hover .pack-delete{opacity:1!important}
      .pack-restore{
        margin-top:16px!important;border-radius:8px!important;background:#fff!important;color:#7b8581!important;
        border:1px solid #e0e5e2!important;font-size:10px!important;font-weight:650!important;
      }

      .summary{padding:20px!important}
      .sumgrid{gap:8px!important}
      .sumcard{background:#fafbf9!important;border:1px solid #e8ebe9!important;border-radius:10px!important;padding:12px!important}
      .sumlabel{font-size:10px!important;color:#8a9490!important}
      .sumvalue{font-size:16px!important;color:#294b45!important}
      .reset{border-radius:8px!important;background:#fff!important;border-color:#e3e6e4!important;color:#8a6258!important;font-size:10px!important}
      .footer{color:#9aa29f!important;font-size:10px!important;margin-top:26px!important}
      #flightSummary{display:none!important}

      @media(max-width:900px){
        .grid{grid-template-columns:1fr!important}
        .map{height:310px!important}
        .prep-policy{grid-template-columns:1fr!important}
        .prep-policy>div{padding:2px!important}
        .prep-policy>div+div{border-left:0!important;border-top:1px solid #e7eae8!important;padding:20px 2px 2px!important;margin-top:18px!important}
      }
      @media(max-width:720px){
        .wrap{padding:14px 10px 46px!important}
        .hero{padding:21px 18px 19px!important;border-radius:16px!important}
        .topbar{margin-bottom:16px!important}
        h1{font-size:29px!important}
        .hero p{font-size:12.5px!important;line-height:1.62!important}
        .badges{display:grid!important;grid-template-columns:1fr!important}
        .badge{width:fit-content!important}
        .nav{
          top:0!important;margin:10px -2px 0!important;padding:6px!important;border-radius:12px!important;
          display:flex!important;flex-wrap:wrap!important;overflow:visible!important;
        }
        .nav>a{padding:7px 8px!important;font-size:11px!important;white-space:nowrap!important}
        .quickjump{
          order:99!important;width:100%!important;flex-basis:100%!important;margin-left:0!important;
          display:grid!important;grid-template-columns:auto minmax(88px,.8fr) minmax(140px,1.4fr)!important;
          border-top:1px solid #edf0ee!important;padding-top:6px!important;margin-top:2px!important;
        }
        .quickselect{width:100%!important;max-width:none!important;min-width:0!important}
        .section{margin-top:28px!important;scroll-margin-top:145px!important}
        .dayhead{align-items:flex-start!important;gap:8px!important}
        .dayhead h2{font-size:20px!important}
        .daytheme{font-size:9.5px!important}
        .card,.prep-card{padding:16px!important}
        .item{grid-template-columns:14px 78px 1fr!important;gap:8px!important;margin-bottom:25px!important;scroll-margin-top:175px!important}
        .time{font-size:11px!important}
        .event strong{font-size:14px!important}
        .desc{font-size:12px!important}
        .projectbar{grid-template-columns:1fr 1fr!important}
        .moneybox{grid-column:span 1!important}
        .map{height:250px!important}
        .pack-add{grid-template-columns:1fr 1fr!important}
        .pack-add input{grid-column:1/-1!important}
        .pack-add button{grid-column:1/-1!important}
      }
      @media(max-width:430px){
        .langbox,.currencybox{width:100%!important}
        .quickjump{grid-template-columns:1fr 1.4fr!important}
        .quicklabel{grid-column:1/-1!important}
        .item{grid-template-columns:14px 69px 1fr!important}
        .sumgrid{grid-template-columns:1fr!important}
      }
    `;
    document.head.appendChild(style);
  }
  window.addEventListener('load',()=>setTimeout(applyTheme,80));
})();
