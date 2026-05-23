import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mb-10 max-w-2xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-black sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-7 text-zinc-600">{description}</p> : null}
    </motion.div>
  );
}
