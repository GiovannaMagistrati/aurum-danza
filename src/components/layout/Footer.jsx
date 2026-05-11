import React from 'react';
import { Link } from 'react-router-dom';
import LogoGold from '../../assets/images/logo.png';

const Footer = () => {
  return (
    /* py-8 para hacerlo lo más bajo posible */
    <footer className="w-full bg-[#050505] py-8 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* COLUMNA 1: BRANDING - FORZADO AL CENTRO */}
          <div className="flex flex-col items-center justify-center w-full">
            <Link 
              to="/" 
              onClick={() => window.scrollTo(0, 0)} 
              className="mb-3 group inline-block"
            >
              <img
                src={LogoGold}
                alt="Aurum Danza Home"
                /* h-12 para mantener el footer compacto */
                className="h-12 w-auto filter grayscale opacity-40 brightness-125 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 object-contain"
              />
            </Link>
            <p className="font-inter text-[7px] md:text-[8px] text-white/20 tracking-[0.4em] uppercase whitespace-nowrap">
              Redefining the elite in motion
            </p>
          </div>

          {/* COLUMNA 2: NAVIGATION */}
          <div className="flex flex-col items-center">
            <h4 className="font-cinzel text-[9px] text-aurum-gold tracking-[0.3em] mb-4 uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col items-center gap-3">
              <li>
                <Link to="/talents" className="font-inter text-[8px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase font-light">
                  Talents
                </Link>
              </li>
              <li>
                <Link to="/castings" className="font-inter text-[8px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase font-light">
                  Auditions
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-inter text-[8px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase font-light">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: SOCIAL */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-cinzel text-[9px] text-aurum-gold tracking-[0.3em] mb-4 uppercase">
              Social
            </h4>
            <ul className="flex flex-col items-center md:items-end gap-3">
              {['Instagram', 'LinkedIn', 'TikTok'].map((social) => (
                <li key={social}>
                  <a
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-[8px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase font-light"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR - COMPACTA */}
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-inter text-[6px] text-white/10 tracking-[0.3em] uppercase">
            © 2026 Aurum Danza
          </p>
          <div className="flex gap-4 text-[6px] text-white/10 uppercase tracking-[0.2em]">
            <Link to="/privacy" className="hover:text-white/30">Privacy</Link>
            <Link to="/terms" className="hover:text-white/30">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;