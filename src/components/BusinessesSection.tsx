'use client'

import { Building2, Briefcase, Globe, Users } from 'lucide-react'

const businesses = [
  {
    title: 'Startups & Innovators',
    description:
      'Turn brainstorming sessions into actionable plans with visual collaboration tools.',
    icon: Globe,
    borderColor: 'border-blue-500',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Educational Institutions',
    description:
      'Empower teachers and students with interactive learning boards and shared lessons.',
    icon: Users,
    borderColor: 'border-green-500',
    iconColor: 'text-green-500',
  },
  {
    title: 'Enterprise Teams',
    description:
      'Accelerate projects with real-time whiteboards and structured dashboards.',
    icon: Building2,
    borderColor: 'border-purple-500',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Freelancers & Agencies',
    description:
      'Collaborate with clients seamlessly, present ideas visually, and manage feedback.',
    icon: Briefcase,
    borderColor: 'border-pink-500',
    iconColor: 'text-pink-500',
  },
]

export default function BusinessesSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Businesses <span className="text-blue-600">With Us</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          SketchMind supports professionals across industries—whether you&apos;re managing a team, teaching a class,
          or working on your next big idea.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((biz, index) => {
            const Icon = biz.icon
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${biz.borderColor} bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`p-3 rounded-full border-2 ${biz.borderColor} mb-4`}
                  >
                    <Icon className={`w-8 h-8 ${biz.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{biz.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{biz.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
