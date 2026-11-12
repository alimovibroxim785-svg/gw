const CACHE_NAME = 'woman-shell-v6';
const PRECACHE = [
    "./",
    "./index.html",
    "./admin.html",
    "./manifest.json",
    "./assets/ahror-hd.jpg",
    "./assets/akrom-hd.jpg",
    "./assets/boyash.jpg",
    "./assets/detskiy.jpg",
    "./assets/dilnoza.jpg",
    "./assets/icon-180.png",
    "./assets/icon-192.png",
    "./assets/icon-512.png",
    "./assets/icon-maskable-512.png",
    "./assets/jamoliddin-hd.jpg",
    "./assets/kuyov.jpg",
    "./assets/lobar.jpg",
    "./assets/logo.png",
    "./assets/madina.jpg",
    "./assets/maska.jpg",
    "./assets/massaj.jpg",
    "./assets/og-image.jpg",
    "./assets/qr.png",
    "./assets/shahlo.jpg",
    "./assets/ukladka.jpg",
    "./assets/umida.jpg",
    "./assets/vendor/fontawesome/css/all.min.css",
    "./assets/vendor/fontawesome/webfonts/fa-brands-400.ttf",
    "./assets/vendor/fontawesome/webfonts/fa-brands-400.woff2",
    "./assets/vendor/fontawesome/webfonts/fa-regular-400.ttf",
    "./assets/vendor/fontawesome/webfonts/fa-regular-400.woff2",
    "./assets/vendor/fontawesome/webfonts/fa-solid-900.ttf",
    "./assets/vendor/fontawesome/webfonts/fa-solid-900.woff2",
    "./assets/vendor/fontawesome/webfonts/fa-v4compatibility.ttf",
    "./assets/vendor/fontawesome/webfonts/fa-v4compatibility.woff2",
    "./assets/vendor/fonts/font-00.woff2",
    "./assets/vendor/fonts/font-01.woff2",
    "./assets/vendor/fonts/font-02.woff2",
    "./assets/vendor/fonts/font-03.woff2",
    "./assets/vendor/fonts/font-04.woff2",
    "./assets/vendor/fonts/font-05.woff2",
    "./assets/vendor/fonts/font-06.woff2",
    "./assets/vendor/fonts/font-07.woff2",
    "./assets/vendor/fonts/font-08.woff2",
    "./assets/vendor/fonts.css",
    "./assets/vendor/tailwind.js",
    "./assets/vosk.jpg",
    "./assets/web/photo-1487412720507-e7ab37603c6f-600.jpg",
    "./assets/web/photo-1487412720507-e7ab37603c6f-800.jpg",
    "./assets/web/photo-1500648767791-00dcc994a43e-600.jpg",
    "./assets/web/photo-1503951914875-452162b0f3f1-600.jpg",
    "./assets/web/photo-1503951914875-452162b0f3f1-800.jpg",
    "./assets/web/photo-1507003211169-0a1dd7228f2d-600.jpg",
    "./assets/web/photo-1521590832167-7bcbfaa6381f-800.jpg",
    "./assets/web/photo-1522337360788-8b13dee7a37e-600.jpg",
    "./assets/web/photo-1522337360788-8b13dee7a37e-800.jpg",
    "./assets/web/photo-1560066984-138dadb4c035-1920.jpg",
    "./assets/web/photo-1599351431202-1e0f0137899a-800.jpg",
    "./assets/web/photo-1622286342621-4bd786c2447c-600.jpg",
    "./assets/web/photo-1622286342621-4bd786c2447c-800.jpg"
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(PRECACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

function cachePut(request, response) {
    if (!response || (response.status !== 200 && response.type !== 'opaque')) return;
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
}

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    if (!/^https?:$/.test(url.protocol)) return;

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    cachePut(request, response);
                    return response;
                })
                .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;
            return fetch(request).then((response) => {
                cachePut(request, response);
                return response;
            });
        })
    );
});
