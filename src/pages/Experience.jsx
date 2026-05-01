export default function Experience() {
  const experiences = [
    { date: '2025', title: 'Student Coordinator', org: 'Cyber Security & Networking Zone, REXTRO Exhibition', desc: 'Coordinating cybersecurity and networking exhibitions for the 25th Year Excellence celebration at the Faculty of Engineering.' },
    { date: 'Mar 2025 – Present', title: 'Assistant Editor', org: 'Career Guidance Student Society', desc: 'Contributing to editorial work and content creation for career guidance initiatives and student development programs.' },
    { date: 'Mar 2025', title: 'English Language Skill Development Camp', org: 'Career Guidance Unit, Faculty of Engineering', desc: 'Participated in intensive English language skill development program focused on professional communication.' },
    { date: 'Feb 2026', title: 'Leadership Camp Mentor', org: 'Career Guidance Student Society, Faculty of Engineering, University of Ruhuna', desc: 'Participated as a mentor in a 2-day leadership camp to assist instructors in guiding and leading participants.' }
  ];

  const achievements = [
    { title: 'IEEE Xtreme 19.0', desc: 'Achieved global rank 1075th out of 8,793 teams in a 24-hour coding competition (Oct 2025).', icon: 'fa-trophy' },
    { title: 'Networking Workshop', desc: 'Attended 2-day Networking Fundamentals Workshop organized by IEEE Communications Society (April 2025).', icon: 'fa-network-wired' },
    { title: 'LinkedIn Learning', desc: 'Completed Critical Thinking for Better Judgment and Decision-Making course by Becki Saltzman.', icon: 'fa-certificate' }
  ];

  return (
    <section className="section-container animate-fade-in">
      <div className="section-header">
        <span className="section-tag">Journey</span>
        <h2 className="section-title">Experience & <span className="gradient-text">Leadership</span></h2>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto 5rem' }}>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, var(--accent-cyan), transparent)' }}></div>
          
          {experiences.map((exp, i) => (
            <div key={i} style={{ position: 'relative', paddingBottom: '3rem', paddingLeft: '2rem' }}>
              <div style={{
                position: 'absolute', left: '-2.45rem', top: '0.5rem', width: '14px', height: '14px',
                borderRadius: '50%', background: 'var(--bg-primary)', border: '2px solid var(--accent-cyan)'
              }}></div>
              
              <div className="card" style={{ padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{exp.date}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{exp.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.8rem' }}>{exp.org}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-header">
        <span className="section-tag">Recognition</span>
        <h2 className="section-title">Achievements & <span className="gradient-text">Awards</span></h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {achievements.map((achieve, i) => (
          <div key={i} className="card" style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem',
              fontSize: '1.5rem', color: 'var(--accent-purple)', border: '1px solid var(--border-color)'
            }}>
              <i className={`fas ${achieve.icon}`}></i>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{achieve.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{achieve.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
