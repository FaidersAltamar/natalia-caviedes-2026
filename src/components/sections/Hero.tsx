import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { IMAGES, SLOGAN } from '../../constants';

const Hero = () => {
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      setLoaded(true);
   }, []);

   return (
      <section id="inicio" className="relative min-h-[90vh] w-full bg-white flex items-center pt-32 pb-20 overflow-hidden">

         {/* Abstract Background Elements (Subtle) */}
         <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
         <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-green-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-40"></div>

         <div className="max-w-[95rem] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">

            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">

               <div className={`flex items-center gap-4 mb-10 transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <span className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] bg-white shadow-sm">
                     Candidata a la Cámara • 103
                  </span>
               </div>

               <h1 className="font-display text-slate-900 leading-[0.9] tracking-normal mb-10">
                  <span className={`block text-[clamp(4rem,8vw,9rem)] transition-all duration-1000 delay-100 transform ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                     NATALIA
                  </span>
                  <span className={`block text-[clamp(4rem,8vw,9rem)] text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 transition-all duration-1000 delay-200 transform ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                     CAVIEDES
                  </span>
               </h1>

               <div className={`max-w-xl pl-6 border-l-2 border-green-500 mb-12 transition-all duration-1000 delay-300 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <p className="text-xl md:text-2xl text-slate-600 font-light italic leading-relaxed">
                     "{SLOGAN}"
                  </p>
               </div>

               <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <a href="#votar" className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-green-600 transition-colors duration-300 shadow-xl shadow-slate-900/10 flex items-center gap-3 group">
                     Votar 103
                     <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <a href="#propuestas" className="px-8 py-5 rounded-full border border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-colors">
                     Ver Propuestas
                  </a>
               </div>

            </div>

            {/* Hero Image / Composition */}
            <div className="lg:col-span-5 relative h-full min-h-[500px] flex items-end justify-center">

               <div className={`relative z-10 transition-all duration-1000 delay-300 transform ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                  {/* Main Photo with "Cutout" effect */}
                  <img
                     src={IMAGES.CANDIDATE_PHOTO}
                     alt="Natalia Caviedes"
                     className="w-full h-auto max-h-[800px] object-contain drop-shadow-2xl"
                  />

                  {/* Floating Ballot Badge */}
                  <div className="absolute top-20 -right-4 bg-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 animate-float">
                     <img src={IMAGES.BALLOT_IMAGE} className="w-32 h-auto" alt="Tarjetón" />
                     <div className="flex items-center justify-center gap-2 mt-2 text-green-600 font-black text-xs uppercase tracking-wider">
                        <CheckCircle2 size={14} /> Tu elección
                     </div>
                  </div>
               </div>

            </div>

         </div>
      </section>
   );
};

export default Hero;
