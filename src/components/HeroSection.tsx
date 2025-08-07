'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#e6f0ff] via-[#d0e3ff] to-[#f0f4fa] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-10 md:py-20">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Collaborate. Create. Visualize. <br />
            <span className="text-blue-600">All in one place.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            SketchMind is your all-in-one platform for real-time whiteboarding, dashboards, and visual collaboration — whether you&apos;re a team or an individual creator.
          </p>
          <Link
            href="/room"
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium text-base shadow-md"
          >
            Start Collaborating
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/images/whiteboard.png"
            alt="SketchMind Hero Image"
            width={600}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
