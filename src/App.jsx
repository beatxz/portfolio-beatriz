import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Marquee from './components/Marquee.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Stack from './sections/Stack.jsx';
import GestorNF from './sections/gestornf/GestorNF.jsx';
import Microservices from './sections/Microservices.jsx';
import SelectedWork from './sections/SelectedWork.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';

// reducedMotion="user": respeita automaticamente o prefers-reduced-motion do sistema.
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#sobre" className="skip-link">Pular para o conteúdo</a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <GestorNF />
        <section id="projetos" aria-label="Projetos">
          <Microservices />
          <SelectedWork />
        </section>
        <Education />
        <Contact />
      </main>
    </MotionConfig>
  );
}
