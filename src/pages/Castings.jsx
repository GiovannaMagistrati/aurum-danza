import React, { useState } from 'react'; // 1. Agregamos useState
import CastingCard from '../components/castings/CastingCard';
import ProtectedAction from '../components/ui/ProtectedAction'; // Importamos el escudo

const Castings = () => {
  // Simulación de estado de login (luego vendrá de un Context global)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const castingData = [
    { id: 1, title: "The Golden Era Residency", type: "Contemporary", location: "Madrid, ES", date: "JUN 2026" },
    { id: 2, title: "Cinematic Motion Project", type: "Jazz / Fusion", location: "London, UK", date: "JUL 2026" },
    { id: 3, title: "Elite Ballet Gala", type: "Classical", location: "Paris, FR", date: "SEP 2026" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container-custom">
        
        {/* Encabezado de la Sección */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-6 tracking-tight">
              OPEN <span className="text-aurum-gold">CASTINGS</span>
            </h2>
            <p className="font-inter text-[10px] md:text-xs text-white/40 tracking-[0.2em] uppercase leading-relaxed">
              Exclusive opportunities for professional dancers. Join the global standard of excellence.
            </p>
          </div>

          {/* LA TRAMPA PARA RECLUTADORES: Botón para agregar casting */}
          <ProtectedAction isLoggedIn={isLoggedIn}>
            <button className="px-8 py-4 bg-aurum-gold text-black font-inter text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-500">
              Post a Casting
            </button>
          </ProtectedAction>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {castingData.map((casting) => (
            <CastingCard 
              key={casting.id} 
              {...casting} 
              isLoggedIn={isLoggedIn} // 2. Le pasamos el estado a la card para el botón "Apply"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Castings;