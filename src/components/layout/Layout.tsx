import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Layout
