import React, { useRef } from 'react';
import { ArrowRight, Github, ExternalLink, Database } from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onViewArchive: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewArchive }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Only show first 3 projects on home
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-24 border-b border-zinc-800 relative">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">SELECTED_WORKS</h2>
            <p className="font-mono text-zinc-500 text-sm">/// DEPLOYMENTS</p>
          </div>
          <div className="flex gap-2 font-mono hidden md:flex">
            <button onClick={() => scroll('left')} className="p-4 border border-zinc-800 hover:bg-white hover:text-black transition-colors">
              ←
            </button>
            <button onClick={() => scroll('right')} className="p-4 border border-zinc-800 hover:bg-white hover:text-black transition-colors">
              →
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container (Desktop) / Vertical (Mobile) */}
        <div
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row gap-8 overflow-x-auto no-scrollbar pb-12 snap-x px-4 -mx-4 md:px-0 md:mx-0"
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="min-w-full md:min-w-[500px] lg:min-w-[600px] bg-zinc-900 border border-zinc-800 group snap-center transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_40px_-15px_rgba(190,242,100,0.1)] hover:border-brand-300/30"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden border-b border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-300/0 group-hover:bg-brand-300/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white px-3 py-1 font-mono text-xs">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white uppercase leading-none">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} className="text-zinc-500 hover:text-brand-300 transition-colors" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    )}
                    {project.link && (
                      <a href={project.link} className="text-zinc-500 hover:text-brand-300 transition-colors" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                    )}
                  </div>
                </div>

                <p className="text-zinc-400 font-mono text-sm mb-8 h-12 overflow-hidden">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 border border-zinc-700 text-xs font-mono text-zinc-300 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* "View More" Card - NOW LINKS TO ARCHIVE */}
          <div
            onClick={onViewArchive}
            className="min-w-full md:min-w-[300px] bg-zinc-900/50 border border-zinc-800 border-dashed flex items-center justify-center p-8 group cursor-pointer hover:bg-zinc-800 transition-colors hover:border-brand-300/50 hover:shadow-[0_20px_40px_-15px_rgba(190,242,100,0.05)]"
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-zinc-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-300 group-hover:border-brand-300 group-hover:text-black transition-all">
                <Database size={24} />
              </div>
              <span className="font-mono text-sm uppercase group-hover:text-brand-300 transition-colors">Access Full Archive</span>
              <p className="text-xs text-zinc-500 mt-2 font-mono">View all projects //</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;