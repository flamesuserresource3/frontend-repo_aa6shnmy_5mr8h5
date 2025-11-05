import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpaceObjects from './components/SpaceObjects';
import CosmicScroll from './components/CosmicScroll';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <div className="fixed inset-0 -z-10">
        <SpaceObjects />
      </div>

      <Navbar />
      <main>
        <Hero />
        <CosmicScroll />
        <section className="relative bg-black">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <h3 className="text-3xl md:text-4xl font-bold">Why Specturn?</h3>
            <p className="mt-5 text-white/70 max-w-3xl">
              Built for a future where exploration is interactive, Specturn blends neon futurism with a cosmic playground. Hover over worlds to reveal lore, follow the glowing paths, and let subtle space weather bring the page to life.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Immersive', body: 'A living galaxy with animated space phenomena.' },
                { title: 'Expressive', body: 'Trendy neon gradients and glass morphic UI.' },
                { title: 'Interactive', body: 'Orbiting planets reveal intel on hover.' },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md">
                  <h4 className="font-semibold">{c.title}</h4>
                  <p className="mt-2 text-white/70 text-sm">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="relative border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Specturn</p>
          <p>Crafted in the cosmic void</p>
        </div>
      </footer>
    </div>
  );
}
