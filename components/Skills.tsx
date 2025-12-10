import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Flatten all skills into a single array for the ticker
  const allSkills = SKILLS.flatMap(category => category.skills);

  return (
    <section id="skills" className="py-12 border-b border-zinc-800 bg-brand-300 text-black overflow-hidden">
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <React.Fragment key={index}>
              <span className="text-4xl md:text-6xl font-black uppercase mx-8 tracking-tighter">
                {skill}
              </span>
              <span className="w-4 h-4 bg-black rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 flex items-center">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <React.Fragment key={`copy-${index}`}>
               <span className="text-4xl md:text-6xl font-black uppercase mx-8 tracking-tighter">
                {skill}
              </span>
              <span className="w-4 h-4 bg-black rounded-full"></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;