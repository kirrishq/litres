type ProcessStep = {
  step: string
  title: string
  text: string
}

const steps: ProcessStep[] = [
  {
  step: '01',
    title: 'Погружение',
    text: 'Начинаем не с макета, а с разговора. Разбираемся, что за продукт, кто его покупает и что должно измениться после запуска. Фиксируем цели, ограничения и то, что уже пробовали — чтобы не повторять чужие ошибки.',
  },
  {
    step: '02',
    title: 'Структура и смыслы',
    text: 'Прежде чем рисовать — думаем. Выстраиваем логику: какие страницы нужны, что на них происходит, как пользователь движется к целевому действию. На этом этапе появляется каркас, с которым все дальнейшие решения становятся быстрее и дешевле.',
  },
  {
    step: '03',
    title: 'Дизайн',
    text: 'Собираем макеты в Figma — от общего к деталям. Сначала раскладка и иерархия, потом визуал и компоненты. Показываем итерациями: вы видите прогресс и можете влиять на результат, пока вносить правки ещё не стоит денег.',
  },
  {
    step: '04',
    title: 'Разработка',
    text: 'Верстаем по согласованным макетам. Никакой самодеятельности — всё по дизайну, с вниманием к скорости, адаптиву и деталям. Подключаем CMS или редактор платформы так, чтобы вы могли управлять контентом самостоятельно.',
  },
  {
    step: '05',
    title: 'Запуск',
    text: 'Перед публикацией проверяем всё: кроссбраузерность, мобильные, скорость загрузки, формы и интеграции. Запускаем, подключаем аналитику и остаёмся на связи — первые дни после релиза самые важные.',
  },
]

export function ProcessSection() {
  return (
    <section className="section my-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="mb-3 flex items-center gap-2">
              <div className="button__dot fill" />
              <h2 className="heading-sm uppercase font-light">Процесс</h2>
            </div>
            <p className="heading-lg mb-0 max-w-xl">
              Работаем короткими итерациями, чтобы проект двигался быстро и прозрачно.
            </p>
          </div>

          <div className="border-t border-dashed border-[var(--color-border)]">
            {steps.map((step) => (
              <div
                key={step.step}
                className="grid grid-cols-[56px_1fr] gap-4 border-bottom py-4 md:grid-cols-[72px_1fr]"
              >
                <p className="heading mb-0 text-[var(--color-accent)]">{step.step}</p>
                <div>
                  <p className="heading mb-1">{step.title}</p>
                  <p className="paragraph mb-0">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
