import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../../constants';

const Contact = () => {
    return (
        <section className="py-40 bg-gradient-to-br from-green-600 via-green-600 to-green-700 relative overflow-hidden">
            {/* Gradient subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/60 to-green-800/60 pointer-events-none"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <div className="mb-8">
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-black uppercase tracking-[0.3em] border border-white/30">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        Conectemos
                    </span>
                </div>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic tracking-tighter uppercase leading-none mb-14 drop-shadow-2xl">
                    <span className="text-white">Tu voz es </span>
                    <span className="text-white/90">El</span>
                    <br />
                    <span className="text-white">Motor.</span>
                </h2>

                <p className="text-white/95 text-xl md:text-2xl font-light italic max-w-2xl mx-auto leading-relaxed mb-16 drop-shadow-lg">
                    Hablemos hoy. Natalia está lista para escucharte y <br className="hidden md:block" />
                    llevar tus propuestas al Congreso Nacional.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href={WHATSAPP_LINK} target="_blank" className="group relative bg-white text-green-700 px-12 py-6 rounded-full font-bold text-sm md:text-base flex items-center gap-4 hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-xl shadow-green-900/40 w-full sm:w-auto justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform relative z-10" strokeWidth={2} />
                        <span className="relative z-10">CHATEA CON NOSOTROS</span>
                    </a>
                    <a href="mailto:info@nataliacaviedes.com" className="text-white border-2 border-white/50 px-12 py-6 rounded-full font-bold text-sm md:text-base hover:bg-white/25 hover:border-white/80 transition-all duration-300 w-full sm:w-auto justify-center flex backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105">
                        ENVIAR PROPUESTA
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
