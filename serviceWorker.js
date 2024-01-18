const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg"
];

self .addEventListener(activate ,function(e)
console. log('(serviceWorker] Activate'):
));

self .addEventListener('activate',function (e) {
console. log(' [ServiceWorker] Activate');
e.waitUntil(
caches.keys() .then(function(keyList) 1
return Promise.all(keyList.map(function(key) {
if（key ！== cacheName）｛
console. log(' [ServiceWorker] Removing old cache, key):
return caches.delete(key);
}
                               }));
})
);
                                                           
return seif.clients.claim();
});
  




self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
