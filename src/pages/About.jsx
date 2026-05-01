export default function About() {
  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'C/C++', 'C#', 'JavaScript', 'Dart'], icon: 'fa-code' },
    { category: 'Web & Mobile', items: ['React.js', 'Spring Boot', 'HTML/CSS', 'Flutter', 'REST APIs'], icon: 'fa-laptop-code' },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'], icon: 'fa-database' },
    { category: 'DevOps & Tools', items: ['Git/GitHub', 'Docker', 'AWS', 'CI/CD', 'Jira'], icon: 'fa-server' }
  ];

  return (
    <section className="section-container animate-fade-in">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Who I <span className="gradient-text">Am</span></h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
        <div className="card" style={{ padding: 0, display: 'flex', overflow: 'hidden', minHeight: '300px' }}>
          <img src="/images/personal/Profile.jpeg" alt="Kopuraj Thiruchelvam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Engineering the Future, One Line at a Time</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
            I'm a third-year Computer Engineering undergraduate at the <strong>University of Ruhuna</strong>, with a strong foundation in full-stack and mobile application development, DevOps practices, and core computer science principles.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
            I practice Agile methodologies and thrive in team environments, having served as Scrum Master for academic projects. I'm actively seeking a 6-month Software Developer Internship.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[{ n: '6+', l: 'Projects' }, { n: '3rd', l: 'Year Student' }, { n: '10+', l: 'Technologies' }].map((stat, i) => (
              <div key={i} className="card" style={{ padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="gradient-text">{stat.n}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-header">
        <span className="section-tag">Technical Arsenal</span>
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {skills.map((skill, i) => (
          <div key={i} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <i className={`fas ${skill.icon}`} style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)' }}></i>
              <h3 style={{ fontSize: '1.1rem' }}>{skill.category}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skill.items.map((item, j) => (
                <span key={j} style={{
                  padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)', borderRadius: '20px',
                  fontSize: '0.8rem', color: 'var(--text-secondary)'
                }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
