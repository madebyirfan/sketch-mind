'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#fff7f0] via-[#fff3e6] to-[#fffaf5] overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40 top-0 left-0" />
        <div className="absolute w-96 h-96 bg-orange-200 rounded-full blur-2xl opacity-30 bottom-0 right-0" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Ready to <span className="text-orange-500 underline decoration-orange-300">Sketch Your Ideas?</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
          Whether you&apos;re a team leader, freelancer, educator, or entrepreneur — SketchMind gives you the canvas to
          visualize, plan, and create like never before.
        </p>
        <p className="text-base text-gray-600 mb-10">
          Trusted by thousands of professionals and educators around the world.
        </p>

        <Link
          href="/signup"
          className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-orange-600 hover:shadow-lg transition"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  )
}
