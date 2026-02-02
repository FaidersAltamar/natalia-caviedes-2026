import React from 'react';
import { TrendingUp } from 'lucide-react';
import { HUILA_STATS } from '../../constants';

const Impact = () => {
    return (
        <section id="impacto" className="bg-gradient-to-b from-white via-green-50/20 to-white py-40 relative overflow-hidden border-t border-green-100/50">
            {/* Background Giant Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display text-transparent bg-clip-text bg-gradient-to-b from-green-100/40 to-transparent select-none leading-none">
                103
            </div>

            {/* Marquee */}
            <div className="relative z-10 mb-32 -rotate-2 scale-110 opacity-60">
                <div className="flex animate-marquee items-center whitespace-nowrap">
                    {[1, 2, 3, 4].map(i => (
                        <React.Fragment key={i}>
                            <span className="text-7xl md:text-9xl font-display text-transparent [-webkit-text-stroke:2px_#e2e8f0] mx-8 italic hover:text-slate-100 transition-colors duration-500 cursor-default">
                                HUILA CON CARÁCTER
                            </span>
                            <span className="text-7xl md:text-9xl font-display text-green-500 mx-8 italic drop-shadow-sm">
                                #103
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Header Content */}
            <div className="max-w-7xl mx-auto px-8 mb-24 relative z-20 text-center">
                <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-2.5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] mb-8 shadow-sm border border-green-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
                    Hechos Reales
                </span>
                <h2 className="text-6xl md:text-8xl font-display text-slate-900 tracking-tighter leading-none uppercase mb-8">
                    Conoce el <span className="gradient-text italic">Impacto.</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
                    Nuestra gestión se mide en resultados tangibles. Desde Palermo hasta cada rincón del Huila, hemos demostrado que con voluntad y transparencia, el progreso es posible.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="max-w-[100rem] mx-auto px-8 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {HUILA_STATS.map((stat, i) => {
                        const isCompromiso = stat.label === "Compromiso Huila";
                        return (
                            <div key={i} className={`group relative card-modern hover:-translate-y-3 border-2 transition-all duration-300 overflow-hidden ${isCompromiso
                                ? 'border-green-200 bg-white hover:border-green-300 hover:shadow-2xl p-10 md:p-12'
                                : 'border-slate-100 hover:border-green-200 p-12'
                                }`}>
                                {/* Background gradient on hover */}
                                <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isCompromiso
                                    ? 'bg-gradient-to-br from-green-50/80 via-white to-green-50/40'
                                    : 'bg-gradient-to-br from-green-50/60 via-white to-green-50/30'
                                    }`}></div>

                                {/* Decorative icon - solo para las que no son compromiso */}
                                {!isCompromiso && (
                                    <div className="absolute -right-8 -bottom-8 text-green-100/40 group-hover:text-green-200/60 transform rotate-12 transition-all duration-700 group-hover:scale-125 group-hover:rotate-6">
                                        <TrendingUp size={140} strokeWidth={1} />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`flex items-baseline mb-6 ${isCompromiso ? 'gap-2 md:gap-3' : 'gap-2'} flex-nowrap`}>
                                        <p className={`font-display text-green-600 group-hover:text-green-700 transition-colors leading-none tracking-tight whitespace-nowrap ${isCompromiso
                                            ? 'text-7xl md:text-8xl lg:text-9xl'
                                            : 'text-8xl md:text-9xl'
                                            }`}>
                                            {stat.value.replace('%', '')}
                                        </p>
                                        {stat.value.includes('%') && (
                                            <span className={`font-display text-green-600 group-hover:text-green-700 transition-colors leading-none ${isCompromiso ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-5xl md:text-6xl'
                                                }`}>%</span>
                                        )}
                                    </div>
                                    <div className={`bg-green-600 rounded-full mb-6 group-hover:w-full transition-all duration-500 ${isCompromiso ? 'w-28 md:w-32 h-1.5 md:h-2' : 'w-24 h-1.5'
                                        }`}></div>
                                    <p className={`font-bold uppercase tracking-[0.4em] text-green-700 group-hover:text-green-800 transition-colors leading-tight ${isCompromiso ? 'text-sm md:text-base' : 'text-xs md:text-sm'
                                        }`}>
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full"></div>

                                {/* Corner accent - solo para compromiso */}
                                {isCompromiso && (
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-[2rem] rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Impact;
