import { useState } from 'react';
import { DANCERS_DATA } from '../data/dancers';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ExploreTalent = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(DANCERS_DATA.map((t) => t.category))];

  const filteredTalents = activeCategory === 'All'
    ? DANCERS_DATA
    : DANCERS_DATA.filter((t) => t.category === activeCategory);

  return (
    <div className="bg-aurum-deep min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 container-custom">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-white tracking-[0.3em] mb-4 uppercase">
            Our <span className="text-aurum-gold">Talent</span>
          </h1>
          <p className="font-sans text-[10px] text-white/40 tracking-[0.5em] uppercase italic">
            The pinnacle of artistic excellence
          </p>
        </header>

        {/* Filter Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 mb-20" aria-label="Talent categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-sans text-[10px] uppercase tracking-[0.3em] transition-all duration-500 pb-2 border-b-2 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredTalents.map((talent) => (
            <TalentCard key={talent.id} {...talent} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Sub-component (Rule 4: Prop Destructuring)
const TalentCard = ({ name, image, role, location }) => (
  <article className="group cursor-pointer">
    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-6 border border-white/5">
      <img 
        src={image} 
        alt={`${name} - ${role}`} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
         <span className="text-aurum-gold font-sans text-[10px] tracking-[0.3em] uppercase">View Portfolio</span>
      </div>
    </div>
    
    <h3 className="font-serif text-xl text-white tracking-[0.1em] mb-2 uppercase">{name}</h3>
    <div className="flex justify-between items-center border-t border-white/10 pt-4">
      <p className="font-sans text-[9px] text-white/40 uppercase tracking-[0.2em]">{role}</p>
      <span className="font-sans text-aurum-gold text-[9px] tracking-[0.2em] uppercase">{location}</span>
    </div>
  </article>
);

export default ExploreTalent;