const cacheName = 'wular-store-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
  // add more assets like CSS/JS/images later
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
