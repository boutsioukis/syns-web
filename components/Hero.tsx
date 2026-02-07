'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const terminalLines = [
  { agent: 'Agent-Alpha', user: 'alice@dev', action: 'syns plan create "Refactoring auth module to use JWT"', delay: 0 },
  { agent: '', user: '', action: '✓ Plan published to registry (ID: plan-a7f3)', delay: 1000 },
  { agent: 'Agent-Beta', user: 'bob@dev', action: 'syns plan create "Adding OAuth2 support to auth"', delay: 3000 },
  { agent: '', user: '', action: '⚠ COLLISION DETECTED', delay: 4000, warning: true },
  { agent: '', user: '', action: '  └─ Conflict with Agent-Alpha (plan-a7f3)', delay: 4500, warning: true },
  { agent: '', user: '', action: '  └─ Both modifying /src/auth/*, interface changes detected', delay: 5000, warning: true },
  { agent: '', user: '', action: '  └─ Recommendation: Coordinate before proceeding', delay: 5500, warning: true },
];

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(0);
        setDisplayedText('');
        setIsTyping(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const line = terminalLines[currentLine];
    const timer = setTimeout(() => {
      if (isTyping) {
        const fullText = line.user ? `[${line.agent}] ${line.user}$ ${line.action}` : `${line.action}`;

        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentLine(currentLine + 1);
            setDisplayedText('');
            setIsTyping(true);
          }, 500);
        }
      }
    }, isTyping ? 30 : 0);

    return () => clearTimeout(timer);
  }, [currentLine, displayedText, isTyping]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/works/The Ninth Wave.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          style={{ filter: 'blur(2px)' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(230, 237, 243, 0.03) 0px, transparent 1px, transparent 2px, rgba(230, 237, 243, 0.03) 3px)`,
          backgroundSize: '100% 4px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/logo/logo_bb.jpeg"
                alt="Syns Logo"
                width={120}
                height={120}
                className="rounded-lg border border-[#e6edf3]/30"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-[#e6edf3]"
            >
              Coordinate the Swarm.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-[#e6edf3]/80 mb-8 leading-relaxed"
            >
              Give your agents shared awareness. Prevent duplicate work and architectural conflicts through intent-based plan sharing.
            </motion.p>

            {/* Installation Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-3 p-4 bg-[#e6edf3]/5 border border-[#e6edf3]/20 rounded-lg backdrop-blur-sm"
            >
              <code className="text-[#3ddc97] font-mono text-sm md:text-base flex-1">
                npm install -g syns
              </code>
              <button
                onClick={() => navigator.clipboard.writeText('npm install -g syns')}
                className="px-4 py-2 bg-[#3ddc97] text-black font-semibold rounded hover:bg-[#3ddc97]/80 transition-colors text-sm"
              >
                Copy
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Living Terminal Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-[#0a0a0a] border border-[#e6edf3]/20 rounded-lg overflow-hidden backdrop-blur-md shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#e6edf3]/5 border-b border-[#e6edf3]/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 text-center text-[#e6edf3]/60 text-sm font-mono">
                  syns-registry.cloud
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm h-[400px] overflow-hidden">
                {terminalLines.slice(0, currentLine).map((line, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 ${line.warning ? 'text-[#f59e0b]' : 'text-[#e6edf3]'}`}
                  >
                    {line.user ? (
                      <>
                        <span className="text-[#3ddc97]">[{line.agent}]</span>
                        {' '}
                        <span className="text-[#e6edf3]/60">{line.user}$</span>
                        {' '}
                        {line.action}
                      </>
                    ) : (
                      line.action
                    )}
                  </div>
                ))}
                {currentLine < terminalLines.length && (
                  <div className={`mb-2 ${terminalLines[currentLine].warning ? 'text-[#f59e0b]' : 'text-[#e6edf3]'}`}>
                    {terminalLines[currentLine].user ? (
                      <>
                        <span className="text-[#3ddc97]">[{terminalLines[currentLine].agent}]</span>
                        {' '}
                        <span className="text-[#e6edf3]/60">{terminalLines[currentLine].user}$</span>
                        {' '}
                      </>
                    ) : null}
                    {displayedText}
                    <span className="animate-pulse">▊</span>
                  </div>
                )}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3ddc97]/20 to-[#f59e0b]/20 rounded-lg blur-xl -z-10 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
