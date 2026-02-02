import React, { useState } from 'react';
import { Award, ChevronRight, X, Star, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO } from '../../constants';

const Trajectory = () => {
    const [selectedPoint, setSelectedPoint] = useState<null | typeof PROFILE_INFO.trajectory.points[0]>(null);

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
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-slate-900 tracking-tighter leading-none uppercase mb-6 drop-shadow-sm">
                            {PROFILE_INFO.trajectory.title.split(':')[0]} <br />
                            <span className="gradient-text italic drop-shadow-[0_4px_20px_rgba(22,163,74,0.3)]">
                                {PROFILE_INFO.trajectory.title.split(':')[1]}
                            </span>
                        </h2>
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
                                        {React.cloneElement(point.icon as React.ReactElement, { size: 40, strokeWidth: 1.5, className: 'text-white' })}
                                    </div>
                                </div>

                                <h4 className="text-4xl md:text-5xl font-display gradient-text mb-8 uppercase italic group-hover:scale-105 transition-transform drop-shadow-sm">
                                    {point.role}
                                </h4>
                                <p className="text-slate-600 text-lg leading-relaxed font-light mb-12 group-hover:text-slate-700 transition-colors">
                                    {point.desc}
                                </p>

                                <button
                                    onClick={() => setSelectedPoint(point)}
                                    className="mt-auto flex items-center space-x-4 text-green-600 font-black text-xs uppercase tracking-widest group-hover:text-green-700 transition-colors px-4 py-2 rounded-full bg-green-50/50 group-hover:bg-green-100/70 transition-all w-full md:w-auto"
                                >
                                    <span>Conoce el impacto</span>
                                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Footer Section */}
                <div className="mt-24 pt-16 border-t-2 border-green-100 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <h4 className="text-3xl font-display text-slate-900 uppercase italic mb-4">Experiencia que garantiza <span className="text-green-600">Confianza.</span></h4>
                        <p className="text-slate-600 text-lg font-light leading-relaxed">
                            Natalia no solo conoce el Huila desde la teoría; lo ha gestionado desde la práctica, enfrentando desafíos reales y entregando resultados medibles. Su trayectoria es la garantía de que su voz en el Congreso tendrá el respaldo de la experiencia.
                        </p>
                    </div>
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-green-100 flex items-center justify-center overflow-hidden shadow-lg">
                                <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Huilense" className="w-full h-full object-cover grayscale opacity-80" />
                            </div>
                        ))}
                        <div className="w-16 h-16 rounded-full border-4 border-white bg-green-600 text-white flex items-center justify-center font-bold text-xs shadow-lg">
                            +10k
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Modal Overlay */}
            {selectedPoint && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-opacity animate-in fade-in"
                        onClick={() => setSelectedPoint(null)}
                    ></div>

                    <div className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100 flex flex-col md:flex-row max-h-[90vh]">
                        {/* Left Side: Visual */}
                        <div className="w-full md:w-1/3 bg-gradient-to-br from-green-600 to-green-800 p-12 flex flex-col items-center justify-center text-white text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0.1rem,transparent_0.1rem)] bg-[size:1.5rem_1.5rem] opacity-10"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 bg-white/20 rounded-[2rem] flex items-center justify-center mb-8 backdrop-blur-md border border-white/30 shadow-2xl mx-auto">
                                    {React.cloneElement(selectedPoint.icon as React.ReactElement, { size: 60, className: 'text-white' })}
                                </div>
                                <h4 className="text-2xl font-display uppercase italic text-green-50 leading-tight">Hechos <br /> Reales</h4>
                                <div className="mt-8 bg-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">Resultados Natalia</div>
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="w-full md:w-2/3 p-10 md:p-16 flex flex-col overflow-y-auto custom-scrollbar">
                            <button
                                onClick={() => setSelectedPoint(null)}
                                className="absolute top-8 right-8 p-3 rounded-full hover:bg-slate-50 transition-colors group z-20"
                            >
                                <X size={24} className="text-slate-400 group-hover:text-slate-900" />
                            </button>

                            <div className="relative z-10">
                                <span className="text-green-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Impacto en la Gestión</span>
                                <h3 className="text-4xl md:text-5xl font-display text-slate-900 leading-[0.9] uppercase italic mb-8">
                                    {selectedPoint.role}
                                </h3>

                                <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-10 shadow-lg shadow-green-500/20"></div>

                                <div className="bg-green-50/50 p-10 rounded-[2.5rem] border border-green-100/50 mb-10">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-green-600 flex-shrink-0 mt-1">
                                            <CheckCircle2 size={24} strokeWidth={2.5} />
                                        </div>
                                        <p className="text-slate-700 text-xl leading-relaxed font-light italic">
                                            "{selectedPoint.detailedImpact}"
                                        </p>
                                    </div>
                                    <div className="pl-14">
                                        <p className="text-slate-500 text-sm font-light">
                                            Este logro es parte del compromiso inquebrantable de Natalia con el bienestar de todos los huilenses.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedPoint(null)}
                                    className="w-full md:w-auto bg-slate-900 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-green-700 transition-all duration-300 shadow-xl shadow-slate-900/30"
                                >
                                    Entendido
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Trajectory;
