'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader } from '@/components/sections/Section';
import { BlogCard } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

// Blog posts data (in a real app, this would come from the MDX files)
const blogPosts = [
  {
    slug: 'building-scalable-angular-enterprise-applications',
    title: 'Building Scalable Angular Enterprise Applications',
    excerpt:
      'Lessons learned from architecting Angular applications that serve millions of users. Exploring module structure, state management with NgRx, and performance optimization strategies that I applied at SiriusXM.',
    date: 'February 5, 2026',
    readTime: '8 min read',
    category: 'Frontend Architecture',
    featured: true,
  },
  {
    slug: 'microservices-spring-boot-practical-guide',
    title: 'Microservices with Spring Boot: A Practical Guide',
    excerpt:
      'A comprehensive walkthrough of designing and implementing microservices using Spring Boot, covering service discovery, API gateways, event-driven communication with Kafka, and deployment strategies.',
    date: 'January 28, 2026',
    readTime: '12 min read',
    category: 'System Design',
    featured: true,
  },
  {
    slug: 'performance-optimization-api-response-times',
    title: 'Performance Optimization: From 2s to 200ms',
    excerpt:
      'How I improved API response times by 90% through strategic query optimization, caching strategies, and efficient data modeling in a high-traffic enterprise system serving millions of requests.',
    date: 'January 15, 2026',
    readTime: '10 min read',
    category: 'Performance',
    featured: true,
  },
  {
    slug: 'react-vs-angular-enterprise-perspective',
    title: 'React vs Angular: An Enterprise Perspective',
    excerpt:
      'After years of working with both React and Angular in enterprise environments, here are my thoughts on when to choose each framework based on team size, project complexity, and long-term maintenance.',
    date: 'January 5, 2026',
    readTime: '7 min read',
    category: 'Frontend Architecture',
    featured: false,
  },
  {
    slug: 'clean-code-practices-that-matter',
    title: 'Clean Code Practices That Actually Matter',
    excerpt:
      'Beyond the basics: practical clean code principles that I\'ve found make a real difference in enterprise codebases. Focus on readability, testability, and maintainability.',
    date: 'December 20, 2025',
    readTime: '6 min read',
    category: 'Engineering Practices',
    featured: false,
  },
  {
    slug: 'technical-interviews-senior-perspective',
    title: 'Technical Interviews: A Senior Developer\'s Perspective',
    excerpt:
      'Insights from both sides of the interview table. What I look for when evaluating candidates and how to demonstrate senior-level thinking beyond just coding ability.',
    date: 'December 10, 2025',
    readTime: '9 min read',
    category: 'Career Insights',
    featured: false,
  },
];

const categories = [
  'All',
  'Frontend Architecture',
  'System Design',
  'Performance',
  'Engineering Practices',
  'Career Insights',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Section className="pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Engineering <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Thoughts on frontend architecture, system design, performance optimization, and
            lessons learned from building enterprise applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                selectedCategory === category
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-dark-800 text-dark-400 hover:bg-dark-700'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              slug={post.slug}
              index={index}
            />
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-dark-500 dark:text-dark-400">
              No posts found in this category yet. Check back soon!
            </p>
          </motion.div>
        )}
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-dark-900/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-dark-600 dark:text-dark-400 mb-6">
            Get notified when I publish new articles on engineering best practices,
            architecture patterns, and career insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button className="px-6 py-3 rounded-xl bg-accent-500 text-white font-medium hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-dark-500 dark:text-dark-500 mt-3">
            No spam, unsubscribe anytime.
          </p>
        </motion.div>
      </Section>
    </>
  );
}
