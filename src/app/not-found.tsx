'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 | SketchMind - Page Not Found'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-6 text-center">
      <div className="max-w-md w-full animate-fade-in">
        <h1 className="text-7xl font-extrabold text-slate-800 mb-2">404</h1>
        <p className="text-2xl font-semibold text-slate-700 mb-3">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-slate-500 mb-6">
          The page may have been moved or deleted. Please check the URL or return to the homepage.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
