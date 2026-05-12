import Image from 'next/image'
import { Button } from '../ui/Button'

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
                <h2 className="heading-sm uppercase font-light">Предлагаемая структура страницы</h2>
            </div>
            <p className="paragraph mb-3">От интереса к коллекции до целевого действия.</p>
            <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col md:flex-row">
                    

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
                    

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Коллекция книг</h3>
                        <p>
                        Основной продуктовый блок страницы, в котором представлены произведения с новыми обложками. Главный лид-магнит и центральный блок страницы.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Интро от брендов</h3>
                        <p>
                        Небольшой имиджевый блок, который раскрывает идею партнерства, объясняет замысел проекта и усиливает восприятие коллаборации.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                   
                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Коммерческий блок Литрес</h3>
                        <p>
                        Блок, в котором пользователь получает понятное и прямое предложение: книги с новыми обложками и подписка как отдельный оффер. Здесь особенно важно выстроить ясную иерархию, чтобы продуктовая ценность воспринималась легко и без конкуренции между сообщениями.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    
                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Ролики и интерактив</h3>
                        <p>
                        Контент, который усиливает вовлечение. Может включать видеоматериалы бренда Б, альтернативные интерпретации произведений и механики взаимодействия с пользователем.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Переход к бренду Б</h3>
                        <p>
                        Вторичный сценарий, который аккуратно поддерживает задачи партнерства и связывает лендинг с отдельным направлением бренда Б, не разрушая основную логику страницы.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">

                    <div className="proposal-point-card flex-1">
                        <h3 className="heading">Финальный CTA</h3>
                        <p>
                        Возврат пользователя к целевому сценарию.
                        </p>
                    </div>
                </div>
                <Button variant="primary" withDot href="/litres" className="fund-card__button" target="_blank">
                              Смотреть набросок визуального оформления
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}