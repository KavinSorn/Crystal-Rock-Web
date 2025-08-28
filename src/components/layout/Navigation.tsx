import React from 'react'
import Image from 'next/image'
import { useAppStore } from '@/stores/appStore'
import { PageType } from '@/types'
import { cn } from '@/lib/utils'

const Navigation: React.FC = () => {
  const { currentPage, isMenuOpen, setCurrentPage, toggleMenu } = useAppStore()

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page)
    if (isMenuOpen) toggleMenu()
  }

  const navItems = [
    { id: 'home' as PageType, label: 'Home' },
    { id: 'mess' as PageType, label: 'CR Mess' },
    { id: 'about' as PageType, label: 'About Us' },
    { id: 'contact' as PageType, label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#3D4D73] backdrop-blur-sm border-b border-[#3D4D73]/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleNavClick('home')}
          >
            <Image
              src="/logo_removebg.png"
              alt="Crystal Rock Logo"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-white/80',
                    currentPage === item.id
                      ? 'text-white font-semibold'
                      : 'text-white/90'
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          >
            <span 
              className={cn(
                'block w-6 h-0.5 bg-white transition-transform',
                isMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span 
              className={cn(
                'block w-6 h-0.5 bg-white transition-opacity',
                isMenuOpen && 'opacity-0'
              )}
            />
            <span 
              className={cn(
                'block w-6 h-0.5 bg-white transition-transform',
                isMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      'block w-full text-left py-2 px-4 rounded-md text-lg font-medium transition-colors',
                      currentPage === item.id
                        ? 'bg-white/20 text-white font-semibold'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
