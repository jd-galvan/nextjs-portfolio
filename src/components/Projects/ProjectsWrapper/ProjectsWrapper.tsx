import { getProjects } from '@/services/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import styles from './ProjectsWrapper.module.css'

export const ProjectsWrapper = async () => {
  const projects = await getProjects()
  return (
    <section id='projects'>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <section className={styles.projectsContainer}>
        {projects?.map(e => (
          <ProjectCard key={e.id} project={e}></ProjectCard>
        ))}
      </section>

    </section>
  )
}
