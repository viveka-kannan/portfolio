'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section, SectionHeader } from '@/components/sections/Section';
import { ProjectCard } from '@/components/ui/Card';
import { projects } from '@/lib/constants';
import { cn } from '@/lib/utils';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'DevOps'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            A selection of impactful projects showcasing enterprise-grade development, 
            from microservices architecture to scalable frontend solutions.
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

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-dark-500 dark:text-dark-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </Section>

      {/* Approach Section */}
      <Section className="bg-dark-900/50">
        <SectionHeader
          badge="Philosophy"
          title="My Approach"
          subtitle="How I think about building software that lasts."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Quality First',
              description:
                'I write code that\'s meant to be read by humans. Clean architecture, comprehensive tests, and thorough documentation are non-negotiable.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Performance Minded',
              description:
                'Every millisecond counts. I optimize for real-world performance through profiling, caching, and efficient algorithms.',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              ),
              title: 'Scalable Design',
              description:
                'I architect solutions that grow with the business. Modular components, microservices, and infrastructure as code.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent-500/10 text-accent-500 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Technologies Section */}
      <Section>
        <SectionHeader
          badge="Tech Stack"
          title="Technologies I Work With"
          subtitle="The tools and frameworks I use to build modern applications."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {[
            { name: 'Java', color: 'bg-orange-500' },
            { name: 'Spring Boot', color: 'bg-green-500' },
            { name: 'Angular', color: 'bg-red-500' },
            { name: 'React', color: 'bg-sky-500' },
            { name: 'TypeScript', color: 'bg-blue-500' },
            { name: 'Node.js', color: 'bg-green-600' },
            { name: 'Docker', color: 'bg-blue-600' },
            { name: 'Kubernetes', color: 'bg-blue-500' },
            { name: 'AWS', color: 'bg-amber-500' },
            { name: 'Kafka', color: 'bg-dark-700' },
            { name: 'PostgreSQL', color: 'bg-blue-700' },
            { name: 'MongoDB', color: 'bg-green-700' },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-dark-900 border border-dark-800 hover:border-accent-500/50 transition-colors"
            >
              <span className={cn('w-2 h-2 rounded-full', tech.color)} />
              <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-dark-900/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-xl mx-auto mb-8">
            I'm always open to discussing new projects, challenges, and opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="btn-primary"
            >
              Get in Touch
            </a>
            <a
              href="/resume"
              className="btn-secondary"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
