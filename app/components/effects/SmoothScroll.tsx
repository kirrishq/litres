'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const ENABLE_SMOOTH_SCROLL = false
    if (!ENABLE_SMOOTH_SCROLL) {
      if (window.__lenis) {
        window.__lenis.destroy()
        delete window.__lenis
      }
      return
    }

    const userAgent = navigator.userAgent
    const isSafariBrowser =
      /Safari/i.test(userAgent) &&
      !/Chrome|CriOS|Chromium|Edg|OPR|Opera|Firefox|FxiOS/i.test(userAgent)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isDesktop || !isFinePointer || isSafariBrowser) {
      if (window.__lenis) {
        window.__lenis.destroy()
        delete window.__lenis
      }
      return
    }

    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
      lerp: 0.085,
      duration: 1.1,
    })

    window.__lenis = lenis

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)

    return () => {
      gsap.ticker.remove(raf)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      if (window.__lenis === lenis) {
        delete window.__lenis
      }
    }
  }, [])

  return null
}
