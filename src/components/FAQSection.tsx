'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is SketchMind?',
    answer:
      'SketchMind is a collaborative whiteboard and dashboard tool designed for teams, educators, and creatives to brainstorm, plan, and present ideas in real-time.',
  },
  {
    question: 'Is SketchMind free to use?',
    answer:
      'Yes, SketchMind offers a free tier with basic features. You can upgrade to premium plans for advanced functionality and team collaboration tools.',
  },
  {
    question: 'Can I invite others to collaborate?',
    answer:
      'Absolutely. You can invite team members or students to your room by sharing a room link or adding their email addresses.',
  },
  {
    question: 'Does SketchMind work on mobile?',
    answer:
      'Yes, SketchMind is fully responsive and works on both desktop and mobile devices.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is encrypted using industry standards, and you control access through role-based permissions.',
  },
  {
    question: 'Can I export whiteboards?',
    answer:
      'Yes, you can export boards as PDF, PNG, or share live links with collaborators.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 hover:border-gray-400 rounded-md bg-white shadow-sm transition-all"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-900 font-medium focus:outline-none transition"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 text-gray-700 border-t border-gray-200">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

