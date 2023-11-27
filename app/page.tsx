
/* eslint-disable react/jsx-key */
import styles from './page.module.css'

import { getContentfulData } from './getContentfulData';

export default async function Home() {
  const promises = [
    getContentfulData('next')
  ]
  const [nextValues] = await Promise.all(promises)
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {nextValues.entries.map((i) => (
          <div key={i.fields.title}>
            <h2>{i.fields.title}<span>-&gt;</span></h2>
          </div>
        ))}
      </div>
    </main>
  )
}
