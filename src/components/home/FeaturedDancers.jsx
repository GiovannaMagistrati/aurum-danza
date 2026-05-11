import React from 'react';
import { DANCERS_DATA } from '../../data/dancers'; 
import TalentCard from '../ui/TalentCard'; // Importamos tu nueva card global

const FeaturedDancers = () => {
  // Filtramos para mostrar solo los destacados
  const featuredDancers = DANCERS_DATA.filter(dancer => dancer.featured);

  return ( 
    <section className="w-full bg-aurum-deep py-24 border-b border-white/5">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-4xl text-white tracking-[0.2em] text-center uppercase">
            Featured <span className="text-aurum-gold">Talent</span>
          </h2>
          {/* Un detalle visual sutil debajo del título opcional */}
          <div className="w-12 h-[1px] bg-aurum-gold/50 mt-4" />
        </div>

        {/* Grid de Tarjetas utilizando el componente reutilizable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
          {featuredDancers.map((dancer) => (
            <TalentCard 
              key={dancer.id} 
              {...dancer} 
              isLoggedIn={false} // O pasas el estado real de login si lo tienes
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDancers;