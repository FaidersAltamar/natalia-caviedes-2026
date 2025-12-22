import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../../constants';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[95rem] mx-auto flex justify-between items-center px-6 lg:px-12">

                {/* Brand Identity */}
                <div className="flex items-center gap-6">
                    <img
                        src={IMAGES.PARTY_LOGO}
                        className="h-10 w-auto object-contain"
                        alt="Alianza Verde"
                    />
                    <div className="h-8 w-px bg-slate-200"></div>
                    <img
                        src={IMAGES.NAME_LOGO}
                        className="h-12 w-auto object-contain"
                        alt="Natalia Caviedes"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center space-x-12">
                    {['Perfil', 'Trayectoria', 'Propuestas', 'Votar'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[12px] font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-green-600 transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#votar"
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-green-600/20 transition-all hover:scale-105"
                    >
                        VOTA 103
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="xl:hidden p-2 text-slate-900"
                >
                    <Menu size={28} strokeWidth={1.5} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-white z-[120] flex flex-col p-8 sm:p-12 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex justify-between items-center mb-16">
                        <div className="flex items-center gap-4">
                            <img src={IMAGES.PARTY_LOGO} className="h-10" alt="PV" />
                            <div className="h-8 w-px bg-slate-100"></div>
                            <img src={IMAGES.NAME_LOGO} className="h-12" alt="Natalia" />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-900 bg-slate-50 p-4 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-6">
                        {['Perfil', 'Trayectoria', 'Propuestas'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-5xl font-display font-black text-slate-900 hover:text-green-600 transition-colors uppercase tracking-tight"
                            >
                                {link}
                            </a>
                        ))}
                        <a
                            href="#votar"
                            onClick={() => setIsOpen(false)}
                            className="text-6xl font-display font-black text-green-600 uppercase italic mt-4"
                        >
                            VOTA 103
                        </a>
                    </nav>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

