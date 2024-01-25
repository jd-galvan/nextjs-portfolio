'use client'
import Link from 'next/link'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.navbar}>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='#projects'>Projects</Link></li>
        <li><Link href='https://www.linkedin.com/in/jdgalvan/' target='blank'>Contact</Link></li>
      </ul>
    </section>
  )
}
