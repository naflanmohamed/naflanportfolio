import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-zinc-800 h-14 flex items-center justify-between px-6 font-mono text-xs tracking-widest uppercase">

        {/* Left: Branding & Status */}
        <div
          className="flex items-center gap-6 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <div className="font-bold text-white text-sm">Naflan Mohamed</div>
          <div className="hidden md:flex items-center gap-2 text-zinc-500">
            <span className="w-2 h-2 bg-brand-300 rounded-full animate-pulse-fast"></span>
            <span>System Online</span>
          </div>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-1.5 transition-colors border ${currentView === item.id
                ? 'text-black bg-brand-300 border-brand-300'
                : 'text-zinc-400 hover:text-brand-300 hover:bg-zinc-900 border-transparent hover:border-zinc-800'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: Technical Info */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-zinc-500">
            LOC: 34.05°N, 118.24°W
          </div>
          <div className="text-zinc-300 bg-zinc-900 px-3 py-1 border border-zinc-800">
            {time} UTC
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-300">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-14 bg-zinc-950 z-40 flex flex-col p-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-bold text-left border-b border-zinc-800 pb-4 ${currentView === item.id ? 'text-brand-300' : 'text-zinc-300'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;