type CertificacionType = {
  id: int;
  image: string;
  description: string;
}

type Technology = {
  id: int;
  name: string;
  logo: string;
}

type ProjectType = {
  id: int;
  name: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl: string;
  siteUrl: string;
}