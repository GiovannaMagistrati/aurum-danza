import React from 'react';
// Cambiamos la ruta y el nombre al archivo real que tienes en tu carpeta
import heroImg from '../../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-aurum-deep">
      {/* Fondo: Tu imagen real con tratamiento de lujo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Aurum Danza Experience" 
          className="w-full h-full object-cover opacity-70"
        />
        {/* Capa de profundidad: oscurece el fondo para que el texto brille */}
        <div className="absolute inset-0 bg-gradient-to-b from-aurum-deep/60 via-transparent to-aurum-deep"></div>
      </div>

      {/* Contenido: Alineado con tu visión de curiosidad */}
      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <p className="font-inter text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-aurum-gold mb-6">
          Elevating the standard of dance
        </p>

        <h1 className="font-cinzel text-5xl md:text-8xl tracking-[0.15em] text-white leading-tight mb-8">
          ELEVATING <br />
          <span className="text-aurum-gold">TALENT</span>
        </h1>

        <p className="font-inter italic font-light text-white/60 text-lg md:text-xl max-w-xl mb-12 tracking-wide">
          "The intersection of grace and luxury."
        </p>

        {/* Call to Action */}
        <button className="btn-aurum !px-12 !py-5 !text-[10px] hover:scale-105 transition-all duration-500 shadow-2xl shadow-aurum-gold/10">
          JOIN THE EXPERIENCE
        </button>

        {/* Indicador de Scroll: para que sepan que hay más contenido abajo */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="font-inter text-[9px] uppercase tracking-[0.3em] text-white">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;