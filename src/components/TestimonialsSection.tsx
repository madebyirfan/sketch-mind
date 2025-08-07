'use client'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'Product Manager, TechCorp',
      quote:
        'SketchMind transformed how our remote teams collaborate. The whiteboard and dashboard tools are incredibly intuitive and powerful.',
    },
    {
      name: 'Alex Smith',
      role: 'Educator, Online Academy',
      quote:
        'I’ve used many tools for remote teaching, but SketchMind stands out. My students love the interactive experience!',
    },
    {
      name: 'Priya Kumar',
      role: 'Team Lead, Creative Inc.',
      quote:
        'With SketchMind, brainstorming sessions have become more visual and productive. Highly recommended!',
    },
  ]

  return (
    <section className="relative z-0 py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#f0f4ff] to-[#ffffff]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What Our <span className="text-blue-600">Users Say</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14">
          Real feedback from professionals, educators, and teams using SketchMind to boost productivity and collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.15)] transition-all duration-300 transform hover:-translate-y-2 hover:rotate-[-0.5deg] border border-gray-200"
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">“{testimonial.quote}”</p>
              <div className="mt-6">
                <h4 className="text-blue-600 font-semibold text-base">{testimonial.name}</h4>
                <span className="text-gray-500 text-sm">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
