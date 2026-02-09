'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 lg:py-24', className)}>
      <div className="container-custom">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  filePath?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  filePath,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-10 lg:mb-14',
        align === 'center' && 'text-center',
        className
      )}
    >
      {/* File path indicator */}
      {filePath && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={cn(
            'flex items-center gap-2 mb-4 font-mono text-sm',
            align === 'center' && 'justify-center'
          )}
        >
          <span className="text-dark-600">~/portfolio/</span>
          <span className="text-terminal-blue">{filePath}</span>
        </motion.div>
      )}
      
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block px-3 py-1 mb-4 text-xs font-mono rounded bg-dark-800 text-terminal-green border border-dark-700"
        >
          {badge}
        </motion.span>
      )}
      
      <h2 className="text-2xl lg:text-3xl font-mono font-bold text-dark-100 mb-3">
        <span className="text-syntax-keyword"># </span>
        {title}
      </h2>
      
      {subtitle && (
        <p
          className={cn(
            'text-dark-400 font-mono text-sm max-w-2xl',
            align === 'center' && 'mx-auto'
          )}
        >
          <span className="text-dark-600">// </span>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// Featured Skills Section - Package.json Style
interface SkillsSectionProps {
  showAll?: boolean;
}

export function SkillsSection({ showAll = false }: SkillsSectionProps) {
  const skillCategories = [
    {
      title: 'frontend',
      description: 'UI & client-side',
      skills: ['Angular (v2-v17)', 'React', 'TypeScript', 'RxJS', 'NgRx'],
    },
    {
      title: 'backend',
      description: 'Server & APIs',
      skills: ['Java 11+', 'Spring Boot', 'Node.js', 'REST/SOAP APIs', 'JPA/Hibernate'],
    },
    {
      title: 'cloud',
      description: 'Infrastructure & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Apache Kafka', 'Jenkins CI/CD'],
    },
    {
      title: 'databases',
      description: 'Data storage',
      skills: ['SQL Server', 'MySQL', 'Oracle', 'MongoDB'],
    },
  ];

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-terminal-red"></span>
          <span className="w-3 h-3 rounded-full bg-terminal-amber"></span>
          <span className="w-3 h-3 rounded-full bg-terminal-green"></span>
        </div>
        <span className="ml-4 text-xs font-mono text-dark-500">skills.json</span>
      </div>
      
      <div className="terminal-body font-mono text-sm">
        <div className="text-dark-400">{'{'}</div>
        <div className="pl-4">
          <span className="text-syntax-string">"dependencies"</span>
          <span className="text-dark-400">: {'{'}</span>
        </div>
        
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="pl-8 py-2"
          >
            <div className="mb-1">
              <span className="text-dark-600">// {category.description}</span>
            </div>
            <span className="text-syntax-string">"{category.title}"</span>
            <span className="text-dark-400">: {'{'}</span>
            <div className="pl-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill} className="flex items-center">
                  <span className="text-syntax-variable">"{skill}"</span>
                  <span className="text-dark-400">:</span>
                  <span className="text-syntax-string ml-2">"latest"</span>
                  {skillIndex < category.skills.length - 1 && <span className="text-dark-400">,</span>}
                </div>
              ))}
            </div>
            <span className="text-dark-400">{'}'}</span>
            {catIndex < skillCategories.length - 1 && <span className="text-dark-400">,</span>}
          </motion.div>
        ))}
        
        <div className="pl-4">
          <span className="text-dark-400">{'}'}</span>
        </div>
        <div className="text-dark-400">{'}'}</div>
      </div>
    </div>
  );
}

// Experience Preview Section - Git Log Style
export function ExperiencePreview() {
  const experiences = [
    {
      hash: 'a3f7e2b',
      date: 'Mar 2021 – Nov 2025',
      title: 'Senior Software Engineer',
      company: 'Netlink • SiriusXM',
      description: 'Led full-stack development of enterprise media platform using Spring Boot microservices with Angular and React.',
      stats: ['+50% API performance', '-40% code duplication'],
    },
    {
      hash: 'b1c4d8a',
      date: 'Aug 2018 – Feb 2021',
      title: 'Software Engineer',
      company: 'Cutech Solution',
      description: 'Delivered scalable web applications using Angular and Node.js. Automated deployments using Docker and CI/CD pipelines.',
      stats: ['-40% deployment time', '+25% dev efficiency'],
    },
  ];

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-terminal-red"></span>
          <span className="w-3 h-3 rounded-full bg-terminal-amber"></span>
          <span className="w-3 h-3 rounded-full bg-terminal-green"></span>
        </div>
        <span className="ml-4 text-xs font-mono text-dark-500">git log --oneline career</span>
      </div>
      
      <div className="terminal-body font-mono text-sm space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.hash}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="border-l-2 border-terminal-green/30 pl-4 py-2"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="commit-hash">{exp.hash}</span>
              <span className="text-dark-500">({exp.date})</span>
            </div>
            <div className="mb-1">
              <span className="text-terminal-cyan">{exp.title}</span>
              <span className="text-dark-500"> @ </span>
              <span className="text-dark-300">{exp.company}</span>
            </div>
            <p className="text-dark-400 text-xs mb-2">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.stats.map((stat) => (
                <span 
                  key={stat}
                  className={`text-xs ${stat.startsWith('+') ? 'text-terminal-green' : 'text-terminal-red'}`}
                >
                  {stat}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        
        <div className="text-dark-600 pt-2">
          <span className="text-terminal-green">$</span> git log --more <span className="terminal-cursor">_</span>
        </div>
      </div>
    </div>
  );
}

// Stats Section - System Metrics Style
export function StatsSection() {
  const stats = [
    { value: '7+', label: 'years_experience', color: 'terminal-green' },
    { value: '50%', label: 'api_perf_boost', color: 'terminal-cyan' },
    { value: '40%', label: 'code_reduction', color: 'terminal-amber' },
    { value: '25%', label: 'dev_time_saved', color: 'terminal-blue' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-4 rounded-lg bg-dark-900/50 border border-dark-800 hover:border-dark-700 transition-colors font-mono"
        >
          <div className={`text-3xl lg:text-4xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
          <div className="text-xs text-dark-500">${stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
