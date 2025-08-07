'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('App error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-slate-800 mb-4">Something went wrong</h1>
        <p className="text-slate-600 mb-6">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-sky-500 text-white rounded-md font-semibold hover:bg-sky-600 transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-2 bg-slate-700 text-white rounded-md font-semibold hover:bg-slate-800 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
