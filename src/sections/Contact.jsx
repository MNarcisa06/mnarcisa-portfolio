import { Facebook, Github, Linkedin, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { contactItems, owner } from '../data/portfolio';

const socials = [
  { label: 'GitHub', icon: Github },
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Facebook', icon: Facebook }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build practical systems that make work easier."
          description="Reach out for IT support, workflow automation ideas, and systems-focused collaboration."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass rounded p-6">
            <h3 className="font-display text-xl font-semibold text-black">Contact Details</h3>
            <div className="mt-6 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3 rounded border border-black/10 bg-zinc-50 p-4">
                    <Icon size={18} className="mt-0.5 shrink-0 text-zinc-900" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-zinc-800">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={`mailto:${owner.email}`}
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded border border-black/10 bg-zinc-50 text-zinc-700 transition hover:border-black/30 hover:text-black"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="glass rounded p-6" delay={0.08}>
            <form action={`https://formsubmit.co/${owner.email}`} method="POST" className="grid gap-4">
              <input type="hidden" name="_subject" value="New portfolio message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
              <label className="grid gap-2 text-sm font-semibold text-zinc-800">
                Name
                <input
                  type="text"
                  name="name"
                  className="rounded border border-black/10 bg-white px-4 py-3 text-black outline-none transition placeholder:text-zinc-400 focus:border-black/40"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-800">
                Email
                <input
                  type="email"
                  name="email"
                  className="rounded border border-black/10 bg-white px-4 py-3 text-black outline-none transition placeholder:text-zinc-400 focus:border-black/40"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-800">
                Message
                <textarea
                  name="message"
                  rows="6"
                  className="resize-none rounded border border-black/10 bg-white px-4 py-3 text-black outline-none transition placeholder:text-zinc-400 focus:border-black/40"
                  placeholder="Tell me about your project or support request"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
