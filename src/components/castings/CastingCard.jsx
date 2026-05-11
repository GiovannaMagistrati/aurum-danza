import React from 'react';
import { Link } from 'react-router-dom';
import ProtectedAction from '../ui/ProtectedAction'; // Importamos el escudo

const CastingCard = ({ title, type, location, date, id, isLoggedIn }) => {
  return (
    <div className="group relative bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-aurum-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="font-inter text-[8px] tracking-[0.3em] text-aurum-gold uppercase border border-aurum-gold/20 px-2 py-1">
              {type}
            </span>
            <span className="font-inter text-[9px] text-white/20 tracking-[0.1em] uppercase">
              {date}
            </span>
          </div>

          <h3 className="font-cinzel text-lg md:text-xl text-white/90 tracking-wider mb-2">
            {title}
          </h3>
          
          <p className="font-inter text-[10px] text-white/40 tracking-[0.2em] uppercase">
            {location}
          </p>
        </div>

        {/* ACCIONES PROTEGIDAS */}
        <div className="mt-10 flex flex-col gap-4">
          <Link 
            to={`/castings/${id}`}
            className="inline-block font-inter text-[9px] text-white/60 tracking-[0.3em] uppercase hover:text-white transition-colors"
          >
            Details
          </Link>

          {/* LA TRAMPA: Si no está logueado, al hacer clic va a /login */}
          <ProtectedAction isLoggedIn={isLoggedIn}>
            <button className="w-full py-3 border border-white/10 font-inter text-[9px] text-white tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
              Apply Now
            </button>
          </ProtectedAction>
        </div>
      </div>
    </div>
  );
};

export default CastingCard;