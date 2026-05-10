import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoAurum from '../../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // 1. Efecto para detectar el scroll
    useEffect(() => {
        const handleScroll = () => {
            // Se activa el fondo cuando bajamos más de 50px
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. Bloqueo de scroll cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    return (
        <>
            {/* Clases dinámicas: cambia altura, fondo y borde según el scroll o si está abierto */}
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out flex items-center ${
                isScrolled || isOpen 
                ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-aurum-gold/10 h-20' 
                : 'bg-transparent h-24 border-b border-transparent'
            }`}>
                <div className="container-custom w-full">

                    {/* DESKTOP & LAPTOP */}
                    <div className="hidden lg:grid grid-cols-3 items-center w-full">
                        <div className="flex justify-start">
                            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                                <img src={logoAurum} alt="Logo" className="h-10 w-auto object-contain" />
                            </Link>
                        </div>

                        <div className="flex justify-center items-center gap-10 text-[10px] uppercase tracking-[0.4em] font-light text-white/80">
                            <Link to="/talents" className="hover:text-aurum-gold transition-all duration-300">Explore Talent</Link>
                            <Link to="/castings" className="hover:text-aurum-gold transition-all duration-300">Castings</Link>
                            <Link to="/about" className="hover:text-aurum-gold transition-all duration-300">About Us</Link>
                        </div>

                        <div className="flex justify-end">
                            <button className="px-8 py-2.5 border border-aurum-gold/40 text-aurum-gold font-inter text-[10px] uppercase tracking-[0.3em] hover:bg-aurum-gold hover:text-black transition-all duration-500 rounded-sm">
                                Login
                            </button>
                        </div>
                    </div>

                    {/* TABLET & MOBILE */}
                    <div className="flex lg:hidden items-center justify-between w-full">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <img src={logoAurum} alt="Logo" className="h-9 w-auto object-contain" />
                        </Link>

                        <button
                            className="text-aurum-gold font-cinzel tracking-[0.2em] text-[11px] p-2 outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? 'CLOSE' : 'MENU'}
                        </button>
                    </div>

                </div>
            </nav>

            {/* MENÚ MÓVIL FULLSCREEN */}
            <div className={`fixed inset-0 w-full h-full z-[90] bg-[#050505] flex flex-col items-center justify-center gap-12 transition-all duration-700 ease-in-out ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            } lg:hidden`}>
                <Link to="/talents" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white hover:text-aurum-gold transition-colors">EXPLORE</Link>
                <Link to="/castings" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white hover:text-aurum-gold transition-colors">CASTINGS</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white hover:text-aurum-gold transition-colors">ABOUT</Link>
                <button className="mt-8 px-12 py-4 border border-aurum-gold text-aurum-gold font-inter text-sm uppercase tracking-[0.3em]">
                    LOGIN
                </button>
            </div>
        </>
    );
};

export default Navbar;