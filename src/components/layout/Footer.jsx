import { Link } from 'react-router-dom';
import LogoGold from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] py-12 border-t border-white/5">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center">

          {/* COLUMN 1: NAVIGATION */}
          <div className="flex flex-col items-center">
            <h4 className="font-cinzel text-[9px] text-aurum-gold tracking-[0.3em] mb-6 uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/talents" className="font-inter text-[8px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase">
                  Talents
                </Link>
              </li>
              <li>
                <Link to="/castings" className="font-inter text-[8px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase">
                  Auditions
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-inter text-[8px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: BRANDING */}
          <div className="flex flex-col items-center justify-center order-first md:order-none">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="mb-4 group"
            >
              <img
                src={LogoGold}
                alt="Aurum Danza"
                className="h-14 w-auto filter grayscale opacity-40 brightness-125 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </Link>
            <p className="font-inter text-[7px] md:text-[8px] text-white/20 tracking-[0.4em] uppercase">
              Redefining the elite in motion
            </p>
          </div>

          {/* COLUMN 3: SOCIAL */}
          <div className="flex flex-col items-center">
            <h4 className="font-cinzel text-[9px] text-aurum-gold tracking-[0.3em] mb-6 uppercase">
              Social
            </h4>
            <ul className="flex flex-col gap-3">
              {['Instagram', 'LinkedIn', 'TikTok'].map((social) => (
                <li key={social}>
                  <a
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-[8px] text-white/40 hover:text-white transition-all duration-300 tracking-[0.2em] uppercase"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-[7px] text-white/10 tracking-[0.3em] uppercase">
            © 2026 Aurum Danza
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