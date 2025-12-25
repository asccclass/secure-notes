// 簡單的 Service Worker，滿足 PWA 安裝要求
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activate');
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
    // 簡單的透傳策略，確保有 fetch handler
    e.respondWith(fetch(e.request));
});
