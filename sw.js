const CACHE='thailand-trip-v15';
const CORE=['./','./index.html','./prep.html','./day26.html','./day27.html','./day28.html','./day29.html','./summary.html','./base.css','./shell.js','./ui.js','./plans-a.js','./plans-b.js','./plans-c.js','./day26-dinner-options.js','./day26-evening-order.js','./app.js','./prep.js','./theme.js','./nav-enhance.js','./page-mode.js','./route-inline.js','./trip-sync.js','./prep-dual.js','./prep-person-tabs.js','./expense-sync.js','./budget-overview.js','./fixed-actuals.js','./pwa.js','./manifest.webmanifest','./trip-icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET')return;
  if(u.origin===location.origin){
    e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));
  }
});