import Hero from '../components/home/Hero';
import FeaturedDancers from '../components/home/FeaturedDancers'; 
import ProcessSection from '../components/home/ProcessSection';

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. HERO SECTION: Intriga y Bienvenida */}
      <Hero />

      {/* 2. BAILARINES DESTACADOS: 3 Tarjetas */}
      <FeaturedDancers />

      {/* 3. EL PROCESO */}
      <ProcessSection />

      {/* 4. FOOTER (Place holder por ahora) */}
      <footer className="w-full h-40 bg-aurum-deep border-t border-white/5 flex items-center justify-center">
        <p className="font-cinzel text-xs tracking-widest text-white/30">Aurum Footer Placeholder</p>
      </footer>
    </div>
  );
};

export default Home;