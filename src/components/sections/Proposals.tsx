import React from 'react';
import { BANDERAS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const Proposals = () => {
    return (
        <section id="propuestas" className="py-40 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-28 gap-10">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-7 py-3 rounded-full font-black uppercase tracking-[0.35em] text-[10px] mb-8 shadow-xl shadow-green-600/30 border-2 border-green-500/30">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            Plan de Trabajo 2026
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-slate-900 tracking-tighter leading-none uppercase drop-shadow-sm">
                            Nuestras <br />
                            <span className="gradient-text drop-shadow-[0_4px_20px_rgba(22,163,74,0.25)]">Banderas.</span>
                        </h2>
                    </div>
                    <div className="glass-color p-8 rounded-2xl max-w-md border-2 border-green-100/50 shadow-lg">
                        <p className="text-slate-600 text-lg leading-relaxed font-light">
                            Pilares fundamentales para la transformación del Huila. Propuestas construidas desde el territorio.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[420px]">
                    {BANDERAS.map((b, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-3
               ${i === 0 ? 'lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl shadow-slate-900/50' : 'card-modern text-slate-900'}
               `}
                        >
                            {/* Background Decoration */}
                            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-30 transition-all duration-700 group-hover:scale-150 group-hover:opacity-50
                 ${i === 0 ? 'bg-green-500' : 'bg-green-200'}
              `}></div>

                            <div className="relative z-10">
                                <div className={`relative mb-8
                    ${i === 0 ? '' : ''}
                 `}>
                                    <div className={`absolute inset-0 rounded-2xl blur-lg opacity-50 transition-opacity group-hover:opacity-75
                        ${i === 0 ? 'bg-green-500' : 'bg-green-200'}
                                    `}></div>
                                    <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 border-2
                        ${i === 0 ? 'bg-gradient-to-br from-green-600 to-green-700 text-white border-green-500/30' : 'bg-gradient-to-br from-green-50 to-green-100 text-green-600 border-green-200/60'}
                     `}>
                                        <div className="relative z-10">{b.icon}</div>
                                    </div>
                                </div>
                                <h3 className={`text-3xl md:text-4xl font-display leading-tight mb-4 uppercase italic transition-transform group-hover:scale-105
                                    ${i === 0 ? 'text-white' : 'gradient-text'}
                                `}>
                                    {b.title}
                                </h3>
                            </div>

                            <div className="relative z-10">
                                <p className={`text-lg leading-relaxed mb-8 font-light
                    ${i === 0 ? 'text-slate-300' : 'text-slate-500'}
                 `}>
                                    {b.desc}
                                </p>

                                <div className={`flex items-center gap-3 font-bold text-xs uppercase tracking-widest transition-all px-4 py-2 rounded-full
                    ${i === 0 ? 'text-green-300 group-hover:text-white bg-white/10 group-hover:bg-white/20' : 'text-green-600 group-hover:text-green-700 bg-green-50 group-hover:bg-green-100'}
                 `}>
                                    <span>Ver Propuesta Completa</span>
                                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="bg-gradient-to-br from-green-600 via-green-600 to-green-700 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group shadow-2xl shadow-green-600/40">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                        
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-3xl font-display uppercase italic drop-shadow-lg">¿Tienes una idea?</h3>
                            <p className="text-green-50 text-lg leading-relaxed">Tu voz construye este proyecto. Cuéntanos qué necesita tu comunidad.</p>
                            <a href="#contacto" className="inline-block bg-white text-green-700 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-xl group-hover:bg-green-50">
                                Escríbenos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Proposals;
