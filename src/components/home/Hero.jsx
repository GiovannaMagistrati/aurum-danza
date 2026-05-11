import React from 'react';
import heroImg from '../../assets/images/hero.png'; 

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-aurum-deep">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Aurum Danza Experience" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-aurum-deep/40 via-transparent to-aurum-deep"></div>
      </div>
      
      {/* Contenido Central */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        
        {/* TEXTO */}
        <p className="font-inter text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-aurum-gold mb-6 animate-fade-in">
          Elevating the standard of dance
        </p>

        <h1 className="font-cinzel text-5xl md:text-8xl text-white tracking-[0.15em] leading-tight">
          AURUM <span className="text-aurum-gold">DANZA</span>
        </h1>
        
        {/* Indicador de scroll para invitar a bajar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-aurum-gold to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;