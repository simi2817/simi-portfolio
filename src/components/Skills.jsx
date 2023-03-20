import coreJava from '../images/coreJava.png';
import javaScript from '../images/javascript.png';
import nodeJs from '../images/nodeJs.png';
import express from '../images/express.png';
import sql from '../images/sql.png';
import psql from '../images/psql.png';
import reactJs from '../images/reactJs.jpeg';
import reactNative from '../images/reactNative.png';
import html from '../images/html.png';
import css from '../images/css.png';
import jest from '../images/jest.jpeg';
import jUnit from '../images/jUnit.png';

const Skills = () => {

  const skills = [
    coreJava,
    javaScript,
    nodeJs,
    express,
    sql,
    psql,
    reactJs,
    reactNative,
    html,
    css,
    jest,
    jUnit
  ];

  return (
    <div className='skill'>
       {
        skills.map((skill, i) => {
          return <img className="skill-images" key={i} src={skill} alt="skill" height={200} width={200}/>
        })
       }
    </div>
  )
}

export default Skills;