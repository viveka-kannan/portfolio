'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/sections/Section';
import { Button } from '@/components/ui/Button';
import { experiences, skills, education, personalInfo } from '@/lib/constants';

export default function ResumePage() {
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
            Resume
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto mb-8">
            7+ years of experience building enterprise-grade applications. Download my
            full resume for detailed information.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              onClick={() => {
                // In a real app, this would download the PDF
                alert('Resume download would be triggered here. Add your PDF to /public/resume.pdf');
              }}
            >
              Download Resume (PDF)
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 p-4 rounded-xl bg-accent-500/10 border border-accent-500/20 text-center"
        >
          <p className="text-sm text-accent-400">
            <strong>Note:</strong> Detailed experience, metrics, and technologies are outlined in the
            attached resume PDF. The information below is a web-friendly summary.
          </p>
        </motion.div>
      </Section>

      {/* Resume Content */}
      <Section className="bg-dark-900/50 -mt-10">
        <div className="max-w-4xl mx-auto">
          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-900 border border-dark-800 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent-600 to-accent-800 p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold mb-1">{personalInfo.name}</h2>
                  <p className="text-xl text-white/90">{personalInfo.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    {personalInfo.workAuthorization.split(' | ')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-b border-dark-800 bg-dark-800/50">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-dark-600 dark:text-dark-400">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.email}
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {personalInfo.location}
                </span>
              </div>
            </div>

            <div className="p-8 space-y-10">
              {/* Summary */}
              <section>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Career Summary
                </h3>
                <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                  {personalInfo.summary}
                </p>
              </section>

              {/* Skills */}
              <section>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  Technical Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.slice(0, 6).map((skill) => (
                        <span key={skill.name} className="px-2 py-1 text-xs rounded-md bg-dark-800 text-dark-400">
                          {skill.name} {skill.versions && `(${skill.versions})`}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <span key={skill.name} className="px-2 py-1 text-xs rounded-md bg-dark-800 text-dark-400">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.cloud.map((skill) => (
                        <span key={skill.name} className="px-2 py-1 text-xs rounded-md bg-dark-800 text-dark-400">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill) => (
                        <span key={skill.name} className="px-2 py-1 text-xs rounded-md bg-dark-800 text-dark-400">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Work Experience
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="relative pl-6 border-l-2 border-accent-500/30">
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-accent-500 -translate-x-[7px]" />
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-bold text-white">{exp.role}</h4>
                          <p className="text-accent-500">{exp.company}</p>
                          {exp.client && (
                            <p className="text-sm text-dark-500 dark:text-dark-400">Client: {exp.client}</p>
                          )}
                        </div>
                        <span className="text-sm text-dark-500 dark:text-dark-500">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 text-sm text-dark-600 dark:text-dark-400">
                        {exp.achievements.slice(0, 4).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </span>
                  Education
                </h3>
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="font-bold text-white">{education.degree}</h4>
                    <p className="text-accent-500">{education.field}</p>
                    <p className="text-sm text-dark-500 dark:text-dark-400">{education.institution} • {education.period}</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="p-6 bg-dark-800/50 border-t border-dark-800 text-center">
              <p className="text-sm text-dark-500 dark:text-dark-500">
                For the complete resume with all details, please download the PDF version.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
