import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import profileImage from '../assets/picture.png';
import { owner } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="grid-bg relative flex min-h-screen w-full items-center overflow-hidden pt-20">
      <motion.div
        animate={{ x: [0, 22, 0], y: [0, -18, 0], opacity: [0.34, 0.5, 0.34] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-120px] top-24 h-80 w-80 rounded-full bg-black/[0.055] blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -18, 0], y: [0, 18, 0], opacity: [0.2, 0.36, 0.2] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-10 right-[-90px] h-72 w-72 rounded-full bg-zinc-500/[0.07] blur-3xl"
      />

      <div className="section-shell relative grid w-full max-w-full items-center gap-10 overflow-hidden py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-full overflow-hidden"
        >
          <p className="mb-5 inline-flex max-w-full rounded border border-black/10 bg-black/[0.035] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-700 sm:text-xs sm:tracking-[0.22em]">
            Developer Portfolio
          </p>

          <h1 className="max-w-full break-words font-display text-[clamp(2.45rem,10.5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl">
            {owner.name}
          </h1>

          <p className="mt-5 max-w-full text-base font-semibold leading-7 text-zinc-800 sm:text-xl">
            {owner.title}
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {owner.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800 sm:w-auto"
            >
              View Projects <ArrowDown size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded border border-black/15 bg-white px-5 py-3 text-sm font-bold text-black transition hover:border-black/35 hover:bg-zinc-100 sm:w-auto"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto hidden w-full max-w-xs sm:block lg:max-w-sm"
        >
          <div className="absolute inset-4 rounded bg-black/[0.05] blur-2xl" />
          <div className="glass relative rounded p-3">
            <img
              src={profileImage}
              alt="Mac Aldwin A. Narcisa"
              className="aspect-square w-full rounded object-cover"
            />

            <div className="mt-3 grid grid-cols-3 gap-2">
              {['Support', 'Systems', 'Automation'].map((item) => (
                <span
                  key={item}
                  className="rounded border border-black/10 bg-white px-2 py-2 text-center text-xs text-zinc-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}