import { useEffect, useRef, useState } from 'react';

function Planet({ size = 14, distance = 110, speed = 18, color = '#8ec5ff', label = 'Planet', detail = 'No description' }) {
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ width: 0, height: 0 }}
    >
      <div
        className="absolute rounded-full animate-spin-slow"
        style={{
          width: distance * 2,
          height: distance * 2,
          marginLeft: -distance,
          marginTop: -distance,
          animationDuration: `${speed}s`,
        }}
      >
        <div
          className="absolute rounded-full shadow-[0_0_30px_6px_rgba(255,255,255,0.05)] group"
          style={{
            width: size,
            height: size,
            left: distance - size / 2,
            top: -size / 2,
            background: color,
            boxShadow: `0 0 20px 6px ${color}40`,
          }}
        >
          <div className="opacity-0 group-hover:opacity-100 transition pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full -mt-3 whitespace-nowrap bg-white/10 text-white/90 text-xs px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
            <span className="font-semibold mr-1">{label}:</span>
            {detail}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CosmicScroll() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const showSun = progress > 0.18;
  const fadeWord = Math.max(0, 1 - progress * 2);

  return (
    <section id="experience" ref={sectionRef} className="relative bg-black text-white" style={{ height: '220vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Word display with sticky 'u' */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <h2 className="text-[9vw] sm:text-[8vw] md:text-[6vw] font-extrabold tracking-tight leading-none">
            <span style={{ opacity: fadeWord }} className="transition-opacity" aria-hidden={showSun}>
              Spec<tspan className="relative inline-block">
                <span className={"px-2 rounded-md transition-all duration-700 " + (showSun ? 'text-transparent' : 'text-white')}>u</span>
              </span>rn
            </span>
          </h2>
        </div>

        {/* Sun transform */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="rounded-full transition-all"
            style={{
              width: `${showSun ? 160 : 8 + progress * 120}px`,
              height: `${showSun ? 160 : 8 + progress * 120}px`,
              boxShadow: '0 0 120px 40px rgba(255, 200, 80, 0.35), 0 0 240px 80px rgba(255, 120, 60, 0.2)',
              background: 'radial-gradient(circle at 30% 30%, #fff7c4, #ffbf66 35%, #ff7b3d 70%, #2f1a00 100%)',
              filter: `saturate(${1 + progress})` ,
            }}
          />
        </div>

        {/* Orbits and planets */}
        <div className="absolute inset-0" style={{ opacity: showSun ? 1 : 0, transition: 'opacity 800ms' }}>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="opacity-60">
              <div className="absolute rounded-full border border-white/10" style={{ width: 240, height: 240, marginLeft: -120, marginTop: -120 }} />
              <div className="absolute rounded-full border border-white/10" style={{ width: 360, height: 360, marginLeft: -180, marginTop: -180 }} />
              <div className="absolute rounded-full border border-white/10" style={{ width: 500, height: 500, marginLeft: -250, marginTop: -250 }} />
              <div className="absolute rounded-full border border-white/10" style={{ width: 660, height: 660, marginLeft: -330, marginTop: -330 }} />
            </div>
          </div>

          <Planet label="Mercurion" detail="Metallic world with extreme temp swings" size={10} distance={120} speed={18} color="#9ec9ff" />
          <Planet label="Azurine" detail="Oceanic exoplanet with sapphire storms" size={12} distance={180} speed={26} color="#60a5fa" />
          <Planet label="Embera" detail="Lush biosphere wrapped in auroras" size={16} distance={250} speed={34} color="#34d399" />
          <Planet label="Specturn" detail="Ringed giant; neon rings echo to music" size={20} distance={320} speed={42} color="#f472b6" />
        </div>
      </div>

      {/* Filler content for scroll continuity */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white/60 text-sm px-4">
        Scroll to watch the universe unfold
      </div>
    </section>
  );
}

