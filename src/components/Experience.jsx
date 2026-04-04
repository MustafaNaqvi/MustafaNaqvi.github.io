const jobs = [
  {
    company: 'KryptoHive',
    location: 'Islamabad, Pakistan',
    role: 'Game Engineer',
    period: '2024 - Present',
    current: true,
    desc: 'Building strategy games with real-time and turn-based mechanics. Full stack work including Unity game development and Node.js backend services.',
  },
  {
    company: 'Mobify / The Knights Pvt Ltd.',
    location: 'Islamabad, Pakistan',
    role: 'Unity Developer',
    period: '2023 - 2024',
    desc: 'Shipped multiple mobile games including Kung Fu Fighting Arena (10M+ downloads) and Bike Racing 3D (10M+ downloads). Combat systems, racing mechanics, mobile optimization.',
  },
  {
    company: 'Afternoon Apps',
    location: 'Mississauga, ON, Canada (Remote)',
    role: 'Game Developer',
    period: '2021 - 2023',
    desc: 'Shipped three titles (Judgement Day, Lost Love, Sword Fighter). Set up Jenkins CI/CD pipelines cutting build time by 30%. Resolved critical Play Store suspension within 2 weeks.',
  },
  {
    company: 'COMSATS Software Solutions',
    location: 'Islamabad, Pakistan',
    role: 'Game Developer',
    period: '2020 - 2021',
    desc: 'Firebase Analytics integration, Facebook SDK for social features, and managed Google Play Console releases across multiple titles.',
  },
  {
    company: 'Kay2Tech',
    location: 'Islamabad, Pakistan',
    role: 'Unity Developer',
    period: '2018 - 2020',
    desc: 'My first professional game development role. Worked on various mobile game projects.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-warm)' }}>
      <div className="container">
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 36px)',
          fontWeight: 600,
          marginBottom: '48px',
        }}>
          Experience
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {jobs.map((job, i) => (
            <div 
              key={job.company}
              className="experience-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(140px, 180px) 1fr',
                gap: '32px',
                padding: '32px 0',
                borderTop: i === 0 ? 'none' : '1px solid var(--border)',
              }}
            >
              <div>
                <span style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--mono)',
                }}>
                  {job.period}
                </span>
                {job.current && (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginLeft: '8px',
                    padding: '3px 8px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    borderRadius: '4px',
                    fontSize: '11px',
                    color: '#22c55e',
                    fontWeight: 500,
                  }}>
                    Now
                  </span>
                )}
              </div>
              
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                  {job.role}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--accent)', 
                  marginBottom: '4px',
                }}>
                  {job.company}
                </p>
                <p style={{ 
                  fontSize: '13px', 
                  color: 'var(--text-muted)', 
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}>
                  {job.location.replace(' (Remote)', '')}
                  {job.location.includes('Remote') && (
                    <span style={{
                      padding: '2px 8px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#3b82f6',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 500,
                    }}>
                      Remote
                    </span>
                  )}
                </p>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {job.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ 
          marginTop: '48px', 
          paddingTop: '48px', 
          borderTop: '1px solid var(--border)',
        }}>
          <h3 style={{ 
            fontSize: '14px', 
            fontWeight: 500, 
            color: 'var(--text-muted)', 
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Education
          </h3>
          <div className="experience-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(140px, 180px) 1fr',
            gap: '32px',
          }}>
            <span style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--mono)',
            }}>
              2015 - 2019
            </span>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
                BSc Computer Science
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--accent)' }}>
                COMSATS University, Islamabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
