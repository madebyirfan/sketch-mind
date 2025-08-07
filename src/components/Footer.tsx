// 1. Footer Component: src/components/Footer.tsx

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">SketchMind</h4>
          <p className="text-sm text-gray-300">
            Empowering creativity and collaboration through visual tools for teams, educators, and innovators.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@sketchmind.com</li>
            <li>Phone: +1 (234) 567-8901</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} SketchMind. All rights reserved.
      </div>
    </footer>
  )
}