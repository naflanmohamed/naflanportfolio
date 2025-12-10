import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} NAFLAN MOHAMED. ALL SYSTEMS NORMAL.
        </div>
        <div className="flex gap-6 font-mono text-xs text-zinc-500 uppercase">
          {/* <a href="#" className="hover:text-brand-300">Privacy</a>
          <a href="#" className="hover:text-brand-300">Terms</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;