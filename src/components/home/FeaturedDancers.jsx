import React from 'react';
import { DANCERS_DATA } from '../../data/dancers'; 

const FeaturedDancers = () => {
  // Filtramos para mostrar solo los 3 destacados (featured: true)
  const featuredDancers = DANCERS_DATA.filter(dancer => dancer.featured);

  return ( 
    <section className="w-full bg-aurum-deep py-24 border-b border-white/5">
      <div className="container-custom flex flex-col items-center">
        <h2 className="font-cinzel text-3xl md:text-4xl text-white tracking-[0.2em] mb-16 text-center uppercase">
          Danzantes <span className="text-aurum-gold">Destacados</span>
        </h2>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {featuredDancers.map((dancer) => (
            <div 
              key={dancer.id} 
              className="glass-effect rounded-sm overflow-hidden p-8 flex flex-col items-center text-center group transition-all duration-500 hover:border-aurum-gold/50"
            >
              {/* Contenedor de Imagen con Efecto Hover */}
              <div className="w-full aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-neutral-900 border border-white/5">
                <img 
                  src={dancer.image} 
                  alt={dancer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Información del Bailarín */}
              <h3 className="font-cinzel text-xl text-white tracking-[0.1em] mb-1">
                {dancer.name}
              </h3>
              
              <p className="font-inter text-[10px] text-aurum-gold uppercase tracking-[0.3em] mb-4">
                {dancer.role}
              </p>

              {/* Ubicación */}
              <p className="font-inter text-[9px] text-white/40 uppercase tracking-[0.2em] mb-6">
                {dancer.location}
              </p>

              {/* Etiqueta de Categoría Estilizada (Píldora) */}
              <span className="px-4 py-1.5 border border-aurum-gold/30 text-[9px] text-white/80 uppercase tracking-[0.2em] rounded-full bg-aurum-gold/5">
                {dancer.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDancers;