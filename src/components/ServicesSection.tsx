'use client'

import {
  Edit,
  LayoutDashboard,
  Users,
  GraduationCap,
} from 'lucide-react'

const services = [
  {
    title: 'Live Collaborative Whiteboard',
    description:
      'Draw, write, and brainstorm together in real time. Perfect for meetings, classrooms, and team collaboration.',
    icon: Edit,
    gradient: 'from-blue-100 to-blue-200',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Interactive Dashboards',
    description:
      'Visualize your ideas with dynamic dashboards that update live. Drag, drop, and customize components easily.',
    icon: LayoutDashboard,
    gradient: 'from-purple-100 to-purple-200',
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Team Collaboration Tools',
    description:
      'Invite team members, assign roles, and collaborate seamlessly across any device with real-time updates.',
    icon: Users,
    gradient: 'from-teal-100 to-teal-200',
    iconBg: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'Remote Teaching & Learning',
    description:
      'Designed for educators and learners with tools like annotation, file sharing, and lesson templates.',
    icon: GraduationCap,
    gradient: 'from-yellow-100 to-yellow-200',
    iconBg: 'bg-yellow-100 text-yellow-600',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          SketchMind empowers teams, educators, and professionals to think visually, collaborate creatively, and
          execute efficiently — all on a single platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative p-[1px] bg-gradient-to-br ${service.gradient} rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
              >
                <div className="bg-white rounded-2xl p-6 h-full transition-shadow duration-300">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-full shadow ${service.iconBg} mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
