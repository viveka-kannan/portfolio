'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/sections/Section';
import { SkillCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { skills, experiences, education } from '@/lib/constants';

export default function AboutPage() {
  return (
    <>
      {/* Hero / Introduction */}
      <Section className="pt-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20">
              About Me
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Building Software That{' '}
              <span className="gradient-text">Scales</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              Full Stack Developer with 7+ years of experience transforming complex business
              requirements into elegant, maintainable solutions.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-16"
          >
            <div className="bg-dark-900 border border-dark-800 rounded-2xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold mb-4 text-white">My Journey</h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                My career in software development began at <strong>Anna University</strong>, where I
                earned my Bachelor's in Computer Science (2014-2018). Since then, I've had the
                privilege of working on enterprise-scale applications that serve millions of users.
              </p>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                At <strong>Cutech Solution</strong> (2018-2021), I cut my teeth on full-stack
                development, building responsive web applications with Angular and Node.js. I
                learned the importance of clean code, automated testing, and efficient deployment
                pipelines. By automating our CI/CD workflows, I helped reduce deployment time by
                40% and significantly improved release stability.
              </p>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-4">
                The move to <strong>Netlink / SiriusXM</strong> (2021-2025) opened doors to
                enterprise-grade challenges. Leading the development of full-stack applications for
                a high-traffic media platform, I architected microservices using Spring Boot,
                implemented event-driven systems with Apache Kafka, and built scalable frontend
                solutions with both Angular and React.
              </p>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                One of my proudest achievements was <strong>improving API performance by 50%</strong>{' '}
                through strategic query optimization and efficient data modeling. I also created a
                library of reusable Angular components that{' '}
                <strong>reduced development time by 25%</strong> and{' '}
                <strong>cut code duplication by 40%</strong> across the organization.
              </p>
            </div>
          </motion.div>

          {/* What I Bring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
                title: 'Technical Depth',
                description:
                  'Strong fundamentals in Java, Spring ecosystem, and modern JavaScript frameworks. I understand systems at every layer.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: 'Team Leadership',
                description:
                  'Experienced in mentoring engineers, conducting code reviews, and influencing architectural decisions. I help teams grow.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: 'Impact Focused',
                description:
                  'I measure success by business outcomes. From 50% performance gains to 40% reduction in code duplication—results matter.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-dark-900 border border-dark-800 text-center"
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
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-dark-900/50">
        <SectionHeader
          badge="Technical Skills"
          title="Technology Stack"
          subtitle="A comprehensive toolkit developed over 7+ years of enterprise development."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Frontend</h3>
            </div>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  versions={skill.versions}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Backend</h3>
            </div>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  versions={skill.versions}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Cloud & DevOps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Cloud & DevOps</h3>
            </div>
            <div className="space-y-4">
              {skills.cloud.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  versions={skill.versions}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Databases</h3>
            </div>
            <div className="space-y-4">
              {skills.databases.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  versions={skill.versions}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <SectionHeader
          badge="Career"
          title="Work Experience"
          subtitle="A proven track record of delivering impactful solutions at enterprise scale."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-accent-500/30 last:border-transparent"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent-500 -translate-x-1/2 ring-4 ring-dark-950" />

              <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-accent-500 font-medium">{exp.company}</p>
                    {exp.client && (
                      <p className="text-sm text-dark-500 dark:text-dark-400">
                        Client: {exp.client}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent-500/10 text-accent-400">
                      {exp.period}
                    </span>
                    <p className="text-sm text-dark-500 dark:text-dark-500 mt-1">{exp.duration}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.slice(0, 5).map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-dark-600 dark:text-dark-400"
                    >
                      <svg
                        className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-800 text-dark-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section className="bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader badge="Education" title="Academic Background" align="left" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-900 border border-dark-800 rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 text-accent-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="text-accent-500 font-medium">{education.field}</p>
                <p className="text-dark-600 dark:text-dark-400">{education.institution}</p>
                <p className="text-sm text-dark-500 dark:text-dark-500 mt-1">{education.period}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to know more?
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-xl mx-auto mb-8">
            Download my resume for a detailed overview or reach out directly — I'd love to connect.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/resume" variant="primary">
              View Full Resume
            </Button>
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
