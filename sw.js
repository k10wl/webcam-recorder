const CACHE_NAME = 'webcam-recorder-ecc1af0e-b3d3-4382-8773-1ed839e1ce23';
const urlsToCache = [
  '/index.html',
  '/favicon.ico',
];

crypto.randomUUID()

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

