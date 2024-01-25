
interface HomeLayoutProps {
  hero: React.ReactNode,
  projectsList: React.ReactNode
}

function HomeLayout(props: HomeLayoutProps) {
  return (
    <div>
      {props.hero}
      {props.projectsList}
    </div>
  )
}

export default HomeLayout