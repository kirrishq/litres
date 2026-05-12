'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Проекты', href: '/projects' },
  { label: 'Услуги', href: '/services' },
  // { label: 'О нас', href: '/about' },
]

function BurgerButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className="navbar__burger"
      onClick={onClick}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
    >
      <span className={`navbar__burger-line ${isOpen ? 'is-open' : ''}`} />
      <span className={`navbar__burger-line ${isOpen ? 'is-open' : ''}`} />
      <span className={`navbar__burger-line ${isOpen ? 'is-open' : ''}`} />
    </button>
  )
}

function MobileMenu({ isOpen, onClose, pathname }: { isOpen: boolean; onClose: () => void; pathname: string }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className={`mobile-menu__backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-label="Закрыть меню"
      />
      <div className={`mobile-menu__panel ${isOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu__nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`mobile-menu__link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="mobile-menu__footer">
          <Button 
          variant="secondary" 
          withDot
          >
            Связаться
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pillStyle, setPillStyle] = useState({ width: 0, x: 0 })
  const [pillReady, setPillReady] = useState(false)

  const navItemsRef = useRef<HTMLDivElement>(null)
  const btnRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > window.innerHeight)
  }
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  const updatePill = useCallback((animate = true) => {
    const activeIndex = navItems.findIndex((item) => item.href === pathname)
    const activeBtn = btnRefs.current[activeIndex]
    if (!activeBtn || !navItemsRef.current) return
    const containerLeft = navItemsRef.current.getBoundingClientRect().left
    const btnRect = activeBtn.getBoundingClientRect()
    setPillStyle({ width: btnRect.width, x: btnRect.left - containerLeft })
    if (!animate) { setTimeout(() => setPillReady(true), 10) } else { setPillReady(true) }
  }, [pathname])

  useEffect(() => {
    setPillReady(false)
    const timer = setTimeout(() => updatePill(false), 60)
    return () => clearTimeout(timer)
  }, [pathname, updatePill])

  useEffect(() => {
    const handler = () => updatePill(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [updatePill])

  return (
    <>
      <Logo className="logo-wrapper logo-wrapper--difference logo-wrapper--fixed" />

      <header className="navbar">
        {/* Nav capsule — справа, desktop */}
        <div className={`navbar__capsule ${scrolled ? 'is-scrolled' : ''}`}>
          <div ref={navItemsRef} className="navbar__nav-items">
            <div
              className="navbar__pill"
              aria-hidden="true"
              style={{
                width: pillStyle.width,
                transform: `translateX(${pillStyle.x}px)`,
                transition: pillReady
                  ? 'transform 0.5s cubic-bezier(0.34,1.2,0.64,1), width 0.5s cubic-bezier(0.34,1.2,0.64,1)'
                  : 'none',
              }}
            />
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => { btnRefs.current[index] = el }}
                  className={`navbar__link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="navbar__link-text">{item.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="navbar__divider" aria-hidden="true" />
          <ThemeToggle />

          {/* Кнопка появляется после скролла */}
          <div className={`navbar__contact ${scrolled ? 'is-visible' : ''}`} aria-hidden={!scrolled}>
            <div className="navbar__divider" aria-hidden="true" />
            <Button 
            variant="primary" 
            withDot>
              Связаться
            </Button>
          </div>
        </div>

        {/* Mobile capsule — лого уже слева, здесь toggle + бургер */}
        <div className="navbar__mobile-capsule">
          <ThemeToggle />
          <div className="navbar__divider" aria-hidden="true" />
          <BurgerButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </div>

      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  )
}
