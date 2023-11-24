'use client'
/* eslint-disable react/jsx-key */
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [data, setdata] = useState<String[]>([]);
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div
          onClick={() => {setdata([...data, 'Docs'])}}
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </div>

        <div
          onClick={() => {setdata([...data, 'Learn'])}}
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </div>

        <div
          onClick={() => {setdata([...data, 'Templates'])}}
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </div>

        <div
          onClick={() => {setdata([...data, 'Deploy'])}}
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </div>
      </div>
      <div>
        {data?.map((item) => (<h1>{item}</h1>))}
      </div>
    </main>
  )
}
