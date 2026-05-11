import React from 'react';
import { Link } from 'react-router-dom';
import LogoGold from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] py-10 border-t border-white/5">
      <div className="container-custom">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* COLUMNA 1: BRANDING (LOGO SOBRE FRASE) */}
          <div className="flex flex-col items-center md:items-start w-full md:w-fit">
            <div className="w-full flex justify-center mb-3">
              <img
                src={LogoGold}
                alt="Aurum"
                className="w-10 h-auto opacity-70 grayscale brightness-150"
              />
            </div>
            <p className="font-inter text-[8px] text-white/30 tracking-[0.3em] uppercase whitespace-nowrap text-center md:text-left">
              Redefining the elite in motion
            </p>
          </div>

          {/* COLUMNA 2: NAVIGATION */}
          <div className="flex flex-col items-center">
            <h4 className="font-cinzel text-[10px] text-aurum-gold tracking-[0.3em] mb-6 uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col items-center gap-4">
              {['Talents', 'Castings', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="font-inter text-[9px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: SOCIAL */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-cinzel text-[10px] text-aurum-gold tracking-[0.3em] mb-6 uppercase">
              Social
            </h4>
            <ul className="flex flex-col items-center md:items-end gap-4">
              {['Instagram', 'LinkedIn', 'TikTok'].map((social) => (
                <li key={social}>
                  <a
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-[9px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase font-light"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[7px] text-white/10 tracking-[0.3em] uppercase">
            © 2026 Aurum Danza — All rights reserved
          </p>
          <div className="flex gap-6 text-[7px] text-white/10 uppercase tracking-[0.2em]">
            <Link to="/privacy" className="hover:text-white/30 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white/30 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;