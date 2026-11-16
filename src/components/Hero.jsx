import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const RESUME_URL = 'https://drive.google.com/file/d/126JK5nhnlid-hDIT9NL61c0U4jNtD1fm/view'

const stats = [
  { value: '20+', label: 'shipped games' },
  { value: '100M+', label: 'downloads' },
  { value: '7+', label: 'years' },
]

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Introduction"
      className="relative isolate w-full overflow-hidden bg-[#09090B] pb-12 pt-[6.5rem] sm:pt-28 lg:pb-14 lg:pt-32"
    >
      {/* Static titanium grid with a faint amber glow behind the portrait: pure CSS, no layout cost */}
      <div className="hero-backdrop pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      {/* Same container and gutters as Featured Work, so the left edges line up */}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:gap-8 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:px-8">
        {/* Identity: framed portrait beside the name (mobile), a column of its own (desktop) */}
        <div className="flex items-end gap-4 sm:gap-6 lg:block lg:flex-shrink-0">
          <div className="flex-shrink-0 rounded-2xl bg-gradient-to-b from-white/15 to-white/[0.03] p-1 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]">
            <img
              src="/photo-sm.jpg"
              alt="Mustafa Naqvi"
              width="384"
              height="512"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="h-[112px] w-[84px] rounded-xl bg-zinc-900 object-cover sm:h-[136px] sm:w-[102px] lg:h-[288px] lg:w-[216px]"
            />
          </div>
          {/* Mobile and tablet carry the name here; desktop moves it into the text column */}
          <div className="min-w-0 pb-0.5 lg:hidden">
            <p className="text-5xl font-bold leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl" aria-hidden="true">
              <span className="block">Mustafa</span>
              <span className="block">Naqvi</span>
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="sr-only lg:not-sr-only lg:whitespace-nowrap lg:text-7xl lg:font-bold lg:leading-none lg:tracking-[-0.035em] lg:text-white">
            Mustafa Naqvi
          </h1>
          <p className="mb-4 text-balance text-lg font-medium text-zinc-300 sm:mb-5 sm:text-xl lg:mb-6 lg:mt-4 lg:text-2xl">
            Game Developer <span className="text-zinc-500">&amp;</span> Full Stack Engineer
          </p>

          <p className="mb-6 max-w-[62ch] text-base leading-relaxed text-zinc-400 sm:mb-7 sm:text-lg">
            I engineer high-performance games and systems across PC, mobile, and WebGL using Unreal Engine and Unity. When a project needs a backend, I build it. When it needs blockchain, I write the Solidity contracts. I don&apos;t wait for other people to unblock me.
          </p>

          {/* Phones stack value over label so all three share one row */}
          <ul className="mb-6 flex flex-wrap gap-2 sm:mb-8 sm:gap-2.5" aria-label="Career highlights">
            {stats.map((s, i) => (
              <motion.li
                key={s.label}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.09, ease: EASE_OUT_EXPO }}
                className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 sm:flex-row sm:items-baseline sm:gap-2 sm:rounded-full sm:px-4 sm:py-2"
              >
                <span className="text-base font-bold leading-tight tabular-nums text-amber-500 sm:text-lg">{s.value}</span>
                <span className="text-xs font-medium text-zinc-300 sm:text-sm">{s.label}</span>
              </motion.li>
            ))}
          </ul>

          {/* Phones: the two buttons share a row, "Get in touch" sits under them */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#work"
              className="flex-1 rounded-lg bg-amber-500 px-5 py-3 text-center sm:flex-none sm:px-7 font-semibold text-zinc-950 transition-colors hover:bg-amber-400"
            >
              See my work
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-white/15 px-5 py-3 text-center sm:flex-none sm:px-7 font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-1.5 px-2 py-2 font-medium sm:w-auto sm:py-3 text-zinc-400 transition-colors hover:text-white"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
