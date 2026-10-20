// Service worker de limpieza: borra cachés viejos y se desinstala solo.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)));
  await self.registration.unregister();
  const cl=await self.clients.matchAll({type:'window'});cl.forEach(c=>c.navigate(c.url));
})())});
