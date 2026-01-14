import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { PROFILE_INFO } from '../../constants';

const Trajectory = () => {
    return (
        <section id="trayectoria" className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                    <div className="max-w-2xl">
                        <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[12px] block mb-4">MÁS DE 12 AÑOS DE GESTIÓN</span>
                        <h2 className="text-7xl md:text-9xl font-display text-slate-900 tracking-tighter leading-none uppercase">RESULTADOS <br /><span className="text-green-600 italic">QUE SE VEN.</span></h2>
                    </div>
                    <div className="bg-green-50 p-8 rounded-[2.5rem] border border-green-100 max-w-sm">
                        <p className="text-slate-600 text-lg font-light italic leading-relaxed">
                            {PROFILE_INFO.trajectory.intro}
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {PROFILE_INFO.trajectory.points.map((point, i) => (
                        <div key={i} className="group relative">
                            <div className="absolute inset-0 bg-green-600 rounded-[4rem] translate-x-4 translate-y-4 -z-10 opacity-0 group-hover:opacity-100 transition-all"></div>
                            <div className="bg-white p-16 rounded-[4rem] border-2 border-slate-100 shadow-xl flex flex-col items-start h-full group-hover:border-green-600 transition-all">
                                <div className="bg-green-600 text-white w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 shadow-xl shadow-green-600/30 group-hover:rotate-12 transition-transform">
                                    <Award size={36} />
                                </div>
                                <h4 className="text-4xl font-display text-slate-900 mb-6 uppercase italic">
                                    {point.role}
                                </h4>
                                <p className="text-slate-600 text-xl leading-relaxed font-light mb-10">
                                    {point.desc}
                                </p>
                                <div className="mt-auto flex items-center space-x-3 text-green-600 font-black text-xs uppercase tracking-widest">
                                    <span>Conoce el impacto</span>
                                    <ChevronRight size={18} />
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
