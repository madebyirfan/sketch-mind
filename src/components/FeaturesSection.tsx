'use client'

import {
  PenTool,
  BarChart3,
  Share2,
  Layers3,
  ShieldCheck,
  Timer,
} from 'lucide-react'

const features = [
  {
    title: 'Real-Time Whiteboard',
    description: 'Sketch ideas and collaborate instantly with teammates across devices.',
    icon: PenTool,
  },
  {
    title: 'Live Dashboards',
    description: 'Monitor project progress and insights visually with interactive dashboards.',
    icon: BarChart3,
  },
  {
    title: 'Easy Sharing',
    description: 'Invite collaborators with one click and share boards securely.',
    icon: Share2,
  },
  {
    title: 'Multi-Layered Boards',
    description: 'Organize content across layers for better structure and visibility.',
    icon: Layers3,
  },
  {
    title: 'Secure Collaboration',
    description: 'Your data is protected with end-to-end encryption and role-based access.',
    icon: ShieldCheck,
  },
  {
    title: 'Real-Time Sync',
    description: 'Instant updates across users and devices with zero delay.',
    icon: Timer,
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-gradient-to-br from-[#ffffff] via-[#f8fbff] to-[#fbfbfb] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          App <span className="text-blue-600">Highlights</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Discover powerful tools built to make collaboration effortless, creative, and secure for everyone.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-orange-300 bg-white shadow-sm hover:shadow-md hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-orange-100 text-orange-600 rounded-full p-3 shadow mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
