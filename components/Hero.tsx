import React from 'react';
import { ArrowDownRight, Globe } from 'lucide-react';
import Button from './Button';
import { HERO_CONTENT, SOCIALS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 border-b border-zinc-800">
      {/* Grid Background Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-4 sm:px-12 md:px-24 opacity-20">
        <div className="w-px h-full bg-zinc-700"></div>
        <div className="w-px h-full bg-zinc-700"></div>
        <div className="w-px h-full bg-zinc-700 hidden md:block"></div>
        <div className="w-px h-full bg-zinc-700 hidden lg:block"></div>
      </div>

      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Main Typography */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-xs md:text-sm text-brand-300 px-2 py-1 border border-brand-300/30 bg-brand-300/10">
                AVAILABLE FOR HIRE
              </span>
              <span className="h-px flex-1 bg-zinc-800"></span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-8">
              MERN<br />
              STACK<br />
              <span className="text-outline">DEVELOPER</span>
            </h1>

            <p className="font-mono text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mb-10 border-l-2 border-brand-300 pl-6">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right: Abstract Tech Visual */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:justify-center items-start lg:items-end">
            <div className="w-full max-w-xs bg-zinc-900 border border-zinc-800 p-6 relative">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-zinc-500"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand-300"></div>

              <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
                <Globe className="animate-spin-slow text-zinc-500" />
                <span className="font-mono text-xs text-brand-300">WORLDWIDE</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>EXPERIENCE</span>
                  <span className="text-white">1+ YEARS</span>
                </div>
                <div className="flex justify-between">
                  <span>STACK</span>
                  <span className="text-white">MERN</span>
                </div>
                <div className="flex justify-between">
                  <span>PROJECTS</span>
                  <span className="text-white">6+ SHIPPED</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800">
                <ArrowDownRight className="w-8 h-8 text-brand-300" />
              </div>

              <div className="flex gap-4 mt-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === 'Email' ? undefined : "_blank"}
                    rel={social.name === 'Email' ? undefined : "noopener noreferrer"}
                    aria-label={social.name === 'Email' ? "Email Me" : `${social.name} Profile`}
                  >
                    <social.icon className="w-6 h-6 text-zinc-400 hover:text-brand-300 transition-colors" />
                  </a>
                ))}
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;