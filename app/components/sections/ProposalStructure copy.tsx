import Image from 'next/image'

type ProposalStructure = {
  backgroundImage?: string
}

export function ProposalStructure({ backgroundImage }: ProposalStructure) {
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
                <h2 className="heading-sm uppercase font-light">Предлагаемая структура лендинга</h2>
            </div>
            <p className="paragraph mb-3">Исходная структура, предоставленная со стороны клиента, уже задает сильный каркас проекта. При этом она остается открытой к доработке, поэтому в рамках работы предлагается не просто сохранить список блоков, а собрать их в цельный сценарий, который будет последовательно вести пользователя от интереса к действию.</p>
            <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col md:flex-row">
                    <Image
                        src="/images/proposal/first-screen.jpg"
                        alt="Первый экран лендинга"
                        width={800}
                        height={600}
                        className="w-full md:w-[264px] object-cover rounded-[24px]"
                    />

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Первый экран</h3>
                        <p>
                        Визуально сильное вступление в проект: короткое объяснение идеи
                        коллаборации, акцент на классической литературе и первый эмоциональный
                        контакт с пользователем. Этот экран должен сразу задавать тон всей
                        странице и объяснять, почему проект заслуживает внимания.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Image
                        src="/images/proposal/first-screen.jpg"
                        alt="Второй экран лендинга"
                        width={800}
                        height={600}
                        className="w-full md:w-[264px] object-cover rounded-[24px]"
                    />

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Коллекция из 5 книг</h3>
                        <p>
                        Основной продуктовый блок страницы, в котором представлены произведения с новыми обложками. Именно этот блок должен работать как главный лид-магнит и собирать максимум внимания, поскольку на него будет вестись трафик со всех промо-каналов.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Image
                        src="/images/proposal/first-screen.jpg"
                        alt="Второй экран лендинга"
                        width={800}
                        height={600}
                        className="w-full md:w-[264px] object-cover rounded-[24px]"
                    />

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Интро от брендов</h3>
                        <p>
                        Небольшой имиджевый блок, который раскрывает идею партнерства, объясняет замысел проекта и усиливает восприятие коллаборации через текст, визуал, аудио или видеоформат.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Image
                        src="/images/proposal/first-screen.jpg"
                        alt="Второй экран лендинга"
                        width={800}
                        height={600}
                        className="w-full md:w-[264px] object-cover rounded-[24px]"
                    />

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Коммерческий блок Литрес</h3>
                        <p>
                        Блок, в котором пользователь получает понятное и прямое предложение: книги с новыми обложками и подписка как отдельный оффер. Здесь особенно важно выстроить ясную иерархию, чтобы продуктовая ценность воспринималась легко и без конкуренции между сообщениями.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Image
                        src="/images/proposal/first-screen.jpg"
                        alt="Второй экран лендинга"
                        width={800}
                        height={600}
                        className="w-full md:w-[264px] object-cover rounded-[24px]"
                    />

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Ролики и интерактив</h3>
                        <p>
                        Контентный и вовлекающий раздел, который может включать видеоматериалы бренда Б, альтернативные интерпретации произведений и механики взаимодействия с пользователем. Этот блок усиливает глубину просмотра и добавляет проекту характер спецпроекта, а не обычного лендинга.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Image
                        src="/images/proposal/first-screen.jpg"
                        alt="Второй экран лендинга"
                        width={800}
                        height={600}
                        className="w-full md:w-[264px] object-cover rounded-[24px]"
                    />

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Переход к бренду Б</h3>
                        <p>
                        Вторичный сценарий, который аккуратно поддерживает задачи партнерства и связывает лендинг с отдельным направлением бренда Б, не разрушая основную логику страницы.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Image
                        src="/images/proposal/first-screen.jpg"
                        alt="Второй экран лендинга"
                        width={800}
                        height={600}
                        className="w-full md:w-[264px] object-cover rounded-[24px]"
                    />

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Финальный CTA</h3>
                        <p>
                        Финальный экран должен не просто красиво завершать страницу, а возвращать пользователя к главному действию: покупке коллекции, переходу к подписке или другому целевому сценарию.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <Image
                        src="/images/proposal/first-screen.jpg"
                        alt="Второй экран лендинга"
                        width={800}
                        height={600}
                        className="w-full md:w-[264px] object-cover rounded-[24px]"
                    />

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Футер и обязательная информация</h3>
                        <p>
                        Включает правила акции, юридические условия, необходимые ссылки и брендовые элементы. Этот блок завершает страницу и фиксирует обязательную информацию в аккуратной, не перегруженной форме.
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