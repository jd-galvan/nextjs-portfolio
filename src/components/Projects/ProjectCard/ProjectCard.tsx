import Link from 'next/link'
import styles from './ProjectCard.module.css'
import Image from "next/image"

interface ProjectCardProps {
  project: ProjectType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <Image className={styles.projectCard_image} width={500} height={500} src={project.image} alt={project.name} />
      <div className={styles.projectCard_description}>
        <div className={styles.projectCard_technologyContainer}>
          {project.technologies.map(e => (
            <span className={styles.projectCard_technology} key={e.technology.id}><Image width={20} height={20} src={e.technology.icon} alt={e.technology.name}></Image> {e.technology.name}</span>
          ))}
        </div>
        <h3>{project.name}</h3><br />
        <p>{project.description}</p>
        <br />
        {project.githubUrl && <Link href={project.githubUrl}>Repositorio Github</Link>}
        {project.siteUrl && <Link href={project.siteUrl} target='blank'>Ver Sitio</Link>}
      </div>
    </div >
  )
}
