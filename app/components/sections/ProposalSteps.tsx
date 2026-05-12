type ProposalStepsProps = {
  backgroundImage?: string
}

export function ProposalSteps({ backgroundImage }: ProposalStepsProps) {
  return (
    <>
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
                  <p className="max-w-2xl">
                    Уточняем логику страницы, собираем пользовательский сценарий и фиксируем структуру ключевых блоков до перехода в дизайн.
                  </p>
                </div>

                <div className="proposal-point-card">
                  <h3 className="heading">02. Дизайн</h3>
                  <div className="process-tag">2–3 недели (4–7 рабочих дней)</div>
                  <p className="max-w-2xl">
                    Разрабатываем визуальную концепцию лендинга, прорабатываем основные экраны и адаптируем дизайн под нужные разрешения.
                  </p>
                </div>

                <div className="proposal-point-card">
                  <h3 className="heading">03. Разработка</h3>
                  <div className="process-tag">3–4 недели (5–7 рабочих дней)</div>
                  <p className="max-w-2xl">
                    Собираем адаптивную страницу, подключаем контент, анимации, интерактивные механики и необходимые интеграции.
                  </p>
                </div>

                <div className="proposal-point-card">
                  <h3 className="heading">04. Тестирование и запуск</h3>
                  <div className="process-tag">4 неделя (2–3 рабочих дня)</div>
                  <p className="max-w-2xl">
                    Проверяем работу лендинга, вносим финальные правки и готовим проект к публикации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="proposal-hero-card inverted">
            <div className="proposal-hero-card__content">
              <h3 className="heading">Стоимость</h3>
              <div className="process-tag">14–19 рабочих дней</div>

              <div className="space-y-4">
                <p>
                  Итоговая стоимость зависит от платформы, сложности анимаций и интеграций, необходимости программирования на коде, а также от состава команды под проект.
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <div className="button__dot fill" />
                  <h2 className="heading-sm uppercase font-light">Включено сразу:</h2>
                </div>

                <ul className="grid gap-2 md:grid-cols-5">
                  <li className="proposal-point-card mb-0">Небольшие исследования и анализ проекта, аудитории и референсов.</li>
                  <li className="proposal-point-card mb-0">Проработка структуры.</li>
                  <li className="proposal-point-card mb-0">Прототип.</li>
                  <li className="proposal-point-card mb-0">Дизайн.</li>
                  <li className="proposal-point-card mb-0">Адаптация под все устройства.</li>
                  <li className="proposal-point-card mb-0">Верстка.</li>
                  <li className="proposal-point-card mb-0">Подключение домена.</li>
                  <li className="proposal-point-card mb-0">Страница ошибки 404.</li>
                  <li className="proposal-point-card mb-0">Шаблон под юридические страницы.</li>
                  <li className="proposal-point-card mb-0">Баннер cookies.</li>
                  <li className="proposal-point-card mb-0">Подключение аналитики.</li>
                  <li className="proposal-point-card mb-0">Настройка формы.</li>
                  <li className="proposal-point-card mb-0">Базовые SEO-настройки.</li>
                  <li className="proposal-point-card mb-0">2 итерации правок после каждого этапа.</li>
                  <li className="proposal-point-card mb-0">Поддержка в течение 30 дней после запуска.</li>
                </ul>

                <div className="flex items-center gap-2 mb-2 mt-8">
                  <div className="button__dot fill" />
                  <h2 className="heading-sm uppercase font-light">Не входит в стоимость:</h2>
                </div>

                <p>
                  Лицензии и подписки на обслуживание сайта, включая Tilda, сервер и другие внешние сервисы.
                </p>

                <div className="flex items-center gap-2 mb-2 mt-8">
                  <div className="button__dot fill" />
                  <h2 className="heading-sm uppercase font-light">Варианты разработки:</h2>
                </div>

                <ul className="grid gap-2 md:grid-cols-3">
                  <li className="proposal-point-card mb-0 flex h-full flex-col">
                    <h3 className="heading">01. Tilda без программирования</h3>
                    <p className="max-w-2xl flex-1">
                      Подходит, если нужен самый быстрый запуск. Сайт собирается в рамках возможностей Tilda, поэтому его потом удобнее самостоятельно обновлять и вносить базовые правки без разработчика.
                      <br />
                      <br />
                      Этот вариант подходит, когда важны сроки и не требуется сложная логика, нестандартные анимации или интеграции, выходящие за пределы стандартного функционала Tilda.
                    </p>
                    <div className="mt-auto flex items-center gap-2 pt-4">
                      <div className="button__dot fill" />
                      <h4 className="heading-sm uppercase font-light">120 000 ₽</h4>
                    </div>
                  </li>

                  <li className="proposal-point-card mb-0 flex h-full flex-col">
                    <h3 className="heading">02. Tilda с программированием</h3>
                    <p className="max-w-2xl flex-1">
                      Подходит, если сайт хочется оставить на Tilda, но при этом нужны более сложные анимации, логика или интеграции, которые требуют программирования из-за ограничений стандартного функционала Tilda.
                      <br />
                      <br />
                      Такой формат дает больше свободы, чем обычная Tilda-сборка, но остается более удобным по поддержке, чем полностью кодовая разработка.
                      <br />
                      <br />
                      Стоимость в этом варианте зависит от объема нестандартных решений и сложности технической реализации.
                    </p>
                    <div className="mt-auto flex items-center gap-2 pt-4">
                      <div className="button__dot fill" />
                      <h4 className="heading-sm uppercase font-light">160 000 — 240 000 ₽</h4>
                    </div>
                  </li>

                  <li className="proposal-point-card mb-0 flex h-full flex-col">
                    <h3 className="heading">03. Сайт на коде (React, Next.js)</h3>
                    <p className="max-w-2xl flex-1">
                      Подходит, если нужны максимум свободы в дизайне, анимациях, интеграциях и поведении сайта. Это более трудозатратный формат, но он позволяет точнее реализовать сложные идеи и лучше контролировать скорость загрузки сайта и техническую часть проекта.
                      <br />
                      <br />
                      При этом, учитывая сроки, в таком формате обычно не закладывается удобная админка, поэтому правки после запуска требуют привлечения разработчика.
                    </p>
                    <div className="mt-auto flex items-center gap-2 pt-4">
                      <div className="button__dot fill" />
                      <h4 className="heading-sm uppercase font-light">200 000 — 300 000 ₽</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}