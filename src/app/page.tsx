'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/sections/HeroSection';
import { Section, SectionHeader, SkillsSection, StatsSection, ExperiencePreview } from '@/components/sections/Section';
import { Button } from '@/components/ui/Button';
import { BlogCard, ProjectCard } from '@/components/ui/Card';
import { projects } from '@/lib/constants';

// Featured blog posts preview
const featuredPosts = [
  {
    title: 'Building Scalable Angular Enterprise Applications',
    excerpt: 'Lessons learned from architecting Angular applications that serve millions of users. Exploring module structure, state management with NgRx, and performance optimization strategies.',
    date: 'February 5, 2026',
    readTime: '8 min read',
    category: 'Frontend Architecture',
    slug: 'building-scalable-angular-enterprise-applications',
  },
  {
    title: 'Microservices with Spring Boot: A Practical Guide',
    excerpt: 'A comprehensive walkthrough of designing and implementing microservices using Spring Boot, covering service discovery, API gateways, and event-driven communication with Kafka.',
    date: 'January 28, 2026',
    readTime: '12 min read',
    category: 'System Design',
    slug: 'microservices-spring-boot-practical-guide',
  },
  {
    title: 'Performance Optimization: From 2s to 200ms',
    excerpt: 'How I improved API response times by 90% through strategic query optimization, caching strategies, and efficient data modeling in a high-traffic enterprise system.',
    date: 'January 15, 2026',
    readTime: '10 min read',
    category: 'Performance',
    slug: 'performance-optimization-api-response-times',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <Section className="bg-dark-900/30">
        <StatsSection />
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionHeader
          filePath="skills"
          badge="dependencies"
          title="Tech Stack"
          subtitle="7+ years of hands-on experience across the entire development stack"
        />
        <div className="max-w-4xl mx-auto">
          <SkillsSection />
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section className="bg-dark-900/30">
        <SectionHeader
          filePath="projects"
          badge="featured"
          title="Recent Work"
          subtitle="Selected projects showcasing enterprise-grade development"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                client={project.client}
                technologies={project.technologies}
                impact={project.impact}
                category={project.category}
                featured={project.featured}
                index={index}
              />
            ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href="/projects" variant="outline">
            ls ./projects --all
          </Button>
        </motion.div>
      </Section>

      {/* Experience Preview */}
      <Section>
        <SectionHeader
          filePath="career"
          badge="git log"
          title="Experience"
          subtitle="Track record of delivering impactful solutions at enterprise scale"
        />
        <div className="max-w-3xl mx-auto">
          <ExperiencePreview />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button href="/about" variant="outline">
            cat ./about/README.md
          </Button>
        </motion.div>
      </Section>

      {/* Blog Preview Section */}
      <Section className="bg-dark-900/30">
        <SectionHeader
          filePath="blog"
          badge="latest"
          title="Articles"
          subtitle="Sharing knowledge from years of building enterprise applications"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {featuredPosts.map((post, index) => (
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
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href="/blog" variant="outline">
            ls ./blog --all
          </Button>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="terminal max-w-2xl mx-auto"
        >
          <div className="terminal-header">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-terminal-red"></span>
              <span className="w-3 h-3 rounded-full bg-terminal-amber"></span>
              <span className="w-3 h-3 rounded-full bg-terminal-green"></span>
            </div>
            <span className="ml-4 text-xs font-mono text-dark-500">contact.sh</span>
          </div>
          
          <div className="terminal-body font-mono text-sm text-center py-8">
            <div className="mb-6">
              <div className="text-terminal-green mb-2">$ echo "Let's build something great"</div>
              <p className="text-dark-400 text-xs max-w-md mx-auto">
                I'm open to senior engineering roles, technical leadership opportunities,
                and interesting full-stack projects.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" variant="primary">
                ./send-message.sh
              </Button>
              <Button href="/resume" variant="outline">
                cat resume.pdf
              </Button>
            </div>
            
            <div className="mt-6 text-dark-600">
              <span className="text-terminal-green">$</span> status: <span className="text-terminal-green">available</span>
              <span className="terminal-cursor ml-1">_</span>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
