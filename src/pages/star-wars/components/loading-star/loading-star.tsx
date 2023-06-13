import styles from './loading-star.module.scss'

export const LoadingStar = () => {
  return (
    <section className={styles.main}>
      <span className={styles.loader}></span>
    </section>
  )
}
