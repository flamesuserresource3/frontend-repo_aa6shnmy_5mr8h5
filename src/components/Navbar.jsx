import { useState } from 'react';
import { Rocket, Star, Sparkles, Planet, Satellite, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', icon: <Star className="w-4 h-4" /> },
    { name: 'Explore', icon: <Rocket className="w-4 h-4" /> },
    { name: 'Missions', icon: <Satellite className="w-4 h-4" /> },
    { name: 'Specturn Lab', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Worlds', icon: <Planet className="w-4 h-4" /> },
    { name: 'Account', icon: <User className="w-4 h-4" /> },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
      <nav className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 shadow-[0_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600/20 via-cyan-500/20 to-violet-600/20 blur-xl" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-fuchsia-600 to-cyan-400 shadow-[0_0_30px_5px_rgba(99,102,241,0.35)]" />
            <span className="text-white font-semibold tracking-wide text-lg">Specturn</span>
          </div>
          <button
            className="sm:hidden text-white/80 hover:text-white transition"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <ul className="hidden sm:flex items-center gap-2">
            {links.map((l) => (
              <li key={l.name}>
                <a href="#" className="group px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white transition relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/0 via-white/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                  <span className="inline-flex items-center gap-2">
                    {l.icon}
                    {l.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {open && (
          <ul className="sm:hidden mt-3 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <li key={l.name}>
                <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition">
                  {l.icon}
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
