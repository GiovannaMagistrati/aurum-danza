import React from 'react';
import LogoGold from '../../assets/images/Logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] py-12 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* COLUMNA 1: LOGO */}
          <div className="flex flex-col items-center md:items-start">
            <img src={LogoGold} alt="Aurum Danza" className="w-16 h-auto mb-4 opacity-90" />
            <p className="font-inter text-[9px] text-white/30 tracking-[0.2em] italic uppercase">
              Redefining the elite in motion
            </p>
          </div>

          {/* COLUMNA 2: QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-cinzel text-[10px] text-aurum-gold tracking-[0.3em] mb-5 uppercase">Quick Links</h4>
            <ul className="space-y-2 text-center md:text-left">
              {['Talent', 'Castings', 'About', 'Login'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-inter text-[9px] text-white/40 hover:text-white transition-colors tracking-[0.2em] uppercase">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: SOCIAL */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-cinzel text-[10px] text-aurum-gold tracking-[0.3em] mb-5 uppercase">Social</h4>
            <ul className="space-y-2 text-center md:text-left">
              {['LinkedIn', 'Instagram', 'TikTok'].map((social) => (
                <li key={social}>
                  <a href="#" className="font-inter text-[9px] text-white/40 hover:text-white transition-colors tracking-[0.2em] uppercase">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="font-inter text-[7px] text-white/10 tracking-[0.4em] uppercase">
            © 2026 Aurum Danza — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;