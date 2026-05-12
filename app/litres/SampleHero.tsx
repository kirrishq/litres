// app/page.tsx
import styles from './litres.module.css';

export function SampleHero() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Литрес × бренд Б</p>
            <h1 className={styles.title}>
              Классика в новых обложках
            </h1>
            <p className={styles.lead}>
              Пять произведений, переосмысленных вместе с иллюстратором. Новый визуальный язык, знакомые истории и повод открыть классику заново.
            </p>

            <div className={styles.actions}>
              <a href="#books" className={styles.primaryButton}>
                Выбрать книги
              </a>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualCard}>
              <div className={styles.visualGlow} />
              <div className={styles.booksRow}>
                <div className={styles.book} />
                <div className={styles.book} />
                <div className={styles.book} />
                <div className={styles.book} />
                <div className={styles.book} />
              </div>
              <p className={styles.visualNote}>
                Коллекция из 5 книг с новыми обложками
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}