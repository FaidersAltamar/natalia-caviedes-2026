import React from 'react';
import { TrendingUp } from 'lucide-react';
import { HUILA_STATS } from '../../constants';

const Impact = () => {
    return (
        <section className="bg-white py-32 relative overflow-hidden border-t border-slate-50">
            {/* Background Giant Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display text-slate-50 select-none leading-none opacity-60">
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
                        <div key={i} className="group relative bg-white border border-slate-100 p-10 rounded-[2.5rem] hover:border-green-500 hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 hover:-translate-y-4 overflow-hidden">
                            <div className="absolute -right-4 -bottom-4 text-green-50 group-hover:text-green-500/10 transform rotate-12 transition-colors duration-500">
                                <TrendingUp size={100} />
                            </div>

                            <p className="text-6xl font-display text-slate-900 group-hover:scale-110 transition-transform origin-left mb-4 relative z-10 tracking-tight">{stat.value}</p>
                            <div className="w-12 h-1 bg-green-500 group-hover:w-full transition-all duration-500 relative z-10"></div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 group-hover:text-slate-600 transition-colors relative z-10 mt-6">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
