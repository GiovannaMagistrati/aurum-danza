import ProtectedAction from './ProtectedAction';
import Button from '../ui/Button';

const TalentCard = ({ name, image, role, location, isLoggedIn, category }) => {
  return (
    <article className="group w-full max-w-[380px] mx-auto md:max-none">
      {/* 1. Protected Image Area (Redirects to login if unauthenticated) */}
      <ProtectedAction isLoggedIn={isLoggedIn}>
        <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-900 mb-5 border border-white/5 cursor-pointer">
          <img
            src={image}
            alt={`${name} - ${role}`}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 md:group-hover:scale-105"
          />
          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6 md:p-8">
            <span className="text-aurum-gold font-inter text-[8px] md:text-[10px] tracking-[0.3em] uppercase">
              View Full Portfolio
            </span>
          </div>
        </div>
      </ProtectedAction>

      {/* 2. Talent Info */}
      <div className="px-2 md:px-0">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-cinzel text-lg md:text-xl text-white tracking-[0.1em] uppercase">
            {name}
          </h3>
        </div>

        <div className="flex justify-between items-center border-t border-white/10 pt-4 mb-6">
          <p className="font-inter text-[8px] md:text-[9px] text-white/40 uppercase tracking-[0.2em]">
            {category}
          </p>
          <span className="font-inter text-aurum-gold text-[8px] md:text-[9px] tracking-[0.2em] uppercase">
            {location}
          </span>
        </div>

        {/* 3. Contact Action Protected */}
        <ProtectedAction isLoggedIn={isLoggedIn}>
          <Button variant="minimal">
            Contact Talent
          </Button>
        </ProtectedAction>
      </div>
    </article>
  );
};

export default TalentCard;