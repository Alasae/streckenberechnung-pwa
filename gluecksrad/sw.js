// sw.js
self.addEventListener(\"install\", e => {
  e.waitUntil(
    caches.open(\"wheel-v1\").then(cache => {
      return cache.addAll([\"./\", \"index.html\", \"manifest.json\"]);
    })
  );
});
