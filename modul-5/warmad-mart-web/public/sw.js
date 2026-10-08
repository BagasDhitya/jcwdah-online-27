const CACHE_NAME = "warmad-mart-v2"; // naikkan versi supaya cache lama dibersihkan
const ASSETS_TO_CACHE = ["/", "/products", "/offline.html"];

// Hanya tangani GET dan same-origin
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

// install service worker & cache
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE)
        })
    )
    self.skipWaiting()
})

// aktivasi service worker & bersihkan cache lama
self.addEventListener("activate", (event) => {
   event.waitUntil(

    caches.keys().then((cacheName) => {
        return Promise.all(cacheName.map((cache) => {
            if (cache !== CACHE_NAME){
                return caches.delete(cache)
            }
        }))
    })
   )
   self.clients.claim()
})

// Strategi fetch: ambil dari network dulu, jika offline ambil dari cache
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request)
        })
    )
})
