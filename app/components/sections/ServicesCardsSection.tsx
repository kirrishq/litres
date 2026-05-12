import Link from 'next/link'
import { servicesCatalog } from '@/data/serviceCatalog'
import { Button } from '../ui/Button'

type ServiceCard = {
  title: string
  description: string
  priceFrom: string
  timelineFrom: string
  detailsHref: string
  mediaLabel: string
  tags: string[]
}

const services: ServiceCard[] = servicesCatalog.map((service) => ({
  title: service.title,
  description: service.heroLead,
  priceFrom: service.priceFrom,
  timelineFrom: service.timelineFrom,
  detailsHref: `/services/${service.slug}`,
  mediaLabel: `Медиа для услуги ${service.title}`,
  tags: service.tags,
}))

export function ServicesCardsSection() {
  return (
    <section className="section">
      <div className="container inverted">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="mb-3 flex items-center gap-2">
            <div className="button__dot fill" />
            <h2 className="heading-sm uppercase font-light">Услуги</h2>
          </div>
          {/* <Button href='/services' variant="secondary" withDot>
            Все услуги
          </Button> */}
          {/* <p className="heading-lg mb-0 max-w-xl">
            Форматы работы под разные задачи: от первого запуска до масштабирования продукта.
          </p> */}
        </div>

        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <Link key={service.title} href={service.detailsHref} className="services-cards__card services-cards__card--link">
              {/* <div className="services-cards__media">
                <div className="services-cards__media-slot" aria-hidden="true">
                  <span>{service.mediaLabel}</span>
                </div>
              </div> */}
              <div className="services-cards__body">
                <div className='w-full'>
                <h3 className="heading mb-4">{service.title}</h3>

                <div className="services-cards__tags mb-4">
                  {service.tags.map((tag) => (
                    <span key={`${service.title}-${tag}`} className="service-tag services-cards__tag-link">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="paragraph mb-0 max-w-xl">{service.description}</p>
            </div>
            <div className='flex flex-col justify-between md:items-end'>
                <div className="flex md:flex-row flex-col md:gap-2 gap-1 mb-2 md:mb-0 text-nowrap">
                  <p className="paragraph mb-0">
                    <span className="services-cards__meta-label">Стоимость:</span> {service.priceFrom}
                  </p>
                  <p className="paragraph mb-0">
                    <span className="services-cards__meta-label">Срок:</span> {service.timelineFrom}
                  </p>
                </div>
                <span className="services-cards__open-link">Подробнее</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
