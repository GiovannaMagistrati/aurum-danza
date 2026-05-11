import { useState } from 'react';
import { DANCERS_DATA } from '../data/dancers';
import ProtectedAction from '../components/ui/ProtectedAction';
import TalentCard from '../components/ui/TalentCard';

const ExploreTalent = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const categories = ['All', ...new Set(DANCERS_DATA.map((t) => t.category))];

  const filteredTalents = activeCategory === 'All'
    ? DANCERS_DATA
    : DANCERS_DATA.filter((t) => t.category === activeCategory);

  return (
    <div className="container-custom pt-32 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
        <div>
          <h1 className="font-cinzel text-3xl md:text-5xl text-white tracking-[0.3em] mb-4 uppercase">
            Our <span className="text-aurum-gold">Talent</span>
          </h1>
          <p className="font-inter text-[8px] md:text-[10px] text-white/40 tracking-[0.4em] md:tracking-[0.5em] uppercase italic">
            The pinnacle of artistic excellence
          </p>
        </div>

        <ProtectedAction isLoggedIn={isLoggedIn}>
          <button className="w-full md:w-auto px-8 py-4 border border-aurum-gold/30 text-aurum-gold font-inter text-[10px] uppercase tracking-[0.3em] hover:bg-aurum-gold hover:text-black transition-all duration-500">
            Join the Roster
          </button>
        </ProtectedAction>
      </header>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {filteredTalents.map((talent) => (
          <TalentCard 
            key={talent.id} 
            {...talent} 
            isLoggedIn={isLoggedIn} 
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreTalent;