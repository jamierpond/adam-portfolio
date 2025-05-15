'use client';

import React from 'react';

interface FooterProps {
  name?: string;
}

export default function Footer({ name = 'ADAM LEIGH POND' }: FooterProps) {
  return (
    <footer className="text-center py-10 md:py-16 bg-brand-offwhite border-t border-brand-lightgray">
      <p className="text-sm text-gray-700">
        &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
      </p>
      <p className="text-xs text-gray-600 mt-2">
        Designed & Developed with a touch of minimalism.
      </p>
    </footer>
  );
}