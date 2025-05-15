import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  tags?: string[];
}

// Blog metadata - this would normally be extracted from frontmatter
// but for simplicity we'll hardcode it for now
const blogMetadata: Record<string, Omit<BlogPost, 'slug'>> = {
  'top-10-things-i-learned-studying-david-ogilvy': {
    title: 'The Top 10 Things I Learned Studying David Ogilvy',
    date: 'May 14, 2023',
    excerpt: 'David Ogilvy, often called "The Father of Advertising," revolutionized the industry with his data-driven approach and timeless wisdom.',
    author: 'Adam Pond',
    tags: ['Advertising', 'Marketing', 'Copywriting', 'Strategy'],
  },
  // You can add more blog posts here as they are created
};

/**
 * Get all blog posts
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const blogDir = path.join(process.cwd(), 'app', 'blog');
    
    // Read directories in the blog folder
    const directories = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => 
        dirent.isDirectory() && 
        dirent.name !== 'node_modules' && 
        !dirent.name.startsWith('.') &&
        fs.existsSync(path.join(blogDir, dirent.name, 'page.tsx'))
      )
      .map(dirent => dirent.name);
      
    // Get blog metadata
    const posts = directories.map(slug => {
      // Use predefined metadata, or create default metadata
      const metadata = blogMetadata[slug] || {
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        excerpt: `This is a summary of the ${slug} blog post.`,
      };
      
      return {
        slug,
        ...metadata,
      };
    });
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}