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
            className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'glass-color py-4 shadow-lg shadow-green-900/5' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-[95rem] mx-auto flex justify-between items-center px-6 lg:px-12">

                {/* Brand Identity */}
                <a href="#inicio" className="flex items-center gap-6 group">
                    <img
                        src={IMAGES.PARTY_LOGO}
                        className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
                        alt="Alianza Verde"
                    />
                    <div className="h-10 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                    <img
                        src={IMAGES.NAME_LOGO}
                        className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                        alt="Natalia Caviedes"
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center space-x-10">
                    {['Perfil', 'Trayectoria', 'Propuestas', 'Votar'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-green-600 transition-all duration-300 relative group py-2"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="#votar"
                        className="relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-3.5 rounded-full font-black text-[10px] uppercase tracking-[0.25em] shadow-xl shadow-green-600/30 transition-all hover:scale-105 overflow-hidden group"
                    >
                        <span className="relative z-10">VOTA 103</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                <div className="fixed inset-0 glass-color z-[120] flex flex-col p-8 sm:p-12 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex justify-between items-center mb-16">
                        <div className="flex items-center gap-4">
                            <img src={IMAGES.PARTY_LOGO} className="h-12 transition-transform hover:scale-105" alt="PV" />
                            <div className="h-10 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                            <img src={IMAGES.NAME_LOGO} className="h-14 transition-transform hover:scale-105" alt="Natalia" />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-900 bg-white/80 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all shadow-lg hover:scale-110"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-8">
                        {['Perfil', 'Trayectoria', 'Propuestas'].map((link, i) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-5xl md:text-6xl font-display text-slate-900 hover:text-green-600 transition-all duration-300 uppercase tracking-tight hover:pl-4"
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {link}
                            </a>
                        ))}
                        <a
                            href="#votar"
                            onClick={() => setIsOpen(false)}
                            className="text-6xl md:text-7xl font-display gradient-text uppercase italic mt-6 hover:scale-105 transition-transform inline-block"
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

