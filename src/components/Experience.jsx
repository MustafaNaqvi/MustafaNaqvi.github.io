const jobs = [
  {
    company: 'KryptoHive',
    location: 'Islamabad, Pakistan',
    role: 'Game Engineer',
    period: 'Mar 2024 – Present',
    current: true,
    desc: 'Two client projects. Chain of Command is a medieval multiplayer war game shipped as a full MVP. It started turn-based and was rebuilt for real-time. I built the Node.js and Socket.IO server from scratch, handling state sync, player sessions, and the game loop. I also found and fixed the MongoDB query bottlenecks that were crashing the server under load. Coin Crusade is a play-to-earn strategy game. I built the Unity WebGL frontend embedded in React and wired up blockchain interaction via jslib bridging into Solidity contracts. Moving to the browser grew the reachable player base by ~25%. Currently building a third title targeting Steam.',
  },
  {
    company: 'Mobify / The Knights Pvt Ltd.',
    location: 'Islamabad, Pakistan',
    role: 'Unity Developer',
    period: 'Jan 2022 – Dec 2023',
    desc: 'Led Kung Fu Fighting Arena and Bike Racing 3D. Both titles achieved over 10 million downloads. Cut crash rate by 20% by replacing the old loading pipeline with a custom Addressable Asset system; the memory pressure problem was gone after that. Owned the full AdMob and IAP pipeline end to end, which grew monthly revenue by 40%. Cleaned up build pipelines across the studio: release prep went from three days to one.',
  },
  {
    company: 'Afternoon Apps Inc.',
    location: 'Mississauga, ON, Canada (Remote)',
    role: 'Game Developer',
    period: 'Feb 2021 – Jan 2022',
    desc: 'Shipped Judgement Day, Lost Love, and Sword Fighter. Got Trapped Within! back on the Play Store in 2 weeks after a critical suspension. Revenue was down until it was resolved. Set up Jenkins CI/CD and took the team from manual builds to daily automated ones, cutting deploy time by 30%.',
  },
  {
    company: 'COMSATS Software Solutions & Kay2Tech',
    location: 'Islamabad, Pakistan',
    role: 'Game Developer',
    period: 'Jul 2019 – Jan 2021',
    desc: 'Added Firebase Analytics across multiple titles to track 20+ player events. This data fed into design reviews every two weeks and improved retention by 15%. Managed Play Store releases across the studio. Cut build sizes by 15%; load times dropped noticeably and store ratings reflected it.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#09090B] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Career Progression</h2>

        <div className="space-y-12">
          {jobs.map((job, i) => (
            <div 
              key={job.company}
              className="relative pl-8 sm:pl-0"
            >
              {/* Timeline line for mobile */}
              <div className="sm:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-white/10" />
              {/* Timeline dot for mobile */}
              <div className="sm:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

              <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 items-start">
                <div className="flex flex-col sm:items-end sm:text-right pt-1">
                  <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="inline-flex mt-2 px-2.5 py-1 bg-amber-500/10 text-amber-500 text-xs font-semibold rounded-md border border-amber-500/20">
                      Present
                    </span>
                  )}
                </div>
                
                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors relative">
                  {/* Timeline connector for desktop */}
                  <div className="hidden sm:block absolute left-[-25px] top-6 w-6 h-px bg-white/10" />
                  <div className="hidden sm:block absolute left-[-29px] top-[22px] w-2 h-2 rounded-full bg-zinc-700 border-2 border-[#09090B]" />

                  <h3 className="text-xl font-bold text-white mb-1">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-amber-500 font-medium">{job.company}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-sm text-zinc-400">{job.location.replace(' (Remote)', '')}</span>
                    {job.location.includes('Remote') && (
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded">
                        Remote
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 leading-relaxed">
                    {job.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20 pt-16 border-t border-white/5">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
            Education
          </h3>
          <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 items-start">
            <div className="text-sm font-semibold text-zinc-500 uppercase tracking-widest sm:text-right pt-1">
              2015 - 2019
            </div>
            <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-1">
                BSc Computer Science
              </h3>
              <p className="text-amber-500 font-medium">
                COMSATS University, Islamabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}