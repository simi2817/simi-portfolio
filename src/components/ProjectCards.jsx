import { Link } from "react-router-dom";

const ProjectCards = ({ project }) => {
  return (
    <Link to={project.api}>
    <div className="project">
      <h3>{project.name}</h3>
      <p className="project-type">{project.type}</p>
      <p>{project.description}</p>     
      {/* {
        project.tech.map((tech) => {
          return <img src={tech} alt={tech} height={50}/>
        })
      } */}
    </div>
    </Link>
  )
}

export default ProjectCards;