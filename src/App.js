import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import BackEnd from './components/BackEnd';
import Experience from './components/Experience';
import FrontEnd from './components/FrontEnd';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThroughTheFog from './components/ThroughTheFog';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/through-the-fog" element={<ThroughTheFog/>}/>
        <Route path="/projects/frontend-project" element={<FrontEnd/>}/>
        <Route path="/projects/backend-project" element={<BackEnd/>}/>
      </Routes>
    </div>
  );
}

export default App;
