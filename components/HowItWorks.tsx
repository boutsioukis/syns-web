'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#e6edf3] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-[#e6edf3]/80 max-w-3xl mx-auto">
            A simple CLI that sits between your agents and your codebase.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Terminal Window */}
          <div className="bg-[#0a0a0a] border border-[#e6edf3]/20 rounded-lg overflow-hidden backdrop-blur-md shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#e6edf3]/5 border-b border-[#e6edf3]/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 text-center text-[#e6edf3]/60 text-sm font-mono">
                terminal — syns workflow
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm space-y-4">
              {/* Command 1: List Plans */}
              <div>
                <div className="text-[#e6edf3]/60 mb-1">
                  <span className="text-[#3ddc97]">$</span> syns plan list
                </div>
                <div className="pl-4 space-y-1 text-[#e6edf3]/80">
                  <div>
                    <span className="text-[#f59e0b]">[ACTIVE]</span> Agent-Alpha: Refactor Auth <span className="text-[#e6edf3]/50">(3m ago)</span>
                  </div>
                  <div>
                    <span className="text-[#f59e0b]">[ACTIVE]</span> Agent-Beta: Add MFA Support <span className="text-[#e6edf3]/50">(1m ago)</span>
                  </div>
                  <div>
                    <span className="text-[#3ddc97]">[RESOLVED]</span> Agent-Gamma: Update User Schema <span className="text-[#e6edf3]/50">(15m ago)</span>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-[#e6edf3]/10 my-4"></div>

              {/* Command 2: Compare Plans */}
              <div>
                <div className="text-[#e6edf3]/60 mb-1">
                  <span className="text-[#3ddc97]">$</span> syns plan compare --with Agent-Alpha
                </div>
                <div className="pl-4 space-y-2">
                  <div className="text-[#f59e0b] font-bold">
                    ⚠ WARNING: Intersection detected in /src/auth/*
                  </div>
                  <div className="pl-4 space-y-1 text-[#e6edf3]/70 text-xs">
                    <div>→ Agent-Alpha is changing interface signatures</div>
                    <div>→ Your plan adds new methods to AuthService</div>
                    <div>→ High probability of merge conflict</div>
                  </div>
                  <div className="mt-3 p-3 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded text-[#f59e0b]">
                    <div className="font-bold mb-1">Recommendation:</div>
                    <div className="text-xs">Coordinate with Agent-Alpha before proceeding.</div>
                    <div className="text-xs">Consider waiting for their changes to land first.</div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-[#e6edf3]/10 my-4"></div>

              {/* Command 3: View Plan Details */}
              <div>
                <div className="text-[#e6edf3]/60 mb-1">
                  <span className="text-[#3ddc97]">$</span> syns plan view Agent-Alpha
                </div>
                <div className="pl-4 mt-2 p-4 bg-[#e6edf3]/5 border border-[#e6edf3]/10 rounded space-y-2 text-xs">
                  <div>
                    <span className="text-[#3ddc97]">Plan ID:</span> <span className="text-[#e6edf3]/70">plan-a7f3</span>
                  </div>
                  <div>
                    <span className="text-[#3ddc97]">Agent:</span> <span className="text-[#e6edf3]/70">Agent-Alpha</span>
                  </div>
                  <div>
                    <span className="text-[#3ddc97]">Status:</span> <span className="text-[#f59e0b]">ACTIVE</span>
                  </div>
                  <div className="pt-2 border-t border-[#e6edf3]/10">
                    <span className="text-[#3ddc97]">Description:</span>
                    <div className="text-[#e6edf3]/70 mt-1 pl-2">
                      Refactoring auth module to use JWT tokens.
                      <br />
                      Changing AuthService interface to async/await.
                      <br />
                      Adding token refresh logic.
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#e6edf3]/10">
                    <span className="text-[#3ddc97]">Files:</span>
                    <div className="text-[#e6edf3]/70 mt-1 pl-2">
                      /src/auth/AuthService.ts
                      <br />
                      /src/auth/TokenManager.ts
                      <br />
                      /src/middleware/auth.ts
                    </div>
                  </div>
                </div>
              </div>

              {/* Cursor */}
              <div className="text-[#e6edf3]/60">
                <span className="text-[#3ddc97]">$</span>
                <span className="animate-pulse ml-1">▊</span>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3ddc97]/20 to-[#f59e0b]/20 rounded-lg blur-2xl -z-10 opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}
