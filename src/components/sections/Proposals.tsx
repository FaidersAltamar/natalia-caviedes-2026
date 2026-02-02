import React from 'react';
import { BANDERAS, LINES_OF_ACTION } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const Proposals = () => {
    return (
        <section id="propuestas" className="py-40 bg-gradient-to-b from-white via-green-50/20 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-green-100/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-green-50/20 rounded-full blur-3xl"></div>

            <div className="max-w-[95rem] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-2.5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] mb-6 shadow-lg border-2 border-green-200">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            Plan de Trabajo 2026
                        </span>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display text-slate-900 tracking-tighter leading-[0.9] uppercase mb-4">
                            Nuestras <br />
                            <span className="gradient-text">Banderas.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
                            Pilares fundamentales para la transformación del Huila. Propuestas construidas desde el territorio.
                        </p>
                    </div>
                </div>

                {/* Cards Grid - Modern Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Featured Card - Takes 2 columns */}
                    {BANDERAS.slice(0, 1).map((b, i) => (
                        <div
                            key={i}
                            className="group relative md:col-span-2 lg:col-span-2 rounded-[2.5rem] p-12 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl min-h-[500px]"
                        >
                            {/* Background gradient decoration */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

                            {/* Icon */}
                            <div className="relative z-10 mb-8">
                                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                                    <div className="text-white scale-125">{b.icon}</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex-1 flex flex-col">
                                <h3 className="text-4xl md:text-5xl font-display leading-tight mb-6 uppercase italic text-white">
                                    {b.title}
                                </h3>
                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-8 flex-1">
                                    {b.desc}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest pt-6 border-t border-white/20">
                                    <span>Ver Propuesta Completa</span>
                                    <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Regular Cards - Smaller */}
                    {BANDERAS.slice(1).map((b, i) => (
                        <div
                            key={i}
                            className="group relative rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden bg-white border-2 border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-green-200 min-h-[400px]"
                        >
                            {/* Subtle background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon */}
                            <div className="relative z-10 mb-6">
                                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center border-2 border-green-100 group-hover:bg-green-100 group-hover:border-green-300 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                                    <div className="text-green-600 scale-110">{b.icon}</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex-1 flex flex-col">
                                <h3 className="text-2xl md:text-3xl font-display gradient-text leading-tight mb-4 uppercase italic">
                                    {b.title}
                                </h3>
                                <p className="text-base text-slate-600 leading-relaxed font-light mb-6 flex-1">
                                    {b.desc}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-bold text-xs uppercase tracking-widest pt-4 border-t border-slate-100 group-hover:border-green-100">
                                    <span>Ver Propuesta Completa</span>
                                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="group relative rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-600 to-green-700 text-white shadow-2xl hover:shadow-green-600/50 transition-all duration-500 hover:-translate-y-2 min-h-[400px] overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-display uppercase italic drop-shadow-lg">¿Tienes una idea?</h3>
                            <p className="text-green-50 text-lg leading-relaxed max-w-xs mx-auto">
                                Tu voz construye este proyecto. Cuéntanos qué necesita tu comunidad.
                            </p>
                            <a href="#contacto" className="inline-block bg-white text-green-700 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-xl">
                                Escríbenos
                            </a>
                        </div>
                    </div>
                </div>

                {/* Líneas de Acción Section */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-2.5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] mb-6 shadow-sm border border-green-200">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Ejes Estratégicos
                        </span>
                        <h2 className="text-5xl md:text-7xl font-display text-slate-900 uppercase tracking-tighter mb-4">
                            Líneas de <span className="gradient-text italic">Acción.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {LINES_OF_ACTION.map((line, i) => (
                            <div key={i} className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {line.icon}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
                                    {line.title}
                                </h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    {line.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Proposals;
