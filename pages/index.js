import styles from '../styles/home.module.css'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <Layout>
      <section className={styles.center}>
        <p className={styles.major}>To Future </p>
        <p className={styles.word}>
          “All our dreams can come true, if we have the courage to pursue them.”
        </p>
      </section>
    </Layout>
  )
}
