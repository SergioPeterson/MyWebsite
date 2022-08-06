import './App.css';
import Main from './components/Main'
import Particle from './components/Particle';
import About from './components/About';
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contanct from './components/Contanct'
import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion'

const App = () => {
  return (
    <div className="App">
      <Particle />
      <Main/>
      <Navbar/>
      <About/>
      <Projects/>
      <Contanct/>
    </div>
  );
}

export default App;
