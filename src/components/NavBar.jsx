import { Link } from "react-router-dom";
import logo from '../images/logo.jpeg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import email from '../images/email.png';

const NavBar = () => {
  return (
    <nav>
      <div className="nav">
      <Link className="navLink" to="/">
        <img className="App-logo" src={logo} alt="logo" height={60}/>
      </Link>
      <a className="navLink" href="https://www.linkedin.com/in/simisreenivas/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="linkedin" height={25}/>
      </a>
      <a className="navLink" href="https://github.com/simi2817" target="_blank" rel="noreferrer">
        <img src={github} alt="github" height={35}/>
      </a>
      <Link className="navLink" to="mailto:simi.sreenivas@gmail.com">
        <img src={email} alt="email" height={20}/>
      </Link>
      </div>
      <div className="nav">
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/about">About</Link>
      <Link className="navLink" to="/experience">Experience</Link>
      <Link className="navLink" to="/skills">Skills</Link>
      <Link className="navLink" to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default NavBar