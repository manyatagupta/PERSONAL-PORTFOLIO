import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import LiquidGlassHero from "./components/LiquidGlassHero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import InteractiveConsole from "./components/InteractiveConsole";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  // Force scroll to top on page load/refresh
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative w-full overflow-clip bg-black">
      <Navbar />
      <LiquidGlassHero />
      <div className="relative z-30">
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <InteractiveConsole />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default App;

