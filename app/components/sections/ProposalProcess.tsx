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
                    <p className="max-w-2xl">Подходит для более быстрого запуска проекта и удобной поддержки после публикации. На Tilda можно реализовать сильный визуальный лендинг, включая анимации и часть интерактивных механик, особенно с использованием кастомного кода.</p>
                    <p className="font-bold">Этот вариант стоит выбирать, если важны сроки, более простой production и возможность быстрее вносить изменения после запуска.</p>
                    <div className="flex h-full items-end">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="button__dot fill" />
                        <h4 className="heading-sm uppercase font-light">120 000 — 180 000 ₽</h4>
                      </div>
                    </div>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">Кастомная разработка (React, Next.js)</h3>
                    <p className="max-w-2xl">Подходит, если проект требует большего контроля над реализацией, адаптивом, производительностью и поведением интерактивных элементов. Такой формат дает больше свободы в сборке нестандартных блоков и позволяет точнее реализовать визуальную и техническую часть проекта.</p>
                    <p className="font-bold">Этот вариант стоит выбирать, если лендинг рассматривается не просто как промо-страница, а как более сложный digital special с акцентом на качество исполнения.</p>
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