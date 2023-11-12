const cache_name = "resume-cache"

const pre_cached = ["/", "styles.css", "app.js"]



self.addEventListener("install", event => {
  async function preCacheResources() {
    //eliminar cache
    if ('caches' in window) {
      const currentUrl = window.location.href;
      caches.keys().then(function (cacheNames) {
        cacheNames.forEach(function (cacheName) {
          caches.open(cacheName).then(function (cache) {
            cache.keys().then(function (requests) {
              requests.forEach(function (request) {
                if (request.url === currentUrl) {
                  cache.delete(request);
                }
              });
            });
          });
        });
      });
    }
    //crear cache
    const cache = await caches.open(cache_name);
    cache.addAll(pre_cached);
  }
  event.waitUntil(preCacheResources());
});

self.addEventListener("fetch", event => {
  async function returnCachedResource() {
    const cache = await caches.open(cache_name);
    const cachedResponse = await cache.match(event.request.url);

    if (cachedResponse) {
      return cachedResponse;
    } else {
      const fetchResponse = await fetch(event.request.url);
      cache.put(event.request.url, fetchResponse.clone());
      return fetchResponse
    }
  }
  event.respondWith(returnCachedResource());
});