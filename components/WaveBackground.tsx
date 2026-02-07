'use client';

import { useEffect, useRef } from 'react';

interface WaveBackgroundProps {
  startSection?: string; // ID of section where waves start
}

export default function WaveBackground({ startSection = 'problem' }: WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollProgressRef = useRef(0);
  const timeRef = useRef(0);

  // Scroll tracking — writes to a ref so the animation loop can read it without restarting
  useEffect(() => {
    const handleScroll = () => {
      const problemSection = document.getElementById(startSection);
      if (!problemSection) return;

      const problemTop = problemSection.offsetTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const currentScroll = window.scrollY;

      const scrollStart = problemTop - windowHeight;
      const scrollRange = documentHeight - scrollStart;
      const progress = Math.max(0, Math.min(1, (currentScroll - scrollStart) / scrollRange));

      scrollProgressRef.current = progress;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [startSection]);

  // Canvas animation — runs once, reads scrollProgressRef each frame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    let animationFrameId: number;

    const drawWaves = () => {
      const scrollProgress = scrollProgressRef.current;
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);

      const waveCount = Math.max(1, Math.ceil(5 * (1 - scrollProgress)));
      const baseAmplitude = Math.max(2, 40 * (1 - scrollProgress));
      const frequency = 0.02 + scrollProgress * 0.01;
      const verticalSpread = 150 * (1 - scrollProgress);

      for (let layer = 0; layer < waveCount; layer++) {
        ctx.beginPath();

        const layerProgress = layer / waveCount;
        const opacity = Math.max(0.05, 0.2 * (1 - scrollProgress * layerProgress));

        const hue = scrollProgress < 0.5 ? '#f59e0b' : '#3ddc97';
        ctx.strokeStyle = `${hue}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;

        const centerY = height / 2 + (layer - waveCount / 2) * (verticalSpread / waveCount);

        for (let x = 0; x <= width; x += 2) {
          let y = centerY;

          y += Math.sin(x * frequency + timeRef.current + layer * 0.5) * baseAmplitude;

          if (scrollProgress < 0.7) {
            y += Math.sin(x * frequency * 1.5 + timeRef.current * 0.7 + layer) * baseAmplitude * 0.5 * (1 - scrollProgress);
            y += Math.sin(x * frequency * 0.8 - timeRef.current * 0.5 + layer * 0.3) * baseAmplitude * 0.3 * (1 - scrollProgress);
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        if (scrollProgress < 0.3 && layer === 0) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = hue;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      timeRef.current += 0.01 * (1 - scrollProgress * 0.7);

      animationFrameId = requestAnimationFrame(drawWaves);
    };

    drawWaves();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
    };
  }, []); // Empty deps — runs once, never restarts

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{
        opacity: 1,
        mixBlendMode: 'screen',
      }}
    />
  );
}
