import React from 'react';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS } from '../constants';
import { Download, Award, Briefcase, GraduationCap, Cpu } from 'lucide-react';
import Button from './Button';

const Resume: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-24 bg-zinc-950 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Header Block */}
        <div className="border-b border-zinc-800 pb-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-2 text-brand-300 font-mono text-xs mb-2">
              <span className="w-2 h-2 bg-brand-300 animate-pulse"></span>
              SYSTEM_DIAGNOSTICS // PERSONNEL_DATA
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              TECHNICAL<br />DOSSIER
            </h1>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'assets/Naflan_Mohamed_Resume_MERN.pdf';
              link.download = 'Naflan_Mohamed_Resume_MERN.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download size={16} />
            DOWNLOAD_PDF
          </Button>
        </div>

        {/* Experience Section - "System Logs" */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 bg-zinc-900 border border-zinc-800">
              <Briefcase className="text-brand-300" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">EXPERIENCE_LOGS</h2>
          </div>

          <div className="relative border-l border-zinc-800 ml-3 space-y-12">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-zinc-950 border border-zinc-600 group-hover:border-brand-300 group-hover:bg-brand-300 transition-colors"></div>

                <div className="flex flex-col md:flex-row gap-4 md:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="font-mono text-brand-300 text-sm">@{exp.company}</span>
                  <span className="font-mono text-zinc-500 text-xs md:ml-auto border border-zinc-800 px-2 py-1 bg-zinc-900">
                    {exp.period}
                  </span>
                </div>

                <p className="text-zinc-400 max-w-2xl leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono text-zinc-500 bg-zinc-900 px-1.5 py-0.5 border border-zinc-800/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2 bg-zinc-900 border border-zinc-800">
                <GraduationCap className="text-brand-300" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">EDUCATION</h2>
            </div>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-zinc-600 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white">{edu.institution}</h3>
                    <span className="font-mono text-xs text-zinc-500">{edu.year}</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2 bg-zinc-900 border border-zinc-800">
                <Award className="text-brand-300" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">CERTIFICATIONS</h2>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brand-300 hover:underline">
                  <div key={cert.id} className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-brand-300/30 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white group-hover:text-brand-300 transition-colors">{cert.name}</h3>
                      <span className="font-mono text-xs text-zinc-500">{cert.year}</span>
                    </div>
                    <p className="text-zinc-400 text-sm">{cert.issuer}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Deep Dive */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2 bg-zinc-900 border border-zinc-800">
              <Cpu className="text-brand-300" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">SKILL_MATRIX</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((category) => (
              <div key={category.name} className="border border-zinc-800 bg-zinc-900/20">
                <div className="p-4 border-b border-zinc-800 flex items-center gap-2 bg-zinc-900/50">
                  <category.icon size={16} className="text-brand-300" />
                  <h3 className="font-mono text-sm font-bold text-white uppercase">{category.name}</h3>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="font-mono text-xs text-zinc-300 px-2 py-1 bg-zinc-800 border border-zinc-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;