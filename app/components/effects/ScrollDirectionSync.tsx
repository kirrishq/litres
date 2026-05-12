'use client'

import { useEffect } from 'react'

type LenisScrollState = {
  animatedScroll?: number
  velocity?: number
  direction?: 1 | -1 | 0
}

type LenisLike = {
  on?: (event: 'scroll', cb: (state: LenisScrollState) => void) => void
  off?: (event: 'scroll', cb: (state: LenisScrollState) => void) => void
}

export function ScrollDirectionSync() {
  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false
    let rotation = 0
    let lastLenisPosition = 0
    let detachLenis: (() => void) | null = null

    const setRotation = (delta: number) => {
      if (Math.abs(delta) < 0.01) return

      rotation += delta * 0.28
      document.documentElement.style.setProperty('--marquee-icon-rotation', `${rotation}deg`)
      document.documentElement.setAttribute('data-scroll-dir', delta > 0 ? 'down' : 'up')
    }

    const updateDirection = () => {
      const nextY = window.scrollY
      const delta = nextY - lastY

      if (Math.abs(delta) > 1) {
        setRotation(delta)
        lastY = nextY
      }

      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateDirection)
    }

    document.documentElement.setAttribute('data-scroll-dir', 'down')
    document.documentElement.style.setProperty('--marquee-icon-rotation', '0deg')
    window.addEventListener('scroll', onScroll, { passive: true })

    // Desktop uses Lenis: track its motion for reliable scroll-driven rotation.
    const lenis = (window as Window & { __lenis?: LenisLike }).__lenis
    if (lenis?.on && lenis?.off) {
      const onLenisScroll = (state: LenisScrollState) => {
        const position = state.animatedScroll ?? window.scrollY
        const delta = position - lastLenisPosition
        lastLenisPosition = position
        if (Math.abs(delta) > 0.01) {
          setRotation(delta)
        } else if (state.velocity && Math.abs(state.velocity) > 0.01) {
          setRotation(state.direction === -1 ? -Math.abs(state.velocity) * 12 : Math.abs(state.velocity) * 12)
        }
      }

      lenis.on('scroll', onLenisScroll)
      detachLenis = () => lenis.off?.('scroll', onLenisScroll)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      detachLenis?.()
    }
  }, [])

  return null
}
