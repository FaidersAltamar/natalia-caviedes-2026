import React from 'react';
import { Heart, Quote, CheckCircle2 } from 'lucide-react';
import { IMAGES, PROFILE_INFO } from '../../constants';

const Profile = () => {
    return (
        <section id="perfil" className="py-32 md:py-40 bg-gradient-to-b from-white via-green-50/10 to-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-green-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-green-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[95rem] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header centered for impact */}
                <div className="flex flex-col items-center mb-24 lg:mb-32 text-center">
                    <div className="flex items-center space-x-8 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent via-green-500 to-green-500 rounded-full"></div>
                        <span className="px-6 py-2.5 bg-white text-green-700 text-xs font-black uppercase tracking-[0.5em] rounded-full border-2 border-green-200 shadow-sm">Liderazgo Femenino</span>
                        <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent via-green-500 to-green-500 rounded-full"></div>
                    </div>
                    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        <div className="relative inline-block">
                            <div className="absolute -inset-6 bg-gradient-to-r from-green-200/30 to-green-100/30 rounded-3xl blur-2xl"></div>
                            <img src={IMAGES.NAME_LOGO} className="h-24 md:h-32 w-auto object-contain mx-auto relative z-10 drop-shadow-xl" alt="Natalia Caviedes" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* Column 1: Image (Span 4 on XL) */}
                    <div className="lg:col-span-5 xl:col-span-4 relative group">
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-green-100/40 to-green-50/40 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Main image container with green bottom section */}
                        <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden aspect-[3/4] transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-3xl border-2 border-green-100/60">
                            {/* Image with white background */}
                            <div className="absolute inset-0">
                                <img
                                    src={IMAGES.CANDIDATE_PHOTO}
                                    alt="Natalia Perfil"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Badge - Dark circle with heart and text */}
                        <div className="absolute top-8 -right-6 md:-right-10 z-20">
                            <div className="relative">
                                {/* Small green dot above */}
                                <div className="absolute -top-3 right-10 w-4 h-4 bg-green-500 rounded-full z-30 shadow-lg shadow-green-500/50 animate-pulse"></div>

                                {/* Dark circle badge */}
                                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-7 md:p-9 rounded-full shadow-2xl w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center border-4 border-white/95 animate-float hover:scale-110 transition-all duration-300 relative overflow-hidden">
                                    {/* Subtle glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 to-transparent rounded-full blur-2xl"></div>

                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-green-400/5 rounded-full"></div>

                                    {/* Green heart icon */}
                                    <Heart className="text-green-400 mb-3 relative z-10 drop-shadow-lg" size={32} fill="currentColor" />

                                    {/* Text */}
                                    <p className="text-[10px] md:text-[11px] font-black uppercase text-center leading-tight tracking-[0.15em] relative z-10 text-white drop-shadow-sm">
                                        AMOR<br />POR EL<br />HUILA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Biography & Tags (Span 5 on XL for more breathing room) */}
                    <div className="lg:col-span-7 xl:col-span-5 flex flex-col justify-center space-y-8 py-4 lg:px-4">
                        <div>
                            <h3 className="text-3xl md:text-5xl lg:text-5xl font-display text-green-600 italic mb-6 leading-none drop-shadow-sm uppercase tracking-tight">
                                {PROFILE_INFO.whoAmI.title}
                            </h3>
                            <div className="space-y-5 text-lg text-slate-600 leading-relaxed font-light">
                                <p className="relative pl-6 border-l-4 border-green-200">
                                    "{PROFILE_INFO.whoAmI.text}"
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t-2 border-green-100/50 mt-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Roles</p>
                            <div className="flex flex-wrap gap-2.5">
                                {PROFILE_INFO.roles.map((role, i) => (
                                    <span key={i} className="group relative px-5 py-2 rounded-full bg-white text-green-700 text-[10px] font-black uppercase tracking-widest border border-green-200 hover:border-green-500 hover:bg-green-50 transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:scale-105">
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Quote Card (Span 3 on XL for tighter look) */}
                    <div className="lg:col-span-12 xl:col-span-3 h-full min-h-[400px]">
                        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-10 rounded-[2.5rem] h-full relative overflow-hidden shadow-xl shadow-green-600/30 flex flex-col justify-center group hover:scale-[1.02] transition-all duration-500 border border-green-500/30">
                            {/* Decorative background circles */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            {/* Grid pattern overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-5"></div>

                            {/* Quote icon */}
                            <div className="relative z-10 mb-8">
                                <Quote className="text-green-200/40 transform group-hover:scale-110 transition-transform" size={60} fill="currentColor" />
                            </div>

                            <p className="text-lg md:text-xl font-medium italic leading-relaxed relative z-10 mb-8 drop-shadow-lg">
                                {PROFILE_INFO.challenge.text}
                            </p>

                            <div className="mt-auto flex items-center space-x-4 pt-8 border-t border-white/20 relative z-10">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-green-700 transition-all duration-300">
                                    <CheckCircle2 size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="font-display text-lg uppercase italic mb-0.5">Garantía Verde</p>
                                    <p className="text-[10px] text-green-100 uppercase tracking-widest">Compromiso Total</p>
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
