import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { PROFILE_INFO } from '../../constants';

const Trajectory = () => {
    return (
        <section id="trayectoria" className="py-40 bg-gradient-to-b from-white to-green-50/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-green-100/20 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-green-50 text-green-700 font-black uppercase tracking-[0.4em] text-xs rounded-full mb-8 border-2 border-green-200/60 shadow-sm">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            MÁS DE 12 AÑOS DE GESTIÓN
                        </span>
                        <h2 className="text-7xl md:text-9xl font-display text-slate-900 tracking-tighter leading-none uppercase mb-6 drop-shadow-sm">RESULTADOS <br /><span className="gradient-text italic drop-shadow-[0_4px_20px_rgba(22,163,74,0.3)]">QUE SE VEN.</span></h2>
                    </div>
                    <div className="glass-color p-12 rounded-[2.5rem] max-w-sm border-2 border-green-200/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-transparent rounded-tl-[2.5rem] rounded-br-full"></div>
                        <p className="text-slate-700 text-lg font-light italic leading-relaxed relative z-10">
                            {PROFILE_INFO.trajectory.intro}
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {PROFILE_INFO.trajectory.points.map((point, i) => (
                        <div key={i} className="group relative">
                            {/* Shadow card behind */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-[3rem] translate-x-6 translate-y-6 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                            
                            <div className="relative card-modern p-14 flex flex-col items-start h-full group-hover:border-green-400/60 border-2">
                                {/* Icon with gradient background */}
                                <div className="relative mb-12">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="relative bg-gradient-to-br from-green-600 via-green-600 to-green-700 text-white w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-600/50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border-2 border-green-500/30">
                                        <Award size={40} strokeWidth={1.5} />
                                    </div>
                                </div>
                                
                                <h4 className="text-5xl font-display gradient-text mb-8 uppercase italic group-hover:scale-105 transition-transform drop-shadow-sm">
                                    {point.role}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-light mb-12 group-hover:text-slate-700 transition-colors">
                                    {point.desc}
                                </p>
                                
                                <div className="mt-auto flex items-center space-x-4 text-green-600 font-black text-xs uppercase tracking-widest group-hover:text-green-700 transition-colors px-4 py-2 rounded-full bg-green-50/50 group-hover:bg-green-100/70 transition-all">
                                    <span>Conoce el impacto</span>
                                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trajectory;
