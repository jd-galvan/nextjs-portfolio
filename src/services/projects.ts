import db from '@/libs/db'

export async function getProjects() {
  try {
    const projects = await db.project.findMany({
      include: {
        technologies: {
          include: {
            technology: true
          }
        }
      },
      orderBy: [
        {
          id: 'asc'
        }
      ]
    })

    return projects
  } catch (error: any) {
    console.log('An unexpected error has occurred: ' + error.message)
    throw error
  }
}