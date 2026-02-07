'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-[#e6edf3]/10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left: Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo/logo_bb.jpeg"
              alt="Syns Logo"
              width={60}
              height={60}
              className="rounded-lg border border-[#e6edf3]/20 mb-4"
            />
            <h3 className="text-xl font-bold text-[#e6edf3] mb-2">Syns</h3>
            <p className="text-[#e6edf3]/60 text-sm">
              Air Traffic Control for AI Agents
            </p>
            <div className="mt-4 text-xs text-[#3ddc97] font-mono">
              Plan-Sharing Protocol v1
            </div>
          </motion.div>

          {/* Middle: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-[#e6edf3] mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/syns-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6edf3]/70 hover:text-[#3ddc97] transition-colors"
                >
                  → GitHub
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-[#e6edf3]/70 hover:text-[#3ddc97] transition-colors"
                >
                  → Documentation
                </a>
              </li>
              <li>
                <a
                  href="/requirements"
                  className="text-[#e6edf3]/70 hover:text-[#3ddc97] transition-colors"
                >
                  → Abstract Requirements
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/syns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e6edf3]/70 hover:text-[#3ddc97] transition-colors"
                >
                  → Discord Community
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right: Install */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-[#e6edf3] mb-4">Get Started</h4>
            <div className="flex items-center gap-2 p-3 bg-[#e6edf3]/5 border border-[#e6edf3]/10 rounded-lg backdrop-blur-sm">
              <code className="text-[#3ddc97] font-mono text-xs flex-1">
                npm install -g syns
              </code>
              <button
                onClick={() => navigator.clipboard.writeText('npm install -g syns')}
                className="px-3 py-1 bg-[#3ddc97] text-black font-semibold rounded text-xs hover:bg-[#3ddc97]/80 transition-colors"
              >
                Copy
              </button>
            </div>
            <p className="text-[#e6edf3]/50 text-xs mt-4">
              Requires Node.js 18+ or Python 3.9+
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#e6edf3]/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-[#e6edf3]/50 text-sm">
            © 2026 Syns. Built for the age of agents.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-[#e6edf3]/50 hover:text-[#e6edf3] transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-[#e6edf3]/50 hover:text-[#e6edf3] transition-colors"
            >
              Terms
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(0deg, rgba(230, 237, 243, 0.02) 0px, transparent 1px, transparent 2px, rgba(230, 237, 243, 0.02) 3px)`,
        backgroundSize: '100% 4px'
      }}></div>
    </footer>
  );
}
