'use client'

import {
  BrainCircuit,
  Users,
  Clock,
  Share2,
  Zap,
  Layers3,
} from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    icon: BrainCircuit,
    title: 'Visual Collaboration',
    description:
      'Transform brainstorming into action with our intuitive whiteboard interface. SketchMind empowers teams to ideate, connect thoughts, and innovate visually with speed and clarity.',
  },
  {
    icon: Users,
    title: 'Real-Time Multi-User Editing',
    description:
      'Experience seamless team collaboration — everyone can draw, comment, and co-create simultaneously with zero lag and live updates.',
  },
  {
    icon: Clock,
    title: 'Auto-Sync & Version Control',
    description:
      'SketchMind saves your progress automatically and maintains a history of changes. You’ll never lose a brilliant idea again.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing & Embedding',
    description:
      'Share your boards via secure links or embed them in presentations, LMS platforms, and product docs. Perfect for remote teams and educators.',
  },
  {
    icon: Zap,
    title: 'No Installation Needed',
    description:
      'Jump straight into creativity with no downloads. SketchMind runs fully in-browser across all modern devices.',
  },
  {
    icon: Layers3,
    title: 'Canvas Templates for All Use Cases',
    description:
      'Choose templates for mind maps, design sprints, classroom lessons, and more. Start fast with structures built for clarity.',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-[#fdfcfe] text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-300 to-green-400 text-white py-20 px-6 md:px-20 text-center overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          SketchMind gives you a powerful visual collaboration platform built for speed, clarity, and real-time teamwork.
        </p>

        <div className="absolute top-0 right-0 opacity-20 w-64 h-64 pointer-events-none">
          <Image
            src="/images/hero-whiteboard.svg"
            alt="whiteboard illustration"
            width={300}
            height={300}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-20 bg-[#f7f6fa]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-8 flex flex-col gap-4"
            >
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Icon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Visual Section */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
          Built for Modern Teams, Teachers & Thinkers
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-10">
          SketchMind brings your ideas to life with real-time collaboration tools that break barriers. Whether you&apos;re brainstorming with colleagues, guiding students through concepts, or mapping user journeys — we&apos;ve got your back.
        </p>
        <Image
          src="/images/real-time.svg"
          alt="Real-time collaboration"
          width={700}
          height={400}
          className="mx-auto"
        />
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-600 py-16 px-6 md:px-20 text-white text-center rounded-t-3xl">
        <h3 className="text-3xl font-semibold mb-4">
          Ready to level up your collaboration?
        </h3>
        <p className="mb-6 text-lg">
          Try SketchMind free and start collaborating in real time today.
        </p>
        <a
          href="/signup"
          className="inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition"
        >
          Get Started Free
        </a>
      </section>
    </div>
  )
}

