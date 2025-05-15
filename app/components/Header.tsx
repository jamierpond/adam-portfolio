'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

interface NavItem {
  id: string;
  label: string;
  path: string;
}

// Get data from the portfolio data
const portfolioData = {
  shortName: 'Adam Pond', // For brevity in header
};

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [currentPath, setCurrentPath] = useState('');
  
  // Update active section based on current path
  useEffect(() => {
    // Get current path
    setCurrentPath(window.location.pathname);
    
    // Update active section based on hash if on homepage
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveSection(hash.replace('#', ''));
      } else if (window.location.pathname === '/') {
        setActiveSection('hero');
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'projects', label: 'Work', path: '/#projects' },
    { id: 'blog', label: 'Blog', path: '/blog/top-10-things-i-learned-studying-david-ogilvy' },
    { id: 'contact', label: 'Contact', path: '/#contact' },
  ];
  
  // Determine if a nav item is active based on current path and section
  const isActive = (item: NavItem) => {
    if (item.id === 'blog' && currentPath.includes('/blog')) {
      return true;
    }
    
    if (currentPath === '/' && item.path.includes('#')) {
      return activeSection === item.path.split('#')[1];
    }
    
    if (item.id === 'home' && currentPath === '/') {
      return !activeSection || activeSection === 'hero';
    }
    
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-offwhite/80 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-serifAccent font-semibold text-brand-charcoal hover:text-brand-accent transition-colors"
        >
          <span className={playfair.className}>Adam Pond</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <Link
              key={item.id}
              href={item.path}
              className={`text-sm font-medium text-brand-charcoal hover:text-brand-accent transition-colors ${
                activeSection === item.id ? 'text-brand-accent font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Basic Mobile Menu (optional, can be expanded) */}
        <div className="md:hidden">
          {/* Placeholder for a very minimal mobile menu icon if needed, or remove */}
        </div>
      </div>
    </header>
  );
}