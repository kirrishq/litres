type ProposalProcess = {
  backgroundImage?: string
}

export function ProposalProcess({ backgroundImage }: ProposalProcess) {
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
            <div className="flex items-center gap-2 mb-2">
                <div className="button__dot fill" />
                <h2 className="heading-sm uppercase font-light">Стоимость</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="proposal-point-card">
                    <h3 className="heading">Tilda</h3>
                    <p className="max-w-2xl">Быстрее запустить. Удобно править самостоятельно. Меньше свободы в сложных анимациях и интеграциях, а загрузка может быть тяжелее.</p>
                    {/* <p className="font-bold">Этот вариант стоит выбирать, если важны сроки, более простой production и возможность быстрее вносить изменения после запуска.</p> */}
                    <div className="flex h-full items-end">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="button__dot fill" />
                        <h4 className="heading-sm uppercase font-light">120 000 — 180 000 ₽</h4>
                      </div>
                    </div>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">Кастомная разработка (React, Next.js)</h3>
                    <p className="max-w-2xl">Больше свободы в реализации, быстрее и гибче по загрузке и анимациям. Разработка занимает больше времени, после запуска обычно удобнее вносить через разработчика.</p>
                    <div className="flex items-center gap-2 mb-2 justify-self-end">
                      <div className="button__dot fill" />
                      <h4 className="heading-sm uppercase font-light">180 000 — 280 000 ₽</h4>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}