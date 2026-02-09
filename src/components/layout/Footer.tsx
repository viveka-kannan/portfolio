'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'LinkedIn',
    handle: '@vivekakannan',
    href: 'https://linkedin.com/in/vivekakannan',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: '@vivekakannan',
    href: 'https://github.com/vivekakannan',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'vkvivekakannan@gmail.com',
    href: 'mailto:vkvivekakannan@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: 'about', href: '/about' },
  { name: 'blog', href: '/blog' },
  { name: 'projects', href: '/projects' },
  { name: 'resume', href: '/resume' },
  { name: 'contact', href: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-dark-800 bg-dark-950">
      <div className="container-custom relative py-12">
        {/* Terminal-style footer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal mb-4">
              <div className="terminal-header py-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-terminal-red"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-terminal-amber"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-terminal-green"></span>
                </div>
                <span className="ml-3 text-xs font-mono text-dark-500">about.sh</span>
              </div>
              <div className="p-4 font-mono text-xs">
                <div className="text-terminal-green mb-2">$ whoami</div>
                <div className="text-dark-300 mb-3">Viveka Kannan</div>
                <div className="text-terminal-green mb-2">$ cat description.txt</div>
                <div className="text-dark-400 leading-relaxed">
                  Full Stack Developer with 7+ years of experience.
                  Building enterprise-grade applications with clean architecture.
                </div>
              </div>
            </div>
            
            {/* Status badges */}
            <div className="flex flex-wrap gap-2">
              <span className="status-badge-success text-xs">H-1B Approved</span>
              <span className="status-badge-info text-xs">US Remote</span>
            </div>
          </motion.div>

          {/* Quick Links - File tree style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-mono text-sm"
          >
            <div className="text-dark-500 mb-3">~/portfolio/</div>
            <nav className="space-y-1.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-dark-400 hover:text-terminal-green transition-colors group"
                >
                  <span className="text-dark-600 group-hover:text-terminal-green">├──</span>
                  <span>{link.name}/</span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Connect - Terminal commands style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm"
          >
            <div className="text-dark-500 mb-3">// connect</div>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-dark-400 hover:text-terminal-cyan transition-colors group"
                >
                  <span className="text-terminal-green">$</span>
                  <span className="text-dark-500">open</span>
                  <span className="group-hover:text-terminal-cyan">{link.handle}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-6 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs"
        >
          <p className="text-dark-600">
            <span className="text-dark-500">/*</span> © {currentYear} Viveka Kannan <span className="text-dark-500">*/</span>
          </p>
          <p className="text-dark-600 flex items-center gap-2">
            <span className="text-dark-500">//</span>
            Built with
            <span className="text-terminal-cyan">Next.js</span>
            <span className="text-dark-700">+</span>
            <span className="text-terminal-blue">TypeScript</span>
            <span className="text-dark-700">+</span>
            <span className="text-terminal-cyan">Tailwind</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
