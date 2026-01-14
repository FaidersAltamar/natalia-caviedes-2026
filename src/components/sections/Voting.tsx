import React from 'react';
import { IMAGES } from '../../constants';

const Voting = () => {
    return (
        <section id="votar" className="py-48 bg-gradient-to-b from-white via-green-50/30 to-white text-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-green-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-green-50/30 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-12 gap-24 items-center">
                <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 via-green-600 to-green-700 text-white px-12 py-6 rounded-3xl mb-14 shadow-2xl shadow-green-600/50 transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105 border-2 border-green-500/30">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="text-4xl font-display italic tracking-tighter drop-shadow-xl">HUILA ES CONTIGO</span>
                    </div>
                    <h2 className="text-8xl md:text-[12rem] font-display leading-[0.75] mb-24 tracking-tighter italic uppercase drop-shadow-sm">
                        VOTA <br /><span className="gradient-text drop-shadow-[0_4px_30px_rgba(22,163,74,0.4)]">103 VERDE.</span>
                    </h2>
                    <div className="space-y-8">
                        {[
                            { n: "01", t: "Busca el Girasol", d: "En el tarjetón de Cámara Huila." },
                            { n: "02", t: "Marca el Girasol", d: "Partido Alianza Verde." },
                            { n: "03", t: "Marca el 103", d: "Número de Natalia Caviedes." }
                        ].map((step, i) => (
                            <div key={i} className="group relative flex gap-10 items-start p-8 rounded-3xl hover:bg-white/80 transition-all duration-300 border-2 border-transparent hover:border-green-200/60 hover:shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative z-10 text-9xl font-display gradient-text group-hover:scale-110 transition-transform leading-none drop-shadow-sm">{step.n}</span>
                                <div className="relative z-10 pt-6 border-l-[6px] border-green-300 pl-10 group-hover:border-green-500 transition-all">
                                    <h4 className="text-4xl font-black uppercase italic text-slate-950 mb-4 tracking-tight group-hover:text-green-700 transition-colors drop-shadow-sm">{step.t}</h4>
                                    <p className="text-slate-600 text-xl font-light group-hover:text-slate-700 transition-colors">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5 perspective-1000">
                    <div className="bg-white rounded-[5rem] p-6 shadow-[0_60px_100px_rgba(0,0,0,0.25)] border-[24px] border-slate-900 w-full max-w-lg transform rotate-y-12 transition-all duration-1000 overflow-hidden relative group hover:rotate-y-6 hover:scale-105">
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-green-600 rounded-[5rem] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
                        
                        <img
                            src={IMAGES.BALLOT_IMAGE}
                            alt="Tarjetón Oficial Cámara 103"
                            className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity">
                            <div className="text-[400px] font-display gradient-text rotate-12 blur-sm">X</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Voting;
