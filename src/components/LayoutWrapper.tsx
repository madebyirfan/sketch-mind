'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ServiceWorkerRegister from './ServiceWorkerRegister'

const noLayoutRoutes = ['/dashboard', '/profile', '/room']

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showLayout = !noLayoutRoutes.some((route) => pathname.startsWith(route))

  return (
    <>
      <ServiceWorkerRegister />
      {showLayout && <Header />}
      {children}
      {showLayout && <Footer />}
    </>
  )
}
