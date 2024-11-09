import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { AboutMe } from './components/About.js';
import { Skills } from './components/Skills.js'
import { ProjectsSection } from './components/Projects.js'
import { ContactMe } from './components/ContactMe.js'
import { Footer } from './components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <ProjectsSection />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
