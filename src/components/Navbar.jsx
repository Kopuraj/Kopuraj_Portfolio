import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Smooth hover handlers with delay buffer
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // 200ms grace period so dropdown doesn't disappear when moving cursor
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isExperienceActive = location.pathname.startsWith('/experience') || location.pathname.startsWith('/courses');

  return (
    <nav className="navbar-container">
      <Link to="/" className="nav-logo gradient-text">
        &lt;Kopuraj /&gt;
      </Link>

      {/* Desktop Navigation */}
      <ul className="desktop-nav">
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}>
            Projects
          </Link>
        </li>

        {/* Experience Dropdown Menu */}
        <li 
          className="nav-dropdown-wrapper"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className={`nav-link nav-dropdown-trigger ${isExperienceActive ? 'active' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            Experience
            <ChevronDown className={`dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`} size={16} />
          </button>

          {dropdownOpen && (
            <div 
              className="nav-dropdown-menu animate-fade-in"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/courses" className="dropdown-item">
                <div className="dropdown-icon-box cyan">
                  <Award size={18} />
                </div>
                <div className="dropdown-text">
                  <span className="dropdown-title">Courses &amp; Certifications</span>
                  <span className="dropdown-sub">Cybersecurity, Networking &amp; Personal Dev</span>
                </div>
              </Link>

              <Link to="/experience" className="dropdown-item">
                <div className="dropdown-icon-box purple">
                  <Briefcase size={18} />
                </div>
                <div className="dropdown-text">
                  <span className="dropdown-title">Leadership &amp; Journey</span>
                  <span className="dropdown-sub">Student roles, timeline &amp; achievements</span>
                </div>
              </Link>
            </div>
          )}
        </li>

        <li>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer animate-fade-in">
          <Link to="/" className="mobile-link">Home</Link>
          <Link to="/about" className="mobile-link">About</Link>
          <Link to="/projects" className="mobile-link">Projects</Link>
          
          <div className="mobile-dropdown-section">
            <span className="mobile-section-label">Experience</span>
            <Link to="/courses" className="mobile-sublink">
              <Award size={16} /> Courses &amp; Certifications
            </Link>
            <Link to="/experience" className="mobile-sublink">
              <Briefcase size={16} /> Leadership &amp; Journey
            </Link>
          </div>

          <Link to="/contact" className="mobile-link">Contact</Link>
        </div>
      )}
    </nav>
  );
}
