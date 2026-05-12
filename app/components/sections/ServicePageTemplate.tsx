import Link from 'next/link'
import type { ServiceContent, ServiceSubItem } from '@/data/serviceCatalog'
import { Breadcrumbs } from '../ui/Breadcrumbs'

type Props = {
  service: ServiceContent
}

function SubserviceCard({
  parentSlug,
  sub,
}: {
  parentSlug: string
  sub: ServiceSubItem
}) {
  return (
    <Link href={`/services/${parentSlug}/${sub.slug}`} className="services-page-card">
      <div className="services-page-card__content">
        <div className="services-page-card__top">
          <h3 className="heading">{sub.title}</h3>
        </div>
        <p className="paragraph">{sub.lead}</p>
        <div className="services-cards__tags">
          {sub.tags.map((tag) => (
            <span key={`${sub.slug}-${tag}`} className="service-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="services-page-card__meta">
          <p className="paragraph mb-0">
            <span className="services-cards__meta-label">Стоимость:</span>{' '}
            {sub.priceFrom}
          </p>
          <p className="paragraph mb-0">
            <span className="services-cards__meta-label">Срок:</span>{' '}
            {sub.timelineFrom}
          </p>
        </div>
        <span className="button button--primary" aria-hidden="true">
          Подробнее
        </span>
      </div>
    </Link>
  )
}

export function ServicePageTemplate({ service }: Props) {
  return (
    <>
      <section className="section services-page-hero">
        <div className="container inverted">
          <Breadcrumbs />
          <div className="services-page__heading">
            <h1 className="heading-lg max-w-3xl">{service.title}</h1>
            <p className="paragraph inverted services-page__lead">{service.heroLead}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-detail__grid">

            <article className="service-detail__card">
              <p className="heading service-detail__card-title">
                Сайт есть, а заявок нет
              </p>
              <p className="paragraph mb-0">{service.attention}</p>
            </article>

            <article className="service-detail__card">
              <p className="heading service-detail__card-title">
                {service.interestTitle}
              </p>
              <p className="paragraph">{service.interestText}</p>
              <div className="services-cards__tags">
                {service.scope.map((item) => (
                  <span key={item} className="service-tag">{item}</span>
                ))}
              </div>
            </article>

            <article className="service-detail__card">
              <p className="heading service-detail__card-title">
                {service.desireTitle}
              </p>
              <p className="paragraph">{service.desireText}</p>
              <ul className="service-detail__list">
                {service.outcomes.map((item) => (
                  <li key={item} className="paragraph">{item}</li>
                ))}
              </ul>
            </article>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-4 flex items-center gap-2">
            <div className="button__dot fill" />
            <h2 className="heading-sm uppercase font-light">Основные направления</h2>
          </div>
          <div className="services-cards__grid">
            {service.subservices.map((sub) => (
              <SubserviceCard key={sub.slug} parentSlug={service.slug} sub={sub} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}