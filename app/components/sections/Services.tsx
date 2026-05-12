'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import lottie from 'lottie-web'

gsap.registerPlugin(ScrollTrigger)

type CaseItem = {
  title: string
  href: string
  imageSrc: string
  imageAlt: string
  tags: string[]
  animationSrc?: string
}

const cases: CaseItem[] = [
  {
    title: 'Ультракор',
    href: 'https://ultra-core.ru',
    imageSrc: '/assets/projects/ultracore/ultracore.png',
    imageAlt: 'Кейс Ультракор',
    tags: ['Медицина', 'Разработка'],
  },
  {
    title: 'Два хвоста',
    href: 'https://two-tails.ru',
    imageSrc: '/assets/projects/ultracore/two-tails.png',
    imageAlt: 'Кейс Два хвоста',
    tags: ['Ecom', 'Разработка'],
  },
  {
    title: 'SOHA SMM',
    href: 'https://sohasmm.com',
    imageSrc: '/assets/projects/ultracore/soha-smm.png',
    imageAlt: 'Кейс SOHA SMM',
    tags: ['Edtech', 'Верстка'],
  },
  {
    title: 'Вулкан Нова Рус',
    href: 'https://vulkan-nova.ru',
    imageSrc: '/assets/projects/ultracore/vulkan-nova-rus.png',
    imageAlt: 'Кейс Вулкан Нова Рус',
    tags: ['Дизайн', 'Разработка'],
  },
]

function ServiceLottie({ path, title, fallbackSrc }: { path: string; title: string; fallbackSrc: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const fallbackRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const saveDataEnabled =
      'connection' in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const userAgent = navigator.userAgent
    const isSafariBrowser =
      /Safari/i.test(userAgent) &&
      !/Chrome|CriOS|Chromium|Edg|OPR|Opera|Firefox|FxiOS/i.test(userAgent)
    const shouldAnimate = !saveDataEnabled && !prefersReducedMotion && !isSafariBrowser

    if (!shouldAnimate) return

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    })

    animation.addEventListener('DOMLoaded', () => {
      if (fallbackRef.current) {
        fallbackRef.current.style.opacity = '0'
      }
    })

    return () => {
      animation.destroy()
    }
  }, [path])

  return (
    <div className="relative h-full w-full" aria-label={title} role="img">
      <div ref={containerRef} className="absolute inset-0 h-full w-full" />
      <img
        ref={fallbackRef}
        src={fallbackSrc}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
  )
}

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-wwd-card]')
      const masks = gsap.utils.toArray<HTMLElement>('[data-wwd-mask]')
      const images = gsap.utils.toArray<HTMLElement>('[data-wwd-image]')
      const arrows = gsap.utils.toArray<HTMLElement>('[data-wwd-arrow]')
      const saveDataEnabled =
        'connection' in navigator &&
        Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)
      const shouldSkipMaskAnimation =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches || saveDataEnabled

      if (shouldSkipMaskAnimation) {
        gsap.set(cards, { opacity: 1, clearProps: 'transform,willChange' })
        gsap.set(masks, { clipPath: 'inset(0% 0% 0% 0% round 1rem)', clearProps: 'willChange' })
        gsap.set(images, { yPercent: 0, scale: 1, clearProps: 'willChange,transform' })
        gsap.set(arrows, { opacity: 1, x: 0, clearProps: 'willChange,transform' })
        return
      }

      gsap.set(cards, { opacity: 1 })
      gsap.set(masks, { clipPath: 'inset(0% 100% 0% 0% round 1rem)' })
      gsap.set(arrows, { opacity: 0, x: -8 })

      cards.forEach((card, index) => {
        const mask = masks[index]
        const image = images[index]
        const arrow = arrows[index]

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        })

        if (mask) {
          tl.to(mask, {
            clipPath: 'inset(0% 0% 0% 0% round 1rem)',
            ease: 'none',
            duration: 1,
          })
        }

        if (arrow) {
          tl.to(
            arrow,
            {
              opacity: 1,
              x: 0,
              ease: 'none',
              duration: 0.6,
            },
            '<0.15'
          )
        }

        if (image) {
          gsap.fromTo(
            image,
            { yPercent: 0, scale: 1.08 },
            {
              yPercent: -5,
              scale: 1.12,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          )
        }
      })

      ScrollTrigger.refresh()
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="relative">
          <div className="md:absolute md:left-0 md:top-0 md:mb-0 mb-4">
              <div className='flex items-center gap-2'>
                <div className='button__dot fill'></div>
                <h2 className='heading-sm uppercase'>Портфолио</h2>
              </div>
          </div>

          <div className="services-wrap flex flex-col">
            {cases.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target='_blank'
                data-wwd-card
                className="group grid gap-y-6 border-bottom py-6 md:grid-cols-2 md:gap-x-8 md:py-4"
              >
                <div
                  className="md:order-last overflow-hidden rounded-[1rem] will-change-[clip-path]"
                  data-wwd-mask
                >
                  <div className="relative bg-black text-white aspect-[4/2]">
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        data-wwd-image
                        className="absolute inset-0 will-change-transform"
                      >
                        {item.animationSrc ? (
                          <ServiceLottie path={item.animationSrc} title={item.imageAlt} fallbackSrc={item.imageSrc} />
                        ) : (
                          <img
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>

                    <span
                      data-wwd-arrow
                      className="absolute bottom-5 right-5 inline-flex h-8 w-8 items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 12h13" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6">
                  <h3
                    data-wwd-title
                    className="heading group-hover:text-(--color-accent)"
                  >
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 md:justify-end tags-wrap">
                    {item.tags.map((tag) => (
                      <span key={`${item.title}-${tag}`} className="service-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
    </section>
  )
}
