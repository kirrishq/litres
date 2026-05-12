type ProposalTask = {
  backgroundImage?: string
}

export function ProposalTask({ backgroundImage }: ProposalTask) {
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
                <h2 className="heading-sm uppercase font-light">Цели проекта</h2>
            </div>
            <p className="paragraph mb-3">В рамках проекта лендинг должен решать сразу несколько задач: формировать яркое впечатление от спецпроекта, связывать две бренд-коммуникации в единую историю и при этом работать как понятный путь к коммерческому действию. Поэтому в основе предлагаемого подхода — баланс между визуальной подачей, storytelling и конверсией.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="proposal-point-card">
                <h3 className="heading">Усилить восприятие проекта</h3>
                <p className="max-w-2xl">Сделать лендинг не просто посадочной страницей, а полноценной точкой входа в историю партнерства, где пользователь сразу понимает идею проекта и видит ценность коллаборации.</p>
            </div>
            <div className="proposal-point-card">
                <h3 className="heading">Подсветить главный лид-магнит</h3>
                <p className="max-w-2xl">Сфокусировать внимание на 5 книгах с новыми обложками как на ключевом объекте интереса и основном входе для трафика со всех промо-каналов.</p>
            </div>
            <div className="proposal-point-card">
                <h3 className="heading">Подвести к действию</h3>
                <p className="max-w-2xl">Выстроить понятный пользовательский путь от первого экрана к ключевым действиям: покупке книг, активации подписки и переходу к дополнительным сценариям внутри проекта.</p>
            </div>
            <div className="proposal-point-card">
                <h3 className="heading">Подготовить реалистичный запуск</h3>
                <p className="max-w-2xl">Собрать страницу так, чтобы она была не только выразительной визуально, но и технически реалистичной с учетом сроков, адаптивности, интерактивов и дальнейшей публикации.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}