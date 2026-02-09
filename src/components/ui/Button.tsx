'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const variants = {
  primary:
    'bg-terminal-green text-dark-950 hover:bg-terminal-green/90 shadow-lg shadow-terminal-green/20 hover:shadow-terminal-green/30 font-mono',
  secondary:
    'bg-dark-800 text-dark-200 hover:bg-dark-700 border border-dark-700 hover:border-dark-600 font-mono',
  ghost:
    'bg-transparent hover:bg-dark-800/50 text-dark-400 hover:text-dark-200 font-mono',
  outline:
    'bg-transparent border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green font-mono',
  terminal:
    'bg-dark-900 text-terminal-green border border-dark-700 hover:border-terminal-green/50 font-mono before:content-["$"] before:mr-2 before:text-dark-500',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      children,
      icon,
      iconPosition = 'right',
      className,
      ...props
    },
    ref
  ) => {
    const buttonStyles = cn(
      'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="opacity-70">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="opacity-70">{icon}</span>}
      </>
    );

    if (href) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {content}
          </motion.a>
        );
      }

      return (
        <Link href={href} className={buttonStyles}>
          <motion.span
            className="inline-flex items-center gap-2"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {content}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={buttonStyles}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
