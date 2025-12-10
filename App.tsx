import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Resume from './components/Resume';
import ProjectArchive from './components/ProjectArchive';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  // View State: 'home', 'projects', 'resume'
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle navigation and auto-scroll to top
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 selection:bg-brand-300 selection:text-black overflow-x-hidden flex flex-col">
      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay opacity-50"></div>
      
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <Skills />
            <About />
            <Projects onViewArchive={() => handleNavigate('projects')} />
            <Contact />
          </>
        )}

        {currentView === 'resume' && (
          <Resume />
        )}

        {currentView === 'projects' && (
          <ProjectArchive />
        )}
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;