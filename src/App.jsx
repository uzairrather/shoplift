import './index.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
