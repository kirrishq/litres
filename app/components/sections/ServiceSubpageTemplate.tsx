import Link from 'next/link'
import { Breadcrumbs } from '../ui/Breadcrumbs'

type Props = {
  title: string
  heroLead: string
  attention: string
  interestTitle: string
  interestText: string
  scope: string[]
  desireTitle: string
  desireText: string
  outcomes: string[]
  priceFrom: string
  timelineFrom: string
  backHref: string
  backLabel: string
}

export function ServiceSubpageTemplate({
  title,
  heroLead,
  attention,
  interestTitle,
  interestText,
  scope,
  desireTitle,
  desireText,
  outcomes,
  priceFrom,
  timelineFrom,
  backHref,
  backLabel,
}: Props) {
  return (
    <>
      <section className="section services-page-hero">
        <div className="container inverted">
          <div className="services-page__heading">
            <Breadcrumbs />
            <h1 className="heading-lg max-w-3xl">{title}</h1>
            <p className="paragraph inverted services-page__lead">{heroLead}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail__grid">
            <article className="service-detail__card">
              <p className="heading-sm uppercase font-light service-detail__step">Attention</p>
              <p className="heading service-detail__card-title">Почему это важно сейчас</p>
              <p className="paragraph mb-0">{attention}</p>
            </article>

            <article className="service-detail__card">
              <p className="heading-sm uppercase font-light service-detail__step">Interest</p>
              <p className="heading service-detail__card-title">{interestTitle}</p>
              <p className="paragraph">{interestText}</p>
              <div className="services-cards__tags">
                {scope.map((item) => (
                  <span key={item} className="service-tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="service-detail__card">
              <p className="heading-sm uppercase font-light service-detail__step">Desire</p>
              <p className="heading service-detail__card-title">{desireTitle}</p>
              <p className="paragraph">{desireText}</p>
              <ul className="service-detail__list">
                {outcomes.map((item) => (
                  <li key={item} className="paragraph">
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="service-detail__card service-detail__card--action">
              <p className="heading-sm uppercase font-light service-detail__step">Action</p>
              <p className="heading service-detail__card-title">С чего стартуем</p>
              <p className="paragraph mb-0">
                <span className="services-cards__meta-label">Стоимость:</span> {priceFrom}
              </p>
              <p className="paragraph mb-0">
                <span className="services-cards__meta-label">Срок:</span> {timelineFrom}
              </p>
              <Link href={backHref} className="service-detail__back-link">
                {backLabel}
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
