'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export function TextMaskReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>('main h1, main h2, main h3, main p')
    const saveDataEnabled =
      'connection' in navigator &&
      Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData)
    const shouldSkipMaskAnimation =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches || saveDataEnabled

    if (shouldSkipMaskAnimation) {
      gsap.set(targets, { clearProps: 'transform,opacity,willChange,clipPath' })
      return
    }

    const animations: gsap.core.Tween[] = []
    const pending = new Set<HTMLElement>()
    let observer: IntersectionObserver | null = null

    const reveal = (el: HTMLElement) => {
      if (!pending.has(el)) return
      pending.delete(el)

      const tween = gsap.to(el, {
        clipPath: 'inset(0 0% 0 0)',
        xPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'willChange,transform,opacity,clipPath',
      })

      animations.push(tween)
      observer?.unobserve(el)
    }

    const revealVisible = () => {
      if (!pending.size) return

      pending.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const inViewZone = rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08
        if (!inViewZone) return
        reveal(el)
      })
    }

    // Reset possible stale inline styles from previous navigation state.
    gsap.set(targets, { clearProps: 'transform,opacity,willChange,clipPath' })

    targets.forEach((el) => {
      if (!el.textContent?.trim()) return

      pending.add(el)
      gsap.set(el, {
        clipPath: 'inset(0 100% 0 0)',
        xPercent: -10,
        opacity: 0.1,
        willChange: 'transform, opacity, clip-path',
      })
    })

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement)
            }
          })
        },
        { root: null, threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      )

      pending.forEach((el) => observer?.observe(el))
    }

    let ticking = false
    const onScrollOrResize = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        revealVisible()
        ticking = false
      })
    }

    // First pass for visible elements (including reload at any scroll position).
    revealVisible()
    // Second pass after layout/font settle.
    const settleTimer = window.setTimeout(revealVisible, 180)

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      window.clearTimeout(settleTimer)
      observer?.disconnect()
      animations.forEach((tween) => tween.kill())
      targets.forEach((el) => {
        gsap.set(el, {
          clearProps: 'willChange,transform,opacity,clipPath',
        })
      })
    }
  }, [pathname])

  return null
}
