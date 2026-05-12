type ProposalOptions = {
  backgroundImage?: string
}

export function ProposalOptions({ backgroundImage }: ProposalOptions) {
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
            <div className="flex items-center gap-2">
                <div className="button__dot fill" />
                <h2 className="heading-sm uppercase font-light">Подход к реализации</h2>
            </div>
            <p className="paragraph mb-3">Так как в проекте важны и скорость запуска, и качество визуальной реализации, оптимальный формат производства стоит выбирать не только по бюджету, но и по объему интерактива, глубине анимации и требованиям к будущей поддержке. Ниже — два возможных сценария реализации.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="proposal-point-card">
                    <h3 className="heading">Реализация на Tilda</h3>
                    <p className="max-w-2xl">Подходит в том случае, если приоритетом являются скорость запуска, удобство внесения правок после релиза и относительно умеренный уровень интерактивности. Такой формат позволяет быстро собрать страницу и сохранить достаточную гибкость для дальнейшей поддержки.</p>
                    <ul className="list-disc pl-3">
                        <li>Быстрый запуск и внесение правок.</li>
                        <li>Удобная поддержка после публикации.</li>
                        <li>Подходит для базовых анимаций и стандартных сценариев.</li>
                        <li>Имеет ограничения для более сложной логики и нестандартных интерактивов.</li>
                    </ul>
                </div>
                    <div className="proposal-point-card">
                    <h3 className="heading">Кастомная разработка (React, Next.js)</h3>
                    <p className="max-w-2xl">Подходит в том случае, если для проекта критична гибкая визуальная подача, высокий уровень контроля над анимацией, интерактивом и поведением страницы на разных устройствах. Такой подход дает больше свободы и позволяет реализовать проект глубже с точки зрения пользовательского опыта.</p>
                    <ul className="list-disc pl-3">
                        <li>Больше свободы в дизайне и поведении интерфейса.</li>
                        <li>Более гибкая работа с интерактивными механиками.</li>
                        <li>Высокий контроль над качеством реализации и адаптивом.</li>
                        <li>Более ресурсоемкий путь по сравнению с конструктором.</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}