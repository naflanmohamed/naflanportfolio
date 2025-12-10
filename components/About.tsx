import React from 'react';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="relative border-b border-zinc-800 bg-zinc-950">
      <div className="grid lg:grid-cols-2">

        {/* Left: Sticky Image Area */}
        <div className="relative h-[50vh] lg:h-auto lg:sticky lg:top-14 border-b lg:border-b-0 lg:border-r border-zinc-800 overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop"
            alt="Workspace"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-zinc-950/50"></div>

          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-zinc-950 to-transparent">
            <h2 className="text-5xl font-black text-white tracking-tighter mb-2">ABOUT_</h2>
            <p className="font-mono text-brand-300 text-sm">Naflan Mohamed</p>
          </div>
        </div>

        {/* Right: Scrolling Content */}
        <div className="p-8 md:p-16 lg:p-24 bg-zinc-950/50">
          <div className="space-y-12">
            <div>
              <h3 className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest">01 / The Narrative</h3>
              <div className="prose prose-invert prose-lg text-zinc-400">
                {ABOUT_CONTENT.text.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest">02 / Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {ABOUT_CONTENT.stats.map((stat, index) => (
                  <div key={index} className="border border-zinc-800 p-6 hover:border-brand-300 hover:bg-zinc-900 transition-colors">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="font-mono text-xs text-zinc-500 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs text-zinc-500 mb-6 uppercase tracking-widest">03 / Philosophy</h3>
              <blockquote className="border-l-2 border-brand-300 pl-6 text-xl text-white italic">
                "Code is the tool. Design is the method. Experience is the goal."
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;