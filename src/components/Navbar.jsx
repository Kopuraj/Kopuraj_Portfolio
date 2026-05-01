import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', padding: '1.2rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      zIndex: 1000, background: 'rgba(10, 10, 15, 0.8)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-color)',
    }}>
      <Link to="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 600 }} className="gradient-text">
        &lt;Kopuraj /&gt;
      </Link>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="desktop-nav">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} style={{
              color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.2s',
              borderBottom: location.pathname === link.path ? '2px solid var(--accent-cyan)' : 'none',
              paddingBottom: '4px'
            }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="mobile-menu-btn" style={{ background: 'none', border: 'none', color: 'white', display: 'none' }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; cursor: pointer; }
        }
      `}</style>
    </nav>
  );
}
