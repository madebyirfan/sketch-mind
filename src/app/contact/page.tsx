'use client'

import { useEffect, useState, useActionState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import submitContactForm from './actions'

export default function ContactPage() {
  const initialState = { message: '', errors: {} as Record<string, string> }
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  // New local states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  // Update local state and clear error on change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  // Sync server errors into local state on submission
  useEffect(() => {
    if (state.errors) {
      setErrors(state.errors)
    }
  }, [state])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff4e6] via-[#ffe8cc] to-[#fff0d9] px-6 py-40 md:px-20">
      <div className="text-center mb-32">
        <h1 className="text-4xl font-bold text-orange-700 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Got questions, feedback, or need support? We’re here to help you get the most out of SketchMind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <MapPin className="text-orange-600 w-6 h-6" />
            <p className="text-gray-700">123 Sketch Street, Whiteboard City</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-orange-600 w-6 h-6" />
            <p className="text-gray-700">support@sketchmind.app</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-orange-600 w-6 h-6" />
            <p className="text-gray-700">+1 (234) 567‑8901</p>
          </div>

          <Image
            src="/images/contact-us.svg"
            alt="Contact Illustration"
            width={400}
            height={300}
            className="mt-10 rounded-lg shadow-md mx-auto md:mx-0"
          />
        </div>

        {/* Contact Form */}
        <form action={formAction} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500`}
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500`}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500`}
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition"
            disabled={isPending}
          >
            {isPending ? 'Sending...' : 'Send Message'}
          </button>

          {state.message && (
            <p className="text-green-600 text-sm mt-3">{state.message}</p>
          )}
        </form>
      </div>
    </div>
  )
}
