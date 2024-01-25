import Link from 'next/link'
import styles from './SocialMedia.module.css'

export const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <Link className={styles.socialMedia__linkGithub} href='https://github.com/jd-galvan' target='blank'>Github</Link>
      <Link className={styles.socialMedia__linkLinkedin} href='https://www.linkedin.com/in/jdgalvan/' target='blank'>LinkedIn</Link>
      <Link className={styles.socialMedia__linkHackerrank} href='https://www.hackerrank.com/profile/jgalvan2708' target='blank'>HackerRank</Link>
    </div>
  )
}
