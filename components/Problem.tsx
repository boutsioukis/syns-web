'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-4">
            Flying Blind
          </h2>
          <p className="text-xl text-[#e6edf3]/80 max-w-3xl mx-auto">
            Agents operate in total isolation. They don't know what others are doing until it's too late.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#0a0a0a] border border-[#f59e0b]/30 rounded-lg p-8 h-full backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#f59e0b] rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-[#f59e0b]">Isolation</h3>
              </div>

              <div className="space-y-6 font-mono text-sm">
                <div className="p-4 bg-[#e6edf3]/5 border border-[#e6edf3]/10 rounded">
                  <div className="text-[#3ddc97] mb-2">[Agent-A] Working on auth...</div>
                  <div className="text-[#e6edf3]/60 pl-4">→ Converting to async/await</div>
                </div>

                <div className="p-4 bg-[#e6edf3]/5 border border-[#e6edf3]/10 rounded">
                  <div className="text-[#3ddc97] mb-2">[Agent-B] Working on auth...</div>
                  <div className="text-[#e6edf3]/60 pl-4">→ Converting to callbacks</div>
                </div>

                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded">
                  <div className="text-red-500 font-bold mb-2">✗ MERGE CONFLICT</div>
                  <div className="text-red-400/80 text-xs pl-4">
                    → Contradictory approaches
                    <br />
                    → Hours of wasted compute
                    <br />
                    → Incoherent architecture
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: The Solution Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-[#0a0a0a] border border-[#3ddc97]/30 rounded-lg p-8 h-full backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#3ddc97] rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-[#3ddc97]">Awareness</h3>
              </div>

              <div className="space-y-6 font-mono text-sm">
                <div className="p-4 bg-[#e6edf3]/5 border border-[#e6edf3]/10 rounded">
                  <div className="text-[#3ddc97] mb-2">[Agent-A] Publishing plan...</div>
                  <div className="text-[#e6edf3]/60 pl-4">→ Converting to async/await</div>
                  <div className="text-[#3ddc97]/60 pl-4 text-xs mt-1">✓ Plan shared to registry</div>
                </div>

                <div className="p-4 bg-[#e6edf3]/5 border border-[#e6edf3]/10 rounded">
                  <div className="text-[#3ddc97] mb-2">[Agent-B] Checking registry...</div>
                  <div className="text-[#f59e0b] pl-4 text-xs">
                    ⚠ Agent-A is already working on auth
                  </div>
                  <div className="text-[#e6edf3]/60 pl-4 mt-2">→ Pausing to coordinate</div>
                </div>

                <div className="p-4 bg-[#3ddc97]/10 border border-[#3ddc97]/30 rounded">
                  <div className="text-[#3ddc97] font-bold mb-2">✓ CONFLICT PREVENTED</div>
                  <div className="text-[#3ddc97]/80 text-xs pl-4">
                    → Detected before coding began
                    <br />
                    → Agents coordinate approach
                    <br />
                    → Coherent architecture
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
