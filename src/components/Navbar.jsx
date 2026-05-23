import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-sm font-bold tracking-wide text-black">
          MAC<span className="text-black">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded border border-black/15 bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 md:inline-flex"
        >
          Contact Me
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-black/10 text-black md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="section-shell pb-4 md:hidden">
          <div className="glass grid gap-1 rounded p-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-black/5 hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
