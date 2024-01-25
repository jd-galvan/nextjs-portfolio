type CertificacionType = {
  id: int;
  image: string;
  description: string;
}

type Technology = {
  id: number;
  name: string;
  icon: string;
}

type TechnologiesOnProjects = {
  technologyId: number;
  projectId: number;
  technology: Technology;
}

type ProjectType = {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: TechnologiesOnProjects[];
  githubUrl: string | null;
  siteUrl: string | null;
}