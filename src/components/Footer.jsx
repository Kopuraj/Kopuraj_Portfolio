export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '3rem 2rem',
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-muted)', fontSize: '0.9rem',
      marginTop: '4rem'
    }}>
      <p>
        <i className="fas fa-code"></i> with <i className="fas fa-heart" style={{ color: 'var(--accent-purple)' }}></i> by Kopuraj Thiruchelvam<br/>
        <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', display: 'block' }}>
          Built with React & Vite
        </span>
      </p>
    </footer>
  );
}
