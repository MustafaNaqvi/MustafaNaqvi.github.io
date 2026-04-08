import { useState } from 'react'

const featured = [
  {
    title: 'Coin Crusade',
    year: '2024',
    client: 'Client Project',
    desc: 'Play-to-earn strategy game. Started as web (JS/HTML/CSS), then Unity WebGL frontend with React handling blockchain via jslib. Node.js server + Solidity contracts.',
    tech: ['Unity', 'React', 'Node.js', 'Solidity'],
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
]

const otherGames = [
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

// Placeholder icon component
function GameIcon({ name }) {
  // Generate consistent color from name
  const colors = ['#f59e0b', '#3b82f6', '#22c55e', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4']
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  const initial = name.charAt(0).toUpperCase()

  return (
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: `${colors[colorIndex]}20`,
      border: `1px solid ${colors[colorIndex]}40`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      fontWeight: 600,
      color: colors[colorIndex],
      flexShrink: 0,
    }}>
      {initial}
    </div>
  )
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false)
  const visibleGames = expanded ? otherGames : otherGames.slice(0, 8)

  return (
    <section id="work" className="section" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 36px)',
          fontWeight: 600,
          marginBottom: '16px',
        }}>
          Work
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '64px' }}>
          Client projects and studio work. I see them through to release.
        </p>

        {/* Featured */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '100px' }}>
          {featured.map((project) => (
            <div key={project.title} className="project-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'start',
            }}>
              <div className="video-wrapper">
                <iframe
                  src={"https://www.youtube.com/embed/" + project.video + "?rel=0"}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {project.year} / {project.client}
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>
                  {project.title}
                  {project.note && (
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      padding: '4px 10px',
                      background: 'var(--surface)',
                      color: 'var(--text-muted)',
                      borderRadius: '4px',
                      marginLeft: '12px',
                      verticalAlign: 'middle',
                    }}>
                      {project.note}
                    </span>
                  )}
                  {project.highlight && (
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      background: 'var(--accent-dim)',
                      color: 'var(--accent)',
                      borderRadius: '4px',
                      marginLeft: '12px',
                      verticalAlign: 'middle',
                    }}>
                      {project.highlight}
                    </span>
                  )}
                  {project.downloads && (
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      padding: '4px 10px',
                      background: 'rgba(34, 197, 94, 0.1)',
                      color: '#22c55e',
                      borderRadius: '4px',
                      marginLeft: '12px',
                      verticalAlign: 'middle',
                    }}>
                      {project.downloads}
                    </span>
                  )}
                </h3>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                  {project.desc}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* Links row */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '14px', color: 'var(--accent)' }}>
                      Play Store
                    </a>
                  )}
                  {project.links?.youtube && (
                    <a href={project.links.youtube} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '14px', color: '#FF0000', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      YouTube
                    </a>
                  )}
                  {project.links?.reddit && (
                    <a href={project.links.reddit} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '14px', color: '#FF4500', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                      </svg>
                      Reddit
                    </a>
                  )}
                  {project.links?.twitter && (
                    <a href={project.links.twitter} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '14px', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      {/* X */}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Games */}
        <div style={{ background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '6px' }}>
                {otherGames.length} more shipped titles
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                100M+ combined downloads across all projects
              </p>
            </div>
            {!expanded && (
              <span style={{
                fontSize: '13px',
                color: 'var(--accent)',
                fontWeight: 500,
              }}>
                Showing 8 of {otherGames.length}
              </span>
            )}
          </div>

          <div className="games-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px', marginBottom: '24px' }}>
            {visibleGames.map(game => (
              <a key={game.name} href={game.link} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 16px',
                  background: 'var(--bg)',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                {/* Icon placeholder - replace with actual game icon */}
                {game.icon ? (
                  <img src={game.icon} alt={game.name} style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }} />
                ) : (
                  <GameIcon name={game.name} />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {game.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {game.type}
                    {game.downloads && <span style={{ color: '#22c55e', marginLeft: '8px' }}>{game.downloads}</span>}
                    {game.platform && <span style={{ color: 'var(--accent)', marginLeft: '8px' }}>{game.platform}</span>}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button onClick={() => setExpanded(!expanded)}
            style={{
              width: '100%',
              padding: '14px',
              background: expanded ? 'transparent' : 'var(--accent)',
              color: expanded ? 'var(--text-muted)' : 'var(--bg)',
              border: expanded ? '1px solid var(--border)' : 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
            }}>
            {expanded ? 'Show less' : 'Show all ' + otherGames.length + ' games'}
          </button>
        </div>
      </div>
    </section>
  )
}
