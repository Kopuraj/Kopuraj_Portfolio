import React from 'react';
import { Link } from 'react-router-dom';
import { courseCategoriesData } from '../data/coursesData';
import { ArrowRight, ShieldCheck, Network, GraduationCap } from 'lucide-react';

export default function CourseCategories() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'fa-shield-alt':
        return <ShieldCheck size={32} className="cat-icon cyan-text" />;
      case 'fa-network-wired':
        return <Network size={32} className="cat-icon purple-text" />;
      default:
        return <GraduationCap size={32} className="cat-icon blue-text" />;
    }
  };

  return (
    <section className="section-container animate-fade-in">
      <div className="section-header">
        <span className="section-tag">Certifications</span>
        <h2 className="section-title">
          Course <span className="gradient-text">Certificates</span>
        </h2>
        <p className="section-desc">
          Explore specialized certifications in Cybersecurity, Networking, and Personal Development. Select a domain below to inspect verified course details and certificate credentials.
        </p>
      </div>

      <div className="course-categories-grid">
        {courseCategoriesData.map((cat) => (
          <Link 
            key={cat.slug} 
            to={`/courses/${cat.slug}`}
            className="category-card-v2"
          >
            <div className="card-top-row">
              <div className={`category-icon-box ${cat.slug}`}>
                {getIcon(cat.icon)}
              </div>
              <span className="badge-pill">{cat.badge}</span>
            </div>

            <h3 className="category-title-v2">{cat.title}</h3>
            <p className="category-subtitle-v2">{cat.subtitle}</p>

            <div className="category-tags">
              {cat.tags.map((tag, idx) => (
                <span key={idx} className="tag-pill">{tag}</span>
              ))}
            </div>

            <div className="category-card-footer">
              <span className="footer-link-text">View Certificates</span>
              <ArrowRight size={18} className="arrow-icon" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
