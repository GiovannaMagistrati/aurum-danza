import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import aboutImage from '../assets/images/img-ballerina.png'

// Nota: Importa aquí tu imagen cuando la elijas
// import aboutImage from '../assets/images/about-essence.jpg';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen selection:bg-aurum-gold/30">
      <div className="container-custom">
        
        {/* HERO SECTION - ABOUT */}
        <div className="max-w-4xl mb-32">
          <p className="font-inter text-[9px] uppercase tracking-[0.5em] text-aurum-gold mb-6">
            Our Legacy
          </p>
          <h1 className="font-cinzel text-4xl md:text-7xl text-white tracking-[0.2em] leading-[1.1] mb-10">
            DEFINING THE <span className="text-aurum-gold italic">FUTURE</span> OF ARTISTIC MOVEMENT
          </h1>
          <p className="font-inter font-light text-white/50 text-sm md:text-lg leading-relaxed tracking-wide max-w-2xl border-l border-aurum-gold/20 pl-8">
            Aurum Danza was born from a single vision: to bridge the gap between world-class talent and the most prestigious stages in the world. We don't just connect; we curate excellence.
          </p>
        </div>

        {/* ESTRUCTURA DE VALORES (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
          <div className="group space-y-5">
            <h3 className="font-cinzel text-aurum-gold text-xl tracking-widest flex items-center gap-4">
              <span className="text-[10px] opacity-40">01.</span> CURATION
            </h3>
            <p className="font-inter text-xs text-white/40 leading-relaxed tracking-[0.1em] font-light group-hover:text-white/70 transition-colors duration-500">
              We hand-pick every artist in our roster. Our selection process ensures that only those with exceptional technique and soul represent the Aurum standard.
            </p>
          </div>
          <div className="group space-y-5">
            <h3 className="font-cinzel text-aurum-gold text-xl tracking-widest flex items-center gap-4">
              <span className="text-[10px] opacity-40">02.</span> VISION
            </h3>
            <p className="font-inter text-xs text-white/40 leading-relaxed tracking-[0.1em] font-light group-hover:text-white/70 transition-colors duration-500">
              Providing directors and agencies with a streamlined, premium tool to find the exact energy their production requires. Precision over volume.
            </p>
          </div>
          <div className="group space-y-5">
            <h3 className="font-cinzel text-aurum-gold text-xl tracking-widest flex items-center gap-4">
              <span className="text-[10px] opacity-40">03.</span> GLOBAL
            </h3>
            <p className="font-inter text-xs text-white/40 leading-relaxed tracking-[0.1em] font-light group-hover:text-white/70 transition-colors duration-500">
              From New York to Paris, Tokyo to Buenos Aires. Art knows no borders, and neither does our reach in the international dance community.
            </p>
          </div>
        </div>

        {/* SECCIÓN INTERMEDIA - EL MANIFIESTO */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />

        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <h2 className="font-cinzel text-3xl md:text-4xl text-white tracking-[0.15em] leading-snug">
              THE <span className="text-aurum-gold">GOLDEN</span> <br /> STANDARD
            </h2>
            <p className="font-inter font-light text-white/50 text-sm leading-[1.8] tracking-widest max-w-md">
              In a world of noise, we choose resonance. Aurum Danza isn't just a database; it's a digital sanctuary for the performing arts. We believe that every movement tells a story, and every story deserves the right stage.
            </p>
            <div className="pt-6">
              <Button to="/login" variant="outline" className="px-12 py-4">
                Join the Movement
              </Button>
            </div>
          </div>
          
          {/* IMAGEN CINEMATOGRÁFICA */}
          <div className="flex-1 w-full aspect-[4/5] md:aspect-video lg:aspect-[4/5] relative overflow-hidden order-1 lg:order-2 group">
            {/* Overlay de Grano/Textura para look Film */}
            <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            {/* Overlay de Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 opacity-60" />
            
            <img 
              src={aboutImage}
              alt="Aurum Artistic Movement" 
              className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:scale-110 group-hover:brightness-90 transition-all duration-[3000ms] ease-out"
            />
            
            {/* Border decorativo interno */}
            <div className="absolute inset-4 border border-white/5 z-30 pointer-events-none group-hover:inset-6 transition-all duration-700" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;