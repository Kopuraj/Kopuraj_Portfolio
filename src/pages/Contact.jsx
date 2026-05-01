export default function Contact() {
  return (
    <section className="section-container animate-fade-in" style={{ textAlign: 'center' }}>
      <div className="section-header">
        <span className="section-tag">Connect</span>
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>Let's collaborate on something amazing. I'm open to internship opportunities and exciting projects.</p>
      </div>

      <div className="card" style={{ maxWidth: '700px', margin: '0 auto', padding: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          <div style={{ padding: '1.2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <i className="fas fa-envelope" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}></i>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Email</h4>
            <a href="mailto:thiruchelvamkopuraj7@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>thiruchelvamkopuraj7@gmail.com</a>
          </div>

          <div style={{ padding: '1.2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <i className="fas fa-phone" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}></i>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Phone</h4>
            <a href="tel:+94741125425" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>+94 74 112 5425</a>
          </div>

          <div style={{ padding: '1.2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <i className="fas fa-map-marker-alt" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}></i>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Location</h4>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Navithanveli, Ampara</span>
          </div>

          <div style={{ padding: '1.2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <i className="fab fa-linkedin" style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}></i>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>LinkedIn</h4>
            <a href="https://linkedin.com/in/kopuraj-thiruchelvam-b73441336" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>kopuraj-thiruchelvam</a>
          </div>

        </div>

        <a href="mailto:thiruchelvamkopuraj7@gmail.com" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          <i className="fas fa-paper-plane"></i> Send Me an Email
        </a>
      </div>
    </section>
  );
}
