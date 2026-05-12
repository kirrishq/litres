type ProposalSteps = {
  backgroundImage?: string
}

export function ProposalSteps({ backgroundImage }: ProposalSteps) {
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
                <h2 className="heading-sm uppercase font-light">Состав работ</h2>
            </div>
            <p className="paragraph mb-3">Проект предполагает полный цикл работ под ключ: от проработки пользовательского сценария и визуальной концепции до разработки, тестирования и публикации. Такой формат позволяет собрать лендинг как цельный продукт, а не как набор разрозненных экранов.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="proposal-point-card">
                    <h3 className="heading">01. Стратегический старт</h3>
                    <p className="max-w-2xl">Анализ брифа, уточнение логики лендинга, структуры, ключевых офферов и сценариев взаимодействия пользователя со страницей.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">02. UX и прототипирование</h3>
                    <p className="max-w-2xl">Проработка структуры страницы, пользовательского пути, расположения ключевых блоков и основных CTA, создание чернового прототипа.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">03. UI-дизайн</h3>
                    <p className="max-w-2xl">Разработка визуальной концепции страницы, экранов, состояний элементов и общей дизайн-системы лендинга с учетом стилистики Литрес и бренда Б.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">04. Адаптивы</h3>
                    <p className="max-w-2xl">Подготовка версии лендинга для desktop, tablet и mobile с сохранением логики, визуального ритма и удобства взаимодействия.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">05. Анимации и интерактив</h3>
                    <p className="max-w-2xl">Внедрение анимаций, интерактивных механик, пользовательских реакций, а также сценариев взаимодействия с динамическим контентом.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">06. Разработка</h3>
                    <p className="max-w-2xl">Финальная сборка лендинга, адаптивная верстка, подключение контента, подготовка проекта к тестированию и запуску.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">07. Интеграции и аналитика</h3>
                    <p className="max-w-2xl">Подключение форм, аналитики, видео- и аудиоматериалов, а также дополнительных интеграций, если они требуются в рамках проекта.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">08. Тестирование и запуск</h3>
                    <p className="max-w-2xl">Проверка работы страницы на разных устройствах и в разных сценариях, исправление финальных замечаний и подготовка лендинга к публикации.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}