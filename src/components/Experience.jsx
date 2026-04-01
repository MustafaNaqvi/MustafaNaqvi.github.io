const experiences = [
  {
    period: '2024 — Present',
    company: 'KryptoHive (K-Hive)',
    role: 'Game Engineer — Multiplayer & Backend',
    description: 'Leading development of multiplayer game systems and backend architecture. Building real-time game servers and production APIs.',
    highlights: ['Multiplayer Systems', 'NestJS Backend', 'Real-time Sync'],
    current: true,
  },
  {
    period: '2022 — 2023',
    company: 'Mobify / The Knights',
    role: 'Unity Developer',
    description: 'Shipped mobile titles with combined downloads in millions. Implemented Addressables reducing crashes by 20%. Increased engagement by 15%.',
    highlights: ['Crash Reduction', 'Unity Addressables', 'Mobile Optimization'],
  },
  {
    period: '2021 — 2022',
    company: 'Afternoon Apps Inc.',
    role: 'Unity Developer — Remote',
    description: 'Remote collaboration with Canadian team. Shipped 5 published iOS titles on App Store. Agile development workflow.',
    highlights: ['Remote Team', '5 iOS Titles', 'Agile'],
  },
  {
    period: '2020 — 2021',
    company: 'COMSATS Software Solutions',
    role: 'Game Developer',
    description: 'Integrated Firebase Analytics and Crashlytics. Developed data-driven approach to game improvements.',
    highlights: ['Firebase', 'Analytics', 'Crashlytics'],
  },
  {
    period: '2019 — 2020',
    company: 'Kay2Tech',
    role: 'Mobile Game Developer',
    description: 'First professional role. Built foundation in Unity, C#, and mobile game development fundamentals.',
    highlights: ['Unity', 'C#', 'Mobile Dev'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="code-comment">// work_experience</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 600,
            color: '#fff',
            marginTop: '12px',
          }}>
            <span style={{ color: 'var(--gold)' }}>6+ Years</span> of Building
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '16px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'var(--b2)',
          }} />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              style={{
                position: 'relative',
                paddingLeft: '48px',
                paddingBottom: index === experiences.length - 1 ? 0 : '32px',
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '8px',
                top: '8px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: exp.current ? 'var(--green)' : 'var(--p2)',
                border: `2px solid ${exp.current ? 'var(--green)' : 'var(--b2)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {exp.current && (
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#1e1e1e',
                  }} />
                )}
              </div>

              {/* Content */}
              <div className="card" style={{ padding: '20px' }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '8px',
                }}>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '12px',
                    color: exp.current ? 'var(--green)' : 'var(--tm)',
                  }}>
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span style={{
                      fontSize: '10px',
                      fontFamily: 'var(--mono)',
                      padding: '2px 8px',
                      background: 'rgba(106,153,85,0.15)',
                      color: 'var(--green)',
                      borderRadius: '4px',
                      border: '1px solid var(--green)',
                    }}>
                      Current
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>
                  {exp.company}
                </h3>
                <p style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '13px',
                  color: 'var(--green-bright)',
                  marginBottom: '12px',
                }}>
                  {exp.role}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--td)', lineHeight: 1.7, marginBottom: '12px' }}>
                  {exp.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.highlights.map((h) => (
                    <span key={h} className="tag" style={{ fontSize: '11px' }}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{
          maxWidth: '700px',
          margin: '48px auto 0',
          padding: '24px',
          background: 'var(--p)',
          border: '1px solid var(--b2)',
          borderRadius: '8px',
        }}>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            color: 'var(--tm)',
            marginBottom: '8px',
          }}>
            // education
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '24px' }}>🎓</span>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>
                BSc Computer Science
              </div>
              <div style={{ fontSize: '14px', color: 'var(--td)' }}>
                COMSATS University, Islamabad · 2015–2019
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
