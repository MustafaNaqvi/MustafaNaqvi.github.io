const jobs = [
  {
    company: 'KryptoHive',
    location: 'Islamabad, Pakistan',
    role: 'Game Engineer',
    period: 'Mar 2024 – Present',
    current: true,
    desc: 'Two client projects. Chain of Command — medieval multiplayer war game shipped as a full MVP. Started turn-based, rebuilt for real-time. Built the Node.js + Socket.IO server from scratch: state sync, player sessions, game loop. Found and fixed the MongoDB query bottlenecks that were crashing the server under load. Coin Crusade — play-to-earn strategy game. Built the Unity WebGL frontend embedded in React, wired up blockchain interaction via jslib bridging into Solidity contracts; moving to the browser grew the reachable player base by ~25%. Currently building a third title targeting Steam.',
  },
  {
    company: 'Mobify / The Knights Pvt Ltd.',
    location: 'Islamabad, Pakistan',
    role: 'Unity Developer',
    period: 'Jan 2022 – Dec 2023',
    desc: 'Led Kung Fu Fighting Arena and Bike Racing 3D — both hit 10M+ downloads. Cut crash rate by 20% by replacing the old loading pipeline with a custom Addressable Asset system; the memory pressure problem was gone after that. Owned the full AdMob and IAP pipeline end to end, which grew monthly revenue by 40%. Cleaned up build pipelines across the studio: release prep went from three days to one.',
  },
  {
    company: 'Afternoon Apps Inc.',
    location: 'Mississauga, ON, Canada (Remote)',
    role: 'Game Developer',
    period: 'Feb 2021 – Jan 2022',
    desc: 'Shipped Judgement Day, Lost Love, and Sword Fighter. Got Trapped Within! back on the Play Store in 2 weeks after a critical suspension — revenue was down until it was resolved. Set up Jenkins CI/CD and took the team from manual builds to daily automated ones, cutting deploy time by 30%.',
  },
  {
    company: 'COMSATS Software Solutions & Kay2Tech',
    location: 'Islamabad, Pakistan',
    role: 'Game Developer',
    period: 'Jul 2019 – Jan 2021',
    desc: 'Added Firebase Analytics across multiple titles — tracked 20+ player events, data fed into design reviews every two weeks, retention improved 15%. Managed Play Store releases across the studio. Cut build sizes by 15%; load times dropped noticeably and store ratings reflected it.',
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
