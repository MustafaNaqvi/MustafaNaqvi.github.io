import { useState } from 'react'

const featuredProjects = [
    {
        icon: '⚔️',
        platform: 'WebGL · 2024',
        title: 'Coin Crusade',
        desc: 'Strategy game with real-time multiplayer. Custom Node.js game server handling 40+ concurrent players at <120ms latency.',
        tags: ['Unity', 'Node.js', 'WebSocket', 'Multiplayer'],
        youtubeId: 'QDuRhT3wYvA',
        channelLink: 'https://www.youtube.com/@ChainWars',
        featured: true,
        clientProject: true,
    },
    {
        icon: '🥋',
        platform: 'Android · 2022',
        title: 'Kung Fu Karate Fighting Arena',
        desc: 'Action fighting game with 10M+ downloads. Implemented combat systems and character controllers. Increased player engagement by 15% through gameplay optimizations.',
        tags: ['Unity', 'C#', 'Mobile', 'Combat Systems'],
        youtubeId: 'NIojFnq7FmY',
        link: 'https://play.google.com/store/apps/details?id=com.gxs.karatefighting.superhero.king.fighting.games',
        featured: true,
    },
    {
        icon: '🏰',
        platform: 'Steam · 2025 (Paused)',
        title: 'Chain of Command',
        desc: 'Medieval strategy game evolving from turn-based to real-time combat. Full-stack: Unity frontend, Node.js server with AI-controlled battles over WebSocket, NestJS + MongoDB API. Real-time multiplayer was the end goal.',
        tags: ['Unity', 'NestJS', 'MongoDB', 'Node.js', 'WebSocket', 'AI'],
        youtubeId: 'DSNfKVyialg',
        channelLink: 'https://www.youtube.com/@PlayCoCGame',
        socialLinks: {
            twitter: 'https://x.com/PlayCoCGame',
            reddit: 'https://www.reddit.com/user/ChainOfCommandGame/',
        },
        featured: true,
        clientProject: true,
    },
]

const shippedGames = [
    { icon: '🏍️', title: 'Bike Racing: 3D Bike Race Game', stats: '10M+ · Racing', link: 'https://play.google.com/store/apps/details?id=com.kn.trafficracer.bikeracegames' },
    { icon: '🏎️', title: 'Mini Car Racing Game Legends', stats: 'Racing', link: 'https://play.google.com/store/apps/details?id=com.ht.mini.car.raceway.endless.drive' },
    { icon: '⚔️', title: 'Sword Shadow Fight: Ninja Game', stats: 'Combat Action', link: 'https://play.google.com/store/apps/details?id=com.knights.shadowfightbattle.war' },
    { icon: '⚖️', title: 'Judgement Day', stats: 'iOS Story', link: 'https://apps.apple.com/us/app/judgement-day/id1580736178' },
    { icon: '💔', title: 'Lost Love', stats: 'Narrative', link: 'https://play.google.com/store/apps/details?id=com.AfternoonAppsInc.LostLove' },
    { icon: '🚪', title: 'Trapped Within!', stats: 'Puzzle', link: 'https://apps.apple.com/us/app/trapped-within/id1451330509' },
    { icon: '🤺', title: 'Tap Fighters', stats: 'Combat', link: 'https://apps.apple.com/us/app/sword-fighter-fighting-game/id1581108337' },
    { icon: '🏁', title: 'Crazy Car Racing - Car Games', stats: 'Racing', link: 'https://play.google.com/store/apps/details?id=com.fungames.highway.traffic.race' },
    { icon: '🧙', title: 'Wizard Time', stats: 'Magic Action', link: 'https://play.google.com/store/apps/details?id=com.AfternoonAppsInc.MatchTheMark' },
    { icon: '🚙', title: 'Real Car Race 3D Games Offline', stats: 'Racing', link: 'https://play.google.com/store/apps/details?id=com.gamexis.racing.ferocity.apps' },
    { icon: '🚴', title: 'BMX Bicycle Flip Racing & Flip BMX Bike Game', stats: 'Physics Stunts', link: 'https://play.google.com/store/apps/details?id=com.rebellion.fliprush.bikeflip.bmxflip' },
    { icon: '🚗', title: 'Burnout King - Car Drifting Games', stats: 'Racing', link: 'https://play.google.com/store/apps/details?id=com.rebellion.driftmaster.torqueburnout' },
    { icon: '🏸', title: 'Badminton Tournament - Badminton Sports Games', stats: 'Sports', link: 'https://play.google.com/store/apps/details?id=com.rebellion.badmintonlegend.badminton' },
    { icon: '🔮', title: "ARia's Legacy - AR Escape Room", stats: 'AR Puzzle', link: 'https://apps.apple.com/us/app/arias-legacy-ar-escape-room/id1359270156' },
    { icon: '🍉', title: 'Watermelon 3D Merge Fruit Game', stats: 'Casual', link: 'https://apps.apple.com/tr/app/watermelon-3d-merge-fruit-game/id6472909411' },
    { icon: '🏗️', title: 'Real Construction Task 3D - New Construction Games', stats: 'Simulation', link: 'https://play.google.com/store/apps/details?id=com.rebellion.constructioncity.constructionsimulator' },
    { icon: '🚔', title: 'Mad Cops Chase : New Police Chase Games 2020', stats: 'Action', link: 'https://play.google.com/store/apps/details?id=com.rebellion.copchase.policechase' },
    { icon: '🎯', title: 'Marine Sharpshooter 3D', stats: 'Shooter', link: 'https://apps.apple.com/us/app/marine-sharpshooter-3d/id436148268' },
]

export default function Projects() {
    const [showAll, setShowAll] = useState(false)
    const visibleGames = showAll ? shippedGames : shippedGames.slice(0, 6)

    return (
        <section id="projects" className="section" style={{ background: 'var(--p)' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <span className="code-comment">// featured_projects</span>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 600,
                        color: '#fff',
                        marginTop: '12px',
                    }}>
                        Work That <span style={{ color: 'var(--gold)' }}>Ships</span>
                    </h2>
                    <p style={{ color: 'var(--td)', marginTop: '12px', fontSize: '15px' }}>
                        From MVP prototypes to games with millions of downloads
                    </p>
                </div>

                {/* Featured Projects */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '24px',
                    marginBottom: '64px',
                }}>
                    {featuredProjects.map((project) => (
                        <div
                            key={project.title}
                            className="card"
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                borderColor: project.featured ? 'var(--gold)' : project.inProgress ? 'var(--orange)' : undefined,
                                position: 'relative',
                            }}
                        >
                            {/* Media Section - Video or Image */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                paddingTop: '56.25%', // 16:9 aspect ratio
                                background: 'var(--bg)',
                                overflow: 'hidden',
                            }}>
                                {project.youtubeId ? (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1`}
                                        title={project.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                        }}
                                    />
                                ) : project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '64px',
                                        background: 'linear-gradient(135deg, var(--p) 0%, var(--bg) 100%)',
                                    }}>
                                        {project.icon}
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div style={{ padding: '20px' }}>
                                {/* Badge */}
                                {project.clientProject && (
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '10px',
                                        fontFamily: 'var(--mono)',
                                        background: 'rgba(200,120,60,0.1)',
                                        color: 'var(--orange)',
                                        border: '1px solid var(--orange)',
                                        marginBottom: '12px',
                                    }}>
                                        🔒 Client Project
                                    </div>
                                )}

                                {/* Icon & Platform */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '24px' }}>{project.icon}</span>
                                    <span style={{
                                        fontFamily: 'var(--mono)',
                                        fontSize: '11px',
                                        color: 'var(--tm)',
                                        letterSpacing: '1px',
                                    }}>
                                        {project.platform}
                                    </span>
                                    {project.featured && (
                                        <span style={{
                                            marginLeft: 'auto',
                                            padding: '3px 8px',
                                            borderRadius: '4px',
                                            fontSize: '10px',
                                            fontFamily: 'var(--mono)',
                                            background: 'rgba(220,220,170,0.1)',
                                            color: 'var(--gold)',
                                            border: '1px solid var(--gold)',
                                        }}>
                                            ★ Featured
                                        </span>
                                    )}
                                </div>

                                {/* Title & Description */}
                                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>
                                    {project.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: 'var(--td)', lineHeight: 1.7, marginBottom: '16px' }}>
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag" style={{ fontSize: '11px' }}>{tag}</span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--blue)',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            View on Store →
                                        </a>
                                    )}
                                    {project.channelLink && (
                                        <a
                                            href={project.channelLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                fontSize: '13px',
                                                color: '#ff0000',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            YouTube →
                                        </a>
                                    )}
                                    {project.socialLinks?.twitter && (
                                        <a
                                            href={project.socialLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--tm)',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            𝕏 →
                                        </a>
                                    )}
                                    {project.socialLinks?.reddit && (
                                        <a
                                            href={project.socialLinks.reddit}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                fontSize: '13px',
                                                color: '#ff4500',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                 alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            Reddit →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Shipped Games Section */}
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <span className="code-comment">// shipped_games</span>
                    <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginTop: '12px' }}>
                        <span style={{ color: 'var(--gold)' }}>100M+</span> Combined Downloads
                    </h3>
                </div>

                {/* Games Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '12px',
                    marginBottom: '24px',
                }}>
                    {visibleGames.map((game) => (
                        <a
                            key={game.title}
                            href={game.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card"
                            style={{
                                padding: '16px',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                            }}
                        >
                            <span style={{ fontSize: '24px' }}>{game.icon}</span>
                            <div style={{ overflow: 'hidden' }}>
                                <div style={{
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    color: '#fff',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                }}>
                                    {game.title}
                                </div>
                                <div style={{ fontSize: '11px', color: 'var(--tm)' }}>{game.stats}</div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Show More Button */}
                {shippedGames.length > 6 && (
                    <div style={{ textAlign: 'center' }}>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn btn-secondary"
                        >
                            {showAll ? 'Show Less' : `Show All ${shippedGames.length} Games`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
