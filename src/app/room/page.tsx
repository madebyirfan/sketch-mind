'use client'

import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { ArrowRight, Users, PenTool, Share2, Eye } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function RoomHomePage() {
  const [roomId, setRoomId] = useState<string | null>(null)

  useEffect(() => {
    setRoomId(uuidv4())
  }, [])

  return (
    <React.Fragment>
      <Header />
      <div className="px-6 md:px-12 lg:px-20 py-40 bg-gradient-to-br from-[#e6f0ff] via-[#d0e3ff] to-[#f0f4fa] text-gray-800">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SketchMind Collaboration Rooms</h1>
          <p className="text-lg md:text-xl mb-8">
            Brainstorm, draw, and collaborate in real-time with your team or class. Sketch your ideas into reality.
          </p>
          {roomId && (
            <Link
              href={`/room/${roomId}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Create New Room
            </Link>
          )}
        </div>

        {/* How It Works Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: 'Invite Collaborators',
                desc: 'Share the room link or invite via email. Real-time updates guaranteed.',
              },
              {
                icon: <PenTool className="w-8 h-8 text-blue-600" />,
                title: 'Draw & Plan',
                desc: 'Use the whiteboard tools to sketch diagrams, wireframes, mind maps, and more.',
              },
              {
                icon: <Share2 className="w-8 h-8 text-blue-600" />,
                title: 'Discuss Ideas',
                desc: 'Chat or voice call while working collaboratively in the same space.',
              },
              {
                icon: <Eye className="w-8 h-8 text-blue-600" />,
                title: 'Review Anytime',
                desc: 'Access your saved rooms, download whiteboards, or share them for feedback.',
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why SketchMind Section */}
        <section className="mt-28 bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-10">Why Use SketchMind?</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg list-disc list-inside text-gray-700">
            <li>No installations required — runs in your browser.</li>
            <li>Live collaboration with instant updates.</li>
            <li>Flexible whiteboard canvas with drawing and typing tools.</li>
            <li>Ideal for classrooms, product teams, designers, and remote workers.</li>
            <li>Export your boards in PDF or image formats.</li>
            <li>Role-based access to manage contributors and viewers.</li>
          </ul>
        </section>

        {/* Getting Started Section */}
        <section className="mt-28">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started in 3 Simple Steps</h2>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            {[
              {
                step: '1',
                title: 'Create a Room',
                text: 'Click the "Create New Room" button to generate your unique collaboration space.',
              },
              {
                step: '2',
                title: 'Invite Others',
                text: 'Share the room link or add email addresses to start collaborating live.',
              },
              {
                step: '3',
                title: 'Start Drawing',
                text: 'Use drawing tools, sticky notes, text, and more to plan and innovate together.',
              },
            ].map((item, index) => (
              <div key={index} className="relative bg-white p-6 rounded-xl shadow-md w-full md:w-1/3 text-center z-10">
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}

            {/* Arrow indicators (show only on md+ screens) */}
            <div className="hidden md:flex absolute justify-between w-full px-10 top-16">
              <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-0" />
              <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-0" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}
