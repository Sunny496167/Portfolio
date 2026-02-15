import { useEffect, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experiance";
import Freelance from "./Freelance";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Certifications from "./Certifications";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";
import LoadingPreloader from "./LoadingPreloader";

import LoadingAnimation from "../animations/LoadingAnimation";

// Main Portfolio App
const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'experience', 'freelance', 'projects', 'blogs', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return <LoadingPreloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>


      {/* Scroll to Top Button */}
      <ScrollToTop />

      <div className="min-h-screen transition-colors duration-300">
        <Header activeSection={activeSection} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollProgress activeSection={activeSection} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Freelance darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Blogs darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Portfolio;