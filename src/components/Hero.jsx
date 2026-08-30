import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center py-20 lg:py-32 relative w-full px-4 sm:px-6 lg:px-8 bg-[#09090B] overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        {/* Photo */}
        <div className="mb-8">
          <img
            src="/photo.png"
            alt="Mustafa Naqvi"
            className="w-32 h-32 sm:w-40 sm:h-48 object-cover rounded-2xl border border-white/10 shadow-2xl bg-zinc-900 translate-y-4"
          />
        </div>

        {/* Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Mustafa Naqvi
        </h1>

        <p className="text-xl sm:text-2xl text-zinc-400 font-medium mb-8">
          Game Developer & Full Stack Engineer
        </p>

        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-12">
            I engineer high-performance games and systems across PC, mobile, and WebGL using Unreal Engine and Unity. When a project needs a backend, I build it. When it needs blockchain, I write the Solidity contracts. I don't wait for other people to unblock me.
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 w-full max-w-3xl">
          <div className="flex flex-col items-center justify-center bg-zinc-900 border border-white/5 rounded-xl p-6">
            <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-1">20+</div>
            <div className="text-xs sm:text-sm font-medium text-zinc-400 uppercase tracking-wider">shipped games</div>
          </div>
          <div className="flex flex-col items-center justify-center bg-zinc-900 border border-white/5 rounded-xl p-6">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">100M+</div>
            <div className="text-xs sm:text-sm font-medium text-zinc-400 uppercase tracking-wider">downloads</div>
          </div>
          <div className="flex flex-col items-center justify-center bg-zinc-900 border border-white/5 rounded-xl p-6">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">7+</div>
            <div className="text-xs sm:text-sm font-medium text-zinc-400 uppercase tracking-wider">years</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a href="#work" className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-[#09090B] font-semibold rounded-lg transition-colors w-full sm:w-auto text-center">
            See my work
          </a>
          <a
            href="https://drive.google.com/file/d/126JK5nhnlid-hDIT9NL61c0U4jNtD1fm/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white font-semibold rounded-lg transition-colors w-full sm:w-auto text-center"
          >
            Resume
          </a>
          <a href="#contact" className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white font-semibold rounded-lg transition-colors w-full sm:w-auto text-center">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}