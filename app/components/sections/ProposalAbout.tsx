type ProposalAbout = {
  backgroundImage?: string
}

export function ProposalAbout({ backgroundImage }: ProposalAbout) {
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
                <h2 className="heading-sm uppercase font-light">О проекте</h2>
            </div>
            <p className="paragraph mb-3">Проект предполагает создание партнерского лендинга для Литрес, в центре которого специальная коллекция из 5 произведений классической литературы с новыми обложками, созданными в рамках коллаборации с брендом Б и иллюстратором. Лендинг должен одновременно работать как имиджевый спецпроект и как конверсионная страница, ведущая пользователя к покупке книг и активации подписки.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="proposal-point-card">
                <h3 className="heading">Бренд</h3>
                <p className="max-w-2xl">Литрес — сервис электронных и аудиокниг, который развивает цифровую экосистему чтения, аудиоконтента и специальных партнерских запусков. В рамках проекта важно сохранить узнаваемость бренда и при этом аккуратно соединить его визуальный язык со стилем бренда Б.</p>
            </div>
            <div className="proposal-point-card">
                <h3 className="heading">Задача</h3>
                <p className="max-w-2xl">Разработать лендинг партнерского спецпроекта, который раскрывает идею коллаборации, поддерживает бренд-коммуникацию и подводит пользователя к ключевым действиям: знакомству с коллекцией, покупке книг и активации подписки. Отдельная задача — сделать страницу достаточно выразительной визуально, но при этом понятной и удобной с точки зрения пользовательского сценария.</p>
            </div>
            <div className="proposal-point-card md:col-span-2">
                <h3 className="heading">Требования</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <li className="proposal-point-card">Полный цикл работ: от UX/UI до финальной верстки и публикации.</li>
                    <li className="proposal-point-card">Адаптивная реализация для desktop, tablet и mobile.</li>
                    <li className="proposal-point-card">Продуманная структура страницы и конверсионный сценарий.</li>
                    <li className="proposal-point-card">Возможность реализовать анимации и интерактивные механики.</li>
                    <li className="proposal-point-card">Подключение форм, аналитики и дополнительных интеграций.</li>
                    <li className="proposal-point-card">Запуск в сжатые сроки в рамках согласованного бюджета.</li>
                </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}