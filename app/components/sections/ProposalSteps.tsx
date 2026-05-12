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
            <div className="flex items-center gap-2 mb-2">
                <div className="button__dot fill" />
                <h2 className="heading-sm uppercase font-light">Этапы и сроки</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="proposal-point-card">
                    <h3 className="heading">01. Структура и прототип</h3>
                    <div className="process-tag">1 неделя (3–4 рабочих дня)</div>
                    <p className="max-w-2xl">Уточняем логику страницы, собираем пользовательский сценарий и фиксируем структуру ключевых блоков до перехода в дизайн.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">02. Дизайн</h3>
                    <div className="process-tag">2-3 недели (4–7 рабочих дней)</div>
                    <p className="max-w-2xl">Разрабатываем визуальную концепцию лендинга, прорабатываем основные экраны и адаптируем дизайн под нужные разрешения.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">03. Разработка</h3>
                    <div className="process-tag">3-4 недели (5–7 рабочих дней)</div>
                    <p className="max-w-2xl">Собираем адаптивную страницу, подключаем контент, анимации, интерактивные механики и необходимые интеграции.</p>
                </div>
                <div className="proposal-point-card">
                    <h3 className="heading">04. Тестирование и запуск</h3>
                    <div className="process-tag">4 неделя (2–3 рабочих дня)</div>
                    <p className="max-w-2xl">Проверяем работу лендинга, вносим финальные правки и готовим проект к публикации.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}