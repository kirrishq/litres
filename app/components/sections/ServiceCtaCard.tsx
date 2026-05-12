'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/Button'

type Props = {
  contextTitle?: string
}

export function ServiceCtaCard({ contextTitle = 'услугу' }: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const telegramUrl = useMemo(
    () => `https://t.me/afterflow_studio?text=${encodeURIComponent(`Хочу обсудить ${contextTitle}`)}`,
    [contextTitle]
  )

  return (
    <section className="section">
      <div className="container">
        <div className="service-cta">

          {!isSubmitted ? (
            <div className="service-cta__inner">

              <div className="service-cta__left">
                <div className="service-cta__copy">
                  <p className="heading-lg mb-0">Готовы обсудить проект?</p>
                  <p className="paragraph mb-0">
                    Опиши задачу в двух словах — подскажем формат, сроки и стартовую вилку стоимости.
                  </p>
                </div>
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary service-cta__tg"
                >
                  <span>Связаться в Telegram</span>
                </a>
              </div>

              <form
                className="service-cta__form"
                onSubmit={(e) => {
                  e.preventDefault()
                  setIsSubmitted(true)
                }}
              >
                <div className="service-cta__fields">
                  <label className="service-detail-modal__field">
                    <span className="heading-sm uppercase font-light">Имя</span>
                    <input className="service-detail-modal__input" name="name" required />
                  </label>
                  <label className="service-detail-modal__field">
                    <span className="heading-sm uppercase font-light">Контакт (Telegram или Email)</span>
                    <input className="service-detail-modal__input" name="contact" required />
                  </label>
                  <label className="service-detail-modal__field">
                    <span className="heading-sm uppercase font-light">Кратко о задаче</span>
                    <textarea className="service-detail-modal__input service-detail-modal__textarea" name="task" required />
                  </label>
                </div>

                <div className="service-cta__consents">
                  <label className="service-cta__checkbox">
                    <input type="checkbox" name="consent_personal" required />
                    <span className="paragraph">
                      Я согласен на обработку персональных данных в соответствии с{' '}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer">
                        Политикой конфиденциальности
                      </a>
                    </span>
                  </label>
                  <label className="service-cta__checkbox">
                    <input type="checkbox" name="consent_communication" required />
                    <span className="paragraph">
                      Я согласен на получение информационных сообщений от Afterflow Studio
                    </span>
                  </label>
                </div>

                <Button type="submit" variant="primary" withDot>
                  Отправить заявку
                </Button>
              </form>

            </div>
          ) : (
            <div className="service-detail-modal__success">
              <p className="heading mb-2">Спасибо, получили заявку.</p>
              <p className="paragraph mb-4">
                Чтобы ускорить старт, можно сразу написать в Telegram.
              </p>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                <span>Перейти в Telegram</span>
              </a>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}