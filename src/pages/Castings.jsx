import { useState } from 'react';
import CastingCard from '../components/castings/CastingCard';
import ProtectedAction from '../components/ui/ProtectedAction';
import Button from '../components/ui/Button';


const Castings = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const castingData = [
    { id: 1, title: "The Golden Era Residency", type: "Contemporary", location: "Madrid, ES", date: "JUN 2026" },
    { id: 2, title: "Cinematic Motion Project", type: "Jazz / Fusion", location: "London, UK", date: "JUL 2026" },
    { id: 3, title: "Elite Ballet Gala", type: "Classical", location: "Paris, FR", date: "SEP 2026" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container-custom">

        <div className="mt-20 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-6 tracking-[0.3em]">
              OPEN <span className="text-aurum-gold">CASTINGS</span>
            </h2>
            <p className="font-inter text-[10px] md:text-xs text-white/40 tracking-[0.2em] uppercase leading-relaxed">
              Exclusive opportunities for professional dancers. Join the global standard of excellence.
            </p>
          </div>
          <ProtectedAction isLoggedIn={isLoggedIn}>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Post Audition
          </Button>
        </ProtectedAction>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {castingData.map((casting) => (
            <CastingCard 
              key={casting.id} 
              {...casting} 
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Castings;