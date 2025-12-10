import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Search, SlidersHorizontal, Github, ExternalLink } from 'lucide-react';

const ProjectArchive: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category || 'Other')))];

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen pt-24 pb-24 bg-zinc-950 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 border-b border-zinc-800 pb-8">
           <div className="flex items-center gap-2 text-brand-300 font-mono text-xs mb-2">
              <span className="w-2 h-2 bg-brand-300 rounded-full"></span>
              PROJECT_INDEX // ARCHIVE_01
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
              PROJECT<br />ARCHIVE
            </h1>
            
            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end justify-between bg-zinc-900/30 border border-zinc-800 p-6">
              
              {/* Search */}
              <div className="w-full md:w-auto flex-1 max-w-md">
                <label className="font-mono text-xs text-zinc-500 uppercase mb-2 block">Search_Query</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-zinc-500" size={16} />
                  <input 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 p-2.5 pl-10 text-white font-mono text-sm focus:border-brand-300 focus:outline-none"
                    placeholder="Search projects..."
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="w-full md:w-auto">
                 <label className="font-mono text-xs text-zinc-500 uppercase mb-2 block flex items-center gap-2">
                   <SlidersHorizontal size={12}/> Filter_Category
                 </label>
                 <div className="flex flex-wrap gap-2">
                   {categories.map(cat => (
                     <button
                       key={cat}
                       onClick={() => setFilter(cat)}
                       className={`px-3 py-1 font-mono text-xs border transition-colors ${
                         filter === cat 
                           ? 'bg-brand-300 border-brand-300 text-black' 
                           : 'bg-zinc-950 border-zinc-700 text-zinc-400 hover:border-zinc-500'
                       }`}
                     >
                       {cat}
                     </button>
                   ))}
                 </div>
              </div>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-zinc-900 border border-zinc-800 group hover:border-brand-300/50 transition-colors">
              <div className="h-48 overflow-hidden border-b border-zinc-800 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 text-xs font-mono text-white border border-zinc-700">
                  {project.year || '2023'}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-mono text-xs text-brand-300 block mb-1">{project.category}</span>
                    <h3 className="text-xl font-bold text-white uppercase">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                     {project.github && (
                       <a href={project.github} className="text-zinc-600 hover:text-white transition-colors"><Github size={18}/></a>
                     )}
                     {project.link && (
                       <a href={project.link} className="text-zinc-600 hover:text-white transition-colors"><ExternalLink size={18}/></a>
                     )}
                  </div>
                </div>
                
                <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-zinc-800 flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono uppercase text-zinc-500 bg-zinc-950 px-1.5 py-0.5 border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 border border-dashed border-zinc-800">
            <p className="font-mono text-zinc-500">NO_RECORDS_FOUND</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectArchive;