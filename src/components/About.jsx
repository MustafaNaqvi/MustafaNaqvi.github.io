export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          
          {/* Left Column: Heading and Tech Stack */}
          <div className="lg:col-span-1 mb-10 lg:mb-0">
            <h2 className="section-title mb-8">About</h2>
            
            <div>
              <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-4">
                Engineering Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['Unreal Engine', 'C++', 'Blueprints', 'Unity', 'C#', 'TypeScript', 'Node.js', 'React', 'NestJS', 'MongoDB', 'PostgreSQL', 'Socket.IO', 'Solidity', 'Web3', 'AWS'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-md text-xs font-medium text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-zinc-400">
              Been playing games my whole life. First time I built one in 
              university, it made more sense to me than anything else in CS. 
              Never looked back.
            </p>
            
            <p className="text-lg leading-relaxed text-zinc-400">
              The thing that changed how I think about game dev was multiplayer.
              Single-player, you can fake a lot of things right up until launch.
              Multiplayer exposes every bad assumption immediately: wrong authority
              models, sloppy state sync, or a single slow query when a match resolves.
              Building the server for Chain of Command from scratch, including the game loop,
              state sync, and player sessions, is where that clicked for me.
            </p>
            
            <p className="text-lg leading-relaxed text-zinc-400">
              Code reviews are like boss fights to me. I actually look forward to 
              them. There's something satisfying about digging into someone's 
              architecture decisions, finding the weak spots, suggesting better 
              patterns. Nothing annoys me more than seeing a 2000-line GameManager 
              class or a codebase where everything talks to everything else.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
