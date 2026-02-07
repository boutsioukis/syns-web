'use client';

import { useEffect, useRef, useState } from 'react';

interface WaveBackgroundProps {
  startSection?: string; // ID of section where waves start
}

export default function WaveBackground({ startSection = 'problem' }: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const problemSection = document.getElementById(startSection);
      if (!problemSection) return;

      const problemTop = problemSection.offsetTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;

      // Calculate progress from when problem section enters viewport to end of page
      const scrollStart = problemTop - windowHeight;
      const scrollRange = documentHeight - scrollStart;
      const progress = Math.max(0, Math.min(1, (currentScroll - scrollStart) / scrollRange));

      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [startSection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Animation variables
    let animationFrameId: number;
    let time = 0;

    const drawWaves = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Calculate wave parameters based on scroll
      // Start: Multiple chaotic waves with high amplitude
      // End: Single calm line with minimal amplitude (but always at least 1 wave)
      const waveCount = Math.max(1, Math.ceil(5 * (1 - scrollProgress))); // 5 waves -> 1 wave (never 0)
      const baseAmplitude = Math.max(2, 40 * (1 - scrollProgress)); // High amplitude -> minimal but visible
      const frequency = 0.02 + scrollProgress * 0.01; // Affects wave tightness
      const verticalSpread = 150 * (1 - scrollProgress); // Waves spread vertically initially

      // Draw multiple wave layers
      for (let layer = 0; layer < waveCount; layer++) {
        ctx.beginPath();

        // Calculate opacity - fade out upper layers as we scroll
        const layerProgress = layer / waveCount;
        const opacity = Math.max(0.05, 0.2 * (1 - scrollProgress * layerProgress));

        // Color based on layer and scroll
        const hue = scrollProgress < 0.5 ? '#f59e0b' : '#3ddc97'; // Amber -> Green
        ctx.strokeStyle = `${hue}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;

        // Calculate vertical position for this wave
        const centerY = height / 2 + (layer - waveCount / 2) * (verticalSpread / waveCount);

        // Draw the wave
        for (let x = 0; x <= width; x += 2) {
          // Multiple sine waves for interference pattern
          let y = centerY;

          // Main wave
          y += Math.sin(x * frequency + time + layer * 0.5) * baseAmplitude;

          // Interference waves (decrease with scroll)
          if (scrollProgress < 0.7) {
            y += Math.sin(x * frequency * 1.5 + time * 0.7 + layer) * baseAmplitude * 0.5 * (1 - scrollProgress);
            y += Math.sin(x * frequency * 0.8 - time * 0.5 + layer * 0.3) * baseAmplitude * 0.3 * (1 - scrollProgress);
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        // Add glow effect for active waves
        if (scrollProgress < 0.3 && layer === 0) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = hue;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      // Increment time for animation (slow down as waves calm)
      time += 0.01 * (1 - scrollProgress * 0.7);

      animationFrameId = requestAnimationFrame(drawWaves);
    };

    drawWaves();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{
        opacity: 1, // Always visible - the calm line persists
        mixBlendMode: 'screen',
      }}
    />
  );
}
