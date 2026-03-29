const services = [
  {
    icon: '🎮',
    title: 'Game Development',
    description: 'Full-cycle Unity development from concept to deployment. Mobile, PC, and WebGL platforms with 100M+ combined downloads shipped.',
    tags: ['Unity', 'C#', 'WebGL', 'Mobile'],
  },
  {
    icon: '⚡',
    title: 'Multiplayer Systems',
    description: 'Real-time multiplayer architecture with smooth state synchronization. Custom game servers achieving <120ms latency.',
    tags: ['Photon', 'WebSocket', 'Mirror', 'Real-time'],
  },
  {
    icon: '🔧',
    title: 'Backend Development',
    description: 'Scalable server infrastructure for games and applications. RESTful APIs, database design, and cloud deployment.',
    tags: ['NestJS', 'Node.js', 'MongoDB', 'REST'],
  },
  {
    icon: '📊',
    title: 'Database Architecture',
    description: 'Optimized database schemas for game data. Player persistence, leaderboards, and real-time match state storage.',
    tags: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
  },
  {
    icon: '🚀',
    title: 'Performance Optimization',
    description: 'Memory management, build optimization, and crash reduction. Achieved 20% crash reduction and 15% smaller builds.',
    tags: ['Addressables', 'Profiling', 'Memory', 'CI/CD'],
  },
  {
    icon: '☁️',
    title: 'DevOps & Deployment',
    description: 'Continuous integration, automated builds, and cloud infrastructure. From local development to production deployment.',
    tags: ['Docker', 'AWS', 'Jenkins', 'Git'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="code-comment">// services</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 600,
            color: '#fff',
            marginTop: '12px',
          }}>
            What I <span style={{ color: 'var(--gold)' }}>Build</span>
          </h2>
          <p style={{ color: 'var(--td)', marginTop: '12px', fontSize: '15px' }}>
            End-to-end game development and backend engineering
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="card"
              style={{ padding: '24px' }}
            >
              {/* Icon & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <span style={{
                  fontSize: '32px',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--p2)',
                  borderRadius: '12px',
                  border: '1px solid var(--b2)',
                }}>
                  {service.icon}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: 'var(--td)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}>
                {service.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {service.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: '11px' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
