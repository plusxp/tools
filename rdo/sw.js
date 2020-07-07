const CACHE_NAME = "tools/rdo";

const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/icon.png",
  "iconx512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
