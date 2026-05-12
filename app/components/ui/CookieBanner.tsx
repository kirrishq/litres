'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const COOKIE_CONSENT_KEY = 'afterflow_cookie_consent_v1'

type CookieConsentValue = 'all' | 'essential'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let frameId: number | null = null

    const showBanner = () => {
      frameId = window.requestAnimationFrame(() => {
        setIsVisible(true)
      })
    }

    try {
      const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY)
      if (stored === 'all' || stored === 'essential') {
        return () => {
          if (frameId !== null) {
            window.cancelAnimationFrame(frameId)
          }
        }
      }
      showBanner()
    } catch {
      showBanner()
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  const saveConsent = (value: CookieConsentValue) => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
    } catch {
      // ignore write errors
    }
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="cookie-banner" role="region" aria-label="Уведомление об использовании cookie">
      <div className="cookie-banner__content">
        <p className="cookie-banner__title">Мы используем cookie</p>
        <p className="cookie-banner__text">
          Сайт <strong>afterflow.ru</strong> использует cookie и сервис веб-аналитики Яндекс.Метрика для улучшения
          работы сайта. Нажимая «Принять», вы даете согласие на обработку данных в соответствии с{' '}
          <Link href="/privacy" className="cookie-banner__link">
            Политикой конфиденциальности
          </Link>
          .
        </p>
      </div>

      <div className="cookie-banner__actions">
        <button
          type="button"
          className="button button--secondary cookie-banner__button"
          onClick={() => saveConsent('essential')}
        >
          <span>Только необходимые</span>
        </button>
        <button
          type="button"
          className="button button--primary cookie-banner__button"
          onClick={() => saveConsent('all')}
        >
          <span>Принять</span>
        </button>
      </div>
    </div>
  )
}
