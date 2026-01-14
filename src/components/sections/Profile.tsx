import React from 'react';
import { Heart, Quote, CheckCircle2 } from 'lucide-react';
import { IMAGES, PROFILE_INFO } from '../../constants';

const Profile = () => {
    return (
        <section id="perfil" className="py-32 md:py-40 bg-white relative overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header centered for impact */}
                <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
                    <div className="flex items-center space-x-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="h-[2px] w-8 md:w-12 bg-green-600"></div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Liderazgo Femenino</span>
                        <div className="h-[2px] w-8 md:w-12 bg-green-600"></div>
                    </div>
                    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        <img src={IMAGES.NAME_LOGO} className="h-16 md:h-24 w-auto object-contain mx-auto" alt="Natalia Caviedes" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* Column 1: Image (Span 4 on XL) */}
                    <div className="lg:col-span-5 xl:col-span-4 relative group perspective-1000">
                        <div className="absolute inset-0 bg-green-50 rounded-[3rem] transform -rotate-2 transition-transform group-hover:rotate-0 border-2 border-green-100/50"></div>
                        <div className="relative bg-white p-2 rounded-[3rem] shadow-xl overflow-hidden aspect-[3/4] transform transition-transform group-hover:-translate-y-2 duration-500">
                            <img
                                src={IMAGES.CANDIDATE_PHOTO}
                                alt="Natalia Perfil"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 via-transparent to-transparent"></div>
                        </div>

                        {/* Badge */}
                        <div className="absolute top-8 -right-2 md:-right-8 bg-slate-950 text-white p-6 rounded-full shadow-2xl z-20 w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center border-4 border-white animate-float">
                            <Heart className="text-green-500 mb-1" size={24} fill="currentColor" />
                            <p className="text-[9px] md:text-[10px] font-black uppercase text-center leading-tight tracking-widest">Amor<br />por el<br />Huila</p>
                        </div>
                    </div>

                    {/* Column 2: Biography & Tags (Span 4 on XL) */}
                    <div className="lg:col-span-7 xl:col-span-4 flex flex-col justify-center space-y-8 py-4 lg:px-4">
                        <div>
                            <h3 className="text-3xl md:text-5xl font-display text-green-600 italic mb-6 leading-none">HUILENSE <br /><span className="text-slate-900">DE CORAZÓN.</span></h3>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                                <p>
                                    "Soy una mujer de carácter que ha forjado su camino con preparación y valentía. Como Natalia Caviedes Chinchilla, entiendo que la política es la herramienta para transformar realidades."
                                </p>
                                <p className="font-medium text-slate-800">
                                    Mi historia es la de miles de huilenses que trabajan duro por sus sueños y merecen ser escuchados en el Congreso.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 mt-4">
                            <div className="flex flex-wrap gap-3">
                                {PROFILE_INFO.roles.map((role, i) => (
                                    <span key={i} className="px-5 py-2 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest border border-green-100 hover:bg-green-600 hover:text-white transition-all cursor-default">
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Quote Card (Span 4 on XL) */}
                    <div className="lg:col-span-12 xl:col-span-4 h-full min-h-[400px]">
                        <div className="bg-green-600 text-white p-10 md:p-12 rounded-[3rem] h-full relative overflow-hidden shadow-2xl shadow-green-600/30 flex flex-col justify-center group hover:scale-[1.02] transition-transform duration-500">
                            {/* Decorative background circles */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <Quote className="text-green-300/40 mb-8 transform group-hover:scale-110 transition-transform" size={80} fill="currentColor" />

                            <p className="text-xl md:text-2xl font-medium italic leading-relaxed relative z-10 mb-8">
                                {PROFILE_INFO.challenge.text}
                            </p>

                            <div className="mt-auto flex items-center space-x-4 pt-8 border-t border-white/20">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-700 shadow-lg">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <p className="font-display text-lg uppercase italic">Garantía Verde</p>
                                    <p className="text-xs text-green-100 uppercase tracking-widest">Compromiso Total</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Profile;
