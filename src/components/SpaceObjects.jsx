import { useEffect, useRef } from 'react';

// Subtle animated backdrop of meteors, asteroids, pulsars, quasars, and stars
export default function SpaceObjects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = canvas.clientWidth * DPR;
      canvas.height = canvas.clientHeight * DPR;
    };
    resize();

    const stars = Array.from({ length: 180 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 0.8 + 0.2,
      s: Math.random() * 0.8 + 0.2,
    }));

    const meteors = Array.from({ length: 6 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: -0.15 - Math.random() * 0.15,
      vy: 0.05 + Math.random() * 0.08,
      len: 60 + Math.random() * 60,
      alpha: 0.25 + Math.random() * 0.25,
    }));

    const draw = (t) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // background slight vignette
      const grad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 1.3
      );
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.2)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // stars twinkle
      stars.forEach((s, i) => {
        const tw = 0.5 + 0.5 * Math.sin((t * 0.002 + i) % (Math.PI * 2));
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, (s.r + tw * 0.6) * DPR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.4 + tw * 0.6})`;
        ctx.fill();
      });

      // pulsars/quasars as soft pulses
      for (let i = 0; i < 3; i++) {
        const cx = ((i + 0.3) * 0.25 + 0.1) * canvas.width;
        const cy = ((i + 0.6) * 0.2 + 0.2) * canvas.height;
        const pulse = (Math.sin(t * 0.001 + i) + 1) * 0.5;
        const radius = (30 + i * 10 + pulse * 25) * DPR;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        g.addColorStop(0, `rgba(255,255,255,${0.25 + pulse * 0.25})`);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // meteors
      meteors.forEach((m) => {
        m.x += m.vx * 0.6;
        m.y += m.vy * 0.6;
        if (m.x < -0.2 || m.y > 1.2) {
          m.x = 1 + Math.random() * 0.2;
          m.y = -Math.random() * 0.2;
        }
        const x = m.x * canvas.width;
        const y = m.y * canvas.height;
        ctx.strokeStyle = `rgba(173,216,230,${m.alpha})`;
        ctx.lineWidth = 2 * DPR;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + m.len * DPR * m.vx * -1, y + m.len * DPR * m.vy * -1);
        ctx.stroke();
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
