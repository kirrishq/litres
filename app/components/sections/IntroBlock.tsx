export function ProposalIntro() {
  return (
    <section className="section proposal-shell">
      <div className="container">
        <div className="proposal-intro-card">
          <div className="proposal-intro-card__grid">
            <p className="paragraph proposal-intro-card__eyebrow">Подход</p>

            <div className="proposal-intro-card__main">
              <h2 className="heading-lg proposal-intro-card__title">
                Проект — не просто страница, а продуманный сценарий:
                визуальная история, структура доверия и понятный путь к действию.
              </h2>

              <p className="paragraph proposal-intro-card__text">
                Во втором блоке важно сразу показать, что предложение строится
                не вокруг “просто сайта”, а вокруг решения задачи клиента —
                как будет работать структура, за счет чего будет создаваться
                впечатление и как страница приведет пользователя к целевому действию.
              </p>

              <div className="proposal-points-grid">
                <div className="proposal-point-card">
                  <p className="heading-xs proposal-point-card__num">01</p>
                  <h3 className="heading proposal-point-card__title">Сценарий</h3>
                  <p className="paragraph proposal-point-card__text">
                    Логика блоков, темп подачи и маршрут пользователя по странице.
                  </p>
                </div>

                <div className="proposal-point-card">
                  <p className="heading-xs proposal-point-card__num">02</p>
                  <h3 className="heading proposal-point-card__title">
                    Визуальный характер
                  </h3>
                  <p className="paragraph proposal-point-card__text">
                    Типографика, ритм, композиция, подача контента и ощущение от бренда.
                  </p>
                </div>

                <div className="proposal-point-card">
                  <p className="heading-xs proposal-point-card__num">03</p>
                  <h3 className="heading proposal-point-card__title">
                    Реализация
                  </h3>
                  <p className="paragraph proposal-point-card__text">
                    Дизайн, адаптивы, сборка, анимация, контентные блоки и запуск.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}