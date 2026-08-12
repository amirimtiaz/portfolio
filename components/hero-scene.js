'use client';

import { useEffect, useRef } from 'react';

const PARTICLES = 170;
const RINGS = 5;

export function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let width = 0;
    let height = 0;
    let time = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let pulse = 0;

    const particles = Array.from({ length: PARTICLES }, (_, i) => ({
      angle: (i / PARTICLES) * Math.PI * 2,
      orbit: 0.18 + ((i * 47) % 100) / 100 * 0.72,
      speed: 0.18 + ((i * 31) % 40) / 100,
      phase: ((i * 83) % 100) / 100 * Math.PI * 2,
      size: 0.7 + ((i * 17) % 10) / 10 * 1.8,
      depth: ((i * 29) % 100) / 100,
    }));

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const pointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      targetX = (event.clientX - bounds.left) / bounds.width - 0.5;
      targetY = (event.clientY - bounds.top) / bounds.height - 0.5;
    };

    const pointerDown = () => {
      pulse = 1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pointerX += (targetX - pointerX) * 0.045;
      pointerY += (targetY - pointerY) * 0.045;
      if (!reduceMotion) time += 0.008;
      pulse *= 0.955;

      const cx = width * (0.53 + pointerX * 0.035);
      const cy = height * (0.5 + pointerY * 0.035);
      const radius = Math.min(width, height) * 0.34;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.45);
      glow.addColorStop(0, 'rgba(66,112,184,.24)');
      glow.addColorStop(.42, 'rgba(31,67,124,.09)');
      glow.addColorStop(1, 'rgba(8,8,8,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(pointerX * .14);
      for (let ring = 0; ring < RINGS; ring += 1) {
        const ringRadius = radius * (.48 + ring * .135);
        ctx.beginPath();
        ctx.ellipse(0, 0, ringRadius, ringRadius * (.3 + ring * .055), time * (ring % 2 ? -1 : 1) + ring, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(88,137,211,${.2 - ring * .025})`;
        ctx.lineWidth = ring === 0 ? 1.4 : .7;
        ctx.stroke();
      }

      for (let arc = 0; arc < 9; arc += 1) {
        ctx.beginPath();
        ctx.arc(0, 0, radius * (.31 + arc * .075), time * (arc % 2 ? -1.2 : .8) + arc, time * (arc % 2 ? -1.2 : .8) + arc + .45 + arc * .035);
        ctx.strokeStyle = `rgba(123,164,226,${.38 - arc * .027})`;
        ctx.lineWidth = arc % 3 === 0 ? 2 : .8;
        ctx.stroke();
      }
      ctx.restore();

      const plotted = particles.map((particle, index) => {
        const angle = particle.angle + time * particle.speed;
        const wave = Math.sin(time * 1.7 + particle.phase) * radius * .075;
        const r = radius * particle.orbit;
        return {
          x: cx + Math.cos(angle) * r + Math.sin(angle * 3) * wave + pointerX * particle.depth * 52,
          y: cy + Math.sin(angle) * r * .58 + Math.cos(angle * 2) * wave + pointerY * particle.depth * 42,
          alpha: .2 + particle.depth * .65,
          size: particle.size,
          index,
        };
      });

      plotted.forEach((point, index) => {
        const next = plotted[(index + 13) % plotted.length];
        const distance = Math.hypot(point.x - next.x, point.y - next.y);
        if (distance < radius * .42) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `rgba(77,126,198,${.13 * point.alpha})`;
          ctx.lineWidth = .55;
          ctx.stroke();
        }
      });

      const mouseX = cx + pointerX * width * .72;
      const mouseY = cy + pointerY * height * .72;
      plotted.forEach((point, index) => {
        if (index % 7 !== 0) return;
        const distance = Math.hypot(point.x - mouseX, point.y - mouseY);
        if (distance < radius * .65) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(133,174,235,${.2 * (1 - distance / (radius * .65))})`;
          ctx.stroke();
        }
      });

      plotted.forEach((point, index) => {
        if (index % 29 === 0) {
          const pulse = 7 + Math.sin(time * 4 + index) * 3;
          ctx.beginPath();
          ctx.arc(point.x, point.y, pulse, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(123,164,226,.34)';
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(133,174,235,${point.alpha})`;
        ctx.shadowColor = '#4d7fc8';
        ctx.shadowBlur = point.size * 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-time * .45);
      ctx.strokeStyle = 'rgba(151,186,238,.72)';
      ctx.lineWidth = 1.3;
      ctx.setLineDash([3, 9]);
      ctx.beginPath();
      ctx.arc(0, 0, radius * .22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(111,155,223,.12)';
      ctx.beginPath();
      ctx.arc(0, 0, radius * .14, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (pulse > .02) {
        for (let waveIndex = 0; waveIndex < 3; waveIndex += 1) {
          ctx.beginPath();
          ctx.arc(mouseX, mouseY, (1 - pulse) * radius * (1.1 + waveIndex * .32), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(126,169,232,${pulse * (.55 - waveIndex * .13)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener('pointermove', pointerMove);
    canvas.addEventListener('pointerdown', pointerDown);
    canvas.addEventListener('pointerleave', () => { targetX = 0; targetY = 0; });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener('pointermove', pointerMove);
      canvas.removeEventListener('pointerdown', pointerDown);
    };
  }, []);

  return (
    <div className="hero-scene" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
