import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { IMAGES, SLOGAN } from '../../constants';

const Hero = () => {
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      setLoaded(true);
   }, []);

   return (
      <section id="inicio" className="relative min-h-screen w-full bg-gradient-to-br from-white via-green-50/30 to-white flex items-center pt-32 pb-20 overflow-hidden">

         {/* Modern Background Elements */}
         <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-br from-green-100/40 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-green-50/50 to-transparent rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-green-200/10 rounded-full blur-[150px]"></div>

         {/* Grid Pattern Overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

         <div className="max-w-[95rem] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">

            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">

               <div className={`flex items-center gap-6 mb-14 transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <span className="px-7 py-3 rounded-full border-2 border-green-300/60 text-green-700 text-xs font-bold uppercase tracking-[0.25em] bg-white/90 backdrop-blur-md shadow-xl shadow-green-900/10 hover:shadow-green-600/20 transition-all duration-300 hover:scale-105">
                     <span className="relative">
                        Candidata a la Cámara • 103
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     </span>
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-green-300 via-green-200 to-transparent"></div>
               </div>

               <h1 className="font-display text-slate-900 leading-[0.86] tracking-normal mb-14">
                  <span className={`block text-[clamp(4.5rem,9vw,10.5rem)] transition-all duration-1000 delay-100 transform ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]`}>
                     NATALIA
                  </span>
                  <span className={`block text-[clamp(4.5rem,9vw,10.5rem)] gradient-text transition-all duration-1000 delay-200 transform ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} drop-shadow-[0_4px_20px_rgba(22,163,74,0.2)]`}>
                     CAVIEDES
                  </span>
               </h1>

               <div className={`max-w-2xl pl-10 border-l-[6px] border-green-500 mb-16 transition-all duration-1000 delay-300 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative`}>
                  <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-gradient-to-b from-green-500 via-green-600 to-green-500 rounded-full"></div>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-slate-800 font-semibold italic leading-relaxed pl-6 relative">
                     <span className="text-green-600 text-4xl md:text-5xl leading-none">"</span>
                     {SLOGAN}
                     <span className="text-green-600 text-4xl md:text-5xl leading-none">"</span>
                  </p>
               </div>

               <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <a href="#votar" className="group relative bg-gradient-to-r from-green-600 via-green-600 to-green-700 text-white px-14 py-7 rounded-full font-bold uppercase tracking-widest text-sm hover:from-green-700 hover:via-green-700 hover:to-green-800 transition-all duration-300 shadow-2xl shadow-green-600/40 flex items-center gap-3 overflow-hidden hover:shadow-green-600/50 hover:scale-105">
                     <span className="relative z-10 flex items-center gap-3">
                        Votar 103
                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
                     </span>
                     <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a href="#propuestas" className="px-12 py-7 rounded-full border-2 border-slate-300 text-slate-700 font-bold uppercase tracking-widest text-sm hover:border-green-500 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-white transition-all duration-300 backdrop-blur-sm bg-white/70 shadow-lg hover:shadow-xl hover:scale-105">
                     Ver Propuestas
                  </a>
               </div>

            </div>

            {/* Hero Image / Composition */}
            <div className="lg:col-span-5 relative h-full min-h-[600px] flex items-end justify-center">

               <div className={`relative z-10 transition-all duration-1000 delay-300 transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                  {/* Decorative Elements */}
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-100/40 rounded-full blur-3xl"></div>

                  {/* Main Photo with modern frame */}
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-[3rem] blur-2xl -z-10"></div>
                     <img
                        src={IMAGES.CANDIDATE_PHOTO}
                        alt="Natalia Caviedes"
                        className="w-full h-auto max-h-[850px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] relative z-10"
                     />
                  </div>

                  {/* Floating Ballot Badge - Modern Design */}
                  <div className="absolute top-24 -right-10 glass-color p-10 rounded-[3rem] shadow-2xl animate-float border-2 border-green-200/60 hover:border-green-300/80 transition-all duration-300 hover:scale-105">
                     <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-[3rem] blur-xl -z-10"></div>
                        <img src={IMAGES.BALLOT_IMAGE} className="w-40 h-auto drop-shadow-xl relative z-10" alt="Tarjetón" />
                        <div className="flex items-center justify-center gap-2.5 mt-4 text-green-700 font-black text-xs uppercase tracking-wider relative z-10">
                           <CheckCircle2 size={18} className="text-green-500 animate-pulse" fill="currentColor" /> 
                           <span className="relative">
                              Tu elección
                              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"></span>
                           </span>
                        </div>
                     </div>
                     {/* Decorative corners */}
                     <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-md opacity-60"></div>
                     <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-300/40 rounded-full blur-sm"></div>
                  </div>
               </div>

            </div>

         </div>
      </section>
   );
};

export default Hero;
