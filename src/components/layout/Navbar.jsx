import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoAurum from '../../assets/images/logo.png';
import Button from '../ui/Button'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out flex items-center ${
                isScrolled || isOpen 
                ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-aurum-gold/10 h-24' 
                : 'bg-transparent h-32 border-b border-transparent'
            }`}>
                <div className="container-custom w-full">

                    {/* DESKTOP & TABLET */}
                    <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] lg:grid-cols-3 items-center w-full">
                        <div className="flex justify-start">
                            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="group">
                                {/* Incrementamos el tamaño considerablemente */}
                                <img 
                                    src={logoAurum} 
                                    alt="Logo Aurum" 
                                    className={`transition-all duration-700 ease-in-out object-contain ${
                                        isScrolled ? 'h-20 lg:h-24' : 'h-28 lg:h-32'
                                    } group-hover:scale-105`} 
                                />
                            </Link>
                        </div>

                        <div className="flex justify-center items-center gap-6 lg:gap-10 text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.4em] font-light text-white/80 whitespace-nowrap">
                            <Link to="/talents" className="hover:text-aurum-gold transition-all duration-300">Explore Talent</Link>
                            <Link to="/castings" className="hover:text-aurum-gold transition-all duration-300">Auditions</Link>
                            <Link to="/about" className="hover:text-aurum-gold transition-all duration-300">About Us</Link>
                        </div>

                        <div className="flex justify-end">
                            <Button to="/login" variant="outline" className="px-6 lg:px-8">
                                Login
                            </Button>
                        </div>
                    </div>

                    {/* ONLY PHONES */}
                    <div className="flex md:hidden items-center justify-between w-full px-2">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <img 
                                src={logoAurum} 
                                alt="Logo" 
                                className={`transition-all duration-500 ${
                                    isScrolled ? 'h-12' : 'h-16'
                                } w-auto object-contain`} 
                            />
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
            } md:hidden`}>
                <Link to="/talents" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white hover:text-aurum-gold transition-colors">EXPLORE</Link>
                <Link to="/castings" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white hover:text-aurum-gold transition-colors">CASTINGS</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white hover:text-aurum-gold transition-colors">ABOUT</Link>
                
                <Button to="/login" variant="outline" className="mt-8 px-12 py-4 text-sm" onClick={() => setIsOpen(false)}>
                    LOGIN
                </Button>
            </div>
        </>
    );
};

export default Navbar;