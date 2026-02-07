'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'The Cloud Registry',
    subtitle: 'Visibility',
    description: 'Central Plan Storage. Agents publish Markdown plans to a remote registry. Every agent knows the state of the entire repo instantly.',
    icon: '◉',
    color: '#3ddc97',
  },
  {
    title: 'Early Conflict Discovery',
    subtitle: 'Intelligence',
    description: 'Detect collisions at the Idea stage. Catch architectural mismatches and duplicate features seconds into planning, not hours into coding.',
    icon: '⚡',
    color: '#f59e0b',
  },
  {
    title: 'Zero Friction',
    subtitle: 'Philosophy',
    description: "Awareness, not Locking. We don't block execution. We give agents the data they need to make smart decisions—proceed, wait, or pivot.",
    icon: '∞',
    color: '#3ddc97',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background with artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/works/The Tower of Babel.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          style={{ filter: 'blur(3px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, rgba(230, 237, 243, 0.02) 0px, transparent 1px, transparent 40px, rgba(230, 237, 243, 0.02) 41px)`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#e6edf3] mb-6">
            The Awareness Layer
          </h2>
          <p className="text-xl text-[#e6edf3]/80 max-w-3xl mx-auto">
            A shared intelligence system that lets agents see what others are planning, before conflicts emerge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="bg-[#0a0a0a]/80 border border-[#e6edf3]/20 rounded-lg p-8 h-full backdrop-blur-md hover:border-[#3ddc97]/50 transition-all duration-300">
                {/* Icon */}
                <div
                  className="text-6xl mb-4 font-bold"
                  style={{ color: feature.color }}
                >
                  {feature.icon}
                </div>

                {/* Subtitle */}
                <div
                  className="text-sm font-semibold mb-2 uppercase tracking-wider"
                  style={{ color: feature.color }}
                >
                  {feature.subtitle}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#e6edf3]/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}20, transparent 70%)`
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
