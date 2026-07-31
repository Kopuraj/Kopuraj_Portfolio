import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseCategoriesData } from '../data/coursesData';
import { ArrowLeft, ExternalLink, X, ZoomIn, Calendar, Award } from 'lucide-react';

export default function CourseDetail() {
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // Find category data
  const currentCategory = courseCategoriesData.find(
    cat => cat.slug.toLowerCase() === category?.toLowerCase()
  ) || courseCategoriesData[0];

  return (
    <section className="section-container animate-fade-in">
      {/* Top Navigation Row */}
      <div className="detail-top-nav">
        <Link to="/courses" className="back-link">
          <ArrowLeft size={18} /> Back to Courses
        </Link>

        {/* Category Switcher Pills */}
        <div className="category-pills">
          {courseCategoriesData.map(cat => (
            <Link
              key={cat.slug}
              to={`/courses/${cat.slug}`}
              className={`pill-btn ${cat.slug === currentCategory.slug ? 'active' : ''}`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Category Header */}
      <div className="section-header detail-header">
        <span className="section-tag">{currentCategory.title} Domain</span>
        <h2 className="section-title">
          {currentCategory.title} <span className="gradient-text">Certificates</span>
        </h2>
        <p className="section-desc">{currentCategory.subtitle}</p>
      </div>

      {/* Certificate List in Order */}
      <div className="certificates-list">
        {currentCategory.certificates.map((cert, index) => (
          <div key={cert.id} className="certificate-card-v2">
            <div className="cert-number-badge">0{index + 1}</div>

            {/* Certificate Preview Image */}
            <div className="cert-image-container" onClick={() => setSelectedImage(cert.image)}>
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="cert-preview-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="cert-img-fallback" style={{ display: 'none' }}>
                <Award size={48} className="cyan-text" />
                <span>{cert.title}</span>
              </div>
              <div className="cert-hover-overlay">
                <ZoomIn size={24} />
                <span>Click to View Full Certificate</span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="cert-details">
              <div className="cert-meta-row">
                <span className="cert-issuer">
                  <Award size={16} /> {cert.issuer}
                </span>
                <span className="cert-date">
                  <Calendar size={16} /> {cert.date}
                </span>
              </div>

              <h3 className="cert-title-v2">{cert.title}</h3>
              <p className="cert-desc">{cert.description}</p>

              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedImage(cert.image)}
              >
                <ZoomIn size={16} /> Expand Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Image Lightbox Modal */}
      {selectedImage && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Full Certificate View" className="modal-full-img" />
          </div>
        </div>
      )}
    </section>
  );
}
