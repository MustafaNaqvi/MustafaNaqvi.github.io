export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}>
          {/* Photo + Intro */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
            <img 
              src="/photo.jpg" 
              alt="Mustafa Naqvi"
              className="photo"
              style={{
                width: '140px',
                height: '140px',
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '20px',
                marginBottom: '20px',
              }}>
                <span className="status-dot" />
                <span style={{ fontSize: '13px', color: '#22c55e' }}>Available for work</span>
              </div>
              
              <h1 style={{
                fontSize: 'clamp(32px, 6vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '12px',
              }}>
                Mustafa Naqvi
              </h1>
              
              <p style={{
                fontSize: '20px',
                color: 'var(--text-secondary)',
              }}>
                Game Developer & Full Stack Engineer
              </p>
            </div>
          </div>
          
          {/* The pitch */}
          <div style={{ maxWidth: '640px' }}>
            <p style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginBottom: '32px',
            }}>
              I ship games. <span style={{ color: 'var(--accent)', fontWeight: 600 }}>20+ titles</span> in 
              6 years - mobile, PC, casual, strategy. When a project needs backend, I build it. 
              When it needs blockchain, I write the solidity contracts. I don't wait for other people 
              to unblock me.
            </p>
            
            {/* Key stats */}
            <div style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '40px',
              flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--accent)' }}>20+</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>shipped games</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text)' }}>100M+</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>combined downloads</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text)' }}>6+</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>years building</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#work" className="btn btn-primary">
                See my work
              </a>
              <a 
                href="https://drive.google.com/file/d/126JK5nhnlid-hDIT9NL61c0U4jNtD1fm/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
