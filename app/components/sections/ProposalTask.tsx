type ProposalTask = {
  backgroundImage?: string
}

export function ProposalTask() {
  return (
    <section className="section">
      <div className="container">
        <div className="proposal-hero-card">
          <div className="proposal-hero-card__content">
            <div className="flex items-center gap-2">
              <div className="button__dot fill" />
              <h2 className="heading-sm uppercase font-light">Задача</h2>
            </div>

            <p className="paragraph mb-3">
              Разработать лендинг с сильной визуальной подачей,
              понятной структурой и фокусом на ключевых действиях пользователя.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="proposal-point-card">
                <h3 className="heading">Продумать структуру</h3>
                <p className="max-w-2xl">
                  Собрать лендинг в понятный сценарий: от первого экрана и
                  коллекции книг до подписки, брендового контента и финального CTA.
                </p>
              </div>

              <div className="proposal-point-card">
                <h3 className="heading">Разработать визуальную концепцию</h3>
                <p className="max-w-2xl">
                  Соединить стили Литрес и бренда Б, сохранив акцент на
                  классической литературе и атмосфере спецпроекта.
                </p>
              </div>

              <div className="proposal-point-card">
                <h3 className="heading">Собрать и реализовать страницу</h3>
                <p className="max-w-2xl">
                  Подготовить адаптивный интерфейс, анимации, интерактивные блоки,
                  подключение контента и техническую сборку лендинга.
                </p>
              </div>

              <div className="proposal-point-card">
                <h3 className="heading">Подготовить к запуску</h3>
                <p className="max-w-2xl">
                  Провести тестирование, подключить нужные интеграции и
                  подготовить страницу к публикации в срок.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}