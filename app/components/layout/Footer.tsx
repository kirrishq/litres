'use client'

import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

type FooterColumn = {
  title: string
  links: FooterLink[]
}

const footerNav: FooterColumn[] = [
  {
    title: 'Навигация',
    links: [
      { label: 'Главная', href: '/' },
      { label: 'Проекты', href: '/projects' },
      { label: 'Услуги', href: '/services' },
    ],
  },
  {
    title: 'Решения',
    links: [
      { label: 'Дизайн', href: '/services/design' },
      { label: 'Разработка', href: '/services/development' },
      { label: 'Автоматизация', href: '/services/automation' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'Telegram', href: 'https://t.me/afterflow_studio', external: true },
      { label: 'hello@afterflow.studio', href: 'mailto:hello@afterflow.studio', external: true },
    ],
  },
]

export function Footer() {
  const rootRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  useGSAP(
    () => {
      const card = rootRef.current?.querySelector<HTMLElement>('.site-footer__card')
      const items = gsap.utils.toArray<HTMLElement>('[data-footer-item]')

      if (card) {
        gsap.fromTo(
          card,
          { clipPath: 'inset(100% 0% 0% 0% round 24px)', y: 72, opacity: 0 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 24px)',
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
            },
          }
        )
      }

      if (items.length) {
        gsap.fromTo(
          items,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.06,
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top 86%',
            },
          }
        )
      }

      ScrollTrigger.refresh()
    },
    { scope: rootRef, dependencies: [pathname], revertOnUpdate: true }
  )

  return (
    <footer ref={rootRef} className="site-footer" id="footer">
      <div className="site-footer__accent">
        <div className="site-footer__inner">
          <div className="site-footer__cta" data-footer-item>
            <div className="site-footer__cta-copy">
              <p className="heading-sm uppercase font-light">Готовы обсудить проект?</p>
              <p className="site-footer__cta-sub">
                Выбирай удобный формат: быстрый диалог, заявка или детальный бриф.
              </p>
            </div>
            <div className="site-footer__cta-actions">
              <a
                href="https://t.me/afterflow_studio"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__cta-link"
              >
                Связаться
              </a>
              <a
                href="mailto:hello@afterflow.studio?subject=Заявка%20на%20проект"
                className="site-footer__cta-link"
              >
                Оставить заявку
              </a>
              <a
                href="https://t.me/afterflow_studio?text=Хочу%20заполнить%20бриф"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__cta-link"
              >
                Заполнить бриф
              </a>
            </div>
          </div>

          <div className="site-footer__card">
            <div className="site-footer__grid">
              <div className="site-footer__brand" data-footer-item>
                <Link href="/" className="site-footer__logo">AFTERFLOW</Link>
                <p className="site-footer__brand-copy">
                  Digital studio для брендов, которым нужен результат, а не просто «красиво».
                </p>
              </div>

              {footerNav.map((column) => (
                <div key={column.title} className="site-footer__column" data-footer-item>
                  <p className="site-footer__column-title">{column.title}</p>
                  <ul className="site-footer__links">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        {'external' in link && link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="site-footer__link"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className="site-footer__link">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="site-footer__title" aria-hidden="true">AFTERFLOW</div>
          </div>

          <div className="site-footer__meta" data-footer-item>
            <p className="site-footer__copy">©2026 Afterflow Studio</p>
            <div className="site-footer__legal">
              <Link href="/privacy" className="site-footer__legal-link">Privacy policy</Link>
              <Link href="/terms" className="site-footer__legal-link">Terms of use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
