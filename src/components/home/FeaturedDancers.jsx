import React from 'react';

const FeaturedDancers = () => {
  // Datos dummy por ahora
  const dancers = [
    { name: 'Ana Silva', role: 'Prima Ballerina', img: 'dancer1.jpg' },
    { name: 'Leo Cortez', role: 'Contemporary Soloist', img: 'dancer2.jpg' },
    { name: 'Mía Wong', role: 'Neoclassical Artist', img: 'dancer3.jpg' },
  ];

  return (
    <section className="w-full bg-aurum-deep py-24 border-b border-white/5">
      <div className="container-custom flex flex-col items-center">
        <h2 className="font-cinzel text-4xl text-white tracking-[0.2em] mb-16 text-center">
          Danzantes <span className="text-aurum-gold">Destacados</span>
        </h2>

        {/* Grid de 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {dancers.map((dancer, index) => (
            <div key={index} className="glass-effect rounded-sm overflow-hidden p-6 flex flex-col items-center text-center transition-all hover:border-aurum-gold hover:shadow-2xl hover:shadow-aurum-gold/10">
              {/* Espacio para la imagen */}
              <div className="w-full aspect-[4/5] bg-neutral-800 rounded-sm mb-6 flex items-center justify-center">
                 <p className="text-white/20 text-xs font-inter">[Foto: {dancer.name}]</p>
              </div>
              <h3 className="font-cinzel text-lg text-white tracking-[0.1em] mb-2">{dancer.name}</h3>
              <p className="font-inter text-xs text-aurum-gold uppercase tracking-[0.2em] font-light">{dancer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDancers;