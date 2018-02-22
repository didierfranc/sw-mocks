self.importScripts('./service-worker-mocks.js')

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', () => {
  clients.claim()
})

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url)
  if (url.pathname === '/hello') {
    const response = hello(e.request)
    e.respondWith(response)
  }
})
