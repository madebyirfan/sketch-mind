'use client'

export default function ServiceWorkerRegister() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => console.log('✅ Service Worker registered:', reg))
      .catch(err => console.error('❌ Service Worker registration failed:', err));
  }

  return null;
}
