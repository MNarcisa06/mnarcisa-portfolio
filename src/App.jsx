import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './sections/About';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
