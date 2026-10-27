import React, { useEffect, useRef } from 'react';

export default function AmbientStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool: golden stars and gentle moon dust
    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.7 + 0.3,
      alphaChange: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      speedY: Math.random() * 0.2 + 0.05,
      gold: Math.random() > 0.35 // 65% golden stars, 35% soft blue stars
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach(s => {
        s.alpha += s.alphaChange;
        if (s.alpha > 0.95 || s.alpha < 0.2) {
          s.alphaChange = -s.alphaChange;
        }

        s.y -= s.speedY;
        if (s.y < -10) {
          s.y = height + 10;
          s.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.gold
          ? `rgba(249, 217, 118, ${s.alpha})`
          : `rgba(142, 197, 252, ${s.alpha})`;
        ctx.shadowBlur = s.radius * 4;
        ctx.shadowColor = s.gold ? '#f9d976' : '#8ec5fc';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="ambient-canvas" />;
}
