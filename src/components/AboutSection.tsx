'use client'

import {
  Users,
  Sparkles,
  Zap,
} from 'lucide-react'

const features = [
  {
    title: "Who We Are",
    icon: Users,
    content:
      "A passionate team of developers, designers, and visionaries committed to building the future of visual collaboration. Our mission is to simplify complex communication.",
  },
  {
    title: "What We Offer",
    icon: Sparkles,
    content:
      "Live whiteboards, customizable dashboards, real-time syncing, and intuitive drawing tools — all accessible from any device, anywhere in the world.",
  },
  {
    title: "Why Choose Us",
    icon: Zap,
    content:
      "We believe in simplicity, speed, and innovation. SketchMind is designed to empower teams to think visually, collaborate smarter, and move ideas forward faster.",
  },
]

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-[#f9fbfe] to-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-blue-600">SketchMind</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          SketchMind is a next-generation collaborative platform that empowers individuals and teams to ideate, visualize, and collaborate in real-time. Our goal is to provide powerful tools like live whiteboarding, interactive dashboards, and intuitive workflows to accelerate creativity and productivity across industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-[1px] bg-gradient-to-tr from-blue-100 via-blue-300 to-blue-100 rounded-2xl transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="bg-white rounded-2xl p-6 h-full shadow-md transition-shadow duration-300 group-hover:shadow-xl hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
                <item.icon className="w-9 h-9 text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
