import styles from './Hero.module.css'
import Image from 'next/image'
import { CertificationsWrapper } from '../Certifications/CertificationsWrapper/CertificationsWrapper'
import { SocialMedia } from '../SocialMedia/SocialMedia'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroText}>
        <h1 className={styles.heroText__title}>Hey, this is José Daniel</h1>
        <br />
        <p className={styles.heroText__description}><b>Technical Leader</b>, <b>Full Stack Developer</b>, <b>IT Instructor</b>, and <b>AI Enthusiast</b>, constantly exploring new tools that enable the design and development of software focused on user needs.
          <br /><br />
          Welcome to my <b>AI</b> and <b>XR</b> portfolio!
        </p>
        <br />
        <br />
        <SocialMedia />
        <br />
        <br />
        <CertificationsWrapper />
      </div>
      <div className={styles.heroImage}>
        <Image priority={true} width={400} height={400} src="/images/profile.png" alt="Foto de José Daniel"></Image>
      </div>
    </section >
  )
}
