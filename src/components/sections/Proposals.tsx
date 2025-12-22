import React from 'react';
import { BANDERAS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const Proposals = () => {
    return (
        <section id="propuestas" className="py-40 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div>
                        <span className="bg-green-600 text-white px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-[10px] mb-6 inline-block">Plan de Trabajo 2026</span>
                        <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-none uppercase">
                            Nuestras <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800">Banderas.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-slate-500 text-lg leading-relaxed mb-4">
                        Pilares fundamentales para la transformación del Huila. Propuestas construidas desde el territorio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {BANDERAS.map((b, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
               ${i === 0 ? 'lg:col-span-2 bg-slate-900 text-white' : 'bg-white text-slate-900 border border-slate-100'}
               `}
                        >
                            {/* Background Decoration */}
                            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 transition-all duration-700 group-hover:scale-150
                 ${i === 0 ? 'bg-green-500' : 'bg-green-200'}
              `}></div>

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:rotate-12
                    ${i === 0 ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600'}
                 `}>
                                    {b.icon}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-display font-black leading-tight mb-4 uppercase italic">
                                    {b.title}
                                </h3>
                            </div>

                            <div className="relative z-10">
                                <p className={`text-lg leading-relaxed mb-8 font-light
                    ${i === 0 ? 'text-slate-300' : 'text-slate-500'}
                 `}>
                                    {b.desc}
                                </p>

                                <div className={`flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-colors
                    ${i === 0 ? 'text-green-400 group-hover:text-white' : 'text-green-600 group-hover:text-green-800'}
                 `}>
                                    <span>Ver Propuesta Completa</span>
                                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="bg-green-600 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-3xl font-display font-black uppercase italic">¿Tienes una idea?</h3>
                            <p className="text-green-100">Tu voz construye este proyecto. Cuéntanos qué necesita tu comunidad.</p>
                            <a href="#contacto" className="inline-block bg-white text-green-800 px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
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
