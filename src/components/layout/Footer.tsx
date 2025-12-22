import React from 'react';
import { Facebook, Twitter, Instagram, Map, Mail } from 'lucide-react';
import { IMAGES } from '../../constants';

const Footer = () => {
    return (
        <footer className="bg-slate-50 text-slate-900 pt-24 pb-12 relative overflow-hidden border-t border-slate-200">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-6">
                            <img src={IMAGES.PARTY_LOGO} className="h-12 w-auto object-contain" alt="Alianza Verde" />
                            <div className="h-8 w-px bg-slate-300"></div>
                            <img src={IMAGES.NAME_LOGO} className="h-14 w-auto object-contain" alt="Natalia Caviedes" />
                        </div>
                        <p className="text-slate-500 text-lg max-w-md font-light leading-relaxed">
                            Trabajando incansablemente por un Huila con más oportunidades, justicia social y desarrollo sostenible. Tu voz es nuestra guía.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: "#" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-green-600 hover:text-white hover:border-green-500 hover:scale-110 transition-all duration-300 shadow-sm">
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="lg:col-span-3 lg:pl-10">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-slate-900 mb-8">Navegación</h4>
                        <ul className="space-y-4">
                            {['Inicio', 'Perfil', 'Trayectoria', 'Propuestas', 'Votar'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-green-600 hover:pl-2 transition-all duration-300 inline-block font-medium">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-slate-900 mb-8">Contacto</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-white border border-slate-100 group-hover:border-green-500/30 group-hover:bg-green-50 transition-colors">
                                    <Map className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Sede Principal</p>
                                    <p className="text-slate-500 text-sm">Neiva, Huila - Colombia</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-white border border-slate-100 group-hover:border-green-500/30 group-hover:bg-green-50 transition-colors">
                                    <Mail className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Email</p>
                                    <p className="text-slate-500 text-sm">contacto@nataliacaviedes.com</p>
                                </div>
                            </div>
                            <a href="#votar" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide w-full block text-center hover:bg-green-600 transition-all mt-8 transform hover:-translate-y-1 shadow-lg shadow-slate-900/10">
                                Únete al cambio
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-xs uppercase tracking-widest text-center md:text-left">
                        © 2026 Natalia Caviedes | Cámara 103
                    </p>
                    <div className="flex gap-8 text-slate-400 text-xs uppercase tracking-widest">
                        <a href="#" className="hover:text-green-600 transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-green-600 transition-colors">Términos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
