self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('raja-game').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './assets/welcome_sound.mp3',
        './assets/card_back.jpg',
        './assets/icon-192.png',
        './assets/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});