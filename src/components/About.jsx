export default function About() {
  const skills = [
    { category: 'Languages', items: ['C#', 'JavaScript', 'TypeScript'] },
    { category: 'Game Dev', items: ['Unity', 'WebSocket', 'UDP/TCP', 'Socket.IO'] },
    { category: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'REST API'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
    { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'] },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="code-comment">// about_me</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 600,
            color: '#fff',
            marginTop: '12px',
          }}>
            Building Games & <span style={{ color: 'var(--gold)' }}>Scalable Systems</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>
          {/* Bio */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              The Story
            </h3>
            <div style={{ color: 'var(--td)', lineHeight: 1.8, fontSize: '15px' }}>
              <p style={{ marginBottom: '16px' }}>
                I'm a <span style={{ color: 'var(--green-bright)' }}>Game Developer</span> and{' '}
                <span style={{ color: 'var(--green-bright)' }}>Backend Engineer</span> with 6+ years of experience 
                building real-time multiplayer games and scalable server architectures.
              </p>
              <p style={{ marginBottom: '16px' }}>
                My work has reached <span style={{ color: 'var(--gold)' }}>100 million+ combined downloads</span> across 
                mobile platforms. I specialize in creating smooth, low-latency multiplayer experiences 
                and the robust backend systems that power them.
              </p>
              <p>
                From custom game servers handling <span style={{ color: 'var(--gold)' }}>40+ concurrent players</span> with{' '}
                <span style={{ color: 'var(--gold)' }}>&lt;120ms latency</span>, to production APIs serving 
                thousands of requests—I build systems that scale.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              Tech Stack
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {skills.map((group) => (
                <div key={group.category}>
                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '11px',
                    color: 'var(--tm)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {group.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {group.items.map((skill) => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '48px',
        }}>
          {[
            { icon: '🎮', title: 'Game Development', desc: 'Unity, C#, Multiplayer' },
            { icon: '⚡', title: 'Real-time Systems', desc: 'Custom Sockets, WebSocket' },
            { icon: '🔧', title: 'Backend Engineering', desc: 'NestJS, Node.js, APIs' },
            { icon: '📊', title: 'Database Design', desc: 'MongoDB, PostgreSQL, Redis' },
          ].map((item) => (
            <div key={item.title} className="card" style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '20px',
            }}>
              <span style={{ fontSize: '28px' }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--tm)' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
