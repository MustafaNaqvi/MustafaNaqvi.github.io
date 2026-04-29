export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <h2 className="section-title">About</h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '48px',
          }}>
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}>
              Been playing games my whole life. First time I built one in 
              university, it made more sense to me than anything else in CS. 
              Never looked back.
            </p>
            
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}>
              The thing that changed how I think about game dev was multiplayer.
              Single-player, you can fake a lot of things right up until launch.
              Multiplayer exposes every bad assumption immediately — wrong authority
              model, sloppy state sync, one slow query when a match resolves.
              Building the server for Chain of Command from scratch — game loop,
              state sync, player sessions — is where that clicked for me.
            </p>
            
            <p style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}>
              Code reviews are like boss fights to me. I actually look forward to 
              them. There's something satisfying about digging into someone's 
              architecture decisions, finding the weak spots, suggesting better 
              patterns. Nothing annoys me more than seeing a 2000-line GameManager 
              class or a codebase where everything talks to everything else.
            </p>
          </div>
          
          {/* Skills */}
          <div style={{ marginTop: '8px' }}>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              What I work with:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Unity', 'C#', 'TypeScript', 'Node.js', 'React', 'NestJS', 'MongoDB', 'PostgreSQL', 'Socket.IO', 'Solidity', 'Web3', 'AWS'].map(skill => (
                <span key={skill} style={{
                  padding: '6px 14px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
