'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/sections/Section';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/lib/constants';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const contactMethods = [
  {
    id: 'email',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: 'Best for detailed inquiries',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: personalInfo.linkedin,
    description: 'Professional networking',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'View my code',
    href: personalInfo.github,
    description: 'Open source & projects',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <>
      <Section className="pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Interested in working together or have a question? I&apos;d love to hear from you.
            Reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.id}
                href={method.href}
                target={method.id !== 'email' ? '_blank' : undefined}
                rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(method.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative p-6 rounded-2xl bg-dark-900 border border-dark-800 hover:border-accent-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={hoveredCard === method.id ? { scale: 1 } : { scale: 0.95 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-accent-500/10 text-accent-500 flex items-center justify-center mb-4"
                    animate={hoveredCard === method.id ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    {method.icon}
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-500 transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-accent-500 font-medium text-sm mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-dark-500 dark:text-dark-500">
                    {method.description}
                  </p>
                  
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={hoveredCard === method.id ? { x: 0 } : { x: -10 }}
                  >
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-dark-900/50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            {...fadeUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Send a Message
            </h2>
            <p className="text-dark-600 dark:text-dark-400">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-dark-900 rounded-2xl border border-dark-800 p-8 shadow-xl"
          >
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-center"
              >
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm mt-1">I&apos;ll get back to you soon.</p>
              </motion.div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
                icon={
                  isSubmitting ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )
                }
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>

            <p className="mt-6 text-xs text-center text-dark-500 dark:text-dark-500">
              By submitting this form, you agree to be contacted regarding your inquiry.
              I respect your privacy and will never share your information.
            </p>
          </motion.form>
        </div>
      </Section>

      {/* Location Info */}
      <Section>
        <motion.div
          {...fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-accent-500/10 text-accent-400 mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">{personalInfo.location}</span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">
            Available for Remote & On-site Opportunities
          </h2>
          <p className="text-dark-600 dark:text-dark-400 mb-8">
            {personalInfo.workAuthorization}
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button href="/resume" variant="secondary">
              View Resume
            </Button>
            <Button href="/projects" variant="ghost">
              See My Work
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
