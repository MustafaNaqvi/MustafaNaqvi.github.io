export default function Footer() {
  return (
    <footer style={{
      padding: '40px 0',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()}
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://github.com/MustafaNaqvi" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>GitHub</a>
          <a href="https://linkedin.com/in/mustafa-naqvi" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>LinkedIn</a>
          <a href="mailto:mustafa-naqvi@outlook.com" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Email</a>
        </div>
      </div>
    </footer>
  )
}
