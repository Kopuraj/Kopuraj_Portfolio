import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section-container animate-fade-in">
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-desc">A selection of my recent work across web, mobile, and machine learning.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, i) => (
          <Link key={i} to={`/projects/${project.id}`} className="card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
            <div style={{
              height: '200px', background: 'var(--bg-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderBottom: '1px solid var(--border-color)', position: 'relative'
            }}>
              {project.coverImage ? (
                <img src={project.coverImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: project.imageFit || 'cover' }} />
              ) : (
                <i className={`fas ${project.icon}`} style={{ fontSize: '3.5rem', color: 'var(--accent-purple)', opacity: 0.8 }}></i>
              )}
            </div>
            
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flex: 1, marginBottom: '1.5rem' }}>{project.shortDesc}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.tech.slice(0, 4).map((t, j) => (
                  <span key={j} style={{
                    padding: '0.2rem 0.6rem', background: 'rgba(168, 85, 247, 0.1)',
                    borderRadius: '4px', fontSize: '0.75rem', color: 'var(--accent-purple)'
                  }}>{t}</span>
                ))}
                {project.tech.length > 4 && (
                  <span style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>+{project.tech.length - 4} more</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
