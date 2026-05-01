import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="section-container animate-fade-in" style={{
      minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--border-color)', borderRadius: '50px',
          fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)',
          marginBottom: '2rem'
        }}>
          <span style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%' }}></span>
          Available for Internship
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }}>
          Hi, I'm <span className="gradient-text">Kopuraj</span><br/>
          Thiruchelvam
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          Aspiring Software Engineer | Computer Engineering Student
        </p>
        
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem' }}></i>
          Navithanveli, Ampara, Sri Lanka
        </p>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
          Third-year Computer Engineering undergraduate at University of Ruhuna, specializing in full-stack development, mobile applications, DevOps, and machine learning. Practicing Agile & SDLC. Seeking a 6-month Software Developer Internship.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/projects" className="btn btn-primary">
            <i className="fas fa-rocket"></i> View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <i className="fas fa-envelope"></i> Get In Touch
          </Link>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
          {[
            { icon: 'github', url: 'https://github.com/Kopuraj' },
            { icon: 'linkedin-in', url: 'https://www.linkedin.com/in/kopuraj-thiruchelvam-b73441336' }
          ].map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noreferrer" style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: 'var(--bg-card)', border: '1px solid var(--border-color)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)', transition: 'color 0.3s ease, border-color 0.3s ease'
            }}>
              <i className={`fab fa-${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
