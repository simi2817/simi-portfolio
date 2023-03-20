import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

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
      </Routes>
    </div>
  );
}

export default App;
