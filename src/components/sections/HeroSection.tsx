'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useState, useEffect, useCallback, useRef } from 'react';

const terminalCommands = [
  { command: 'whoami', output: 'viveka-kannan' },
  { command: 'cat role.txt', output: 'Full Stack Developer | 7+ years' },
  { command: 'ls skills/', output: 'java/  spring-boot/  angular/  react/  aws/  docker/' },
  { command: 'echo $STATUS', output: 'Available for opportunities ✓' },
];

const codeContent = `const developer = {
  name: "Viveka Kannan",
  role: "Full Stack Developer",
  experience: "7+ years",
  stack: [
    "Java", "Spring Boot",
    "Angular", "React",
    "AWS", "Kubernetes"
  ],
  passion: "Building scalable systems",
  available: true
};

export default developer;`;

// Realistic typing speeds (ms per character)
const TYPING_SPEED = { min: 40, max: 120 };
const THINKING_PAUSE = { min: 200, max: 600 };

export function HeroSection() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [completedCommands, setCompletedCommands] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [codeTyped, setCodeTyped] = useState('');
  const [showCodeCursor, setShowCodeCursor] = useState(true);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Realistic typing effect with variable speed
  const typeCommand = useCallback((command: string, index: number) => {
    let charIndex = 0;
    setIsTyping(true);
    setTypedCommand('');
    setShowOutput(false);

    const typeNextChar = () => {
      if (charIndex < command.length) {
        setTypedCommand(command.slice(0, charIndex + 1));
        charIndex++;
        
        // Variable typing speed for realism
        const delay = Math.random() * (TYPING_SPEED.max - TYPING_SPEED.min) + TYPING_SPEED.min;
        // Occasional "thinking" pauses
        const thinkingChance = Math.random() < 0.1;
        const pause = thinkingChance 
          ? Math.random() * (THINKING_PAUSE.max - THINKING_PAUSE.min) + THINKING_PAUSE.min 
          : delay;
        
        timeoutRef.current = setTimeout(typeNextChar, pause);
      } else {
        // Command finished typing
        setIsTyping(false);
        setTimeout(() => {
          setShowOutput(true);
          setCompletedCommands(prev => [...prev, index]);
          
          // Move to next command after showing output
          setTimeout(() => {
            if (index < terminalCommands.length - 1) {
              setCurrentCommandIndex(index + 1);
            }
          }, 1500);
        }, 500);
      }
    };

    // Initial delay before starting to type
    timeoutRef.current = setTimeout(typeNextChar, 800);
  }, []);

  // Type code content with realistic animation
  useEffect(() => {
    let charIndex = 0;
    const typeCode = () => {
      if (charIndex <= codeContent.length) {
        setCodeTyped(codeContent.slice(0, charIndex));
        charIndex++;
        
        const char = codeContent[charIndex - 1];
        // Slower at newlines and special chars
        const baseDelay = char === '\n' ? 80 : char?.match(/[{}[\](),;]/) ? 60 : 25;
        const delay = baseDelay + Math.random() * 20;
        
        setTimeout(typeCode, delay);
      }
    };
    
    // Start code typing after a delay
    const startDelay = setTimeout(typeCode, 1500);
    return () => clearTimeout(startDelay);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCodeCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Start terminal typing sequence
  useEffect(() => {
    typeCommand(terminalCommands[currentCommandIndex].command, currentCommandIndex);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentCommandIndex, typeCommand]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-terminal-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-terminal-blue/5 rounded-full blur-[120px]" />

      <motion.div style={{ y, opacity }} className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Terminal window */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal">
              {/* Terminal header */}
              <div className="terminal-header">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-terminal-red"></span>
                  <span className="w-3 h-3 rounded-full bg-terminal-amber"></span>
                  <span className="w-3 h-3 rounded-full bg-terminal-green"></span>
                </div>
                <span className="ml-4 text-xs font-mono text-dark-500">viveka@dev:~</span>
              </div>

              {/* Terminal body */}
              <div className="terminal-body min-h-[280px] font-mono text-sm">
                {/* Completed commands */}
                {completedCommands.map((cmdIndex) => (
                  <div key={cmdIndex} className="mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-green">$</span>
                      <span className="text-dark-200">{terminalCommands[cmdIndex].command}</span>
                    </div>
                    <div className="text-terminal-cyan pl-4 mt-1">
                      {terminalCommands[cmdIndex].output}
                    </div>
                  </div>
                ))}

                {/* Current command being typed */}
                {currentCommandIndex < terminalCommands.length && !completedCommands.includes(currentCommandIndex) && (
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-terminal-green">$</span>
                      <span className="text-dark-200">{typedCommand}</span>
                      {isTyping && (
                        <span className="terminal-cursor">_</span>
                      )}
                    </div>
                    {showOutput && (
                      <motion.div 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-terminal-cyan pl-4 mt-1"
                      >
                        {terminalCommands[currentCommandIndex].output}
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Waiting cursor after all commands */}
                {completedCommands.length === terminalCommands.length && (
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-green">$</span>
                    <span className="terminal-cursor">_</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <Button href="/resume" variant="primary" size="md">
                ./view-resume.sh
              </Button>
              <Button href="/projects" variant="outline" size="md">
                ls ./projects
              </Button>
              <Button href="/contact" variant="ghost" size="md">
                mail -s "Hello"
              </Button>
            </motion.div>

            {/* Status badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap items-center gap-3 mt-6 font-mono text-xs"
            >
              <span className="status-badge-success">H-1B Approved</span>
              <span className="status-badge-info">US Remote Ready</span>
              <span className="status-badge-warning">Open to Relocation</span>
            </motion.div>
          </motion.div>

          {/* Right: Code editor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal">
              {/* Editor header with tabs */}
              <div className="terminal-header">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-terminal-red"></span>
                  <span className="w-3 h-3 rounded-full bg-terminal-amber"></span>
                  <span className="w-3 h-3 rounded-full bg-terminal-green"></span>
                </div>
                <div className="flex items-center ml-4 gap-1">
                  <span className="px-3 py-1 text-xs font-mono text-terminal-green bg-dark-800 rounded-t border-t border-x border-dark-700">
                    developer.ts
                  </span>
                  <span className="px-3 py-1 text-xs font-mono text-dark-500">
                    package.json
                  </span>
                </div>
              </div>

              {/* Code editor body */}
              <div className="terminal-body min-h-[320px] font-mono text-sm overflow-hidden">
                <div className="flex">
                  {/* Line numbers */}
                  <div className="pr-4 text-dark-600 select-none border-r border-dark-700/50 mr-4 text-right">
                    {codeTyped.split('\n').map((_, i) => (
                      <div key={i} className="leading-6 text-xs">{i + 1}</div>
                    ))}
                  </div>

                  {/* Code with syntax highlighting */}
                  <pre className="flex-1 leading-6 text-xs">
                    <code>
                      {codeTyped.split('\n').map((line, lineIndex) => (
                        <div key={lineIndex}>
                          {line.split(/(\b(?:const|let|var|function|return|export|default|true|false)\b|"[^"]*"|'[^']*'|\d+|[{}[\](),;:]|\w+(?=:))/g).map((part, i) => {
                            if (!part) return null;
                            if (part.match(/^(const|let|var|function|return|export|default)$/)) {
                              return <span key={i} className="text-syntax-keyword">{part}</span>;
                            }
                            if (part === 'true' || part === 'false') {
                              return <span key={i} className="text-syntax-keyword">{part}</span>;
                            }
                            if (part.match(/^["'].*["']$/)) {
                              return <span key={i} className="text-syntax-string">{part}</span>;
                            }
                            if (part.match(/^\d+$/)) {
                              return <span key={i} className="text-syntax-number">{part}</span>;
                            }
                            if (part.match(/^[{}[\](),;:]$/)) {
                              return <span key={i} className="text-dark-400">{part}</span>;
                            }
                            if (line.includes(`${part}:`)) {
                              return <span key={i} className="text-syntax-variable">{part}</span>;
                            }
                            if (part === 'developer') {
                              return <span key={i} className="text-syntax-function">{part}</span>;
                            }
                            return <span key={i} className="text-dark-200">{part}</span>;
                          })}
                          {lineIndex === codeTyped.split('\n').length - 1 && codeTyped.length < codeContent.length && (
                            <span className={`inline-block w-2 h-4 bg-terminal-green ml-0.5 ${showCodeCursor ? 'opacity-100' : 'opacity-0'}`} />
                          )}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="flex flex-wrap gap-2 mt-4 justify-end">
              {['Java', 'Spring Boot', 'Angular', 'React', 'AWS'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + i * 0.1, type: 'spring' }}
                  className="px-2 py-1 text-xs font-mono bg-dark-800 border border-dark-700 text-terminal-cyan rounded"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-dark-500 font-mono text-xs"
          >
            <span>scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
