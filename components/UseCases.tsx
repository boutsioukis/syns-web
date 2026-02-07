'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const useCases = [
  {
    title: 'For Teams',
    icon: '⚡',
    points: [
      'Multiple developers running agents simultaneously',
      'Prevent conflicting architectural decisions',
      'Shared visibility across the entire team',
      'Coordinate major refactors without merge hell',
      'Reduce wasted compute on duplicate work',
    ],
    color: '#3ddc97',
  },
  {
    title: 'For Individuals',
    icon: '◉',
    points: [
      'Run multiple agents in parallel safely',
      'Prevent your own agents from conflicting',
      'Track what each agent is working on',
      'Resume work with full context awareness',
      'Orchestrate complex multi-agent workflows',
    ],
    color: '#f59e0b',
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background with artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/works/Wanderer above the Sea of Fog.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-15"
          style={{ filter: 'blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#e6edf3] mb-6">
            Built for Scale
          </h2>
          <p className="text-xl text-[#e6edf3]/80 max-w-3xl mx-auto">
            Whether you're coordinating a fleet or managing your own swarm, Syns adapts to your workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="bg-[#0a0a0a]/90 border border-[#e6edf3]/20 rounded-lg p-8 h-full backdrop-blur-md hover:border-[#3ddc97]/50 transition-all duration-300">
                {/* Icon */}
                <div
                  className="text-5xl mb-4 font-bold"
                  style={{ color: useCase.color }}
                >
                  {useCase.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-[#e6edf3] mb-6">
                  {useCase.title}
                </h3>

                {/* Points */}
                <ul className="space-y-4">
                  {useCase.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3">
                      <div
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: useCase.color }}
                      ></div>
                      <span className="text-[#e6edf3]/80 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${useCase.color}20, transparent 70%)`
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
