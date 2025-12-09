'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const isHebrew = pathname.startsWith('/he')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={isHebrew ? '/he' : '/'} className="text-2xl font-bold text-primary">
            BiYé
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href={isHebrew ? '/he' : '/'} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isHebrew ? 'בית' : 'Home'}
            </Link>
            <Link 
              href={isHebrew ? '/he#contact' : '/#contact'} 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isHebrew ? 'צור קשר' : 'Contact'}
            </Link>
            
            {/* Language Switcher */}
            <Link 
              href={isHebrew ? '/' : '/he'}
              className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              {isHebrew ? 'EN' : 'HE'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href={isHebrew ? '/he' : '/'} 
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHebrew ? 'בית' : 'Home'}
            </Link>
            <Link 
              href={isHebrew ? '/he#contact' : '/#contact'} 
              className="block text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHebrew ? 'צור קשר' : 'Contact'}
            </Link>
            <Link 
              href={isHebrew ? '/' : '/he'}
              className="block px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isHebrew ? 'EN' : 'HE'}
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
