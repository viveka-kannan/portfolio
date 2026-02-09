import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
  content: string;
  featured?: boolean;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
  featured?: boolean;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPostMeta[] {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        readTime: calculateReadingTime(content),
        category: data.category || 'Uncategorized',
        author: data.author || 'Viveka Kannan',
        tags: data.tags || [],
        featured: data.featured || false,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      readTime: calculateReadingTime(content),
      category: data.category || 'Uncategorized',
      author: data.author || 'Viveka Kannan',
      tags: data.tags || [],
      content,
      featured: data.featured || false,
    };
  } catch {
    return null;
  }
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.category === category);
}

export function getFeaturedPosts(): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured);
}

export function getRecentPosts(count: number = 3): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.slice(0, count);
}
