
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('raja-mantri-chor-sipahi').then(function(cache) {
      return cache.addAll([
        '/',
        '/raja.html',
        '/button_click.mp3',
        '/card_flip.mp3',
        '/correct.mp3',
        '/wrong.mp3',
        '/player_turn.mp3',
        '/win.mp3',
        '/draw.mp3',
        '/countdown.mp3',
        '/wait_turn.mp3',
        '/game-background.jpg',
        '/menu-background.jpg',
        '/card-back.jpg',
        '/icon-192.png',
        '/icon-512.png'
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
