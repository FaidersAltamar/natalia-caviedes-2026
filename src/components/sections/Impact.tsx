import React from 'react';
import { TrendingUp } from 'lucide-react';
import { HUILA_STATS } from '../../constants';

const Impact = () => {
    return (
        <section className="bg-gradient-to-b from-white via-green-50/20 to-white py-40 relative overflow-hidden border-t border-green-100/50">
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

            {/* Stats Cards */}
            <div className="max-w-7xl mx-auto px-8 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {HUILA_STATS.map((stat, i) => (
                        <div key={i} className="group relative card-modern p-12 hover:-translate-y-3 border-2 border-slate-100 hover:border-green-200">
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-white to-green-50/30 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Decorative icon */}
                            <div className="absolute -right-8 -bottom-8 text-green-100/40 group-hover:text-green-200/60 transform rotate-12 transition-all duration-700 group-hover:scale-125 group-hover:rotate-6">
                                <TrendingUp size={140} strokeWidth={1} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <p className="text-8xl font-display gradient-text group-hover:scale-110 transition-transform origin-left mb-8 tracking-tight drop-shadow-sm">{stat.value}</p>
                                <div className="relative mb-8">
                                    <div className="w-20 h-2 bg-gradient-to-r from-green-500 via-green-600 to-green-500 rounded-full group-hover:w-full transition-all duration-700 shadow-lg shadow-green-500/30"></div>
                                    <div className="absolute top-0 left-0 w-20 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-50 group-hover:w-full transition-all duration-700 blur-sm"></div>
                                </div>
                                <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-600 group-hover:text-green-700 transition-colors">{stat.label}</p>
                            </div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full"></div>
                            
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-[2rem] rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
