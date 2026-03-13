'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { createPortal } from 'react-dom'

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 250)
  }, [onClose])

  const overlayClass = isClosing ? 'menu-overlay-exit' : 'menu-overlay-enter'
  const contentClass = isClosing ? 'menu-content-exit' : 'menu-content-enter'

  return createPortal(
    <div className={`fixed inset-0 bg-white ${overlayClass}`} style={{ zIndex: 9999 }}>
      {/* Close button */}
      <button
        className={`absolute top-4 right-5 w-8 h-8 flex items-center justify-center z-10 ${contentClass}`}
        onClick={handleClose}
        aria-label="Cerrar menú"
      >
        <svg className="w-5 h-5 text-[#222]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Menu content */}
      <div className={`flex flex-col items-center justify-center h-full gap-8 ${contentClass}`}>
        <Link href="/" onClick={handleClose} className="font-display text-2xl font-normal text-[#222]">
          B A R A L E S
        </Link>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleClose}
            className={`font-display text-base font-normal transition-colors ${link.href === '/' ? 'text-[#999]' : 'text-[#222]'}`}
          >
            {link.spacedLabel}
          </Link>
        ))}
        <div className="flex items-center gap-5 mt-2">
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#222] transition-colors" aria-label="Instagram">
            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={`mailto:${SITE.email}`} className="text-[#999] hover:text-[#222] transition-colors" aria-label="Email">
            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
          </a>
        </div>
      </div>
    </div>,
    document.body
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop: fixed left sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-[233px] h-screen z-40 flex-col items-start pt-10 pl-10">
        <Link href="/" className="font-display text-2xl font-normal text-[#222] hover:text-[#999] transition-colors">
          B A R A L E S
        </Link>
        <nav className="mt-8 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-base font-normal transition-colors ${link.href === '/' ? 'text-[#999] hover:text-[#222]' : 'text-[#222] hover:text-[#999]'}`}
            >
              {link.spacedLabel}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 mt-4">
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[#222] transition-colors" aria-label="Instagram">
            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={`mailto:${SITE.email}`} className="text-[#999] hover:text-[#222] transition-colors" aria-label="Email">
            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
          </a>
        </div>
      </aside>

      {/* Mobile: top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-lg font-normal text-[#222]">B A R A L E S</Link>
          <button className="relative w-6 h-5 flex flex-col justify-between" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">
            <span className="block h-px w-full bg-[#222]" />
            <span className="block h-px w-full bg-[#222]" />
            <span className="block h-px w-full bg-[#222]" />
          </button>
        </div>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  )
}
