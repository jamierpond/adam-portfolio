'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { BlogPost } from '@/app/lib/blog';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="p-6">
          <h2 className={`${playfair.className} text-xl font-bold mb-2 text-brand-charcoal hover:text-brand-accent transition-colors`}>
            {post.title}
          </h2>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
            {post.date && (
              <span className="mr-4">
                {post.date}
              </span>
            )}
            {post.author && (
              <span>
                By {post.author}
              </span>
            )}
          </div>
          
          <p className="text-gray-600 mb-4">
            {post.excerpt}
          </p>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="mt-4 text-brand-accent font-medium">
            Read more →
          </div>
        </div>
      </Link>
    </motion.article>
  );
}