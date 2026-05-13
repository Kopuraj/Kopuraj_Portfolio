import { Link, useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import TransportAnimation from '../components/TransportAnimation';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" />;
  }

  return (
    <section className="section-container animate-fade-in">
      <Link to="/projects" className="btn btn-secondary" style={{ marginBottom: '2rem' }}>
        <i className="fas fa-arrow-left" style={{ marginRight: '0.5rem' }}></i> Back to Projects
      </Link>

      <div className="section-header">
        <span className="section-tag">Project Details</span>
        <h1 className="section-title">{project.title}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{
              padding: '0.3rem 0.8rem', background: 'rgba(168, 85, 247, 0.1)',
              borderRadius: '50px', fontSize: '0.85rem', color: 'var(--accent-purple)'
            }}>{t}</span>
          ))}
        </div>
      </div>

      {project.coverImage && (
        <div style={{
          width: '100%', borderRadius: '12px', overflow: 'hidden',
          marginBottom: '3rem', border: '1px solid var(--border-color)',
          background: project.imageFit === 'contain' ? 'var(--bg-secondary)' : 'transparent',
          textAlign: 'center',
          maxHeight: '600px', overflowY: 'auto'
        }}>
          <img src={project.coverImage} alt={`${project.title} Cover`} style={{ width: '100%', display: 'block', margin: '0 auto' }} />
        </div>
      )}

      {project.video && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            <i className="fas fa-play-circle" style={{ marginRight: '0.5rem', color: 'var(--accent-cyan)' }}></i>
            {project.videoTitle || 'Demo Video'}
          </h2>
          <div style={{ 
            width: '100%', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            border: '2px solid rgba(168, 85, 247, 0.4)',
            boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)',
            background: '#000',
            position: 'relative'
          }}>
            <video 
              src={project.video} 
              controls 
              autoPlay 
              muted 
              loop 
              style={{ width: '100%', display: 'block', maxHeight: '600px', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

      {project.id === 'public-transport-tracking' && <TransportAnimation />}

      {project.storyBlocks && project.storyBlocks.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '4rem' }}>
          {project.storyBlocks.map((block, i) => (
            <div key={i} className="card" style={{ padding: '2rem' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', marginBottom: '2rem', maxHeight: '600px', overflowY: 'auto' }}>
                <img src={block.image} alt={block.title} style={{ width: '100%', display: 'block' }} />
              </div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>{block.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                {block.text}
              </p>
            </div>
          ))}
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                <i className="fas fa-external-link-alt" style={{ marginRight: '0.5rem' }}></i> Live Demo
              </a>
            )}
            {project.codeLink && (
              <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <i className="fab fa-github" style={{ marginRight: '0.5rem' }}></i> Source Code
              </a>
            )}
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Overview</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              {project.overview || project.shortDesc}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <i className="fas fa-external-link-alt" style={{ marginRight: '0.5rem' }}></i> Live Demo
                </a>
              )}
              {project.codeLink && (
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <i className="fab fa-github" style={{ marginRight: '0.5rem' }}></i> Source Code
                </a>
              )}
            </div>
          </div>

          {project.features && (
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Key Features</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {project.features.map((feature, i) => (
                  <div key={i} className="card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {!project.storyBlocks && project.images && project.images.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {project.images.map((img, i) => (
              <div key={i} className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', maxHeight: '400px', overflowY: 'auto' }}>
                  <img src={img.src} alt={img.caption} style={{ width: '100%', display: 'block' }} />
                </div>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
