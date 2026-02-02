import React from 'react';
import { Facebook, Twitter, Instagram, Map, Mail, Check, Phone } from 'lucide-react';
import { IMAGES, CONTACT_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK } from '../../constants';

const Footer = () => {
    return (
        <footer className="bg-white text-slate-900 pt-32 pb-12 relative overflow-hidden border-t border-green-100/50">
            {/* Subtle background gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-50/30 via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-[95rem] mx-auto px-6 lg:px-12 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">

                    {/* Brand Column - Left */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Logo/Name */}
                        <div>
                            <div className="flex items-center gap-5 mb-6">
                                <img src={IMAGES.PARTY_LOGO} className="h-14 w-auto object-contain" alt="Alianza Verde" />
                                <div className="h-10 w-px bg-slate-300"></div>
                                <img src={IMAGES.NAME_LOGO} className="h-16 w-auto object-contain" alt="Natalia Caviedes" />
                            </div>
                            <p className="text-slate-600 text-base leading-relaxed font-light max-w-md mb-8">
                                Trabajando incansablemente por un Huila con más oportunidades, justicia social y desarrollo sostenible. Tu voz es nuestra guía.
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-4">
                            {[
                                { Icon: Facebook, href: FACEBOOK_LINK },
                                { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: INSTAGRAM_LINK }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column - Middle */}
                    <div className="lg:col-span-3 lg:pl-6">
                        <h4 className="text-base font-bold uppercase tracking-widest text-slate-900 mb-6 font-display">NAVEGACIÓN</h4>
                        <ul className="space-y-4">
                            {['Inicio', 'Perfil', 'Trayectoria', 'Propuestas', 'Votar'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-slate-600 hover:text-green-600 transition-colors duration-300 inline-block font-medium text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column - Right */}
                    <div className="lg:col-span-4">
                        <h4 className="text-base font-bold uppercase tracking-widest text-slate-900 mb-6 font-display">CONTACTO</h4>
                        <div className="space-y-5 mb-8">
                            {/* Sede Principal */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-green-50 border-2 border-green-200 flex-shrink-0">
                                    <Map className="text-green-600" size={22} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm mb-1">Sede Principal</p>
                                    <p className="text-slate-600 text-sm">Neiva, Huila - Colombia</p>
                                </div>
                            </div>

                            {/* Telefono */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-green-50 border-2 border-green-200 flex-shrink-0">
                                    <Phone className="text-green-600" size={22} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm mb-1">Celular</p>
                                    <p className="text-slate-600 text-sm">{CONTACT_PHONE}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-green-50 border-2 border-green-200 flex-shrink-0">
                                    <Mail className="text-green-600" size={22} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm mb-1">Email</p>
                                    <p className="text-slate-600 text-sm">contacto@nataliacaviedes.com</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="#votar"
                            className="block w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide text-center hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm"
                        >
                            ÚNETE AL CAMBIO
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs uppercase tracking-widest text-center md:text-left">
                        © 2026 NATALIA CAVIEDES | CÁMARA 103
                    </p>
                    <div className="flex gap-6 text-slate-500 text-xs uppercase tracking-widest">
                        <a href="#" className="hover:text-green-600 transition-colors">
                            Política de Privacidad
                        </a>
                        <a href="#" className="hover:text-green-600 transition-colors">
                            Términos de Uso
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
