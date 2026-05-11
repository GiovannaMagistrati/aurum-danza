import { useState } from 'react';
import { DANCERS_DATA } from '../data/dancers';
import ProtectedAction from '../components/ui/ProtectedAction';

const ExploreTalent = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const categories = ['All', ...new Set(DANCERS_DATA.map((t) => t.category))];

  const filteredTalents = activeCategory === 'All'
    ? DANCERS_DATA
    : DANCERS_DATA.filter((t) => t.category === activeCategory);

  return (
    <div className="container-custom pt-32 pb-20">
      {/* Header con la Trampa para Talentos */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
        <div>
          <h1 className="font-cinzel text-3xl md:text-5xl text-white tracking-[0.3em] mb-4 uppercase">
            Our <span className="text-aurum-gold">Talent</span>
          </h1>
          <p className="font-inter text-[8px] md:text-[10px] text-white/40 tracking-[0.4em] md:tracking-[0.5em] uppercase italic">
            The pinnacle of artistic excellence
          </p>
        </div>

        {/* Botón protegido para agregar CV/Portfolio */}
        <ProtectedAction isLoggedIn={isLoggedIn}>
          <button className="w-full md:w-auto px-8 py-4 border border-aurum-gold/30 text-aurum-gold font-inter text-[10px] uppercase tracking-[0.3em] hover:bg-aurum-gold hover:text-black transition-all duration-500">
            Join the Roster
          </button>
        </ProtectedAction>
      </header>

      {/* Filter Navigation */}
      <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mb-12 md:mb-20 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`font-inter text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all duration-500 pb-2 border-b-2 ${
              activeCategory === category 
              ? 'border-aurum-gold text-aurum-gold' 
              : 'border-transparent text-white/30 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Talent Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {filteredTalents.map((talent) => (
          <TalentCard key={talent.id} {...talent} isLoggedIn={isLoggedIn} />
        ))}
      </div>
    </div>
  );
};

const TalentCard = ({ name, image, role, location, isLoggedIn }) => (
  <article className="group w-full max-w-[380px] mx-auto md:max-none">
    <ProtectedAction isLoggedIn={isLoggedIn}>
      <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-900 mb-5 border border-white/5 cursor-pointer">
        <img 
          src={image} 
          alt={`${name} - ${role}`} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 md:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6 md:p-8">
           <span className="text-aurum-gold font-inter text-[8px] md:text-[10px] tracking-[0.3em] uppercase">
             View Full Portfolio
           </span>
        </div>
      </div>
    </ProtectedAction>
    
    <div className="px-2 md:px-0">
      <h3 className="font-cinzel text-lg md:text-xl text-white tracking-[0.1em] mb-2 uppercase">
        {name}
      </h3>
      <div className="flex justify-between items-center border-t border-white/10 pt-4">
        <p className="font-inter text-[8px] md:text-[9px] text-white/40 uppercase tracking-[0.2em]">
          {role}
        </p>
        <span className="font-inter text-aurum-gold text-[8px] md:text-[9px] tracking-[0.2em] uppercase">
          {location}
        </span>
      </div>
    </div>
  </article>
);

export default ExploreTalent;