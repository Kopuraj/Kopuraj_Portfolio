import { Link } from 'react-router-dom';
import React from 'react';

const CourseCategoryCard = ({ title, slug, icon }) => (
  <Link to={`/courses/${slug}`} className="category-card">
    <div className="category-card-inner">
      <div className="icon-wrapper">
        <i className={`fas ${icon}`} />
      </div>
      <h3 className="category-title">{title}</h3>
    </div>
  </Link>
);

export default CourseCategoryCard;
