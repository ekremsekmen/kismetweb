// Service Worker for Öz Kısmet Çelik Kapı PWA
// Version: 1.1.0

// Bump the cache version whenever static assets (like door-anatomy.png) change
const CACHE_VERSION = 'v2'
const CACHE_PREFIX = 'kismet-'
const STATIC_CACHE = `${CACHE_PREFIX}static-${CACHE_VERSION}`
const DYNAMIC_CACHE = `${CACHE_PREFIX}dynamic-${CACHE_VERSION}`
const IMAGE_CACHE = `${CACHE_PREFIX}images-${CACHE_VERSION}`

// Assets to cache immediately on install
const STATIC_ASSETS = ['/', '/manifest.json', '/offline']

// Cache strategies
const CACHE_STRATEGIES = {
  // Network first, fallback to cache
  networkFirst: async (request, cacheName) => {
    try {
      const networkResponse = await fetch(request)
      if (networkResponse.ok) {
        const cache = await caches.open(cacheName)
        cache.put(request, networkResponse.clone())
      }
      return networkResponse
    } catch {
      const cachedResponse = await caches.match(request)
      return cachedResponse || caches.match('/offline')
    }
  },

  // Cache first, fallback to network
  cacheFirst: async (request, cacheName) => {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    try {
      const networkResponse = await fetch(request)
      if (networkResponse.ok) {
        const cache = await caches.open(cacheName)
        cache.put(request, networkResponse.clone())
      }
      return networkResponse
    } catch {
      return caches.match('/offline')
    }
  },

  // Stale while revalidate
  staleWhileRevalidate: async (request, cacheName) => {
    const cache = await caches.open(cacheName)
    const cachedResponse = await cache.match(request)

    const fetchPromise = fetch(request)
      .then(networkResponse => {
        if (networkResponse.ok) {
          cache.put(request, networkResponse.clone())
        }
        return networkResponse
      })
      .catch(() => cachedResponse)

    return cachedResponse || fetchPromise
  },
}

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const allowedCaches = new Set([STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE])

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .filter(name => name.startsWith(CACHE_PREFIX) && !allowedCaches.has(name))
            .map(name => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  )
})

// Fetch event - apply caching strategies
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip cross-origin requests (except images)
  if (url.origin !== location.origin && !request.destination === 'image') return

  // Skip API routes - always network
  if (url.pathname.startsWith('/api/')) return

  // Skip Next.js internal routes
  if (url.pathname.startsWith('/_next/')) {
    // Static assets - cache first
    if (url.pathname.includes('/static/')) {
      event.respondWith(CACHE_STRATEGIES.cacheFirst(request, STATIC_CACHE))
      return
    }
    return
  }

  // Images - cache first with long TTL
  if (
    request.destination === 'image' ||
    url.pathname.startsWith('/images/') ||
    url.pathname.startsWith('/icons/')
  ) {
    event.respondWith(CACHE_STRATEGIES.cacheFirst(request, IMAGE_CACHE))
    return
  }

  // HTML pages - network first
  if (request.destination === 'document' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(CACHE_STRATEGIES.networkFirst(request, DYNAMIC_CACHE))
    return
  }

  // Default - stale while revalidate
  event.respondWith(CACHE_STRATEGIES.staleWhileRevalidate(request, DYNAMIC_CACHE))
})

// Push notification support (future)
self.addEventListener('push', event => {
  if (!event.data) return

  const data = event.data.json()
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/',
    },
  }

  event.waitUntil(self.registration.showNotification(data.title || 'Öz Kısmet', options))
})

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(clients.openWindow(event.notification.data.url))
})
