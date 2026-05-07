import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoAurum from '../../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[100] bg-aurum-deep/90 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
                <div className="container-custom w-full">

                    {/* DESKTOP & LAPTOP (Se muestra solo en pantallas grandes: lg) */}
                    <div className="hidden lg:grid grid-cols-3 items-center w-full">
                        <div className="flex justify-start">
                            <Link to="/">
                                <img src={logoAurum} alt="Logo" className="h-11 w-auto object-contain" />
                            </Link>
                        </div>

                        <div className="flex justify-center items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-light text-white/70">
                            <Link to="/talents" className="hover:text-aurum-gold transition-colors">Explore Talent</Link>
                            <Link to="/castings" className="hover:text-aurum-gold transition-colors">Castings</Link>
                            <Link to="/about" className="hover:text-aurum-gold transition-colors">About Us</Link>
                        </div>

                        <div className="flex justify-end">
                            <button className="btn-aurum">Login</button>
                        </div>
                    </div>

                    {/* TABLET & MOBILE (Se muestra en pantallas menores a lg) */}
                    <div className="flex lg:hidden items-center justify-between w-full">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <img src={logoAurum} alt="Logo" className="h-9 w-auto object-contain" />
                        </Link>

                        <button
                            className="text-aurum-gold font-cinzel tracking-widest text-[11px] p-2 outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? 'CLOSE' : 'MENU'}
                        </button>
                    </div>

                </div>
            </nav>

            {/* MENÚ MÓVIL FULLSCREEN */}
            <div className={`fixed inset-0 w-full h-full z-[90] bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} lg:hidden`}>
                <Link to="/talents" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white">EXPLORE</Link>
                <Link to="/castings" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white">CASTINGS</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="font-cinzel text-3xl tracking-[0.4em] text-white">ABOUT</Link>
                <button className="btn-aurum mt-6 w-56 text-lg py-4">LOGIN</button>
            </div>
        </>
    );
};

export default Navbar;