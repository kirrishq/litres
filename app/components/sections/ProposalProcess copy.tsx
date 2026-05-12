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
            <div className="flex items-center gap-2">
                <div className="button__dot fill" />
                <h2 className="heading-sm uppercase font-light">Процесс работы</h2>
            </div>
            <p className="paragraph mb-3">Процесс работы выстраивается так, чтобы проект двигался предсказуемо и спокойно: с понятными этапами, прозрачными решениями и контролем результата на каждом шаге. Это особенно важно для проекта с фиксированным сроком запуска и несколькими заинтересованными сторонами.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="proposal-point-card">
                    <h3 className="heading">01. Погружение в проект</h3>
                    <p className="max-w-2xl">Уточнение задач, ожиданий, состава контента, ограничений и ключевых сценариев страницы.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">02. Сборка структуры</h3>
                    <p className="max-w-2xl">Доработка исходной структуры лендинга и сборка логики блоков в цельный пользовательский сценарий.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">03. Прототипирование</h3>
                    <p className="max-w-2xl">Подготовка черновой схемы страницы, которая позволяет согласовать логику до начала визуального дизайна.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">04. Визуальная концепция</h3>
                    <p className="max-w-2xl">Разработка визуального языка страницы с учетом классической литературной тематики и соединения стилей двух брендов.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">05. Разработка и сборка</h3>
                    <p className="max-w-2xl">Перенос дизайна в рабочую среду, адаптация под устройства, подключение контента, анимаций и дополнительных механик.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">06. Финализация и запуск</h3>
                    <p className="max-w-2xl">Тестирование, финальные правки, публикация и подготовка проекта к старту партнерства.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}