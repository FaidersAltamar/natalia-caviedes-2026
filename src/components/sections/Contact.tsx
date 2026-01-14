import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-32 bg-green-600 relative overflow-hidden">
            {/* Gradient subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/50 to-green-700/50 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic tracking-tighter uppercase leading-none mb-10">
                    <span className="text-white">Tu voz es </span>
                    <span className="text-slate-900">El</span>
                    <br />
                    <span className="text-slate-900">Motor.</span>
                </h2>

                <p className="text-white/90 text-lg md:text-2xl font-light italic max-w-2xl mx-auto leading-relaxed mb-14">
                    Hablemos hoy. Natalia está lista para escucharte y <br className="hidden md:block" />
                    llevar tus propuestas al Congreso Nacional.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <a href="https://wa.me/573000000000" target="_blank" className="bg-white text-green-800 px-8 py-4 rounded-full font-bold text-sm md:text-base flex items-center gap-3 hover:scale-105 transition-all shadow-lg hover:shadow-green-900/20 group w-full sm:w-auto justify-center">
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                        CHATEA CON NOSOTROS
                    </a>
                    <a href="mailto:info@nataliacaviedes.com" className="text-white border border-white/30 px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all w-full sm:w-auto justify-center flex">
                        ENVIAR PROPUESTA
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
