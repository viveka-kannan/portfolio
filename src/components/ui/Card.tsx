'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-dark-900/80 border border-dark-800 rounded-lg overflow-hidden',
        hover && 'transition-all duration-200 hover:border-dark-700 hover:bg-dark-900',
        onClick && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('px-4 py-3 border-b border-dark-800 bg-dark-800/50', className)}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('p-4', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('px-4 py-3 border-t border-dark-800 bg-dark-800/30', className)}>
      {children}
    </div>
  );
}

// Project Card - Git Commit Style
interface ProjectCardProps {
  title: string;
  description: string;
  client?: string;
  technologies: string[];
  impact?: string[];
  category: string;
  featured?: boolean;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  client,
  technologies,
  impact,
  category,
  featured,
  index = 0,
}: ProjectCardProps) {
  // Generate a fake commit hash
  const commitHash = Math.random().toString(16).slice(2, 9);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        {/* Git-style header */}
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-terminal-green" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <span className="commit-hash">{commitHash}</span>
            </div>
            <span className="branch-badge">{category}</span>
            {featured && (
              <span className="status-badge-warning text-xs">starred</span>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="flex-1">
          <h3 className="text-lg font-mono font-semibold text-dark-100 mb-2 flex items-center gap-2">
            <span className="text-syntax-function">{title}</span>
          </h3>
          
          {client && (
            <p className="text-xs font-mono text-dark-500 mb-3 flex items-center gap-1">
              <span className="text-dark-600">@</span>
              <span className="text-terminal-cyan">{client}</span>
            </p>
          )}
          
          <p className="text-dark-400 text-sm mb-4 leading-relaxed font-mono">
            <span className="text-dark-600">// </span>{description}
          </p>

          {impact && impact.length > 0 && (
            <div className="mb-4 pl-3 border-l-2 border-terminal-green/30">
              {impact.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-mono text-dark-400 mb-1">
                  <span className="text-terminal-green">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        
        <CardFooter>
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono rounded bg-dark-800 text-terminal-blue border border-dark-700"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-dark-800/50 text-dark-500 border border-dark-700/50">
                +{technologies.length - 5}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Blog Card - Markdown File Style
interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  index?: number;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  slug,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.a
      href={`/blog/${slug}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="block group"
    >
      <Card className="h-full">
        {/* File tab header */}
        <CardHeader className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-terminal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-mono text-sm text-dark-300 group-hover:text-terminal-green transition-colors">
              {slug}.md
            </span>
          </div>
          <span className="ml-auto text-xs font-mono text-dark-600">
            {readTime}
          </span>
        </CardHeader>
        
        <CardContent className="h-full flex flex-col">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="branch-badge text-xs">{category}</span>
          </div>
          
          {/* Title as h1 */}
          <h3 className="font-mono text-lg text-dark-100 mb-2 group-hover:text-terminal-green transition-colors">
            <span className="text-syntax-keyword"># </span>
            {title}
          </h3>
          
          {/* Excerpt as paragraph */}
          <p className="text-dark-400 text-sm mb-4 flex-1 line-clamp-3 font-mono">
            {excerpt}
          </p>
          
          {/* Footer with date */}
          <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-dark-800">
            <time className="text-dark-500 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </time>
            <span className="text-terminal-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              cat {slug}.md
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.a>
  );
}

// Skill Card - Package/Dependency Style
interface SkillCardProps {
  name: string;
  level: number;
  versions?: string;
  index?: number;
}

export function SkillCard({ name, level, versions, index = 0 }: SkillCardProps) {
  const getLevelLabel = (level: number) => {
    if (level >= 90) return { text: 'expert', color: 'text-terminal-green' };
    if (level >= 70) return { text: 'advanced', color: 'text-terminal-blue' };
    if (level >= 50) return { text: 'intermediate', color: 'text-terminal-amber' };
    return { text: 'familiar', color: 'text-dark-400' };
  };

  const levelInfo = getLevelLabel(level);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group font-mono"
    >
      <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-dark-900/50 border border-dark-800 hover:border-dark-700 transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-syntax-string">"{name}"</span>
          <span className="text-dark-600">:</span>
          {versions && (
            <span className="text-syntax-number">"^{versions}"</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-xs ${levelInfo.color}`}>
            // {levelInfo.text}
          </span>
          <div className="w-16 h-1 bg-dark-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-terminal-green rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
