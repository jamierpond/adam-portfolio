'use client';

import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        
        {/* Site title / logo */}
        <Link
          href="/"
          className={`text-2xl md:text-3xl font-bold ${playfair.className} text-[#5C3A21] hover:text-[#422710] transition-colors`}
        >
          Adam Leigh Pond
        </Link>

        {/* Optional nav links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#5C3A21]">
          <Link href="/#about" className="hover:text-[#422710] transition-colors">
            About
          </Link>
          <Link href="/#projects" className="hover:text-[#422710] transition-colors">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-[#422710] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Optional hamburger menu */}
        </div>

      </div>
    </header>
  );
}
