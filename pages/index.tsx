import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Button } from "../components/Button"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Storybook Sample</title>
        <meta name="description" content="Storybook Sample" />
      </Head>
      <main className={styles.main}>
        <form className={styles.form}>
          <span className={styles.title}>My App</span>
          <div className={styles.controlGroup}>
            <label htmlFor="email" className={styles.label}>
              メールアドレス
            </label>
            <input id="email" type="text" className={styles.formControl} />
          </div>
          <div className={styles.controlGroup}>
            <label htmlFor="password" className={styles.label}>
              パスワード
            </label>
            <input id="password" type="password" className={styles.formControl} />
          </div>
          <div className={styles.buttonGroup}>
            <Button fullWidth>
              ログイン
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
