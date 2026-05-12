'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

type ViewTransitionLike = {
  finished: Promise<void>
  updateCallbackDone?: Promise<void>
}

type TransitionDocument = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => ViewTransitionLike
}

const SCROLL_STORAGE_KEY = 'afterflow_scroll_positions_v1'

function readScrollPositions(): Record<string, number> {
  if (typeof window === 'undefined') return {}

  try {
    const raw = window.sessionStorage.getItem(SCROLL_STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Record<string, number>
    return parsed ?? {}
  } catch {
    return {}
  }
}

function writeScrollPositions(positions: Record<string, number>) {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(positions))
  } catch {
    // ignore storage errors
  }
}

function saveScrollPosition(pathname: string) {
  if (typeof window === 'undefined') return
  const positions = readScrollPositions()
  positions[pathname] = window.scrollY
  writeScrollPositions(positions)
}

function restoreScrollPosition(pathname: string) {
  if (typeof window === 'undefined') return
  const positions = readScrollPositions()
  const top = positions[pathname]
  if (typeof top !== 'number') return

  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(top, { immediate: true, force: true })
    return
  }

  window.scrollTo({ top, left: 0 })
}

function scrollToTopImmediate() {
  if (typeof window === 'undefined') return

  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true })
    return
  }

  window.scrollTo({ top: 0, left: 0 })
}

function isModifiedEvent(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
}

export function PageTransition({ children }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const isTransitioningRef = useRef(false)
  const shouldScrollTopRef = useRef(false)
  const isPopNavigationRef = useRef(false)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        saveScrollPosition(window.location.pathname)
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onPopState = () => {
      isPopNavigationRef.current = true
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || isModifiedEvent(event)) {
        return
      }

      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      const hrefAttr = anchor.getAttribute('href')
      if (!hrefAttr) return
      if (hrefAttr.startsWith('#')) return
      if (hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) return
      if (anchor.hasAttribute('download')) return
      if (anchor.getAttribute('target') === '_blank') return
      if (anchor.dataset.noTransition === 'true') return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin) return

      if (url.hash) return

      const nextPath = `${url.pathname}${url.search}${url.hash}`
      const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
      if (nextPath === currentPath || isTransitioningRef.current) return

      event.preventDefault()
      saveScrollPosition(window.location.pathname)

      const navigate = () => router.push(nextPath, { scroll: false })
      const doc = document as TransitionDocument

      if (!doc.startViewTransition) {
        navigate()
        scrollToTopImmediate()
        return
      }

      isTransitioningRef.current = true
      shouldScrollTopRef.current = true

      const transition = doc.startViewTransition(() => {
        navigate()
      })

      transition.updateCallbackDone?.then(() => {
        if (shouldScrollTopRef.current) {
          scrollToTopImmediate()
        }
      })

      transition.finished.finally(() => {
        isTransitioningRef.current = false
        shouldScrollTopRef.current = false
      })
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [router])

  useEffect(() => {
    if (isPopNavigationRef.current) {
      restoreScrollPosition(window.location.pathname)
      isPopNavigationRef.current = false
      return
    }

    if (isTransitioningRef.current && shouldScrollTopRef.current) {
      scrollToTopImmediate()
    }
  }, [pathname])

  return <>{children}</>
}
