import React, { ReactNode } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

interface BlogProps {
  title: string;
  author?: string;
  content: ReactNode;
  lastUpdated?: string;
  tags?: string[];
}

export default function Blog({ title, author, content, lastUpdated, tags }: BlogProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-24 lg:p-24">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className={`text-4xl font-bold mb-4 ${playfair.className}`}>{title}</h1>
        
        {/* Author and metadata section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-600 mb-8">
          {author && (
            <div className="mb-2 sm:mb-0">
              <span>By {author}</span>
            </div>
          )}
          {lastUpdated && (
            <div className="text-sm">
              Last updated: {lastUpdated}
            </div>
          )}
        </div>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Main content */}
        <div className="prose lg:prose-xl">
          {content}
        </div>
      </div>
    </main>
  );
}