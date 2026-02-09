'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

const navItems = [
  { name: 'home', href: '/', path: '~' },
  { name: 'about', href: '/about', path: './about' },
  { name: 'blog', href: '/blog', path: './blog' },
  { name: 'projects', href: '/projects', path: './projects' },
  { name: 'resume', href: '/resume', path: './resume.md' },
  { name: 'contact', href: '/contact', path: './contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getCurrentPath = () => {
    const current = navItems.find(item => 
      item.href === pathname || (item.href !== '/' && pathname.startsWith(item.href))
    );
    return current?.path || '~';
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'py-2 bg-dark-950/95 backdrop-blur-xl border-b border-dark-800/80'
            : 'py-4 bg-transparent'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo - Terminal style */}
            <Link href="/" className="group flex items-center gap-3">
              <motion.div
                className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 border border-dark-700 font-mono text-sm"
                whileHover={{ borderColor: 'rgb(34 197 94 / 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-terminal-green">$</span>
                <span className="text-dark-300">viveka</span>
                <span className="text-dark-600">@</span>
                <span className="text-terminal-amber">dev</span>
                <span className="text-dark-500">:</span>
                <span className="text-terminal-blue">{getCurrentPath()}</span>
                <span className="terminal-cursor text-terminal-green">_</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Tab style */}
            <div className="hidden md:flex items-center bg-dark-900/50 border border-dark-800 rounded-lg p-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/' && pathname.startsWith(item.href));
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'relative px-3 py-1.5 text-sm font-mono rounded-md transition-all duration-200',
                      isActive
                        ? 'text-terminal-green bg-dark-800'
                        : 'text-dark-400 hover:text-dark-200 hover:bg-dark-800/50'
                    )}
                  >
                    <span className="text-dark-600 mr-1">/</span>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-terminal-green rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side - Git status style */}
            <div className="hidden md:flex items-center gap-3 font-mono text-xs">
              <span className="flex items-center gap-1.5 text-terminal-green">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                main
              </span>
              <span className="flex items-center gap-1 text-dark-500">
                <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></span>
                online
              </span>
            </div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-900 border border-dark-700 hover:border-dark-600 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-center items-center gap-1">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 5 : 0,
                  }}
                  className="w-5 h-0.5 bg-terminal-green block origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  className="w-5 h-0.5 bg-terminal-green block"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -5 : 0,
                  }}
                  className="w-5 h-0.5 bg-terminal-green block origin-center"
                />
              </div>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-16 left-4 right-4 bg-dark-900 border border-dark-700 rounded-lg z-50 md:hidden overflow-hidden"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-dark-700 bg-dark-800">
                <span className="w-3 h-3 rounded-full bg-terminal-red"></span>
                <span className="w-3 h-3 rounded-full bg-terminal-amber"></span>
                <span className="w-3 h-3 rounded-full bg-terminal-green"></span>
                <span className="ml-2 text-xs font-mono text-dark-500">navigation.sh</span>
              </div>
              
              <nav className="p-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith(item.href));
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={clsx(
                          'flex items-center gap-2 px-3 py-2.5 rounded-md font-mono text-sm transition-colors',
                          isActive
                            ? 'bg-dark-800 text-terminal-green'
                            : 'text-dark-400 hover:bg-dark-800/50 hover:text-dark-200'
                        )}
                      >
                        <span className="text-terminal-green">$</span>
                        <span className="text-dark-500">cd</span>
                        <span>{item.path}</span>
                        {isActive && <span className="ml-auto text-dark-600">current</span>}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
