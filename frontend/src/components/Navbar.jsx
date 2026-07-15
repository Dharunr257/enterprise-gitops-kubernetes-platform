import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();
  
  // Create readable page name from path
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    
    // Capitalize and format path: /products -> Products
    const sectionName = path.substring(1);
    return sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={() => toggleSidebar(prev => !prev)}>
          {/* Hamburger Menu Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        
        <div className="breadcrumb">
          <span>Enterprise IMS</span>
          <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>/</span>
          <span className="breadcrumb-active">{getPageTitle()}</span>
        </div>
      </div>

      <div className="navbar-right">
        {/* Search Mock */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ position: 'absolute', left: '10px' }}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            placeholder="Search console..." 
            style={{ 
              padding: '6px 12px 6px 32px', 
              borderRadius: '20px', 
              border: '1px solid var(--border-color)',
              fontSize: '0.85rem',
              outline: 'none',
              width: '200px'
            }}
          />
        </div>

        <div className="user-profile">
          <div style={{ textAlign: 'right', display: 'block' }}>
            <p style={{ fontWeight: '600', fontSize: '0.875rem' }}>Dharun Admin</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Global Manager</p>
          </div>
          <div className="avatar">
            <span>DA</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
