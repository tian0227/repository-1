(function(){
  const style=document.createElement('style');
  style.id='prepPersonTabsAlways';
  style.textContent=`
    #dualPacking .dual-pack-tabs{
      display:grid!important;
      grid-template-columns:1fr 1fr!important;
      gap:6px!important;
      margin:0 0 14px!important;
      padding:4px!important;
      background:#edf2f0!important;
      border:1px solid #dde6e2!important;
      border-radius:12px!important;
      position:sticky!important;
      top:74px!important;
      z-index:8!important;
    }
    #dualPacking .dual-pack-tab{
      border:0!important;
      background:transparent!important;
      color:#60706b!important;
      border-radius:9px!important;
      padding:11px 12px!important;
      font-size:14px!important;
      font-weight:850!important;
      cursor:pointer!important;
    }
    #dualPacking .dual-pack-tab.active{
      background:#173f3a!important;
      color:#fff!important;
      box-shadow:0 2px 6px rgba(23,63,58,.16)!important;
    }
    #dualPacking .dual-pack-grid{
      display:grid!important;
      grid-template-columns:1fr!important;
      gap:0!important;
    }
    #dualPacking .dual-person-card{
      display:none!important;
    }
    #dualPacking .dual-person-card.mobile-active{
      display:block!important;
    }
  `;
  document.head.appendChild(style);
})();
