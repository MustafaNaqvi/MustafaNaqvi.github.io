import { useState } from 'react'

const featured = [
  {
    title: 'Heirs of the Moon',
    year: '2026',
    client: 'Redwater Games Studio',
    desc: 'Third-person open-world nature survival game. Engineered core gameplay systems across the entire codebase. Took broad ownership of development, building everything from advanced animal AI to the perma-death bloodline mechanics. Played a pivotal role in delivering a highly successful Steam playtest.',
    tech: ['Unreal Engine 5', 'C++', 'Blueprints'],
    video: 'ck1dEHJ411Q',
    highlight: 'PC / Steam',
    links: {
      steam: 'https://store.steampowered.com/app/4698410/Heirs_of_the_Moon/',
      youtube: 'https://www.youtube.com/@RedwaterGamesStudio',
      discord: 'https://discord.gg/dfBw8qvUzz',
    },
  },
  {
    title: 'Chain of Command',
    year: '2025',
    client: 'Client Project',
    desc: 'Medieval strategy game. Turn-based evolving into real-time combat. I built the full stack: Unity game client, Node.js backend with AI-controlled battles, NestJS API with MongoDB. Real-time multiplayer was the end goal.',
    tech: ['Unity', 'NestJS', 'MongoDB', 'Node.js'],
    video: 'DSNfKVyialg',
    note: 'Currently paused',
    links: {
      youtube: 'https://www.youtube.com/@ChainofCommandGame',
      reddit: 'https://www.reddit.com/r/ChainofCommand/',
      twitter: 'https://x.com/PlayCoCGame',
    },
  },
  {
    title: 'Coin Crusade',
    year: '2024',
    client: 'Client Project',
    desc: 'Real-time multiplayer play-to-earn strategy game. Started as web (JS/HTML/CSS), then Unity WebGL frontend with React handling blockchain via jslib. Built a custom Socket.IO network layer bridging Node.js and Unity WebGL through jslib.',
    tech: ['Unity', 'React', 'Node.js', 'Socket.IO', 'Solidity'],
    video: 'QDuRhT3wYvA',
    highlight: 'Web3',
    links: {
      youtube: 'https://www.youtube.com/channel/UCzflPF4RF7GyIaJvNiOnFNA',
    },
  },
  {
    title: 'Kung Fu Fighting Arena',
    year: '2022',
    client: 'Mobify',
    desc: 'Combat game that hit 10M+ downloads. Built combat systems, character controllers, and core gameplay.',
    tech: ['Unity', 'C#', 'Mobile'],
    video: 'NIojFnq7FmY',
    link: 'https://play.google.com/store/apps/details?id=com.gxs.karatefighting.superhero.king.fighting.games',
    downloads: '10M+',
  },
]

// Keeping the exact data for Phase 3
export const otherGames = [
  { name: 'Bike Racing 3D', type: 'Racing', downloads: '10M+', link: 'https://play.google.com/store/apps/details?id=com.kn.trafficracer.bikeracegames', icon: '/games/bike-racing.webp' },
  { name: 'Crazy Car Racing', type: 'Racing', downloads: '100M+', link: 'https://play.google.com/store/apps/details?id=com.fungames.highway.traffic.race', icon: '/games/crazy-car-racing.webp' },
  { name: 'Mini Car Racing Game Legends', type: 'Racing', downloads: '100M+', link: 'https://play.google.com/store/apps/details?id=com.ht.mini.car.raceway.endless.drive', icon: '/games/mini-car-racing-legends.webp' },
  { name: 'Mini Car Runner', type: 'Racing', downloads: '1M+', link: 'https://play.google.com/store/apps/details?id=com.tb.minicar.rush.racing.drivinggames', icon: '/games/mini-car-runner.webp' },
  { name: 'Lost Love', type: 'Narrative', link: 'https://play.google.com/store/apps/details?id=com.AfternoonAppsInc.LostLove', icon: '/games/lost-love.webp' },
  { name: 'Burnout King', type: 'Racing', link: 'https://play.google.com/store/apps/details?id=com.rebellion.driftmaster.torqueburnout', icon: '/games/burnout-king.webp' },
  { name: 'Judgement Day', type: 'Story', link: 'https://apps.apple.com/us/app/judgement-day/id1580736178', platform: 'iOS', icon: '/games/judgement-day.webp' },
  { name: 'Trapped Within!', type: 'Puzzle', link: 'https://apps.apple.com/us/app/trapped-within/id1451330509', platform: 'iOS', icon: '/games/trapped-within.webp' },
  { name: 'Tap Fighters', type: 'Combat', link: 'https://apps.apple.com/us/app/sword-fighter-fighting-game/id1581108337', platform: 'iOS', icon: '/games/tap-fighters.webp' },
  { name: 'Badminton Tournament', type: 'Sports', link: 'https://play.google.com/store/apps/details?id=com.rebellion.badmintonlegend.badminton', icon: '/games/badminton-tournament.webp' },
  { name: 'Sword Shadow Fight', type: 'Combat', link: 'https://play.google.com/store/apps/details?id=com.knights.shadowfightbattle.war', icon: '/games/sword-shadow-fight.webp' },
  { name: 'Wizard Time', type: 'Action', link: 'https://play.google.com/store/apps/details?id=com.AfternoonAppsInc.MatchTheMark', icon: '/games/wizard-time.webp' },
  { name: 'Real Car Race 3D', type: 'Racing', downloads: '100M+', link: 'https://play.google.com/store/apps/details?id=com.gamexis.racing.ferocity.apps', icon: '/games/real-car-race-3d.webp' },
  { name: 'BMX Bicycle Flip', type: 'Sports', link: 'https://play.google.com/store/apps/details?id=com.rebellion.fliprush.bikeflip.bmxflip', icon: '/games/bmx-bicycle-flip.webp' },
  { name: "ARia's Legacy", type: 'AR', link: 'https://apps.apple.com/us/app/arias-legacy-ar-escape-room/id1359270156', platform: 'iOS', icon: '/games/arias-legacy.webp' },
  { name: 'Watermelon 3D Merge', type: 'Casual', link: 'https://apps.apple.com/tr/app/watermelon-3d-merge-fruit-game/id6472909411', platform: 'iOS', icon: '/games/watermelon-3d-merge.webp' },
  { name: 'Real Construction Task', type: 'Simulation', link: 'https://play.google.com/store/apps/details?id=com.rebellion.constructioncity.constructionsimulator', icon: '/games/real-construction-task.webp' },
  { name: 'Mad Cops Chase', type: 'Action', link: 'https://play.google.com/store/apps/details?id=com.rebellion.copchase.policechase', icon: null },
  { name: 'Marine Sharpshooter 3D', type: 'Shooter', link: 'https://apps.apple.com/us/app/marine-sharpshooter-3d/id436148268', platform: 'iOS', icon: null },
]

// Fallback game icon component for titles without an image
function GameIcon({ name }) {
  const colors = ['#f59e0b', '#3b82f6', '#22c55e', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4']
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  const initial = name.charAt(0).toUpperCase()

  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0"
         style={{ backgroundColor: `${colors[colorIndex]}20`, border: `1px solid ${colors[colorIndex]}40`, color: colors[colorIndex] }}>
      {initial}
    </div>
  )
}

function BentoCell({ game, isWide }) {
  // Generate a random array of 12 background icons from the pool of available ones for the pattern
  const patternIcons = otherGames.filter(g => g.icon).sort(() => 0.5 - Math.random()).slice(0, 12).map(g => g.icon);
  
  return (
    <a
      href={game.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden bg-zinc-900 border border-white/5 rounded-3xl p-5 flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] ${isWide ? 'md:col-span-2' : 'col-span-1'}`}
    >
      {/* Background Icon Pattern (Low Opacity) */}
      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none grid grid-cols-4 gap-2 p-2" style={{ transform: 'rotate(-5deg) scale(1.2)' }}>
        {patternIcons.map((iconUrl, i) => (
          <img key={i} src={iconUrl} alt="" className="w-full aspect-square object-cover rounded-md grayscale" />
        ))}
      </div>
      
      {/* Dark Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent pointer-events-none" />

      {/* Content Top: Main Game Icon */}
      <div className="relative z-10">
        {game.icon ? (
          <img src={game.icon} alt={game.name} className="w-12 h-12 rounded-xl object-cover shadow-md border border-white/10 group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <div className="group-hover:scale-110 transition-transform duration-300 origin-top-left"><GameIcon name={game.name} /></div>
        )}
      </div>

      {/* Content Bottom: Text & Metrics */}
      <div className="relative z-10 mt-6">
        <h4 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-amber-500 transition-colors">
          {game.name}
        </h4>
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
          <span className="text-zinc-500 uppercase tracking-wider">{game.type}</span>
          {game.downloads && (
            <>
              <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
              <span className="text-green-500">{game.downloads}</span>
            </>
          )}
          {game.platform && (
            <>
              <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
              <span className="text-amber-500/70">{game.platform}</span>
            </>
          )}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-zinc-400 text-lg">Client projects and studio work. I see them through to release.</p>
        </div>

        {/* Phase 2: Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          {featured.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={project.title}
                className={`bg-zinc-900 border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col ${
                  isFeatured ? 'lg:col-span-2 lg:flex-row' : ''
                } gap-6 lg:gap-8 hover:border-amber-500/30 transition-colors`}
              >
                {/* Video Embed */}
                <div className={`w-full ${isFeatured ? 'lg:w-1/2 flex-shrink-0' : ''}`}>
                  <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/5 bg-black shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.video}?rel=0`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`flex flex-col flex-1 ${isFeatured ? 'justify-center' : ''}`}>
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                    {project.year} // {project.client}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 flex flex-wrap items-center gap-3">
                    {project.title}
                    {project.note && (
                      <span className="text-xs font-semibold px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-md">
                        {project.note}
                      </span>
                    )}
                    {project.highlight && (
                      <span className="text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-500 rounded-md">
                        {project.highlight}
                      </span>
                    )}
                    {project.downloads && (
                      <span className="text-xs font-semibold px-2.5 py-1 bg-green-500/10 text-green-400 rounded-md">
                        {project.downloads}
                      </span>
                    )}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-zinc-800/50 border border-white/5 rounded-md text-xs font-medium text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/5">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors">
                        Play Store
                      </a>
                    )}
                    {project.links?.steam && (
                      <a href={project.links.steam} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-gray-300 transition-colors flex items-center gap-1.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.979 0C5.368 0 0 5.367 0 11.978c0 4.962 3.018 9.215 7.318 11.02l3.414-4.846c-.055-.175-.084-.363-.084-.555 0-1.077.876-1.954 1.953-1.954.129 0 .256.012.379.035l2.748-4.004c-.015-.09-.022-.183-.022-.278 0-2.024 1.642-3.666 3.666-3.666 2.023 0 3.665 1.642 3.665 3.666 0 2.024-1.642 3.665-3.665 3.665-1.749 0-3.21-1.233-3.57-2.871l-2.733 3.982c.11.234.17.495.17.768 0 1.077-.876 1.954-1.954 1.954-1.077 0-1.953-.877-1.953-1.954 0-.312.072-.605.198-.867L5.786 16.71c-.705.578-1.156 1.455-1.156 2.434 0 1.744 1.414 3.158 3.158 3.158 1.545 0 2.836-1.11 3.109-2.58l.006-.027 5.171 1.761C19.78 19.986 24 16.48 24 11.978 24 5.367 18.632 0 11.979 0zM19.37 11.371c-1.119 0-2.028-.909-2.028-2.028s.909-2.028 2.028-2.028 2.028.909 2.028 2.028-.909 2.028-2.028 2.028zm-6.757 5.23c-.538 0-.974-.436-.974-.974 0-.538.436-.974.974-.974.537 0 .973.436.973.974 0 .538-.436.974-.973.974z"/>
                        </svg>
                        Steam
                      </a>
                    )}
                    {project.links?.youtube && (
                      <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-red-500 hover:text-red-400 transition-colors flex items-center gap-1.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                      </a>
                    )}
                    {project.links?.discord && (
                      <a href={project.links.discord} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#5865F2] hover:text-[#4752C4] transition-colors flex items-center gap-1.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                        </svg>
                        Discord
                      </a>
                    )}
                    {project.links?.reddit && (
                      <a href={project.links.reddit} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                        </svg>
                        Reddit
                      </a>
                    )}
                    {project.links?.twitter && (
                      <a href={project.links.twitter} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        X
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase 3: Project Vault */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Project Vault</h2>
              <p className="text-zinc-400">The archive. {otherGames.length} titles that taught me everything.</p>
            </div>
            <div className="text-sm font-semibold text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 whitespace-nowrap">
              100M+ Combined Downloads
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherGames.map((game, index) => {
              // Assign the wide rectangle (col-span-2) to specific indices to build the masonry bento look
              const isWide = [0, 4, 7, 12].includes(index);
              return <BentoCell key={game.name} game={game} isWide={isWide} />;
            })}
          </div>
        </div>
      </div>
    </section>
  )
}