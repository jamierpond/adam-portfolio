import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { getAllBlogPosts } from '@/app/lib/blog';
import BlogCard from '@/app/components/BlogCard';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function BlogIndex() {
  const posts = getAllBlogPosts();
  
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${playfair.className}`}>Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights on advertising, creative copywriting, and brand strategy
          </p>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No blog posts found.</p>
          </div>
        )}
      </div>
    </main>
  );
}