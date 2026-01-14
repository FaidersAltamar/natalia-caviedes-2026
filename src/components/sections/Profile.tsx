import React from 'react';
import { Heart, Quote, CheckCircle2 } from 'lucide-react';
import { IMAGES, PROFILE_INFO } from '../../constants';

const Profile = () => {
    return (
        <section id="perfil" className="py-32 md:py-40 bg-white relative overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header centered for impact */}
                <div className="flex flex-col items-center mb-20 lg:mb-28 text-center">
                    <div className="flex items-center space-x-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="h-[3px] w-12 md:w-20 bg-gradient-to-r from-transparent via-green-600 to-green-600 rounded-full"></div>
                        <span className="px-5 py-2 bg-green-50 text-green-700 text-xs font-black uppercase tracking-[0.5em] rounded-full border border-green-200">Liderazgo Femenino</span>
                        <div className="h-[3px] w-12 md:w-20 bg-gradient-to-l from-transparent via-green-600 to-green-600 rounded-full"></div>
                    </div>
                    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        <div className="relative inline-block">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-200/40 to-green-100/40 rounded-2xl blur-xl"></div>
                            <img src={IMAGES.NAME_LOGO} className="h-20 md:h-28 w-auto object-contain mx-auto relative z-10 drop-shadow-lg" alt="Natalia Caviedes" />
                        </div>
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
                        <div className="absolute top-8 -right-2 md:-right-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-7 rounded-full shadow-2xl z-20 w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center border-4 border-white/90 animate-float hover:scale-110 transition-transform">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-xl"></div>
                            <Heart className="text-green-400 mb-2 relative z-10" size={28} fill="currentColor" />
                            <p className="text-[10px] md:text-[11px] font-black uppercase text-center leading-tight tracking-widest relative z-10">Amor<br />por el<br />Huila</p>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
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

                        <div className="pt-6 border-t-2 border-gradient-to-r from-green-200 to-transparent mt-6">
                            <div className="flex flex-wrap gap-3">
                                {PROFILE_INFO.roles.map((role, i) => (
                                    <span key={i} className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-green-50 to-green-100/50 text-green-700 text-[10px] font-black uppercase tracking-widest border-2 border-green-200 hover:border-green-400 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-lg hover:scale-105">
                                        {role}
                                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Quote Card (Span 4 on XL) */}
                    <div className="lg:col-span-12 xl:col-span-4 h-full min-h-[400px]">
                        <div className="bg-gradient-to-br from-green-600 via-green-600 to-green-700 text-white p-10 md:p-12 rounded-[3rem] h-full relative overflow-hidden shadow-2xl shadow-green-600/40 flex flex-col justify-center group hover:scale-[1.02] transition-all duration-500">
                            {/* Decorative background circles */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                            
                            {/* Grid pattern overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-5"></div>

                            <Quote className="text-green-200/50 mb-8 transform group-hover:scale-110 transition-transform relative z-10" size={80} fill="currentColor" />

                            <p className="text-xl md:text-2xl font-medium italic leading-relaxed relative z-10 mb-8 drop-shadow-lg">
                                {PROFILE_INFO.challenge.text}
                            </p>

                            <div className="mt-auto flex items-center space-x-4 pt-8 border-t border-white/30 relative z-10">
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-xl group-hover:bg-white group-hover:text-green-700 transition-all">
                                    <CheckCircle2 size={28} />
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
