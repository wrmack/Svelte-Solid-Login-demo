!function(){"use strict";const e=["client/chunk.fe94475d.js","client/index.83336b02.js","client/chunk.4ceeafff.js","client/chunk.fbd8dd8c.js","client/regsuccess.01d682aa.js","client/logout.4c09387e.js","client/about.fcf90b5c.js","client/register.fd4ac614.js","client/client.3759b00f.js","client/login.653e07d0.js"].concat(["service-worker-index.html","Solid.png","concentric-hex-pattern_2x.png","favicon.png","global.css","inrupt.svg","logo-192.png","logo-512.png","manifest.json","rocket.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1561013035101").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1561013035101"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1561013035101").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
