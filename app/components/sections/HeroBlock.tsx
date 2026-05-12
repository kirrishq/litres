type ProposalHeroProps = {
  date: string
  clientName: string
  brandName?: string
  backgroundImage?: string
}

export function ProposalHero({
  date,
  clientName,
  brandName,
  backgroundImage,
}: ProposalHeroProps) {
  return (
    <section className="section">
      <div className="container">
          <div className="proposal-hero-card">
            {backgroundImage ? (
              <div
                className="proposal-hero-card__media"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                aria-hidden="true"
              />
            ) : null}

            <div className="proposal-hero-card__overlay" />

            <div className="proposal-hero-card__content">
              <div className="flex">
                <div className="process-tag">{date}</div>
              </div>

              <div className="flex flex-col gap-2 mb-4 mt-4">
                <h1 className="heading-lg">
                  Коммерческое предложение
                </h1>

                <p className="paragraph">
                  По разработке сайта под ключ для партнерского проекта Литрес
                </p>
              </div>

              <div className="proposal-hero-card__bottom">
                <a
                  className="proposal-hero-card__link"
                  href="https://t.me/kirrish"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Обсудить проект
                </a>

                <p className="paragraph proposal-hero-card__meta">
                  afterflow agency
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}