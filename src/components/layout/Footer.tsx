import React from 'react';
import { Facebook, Twitter, Instagram, Map, Mail } from 'lucide-react';
import { IMAGES } from '../../constants';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-slate-50 via-white to-white text-slate-900 pt-32 pb-16 relative overflow-hidden border-t border-green-100/50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            
            {/* Decorative background */}
            <div className="absolute bottom-0 right-0 w-[30vw] h-[30vw] bg-green-50/30 rounded-full blur-3xl"></div>

            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-6 mb-2">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-green-100/40 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <img src={IMAGES.PARTY_LOGO} className="h-16 w-auto object-contain transition-transform hover:scale-110 relative z-10" alt="Alianza Verde" />
                            </div>
                            <div className="h-12 w-px bg-gradient-to-b from-transparent via-green-300 to-transparent"></div>
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-green-100/40 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <img src={IMAGES.NAME_LOGO} className="h-18 w-auto object-contain transition-transform hover:scale-110 relative z-10 drop-shadow-sm" alt="Natalia Caviedes" />
                            </div>
                        </div>
                        <p className="text-slate-600 text-lg max-w-md font-light leading-relaxed">
                            Trabajando incansablemente por un Huila con más oportunidades, justicia social y desarrollo sostenible. Tu voz es nuestra guía.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: "#" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} className="group relative w-14 h-14 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-700 hover:text-white hover:border-green-500 hover:scale-110 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 shadow-sm">
                                    <social.Icon size={22} className="relative z-10" />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div className="lg:col-span-3 lg:pl-10">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-slate-900 mb-8 font-display">Navegación</h4>
                        <ul className="space-y-5">
                            {['Inicio', 'Perfil', 'Trayectoria', 'Propuestas', 'Votar'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-600 hover:text-green-600 hover:pl-3 transition-all duration-300 inline-block font-medium relative group">
                                        {item}
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-green-500 group-hover:w-2 transition-all"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-slate-900 mb-8 font-display">Contacto</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-white/80 transition-all duration-300">
                                <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 group-hover:border-green-400 group-hover:shadow-lg transition-all">
                                    <Map className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 mb-1">Sede Principal</p>
                                    <p className="text-slate-600 text-sm">Neiva, Huila - Colombia</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-white/80 transition-all duration-300">
                                <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 group-hover:border-green-400 group-hover:shadow-lg transition-all">
                                    <Mail className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 mb-1">Email</p>
                                    <p className="text-slate-600 text-sm">contacto@nataliacaviedes.com</p>
                                </div>
                            </div>
                            <a href="#votar" className="group relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-10 py-6 rounded-xl font-bold uppercase tracking-wide w-full block text-center hover:from-green-600 hover:via-green-600 hover:to-green-700 transition-all mt-8 transform hover:-translate-y-1 shadow-xl shadow-slate-900/20 hover:shadow-green-600/40 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Únete al cambio
                                    <span className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-green-100/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs uppercase tracking-widest text-center md:text-left font-medium">
                        © 2026 Natalia Caviedes | Cámara 103
                    </p>
                    <div className="flex gap-8 text-slate-500 text-xs uppercase tracking-widest">
                        <a href="#" className="hover:text-green-600 transition-colors font-medium relative group">
                            Política de Privacidad
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all"></span>
                        </a>
                        <a href="#" className="hover:text-green-600 transition-colors font-medium relative group">
                            Términos de Uso
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
