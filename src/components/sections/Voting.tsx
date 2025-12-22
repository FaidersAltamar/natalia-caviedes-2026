import React from 'react';
import { IMAGES } from '../../constants';

const Voting = () => {
    return (
        <section id="votar" className="py-48 bg-white text-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-12 gap-24 items-center">
                <div className="lg:col-span-7">
                    <div className="inline-block bg-green-600 text-white px-8 py-4 rounded-3xl mb-12 shadow-2xl shadow-green-600/30 transform -rotate-2">
                        <span className="text-4xl font-display font-black italic tracking-tighter">HUILA ES CONTIGO</span>
                    </div>
                    <h2 className="text-8xl md:text-[12rem] font-display font-black leading-[0.75] mb-20 tracking-tighter italic uppercase">
                        VOTA <br /><span className="text-green-600">103 VERDE.</span>
                    </h2>
                    <div className="space-y-16">
                        {[
                            { n: "01", t: "Busca el Girasol", d: "En el tarjetón de Cámara Huila." },
                            { n: "02", t: "Marca el Girasol", d: "Partido Alianza Verde." },
                            { n: "03", t: "Marca el 103", d: "Número de Natalia Caviedes." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-12 items-start group">
                                <span className="text-8xl font-display font-black text-green-100 group-hover:text-green-600 transition-colors leading-none">{step.n}</span>
                                <div className="pt-4 border-l-4 border-slate-100 pl-10 group-hover:border-green-600 transition-colors">
                                    <h4 className="text-4xl font-black uppercase italic text-slate-950 mb-3 tracking-tight">{step.t}</h4>
                                    <p className="text-slate-500 text-2xl font-light">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5 perspective-1000">
                    <div className="bg-white rounded-[5rem] p-4 shadow-[0_60px_100px_rgba(0,0,0,0.2)] border-[20px] border-slate-900 w-full max-w-lg transform rotate-y-12 transition-transform duration-1000 overflow-hidden relative group">
                        <img
                            src={IMAGES.BALLOT_IMAGE}
                            alt="Tarjetón Oficial Cámara 103"
                            className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity">
                            <div className="text-[400px] font-display font-black text-green-600 rotate-12">X</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Voting;
