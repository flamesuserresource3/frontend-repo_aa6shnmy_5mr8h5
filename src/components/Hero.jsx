import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.95] drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white">Specturn</span>
        </h1>
        <p className="mt-6 text-white/80 max-w-2xl text-lg">
          A futuristic portal to the trippy galaxy — ride neon waveforms across a cosmic playground.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a href="#experience" className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition">
            Enter Orbit
          </a>
          <a href="#" className="px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
