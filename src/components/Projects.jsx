import ProjectCards from "./ProjectCards";
import nodeJs from '../images/nodeJs.png';
import express from '../images/express.png';
import psql from '../images/psql.png';
import jest from '../images/jest.jpeg';
import reactJs from '../images/reactJs.jpeg';
import reactNative from '../images/reactNative.png';
import html from '../images/html.png';
import css from '../images/css.png';

const Projects = () => {

  const projects = [
    {
      name: 'Northcoders House of Games API',
      type: 'Backend project',
      description: 'Building REST APIs related to games rating, reviews and categories',
      tech: [nodeJs, express, psql, jest],
      github: 'https://github.com/simi2817/nc-games_portfolio_project.git',
      link: 'https://silverfox-ncgames.onrender.com/api',
      api: '/projects/backend-project'
    },
    {
      name: 'Northcoders Games',
      type: 'Frontend project',
      description: 'Northcoders Games is a social games content rating, and discussion website.',
      tech: [reactJs, html, css],
      github: 'https://github.com/simi2817/nc-games.git',
      link: 'https://silverfox-ncgames.netlify.app/',
      api: '/projects/frontend-project'
    },
    {
      name: 'Through-the-Fog',
      type: 'Final project',
      description: 'An app where a user\'s visited places are only shown on the map, while the rest appear as fog.',
      tech: [reactNative, html, css, psql, express, jest],
      github: 'https://github.com/simi2817/fog-o-war.git',
      link: 'https://www.youtube.com/watch?v=sg1wGbxI0PI',
      api: '/projects/through-the-fog'
    }
  ];

  return (
    <div className="project-container">
        {
          projects.map((project, i) => {
            return <ProjectCards key={i} project={project}/>
          })
        }
    </div>
  )
}

export default Projects;