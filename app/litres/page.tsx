import styles from './litres.module.css';

const books = [
  { title: 'Книга 1', className: styles.book1, caption: 'Анна Каренина' },
  { title: 'Книга 2', className: styles.book2, caption: 'Анна Каренина' },
  { title: 'Книга 3', className: styles.book3, caption: 'Анна Каренина' },
  { title: 'Книга 4', className: styles.book4, caption: 'Анна Каренина' },
  { title: 'Книга 5', className: styles.book5, caption: 'Анна Каренина' },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logoGroup}>
            <a className={styles.brandLogo} href="#" aria-label="Литрес">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 28" className='mt-[2px]'>
                    <path d="m131.48 22.176c3.134 0 5.633-0.5042 8.071-1.6066v-4.5592c0-0.0897-0.094-0.1452-0.176-0.1025-2.524 1.3203-4.834 1.8929-7.895 1.8929-3.705 0-5.602-1.7647-5.602-5.1659s1.902-5.1659 5.602-5.1659c3.065 0 5.371 0.57256 7.895 1.8929 0.082 0.04273 0.176-0.01282 0.176-0.10255v-4.5591c-2.438-1.1024-4.937-1.6066-8.071-1.6066-6.71 0-10.569 3.4653-10.569 9.5456 0 6.0802 3.859 9.5455 10.569 9.5455v-0.0085z" fill="#f50"/>
                    <path d="m118.66 12.942c0-6.8366-4.207-9.8276-10.256-9.8276-6.581 0-10.569 3.5892-10.569 9.4516 0 7.2168 4.4951 9.6096 11.016 9.6096 3.958 0 7.092-0.6323 9.242-1.4784v-4.3711c0-0.0897-0.094-0.1453-0.171-0.1068-1.559 0.7734-5.105 1.7049-9.007 1.7049-3.426 0-5.585-1.1067-6.066-3.8114h15.554c0.098 0 0.18-0.0727 0.197-0.1667 0.047-0.329 0.069-0.6751 0.069-0.9998l-9e-3 -0.0043zm-10.256-5.7342c3.065 0 4.757 1.3673 5.384 3.3713h-10.853c0.532-2.162 2.185-3.3713 5.465-3.3713" fill="#f50"/>
                    <path d="m86.593 3.0808c-3.3056 0-5.5594 1.2861-6.9632 3.1918-0.0343 0.047-0.1116 0.02564-0.1116-0.03418l-0.0773-2.6534h-4.7137v24.415h4.8425v-8.9303c0-0.0598 0.073-0.0854 0.1116-0.0342 1.4038 1.8758 3.6448 3.1406 6.916 3.1406 5.6023 0 9.0839-3.9994 9.0839-9.5456 0-5.5461-3.4816-9.5455-9.0839-9.5455m-1.4553 14.711c-3.2627 0-5.5723-2.0467-5.5723-5.1659 0-3.1191 2.3096-5.1658 5.5723-5.1658 3.5116 0 5.4435 1.9826 5.4435 5.1658 0 3.1833-1.9319 5.1659-5.4435 5.1659z" fill="#f50"/>
                    <path d="m59.307 21.702h4.8424v-13.733h8.1009v-4.3797h-21.048v4.3797h8.1052v13.733z" fill="#0A1E78"/>
                    <path d="m33.661 13.626v-10.041h-4.8725v18.407c0 0.2606 0.2962 0.4102 0.5066 0.2564l14.622-10.605v10.058h4.8725v-18.407c0-0.26064-0.2962-0.41019-0.5065-0.25637l-14.622 10.584v0.0042z" fill="#0A1E78"/>
                    <path d="m2.344 21.92c-1.3523 0-2.344-0.0598-2.344-0.0598v-4.354h0.78561c0.91441 0 1.6056-0.2179 2.0606-0.6538 0.45935-0.4358 0.79849-1.1451 1.0174-2.1321 0.21894-0.9828 0.39066-2.4612 0.51516-4.431 0.08157-1.3886 0.16743-3.6148 0.24899-6.6827 0.02147-0.95285 0.05152-2.1578 0.09445-3.6063h19.533v21.702h-5.3748v-17.536h-9.1312c-0.02146 0.29056-0.07298 1.44-0.15454 3.4525-0.04293 1.41-0.08157 2.3031-0.1245 2.6748-0.18889 3.0081-0.48081 5.3069-0.87576 6.9007-0.39496 1.598-1.0732 2.7816-2.0306 3.5592-0.95733 0.7777-2.3654 1.1665-4.2157 1.1665h-0.00429z" fill="#0A1E78"/>
                    <path d="m150.47 3.572c-0.137 0-0.176 0.08546-0.077 0.17946 0.532 0.53411 0.867 1.269 0.867 2.0809s-0.33 1.5468-0.863 2.0766c-0.103 0.10255-0.068 0.18373 0.125 0.18373h11.441c0.648-0.53838 1.064-1.3545 1.064-2.2646s-0.416-1.722-1.064-2.2646h-11.488l-5e-3 0.00854z" fill="#0A1E78"/>
                    <path d="m150.47 10.375c-0.137 0-0.176 0.0854-0.077 0.1794 0.532 0.5341 0.867 1.2691 0.867 2.0809s-0.33 1.5468-0.863 2.0766c-0.103 0.1026-0.068 0.1837 0.125 0.1837h6.98c0.648-0.5383 1.065-1.3545 1.065-2.2646s-0.417-1.7219-1.065-2.2646h-7.027l-5e-3 0.0086z" fill="#0A1E78"/>
                    <path d="m150.47 17.177c-0.146 0-0.181 0.0812-0.073 0.1838 0.532 0.5341 0.863 1.2647 0.863 2.0808 0 0.8162-0.331 1.5468-0.863 2.0767-0.103 0.1025-0.069 0.1837 0.124 0.1837h2.524c0.649-0.5384 1.065-1.3545 1.065-2.2646s-0.416-1.722-1.065-2.2646h-2.571l-4e-3 0.0042z" fill="#0A1E78"/>
                    <path d="m171.17 3.5723h-3.069c0.648 0.54265 1.064 1.3502 1.064 2.2646s-0.416 1.722-1.064 2.2646h3.069c0.648-0.53838 1.065-1.3502 1.065-2.2646s-0.417-1.722-1.065-2.2646z" fill="#f50"/>
                    <path d="m168.1 3.5723h-3.07c0.649 0.54265 1.065 1.3502 1.065 2.2646s-0.416 1.722-1.065 2.2646h3.07c0.648-0.53838 1.064-1.3502 1.064-2.2646s-0.416-1.722-1.064-2.2646z" fill="#6262D9"/>
                    <path d="m171.17 10.374h-7.529c0.648 0.5427 1.064 1.3502 1.064 2.2646s-0.416 1.722-1.064 2.2646h7.529c0.649-0.5383 1.065-1.3502 1.065-2.2646s-0.416-1.7219-1.065-2.2646z" fill="#f50"/>
                    <path d="m163.64 10.374h-3.07c0.648 0.5427 1.065 1.3502 1.065 2.2646s-0.417 1.722-1.065 2.2646h3.07c0.648-0.5383 1.064-1.3502 1.064-2.2646s-0.416-1.7219-1.064-2.2646z" fill="#6262D9"/>
                    <path d="m165.03 3.5723h-3.069c0.648 0.54265 1.065 1.3502 1.065 2.2646s-0.417 1.722-1.065 2.2646h3.069c0.649-0.53838 1.065-1.3502 1.065-2.2646s-0.416-1.722-1.065-2.2646z" fill="#3D3DC7"/>
                    <path d="m160.57 10.374h-3.069c0.648 0.5427 1.065 1.3502 1.065 2.2646s-0.417 1.722-1.065 2.2646h3.069c0.649-0.5383 1.065-1.3502 1.065-2.2646s-0.416-1.7219-1.065-2.2646z" fill="#3D3DC7"/>
                    <path d="m171.17 17.177h-11.985c0.648 0.5426 1.064 1.3502 1.064 2.2646s-0.416 1.7219-1.064 2.2646h11.985c0.649-0.5384 1.065-1.3502 1.065-2.2646s-0.416-1.722-1.065-2.2646z" fill="#f50"/>
                    <path d="m159.18 17.177h-3.07c0.648 0.5426 1.065 1.3502 1.065 2.2646s-0.417 1.7219-1.065 2.2646h3.07c0.648-0.5384 1.064-1.3502 1.064-2.2646s-0.416-1.722-1.064-2.2646z" fill="#6262D9"/>
                    <path d="m156.11 17.177h-3.069c0.648 0.5426 1.065 1.3502 1.065 2.2646s-0.417 1.7219-1.065 2.2646h3.069c0.649-0.5384 1.065-1.3502 1.065-2.2646s-0.416-1.722-1.065-2.2646z" fill="#3D3DC7"/>
                  </svg>
            </a>

            <span className={styles.brandX} aria-hidden="true">X</span>

            <a className={styles.brandLogo} href="#" aria-label="Бренд Б">
                <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 29.7436H6.66667L11.8031 17.9487H5.13648L0 29.7436Z" fill="black"></path><path d="M19.4872 0H12.8205L5.67413 16.4103H12.3408L19.4872 0Z" fill="black"></path><path d="M11.282 23.0769H23.0769L26.4102 17.9487H13.3416L11.282 23.0769Z" fill="black"></path><path d="M16.6666 10.2564L19.4871 3.58972L25.6079 16.4102H19.4541L16.6666 10.2564Z" fill="black"></path><path d="M22.0513 22.8205L26.4103 17.9487L31.5054 29.7436H25.3515L22.0513 22.8205Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.0769 5.12821V0H48.2051L42.6923 5.12821H33.0769Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.0769 16.4103V11.7949H42.3077L38.718 16.4103H33.0769Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.9487 15.8974V5.12821L33.0769 0V9.74359L27.9487 15.8974ZM27.9487 17.9487L33.0769 29.7436V11.7949L27.9487 17.9487Z" fill="black"></path><path d="M38.7179 29.7437V21.5386H39.1407V29.7437H38.7179ZM39.9865 29.7437V21.5386H40.4093V29.7437H39.9865ZM40.8322 29.7437V21.5386H41.6779V29.7437H40.8322Z" fill="black"></path><path d="M43.3704 29.7437V21.5386H43.7932V29.7437H43.3704ZM44.2161 29.7437V21.5386H45.0618V29.7437H44.2161ZM46.7532 29.7437V21.5386H47.1761V29.7437H46.7532Z" fill="black"></path><path d="M48.0229 29.7437V21.5386H48.4457V29.7437H48.0229ZM49.2914 29.7437V21.5386H50.9829V29.7437H49.2914ZM51.4057 29.7437V21.5386H51.8286V29.7437H51.4057Z" fill="black"></path><path d="M52.6754 29.7437V21.5386H53.0982V29.7437H52.6754ZM53.5211 29.7437V21.5386H54.3668V29.7437H53.5211ZM55.2125 29.7437V21.5386H55.6354V29.7437H55.2125Z" fill="black"></path><path d="M57.3279 29.7437V21.5386H57.7507V29.7437H57.3279ZM58.5964 29.7437V21.5386H59.0193V29.7437H58.5964ZM59.865 29.7437V21.5386H61.5564V29.7437H59.865Z" fill="black"></path><path d="M61.9804 29.7437V21.5386H62.4032V29.7437H61.9804ZM62.8261 29.7437V21.5386H63.6718V29.7437H62.8261ZM65.3632 29.7437V21.5386H65.7861V29.7437H65.3632Z" fill="black"></path><path d="M66.6329 29.7437V21.5386H67.4786V29.7437H66.6329ZM68.3243 29.7437V21.5386H68.7471V29.7437H68.3243ZM69.17 29.7437V21.5386H69.5928V29.7437H69.17Z" fill="black"></path><path d="M71.2854 29.7437V21.5386H71.7082V29.7437H71.2854ZM72.9768 29.7437V21.5386H74.6682V29.7437H72.9768ZM75.091 29.7437V21.5386H75.5139V29.7437H75.091Z" fill="black"></path><path d="M75.9379 29.7437V21.5386H77.6293V29.7437H75.9379ZM78.475 29.7437V21.5386H78.8978V29.7437H78.475ZM79.3207 29.7437V21.5386H79.7435V29.7437H79.3207Z" fill="black"></path></svg>
            </a>
          </div>
          <nav className={styles.nav}>
            <a href="#books">Книги</a>
            <a href="#offer">Подписка</a>
            <a href="#about">О проекте</a>
          </nav>
        </div>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            {/* <p className={styles.kicker}>Партнёрская коллекция</p> */}
            <h1 className={styles.title}>Классика в&nbsp;новых&nbsp;обложках</h1>
            <p className={styles.lead}>
            Книги, которые хочется открыть заново: <br />
            5&nbsp;произведений в&nbsp;новых обложках, созданных вместе с&nbsp;иллюстратором. <br />
            Выбирайте коллекцию или начните с&nbsp;подписки.
            </p>

            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <strong>199 ₽</strong>
                <span>за книги в коллекции*</span>
              </div>
              {/* <div className={styles.metaItem}>
                <strong>199 ₽</strong>
                <span>за книги</span>
              </div> */}
              <div className={styles.metaItem}>
                <strong>0 ₽</strong>
                <span>за 2 месяца подписки**</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a href="#books" className={styles.primaryButton}>
                Попробовать бесплатно
              </a>
              <a href="#offer" className={styles.secondaryButton}>
                Купить коллекцию
              </a>
            </div>

            <p className={styles.note}>
              *Коллекция ограничена. <br />
              **Для новых пользователей
            </p>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualCard}>
              <div className={styles.visualGlow} />
              <div className={styles.booksRow}>
                {books.map((book) => (
                  <article key={book.title} className={book.className}>
                    <span className={styles.bookLabel}>{book.caption}</span>
                  </article>
                ))}
              </div>
              {/* <div className={styles.visualBadge}>Партнёрская коллекция</div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section id="books" className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionKicker}>Коллекция</p>
            <h2 className={styles.sectionTitle}>Пять книг, собранных в&nbsp;один визуальный набор</h2>
            <p className={styles.sectionLead}>
              Этот блок работает как ключевой лид-магнит: человек сразу видит коллекцию и может
              перейти к покупке без лишнего поиска.
            </p>
          </div>

          <div className={styles.bookShelf}>
            {books.map((book, index) => (
              <article key={book.title} className={styles.shelfCard}>
                <div className={styles.shelfCardBody}>
                  <p className={styles.shelfIndex}>0{index + 1}</p>
                  <h3 className={styles.shelfTitle}>{book.title}</h3>
                  <p className={styles.shelfText}>Классическое произведение в новой обложке.</p>
                </div>
                <div className={book.className} />
                
              </article>
            ))}
          </div>

          <div className={styles.sectionActions}>
            <a href="#offer" className={styles.primaryButton}>
              Купить коллекцию
            </a>
          </div>
        </div>
      </section> */}

      <section id="books" className={styles.section}>
        <div className={styles.sectionInnerEmpty}>
          <div className={styles.sectionHeading}>
            {/* <p className={styles.sectionKicker}>Коллекция</p> */}
            <h2 className={styles.sectionTitle}>Пять книг, собранных в&nbsp;один визуальный набор</h2>
          </div>

          <div className={styles.bookShelf}>
            {books.map((book, index) => (
              <article key={book.title} className={styles.shelfCard}>
                <div className={styles.shelfCardBody}>
                  <p className={styles.shelfIndex}>0{index + 1}</p>
                  <h3 className={styles.shelfTitle}>{book.title}</h3>
                  <p className={styles.shelfText}>Классическое произведение в новой обложке.</p>
                </div>
                <div className={book.className} />
                
              </article>
            ))}
          </div>

          <div className={styles.sectionActions}>
            <a href="#offer" className={styles.primaryButton}>
              Купить коллекцию
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={styles.sectionAlt}>
        <div className={styles.sectionInnerSplit}>
          <div className={styles.aboutCopy}>
            {/* <p className={styles.sectionKicker}>О проекте</p> */}
            <h2 className={styles.sectionTitle}>Совместный проект Литрес и бренда Б</h2>
            <p className={styles.sectionLead}>
              Мы объединили стили двух брендов и собрали визуальную историю вокруг классической
              литературы.
            </p>
          </div>

          <div className={styles.aboutCard}>
            {/* <p className={styles.aboutLabel}>Что внутри</p>
            <ul className={styles.aboutList}>
              <li>Новые обложки для 5 произведений.</li>
              <li>Продажа книг и подписки в одном сценарии.</li>
              <li>Акцент на коллекционности и ограниченности.</li>
            </ul> */}
          </div>
        </div>
      </section>

      <section id="offer" className={styles.offer}>
        <div className={styles.offerInner}>
            <div className={styles.offerVisual}>
            {/* <div className={styles.libraryRing}>
              <span>Литрес</span>
              <span>Подписка</span>
              <span>Аудио</span>
              <span>Электронные книги</span>
            </div> */}
          </div>
          <div className={styles.offerCopy}>
            {/* <p className={styles.sectionKicker}>Подписка</p> */}
            <h2 className={styles.sectionTitle}>Вся библиотека в&nbsp;одной подписке</h2>
            <p className={styles.sectionLead}>
              Более миллиона электронных и аудиокниг, подкастов и комиксов на русском и
              иностранном языках. Читайте бестселлеры, слушайте в пути и скачивайте книги без
              интернета.
            </p>

            <div className={styles.offerStats}>
              <div className={styles.metaItemDark}>
                <strong>2 месяца</strong>
                <span>за 0 ₽ для новых пользователей</span>
              </div>
              <div className={styles.metaItemDark}>
                <strong>1 000 000+</strong>
                <span>книг в каталоге</span>
              </div>
            </div>

            <a href="#top" className={styles.primaryButton}>
              Попробовать бесплатно
            </a>
          </div>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.finalInner}>
          <h2 className={styles.finalTitle}>Выберите формат входа в проект</h2>
          <p className={styles.finalText}>
            Начать можно с коллекции книг или сразу с подписки.
          </p>
          <div className={styles.actions}>
            <a href="#books" className={styles.primaryButton}>
              Вернуться к коллекции
            </a>
            <a href="#offer" className={styles.secondaryButton}>
              К подписке
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>Правила акции, юридическая информация, логотипы брендов и служебные ссылки.</p>
        </div>
      </footer>
    </main>
  );
}