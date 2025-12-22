
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Facebook, Twitter, Instagram, 
  ArrowUpRight, MessageCircle, 
  Award, Heart, ShieldCheck, Mail, Quote, 
  Leaf, Sparkles, CheckCircle2, ChevronRight,
  TrendingUp, Map, Shield
} from 'lucide-react';
import { SLOGAN, BANDERAS, PROFILE_INFO, HUILA_STATS } from './constants';

const PARTY_LOGO = "https://i.imgur.com/GET3Llz.png";
const CANDIDATE_PHOTO = "https://i.imgur.com/8OZ22Hm.png";
const BALLOT_IMAGE = "https://i.imgur.com/UMqlEou.png";
const NAME_LOGO = "https://i.imgur.com/ZTiriwm.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`max-w-[90rem] mx-auto flex justify-between items-center px-6 lg:px-12 py-2 rounded-full transition-all ${scrolled ? 'glass-color mx-4 shadow-2xl shadow-green-900/15' : 'bg-white shadow-xl shadow-slate-200/50 mx-4'}`}>
        
        {/* Lado Izquierdo: Identidad de Marca Optimizada */}
        <div className="flex items-center gap-4 sm:gap-6">
          <img src={PARTY_LOGO} className="h-10 sm:h-12 w-auto object-contain" alt="Alianza Verde" />
          
          <div className="h-8 sm:h-10 w-[1.5px] bg-green-100 hidden sm:block"></div>
          
          <div className="flex items-center">
            {/* Logo con escala visual (1.4x) para que se vea grande sin empujar la altura del menú (layout h-12/16) */}
            <img 
              src={NAME_LOGO} 
              className="h-12 sm:h-16 w-auto object-contain transform scale-[1.4] origin-left ml-3 sm:ml-5 transition-transform hover:scale-[1.45]" 
              alt="Natalia Caviedes" 
            />
          </div>
        </div>

        {/* Lado Derecho: Navegación */}
        <div className="hidden xl:flex items-center space-x-12">
          {['Perfil', 'Trayectoria', 'Propuestas', 'Votar'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[13px] font-bold uppercase tracking-[0.15em] text-slate-500 hover:text-green-600 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#votar" 
            className="bg-green-600 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-green-600/30 transition-all hover:-translate-y-1 active:scale-95"
          >
            VOTA 103
          </a>
        </div>
        
        <button onClick={() => setIsOpen(true)} className="xl:hidden text-green-700 p-2 bg-green-50 rounded-full hover:bg-green-100 transition-colors">
          <Menu size={28}/>
        </button>
      </div>
      
      {/* Menú Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[120] flex flex-col p-8 sm:p-12 animate-in fade-in slide-in-from-top-10 duration-500">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-4">
              <img src={PARTY_LOGO} className="h-10" alt="PV" />
              <div className="h-8 w-px bg-slate-200"></div>
              <img src={NAME_LOGO} className="h-12" alt="Natalia" />
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-900 bg-slate-100 p-4 rounded-full hover:bg-slate-200 transition-colors">
              <X size={32}/>
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {['Perfil', 'Trayectoria', 'Propuestas'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tighter hover:text-green-600 uppercase italic transition-colors">
                {link}
              </a>
            ))}
            <a href="#votar" onClick={() => setIsOpen(false)} className="text-6xl sm:text-7xl font-display font-black text-green-600 italic uppercase">VOTA 103</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-32">
      <div className="blob w-[600px] h-[600px] bg-green-100 top-[-100px] left-[-100px]"></div>
      <div className="blob w-[500px] h-[500px] bg-lime-50 bottom-[-100px] right-[-100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center space-x-4 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg shadow-green-600/30">
            <Leaf size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Alianza Verde • Número 103</span>
          </div>
          
          <div className="animate-in slide-in-from-left-20 duration-1000">
            <img src={NAME_LOGO} className="w-full max-w-2xl h-auto object-contain" alt="Natalia Caviedes Logo" />
            <p className="text-[16px] font-black uppercase tracking-[1em] text-green-800 mt-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
              Cámara por el Huila
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="h-2 w-24 bg-green-500 rounded-full"></div>
            <p className="text-2xl md:text-4xl text-slate-700 font-display font-medium italic leading-tight">
              "{SLOGAN}"
            </p>
          </div>

          <div className="flex flex-wrap gap-8 pt-6">
            <a href="#votar" className="bg-slate-950 hover:bg-green-600 text-white px-12 py-6 rounded-full font-black text-2xl flex items-center shadow-2xl transition-all hover:scale-105 active:scale-95 group">
              VOTA 103 <ArrowUpRight className="ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={28} />
            </a>
            <div className="bg-green-50 px-6 py-4 rounded-full flex items-center space-x-6 border-2 border-green-100 shadow-inner group overflow-hidden">
               <img src={BALLOT_IMAGE} alt="Cámara 103" className="h-14 object-contain group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex items-end justify-center pt-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-600 rounded-full opacity-[0.03]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-[2px] border-green-600/10 rounded-full animate-float"></div>
           
           <div className="relative z-20 w-full animate-in fade-in zoom-in duration-1000">
              <img 
                src={CANDIDATE_PHOTO} 
                alt="Natalia Caviedes" 
                className="w-full h-auto object-contain object-bottom filter drop-shadow-[0_20px_60px_rgba(22,163,74,0.2)]"
              />
              
              <div className="absolute bottom-20 -right-10 bg-white p-8 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-l-8 border-green-600 animate-float hidden lg:block">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-green-600/30">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <p className="text-2xl font-black italic text-slate-900 tracking-tight">Huila en el <br/> Corazón</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden">
      {/* Background Giant Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display font-black text-slate-900 select-none leading-none opacity-50">
        103
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none"></div>

      {/* Marquee */}
      <div className="relative z-10 mb-32 -rotate-2 scale-110 opacity-80">
         <div className="flex animate-marquee items-center whitespace-nowrap">
            {[1,2,3,4].map(i => (
              <React.Fragment key={i}>
                <span className="text-7xl md:text-9xl font-display font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)] mx-8 italic hover:text-white/10 transition-colors duration-500 cursor-default">
                  HUILA CON CARÁCTER
                </span>
                <span className="text-7xl md:text-9xl font-display font-black text-green-600 mx-8 italic drop-shadow-[0_0_30px_rgba(22,163,74,0.3)]">
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
              <div key={i} className="group relative bg-slate-900/60 backdrop-blur-md border border-white/5 p-10 rounded-[2.5rem] hover:bg-green-600 hover:border-green-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(22,163,74,0.3)] overflow-hidden">
                 <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-white/20 transform rotate-12 transition-colors">
                    <TrendingUp size={100} />
                 </div>
                 
                 <p className="text-6xl font-display font-black text-white group-hover:scale-110 transition-transform origin-left mb-4 relative z-10">{stat.value}</p>
                 <div className="w-12 h-1 bg-green-500 group-hover:bg-white my-6 transition-all duration-500 group-hover:w-full relative z-10"></div>
                 <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-white transition-colors relative z-10">{stat.label}</p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

const ProfileSection = () => {
  return (
    <section id="perfil" className="py-32 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header centered for impact */}
        <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
           <div className="flex items-center space-x-4 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="h-[2px] w-8 md:w-12 bg-green-600"></div>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Liderazgo Femenino</span>
              <div className="h-[2px] w-8 md:w-12 bg-green-600"></div>
           </div>
           <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
             <img src={NAME_LOGO} className="h-16 md:h-24 w-auto object-contain mx-auto" alt="Natalia Caviedes" />
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Image (Span 4 on XL) */}
          <div className="lg:col-span-5 xl:col-span-4 relative group perspective-1000">
            <div className="absolute inset-0 bg-green-50 rounded-[3rem] transform -rotate-2 transition-transform group-hover:rotate-0 border-2 border-green-100/50"></div>
            <div className="relative bg-white p-2 rounded-[3rem] shadow-xl overflow-hidden aspect-[3/4] transform transition-transform group-hover:-translate-y-2 duration-500">
               <img 
                 src={CANDIDATE_PHOTO} 
                 alt="Natalia Perfil" 
                 className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 via-transparent to-transparent"></div>
            </div>
            
            {/* Badge */}
            <div className="absolute top-8 -right-2 md:-right-8 bg-slate-950 text-white p-6 rounded-full shadow-2xl z-20 w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center border-4 border-white animate-float">
               <Heart className="text-green-500 mb-1" size={24} fill="currentColor" />
               <p className="text-[9px] md:text-[10px] font-black uppercase text-center leading-tight tracking-widest">Amor<br/>por el<br/>Huila</p>
            </div>
          </div>

          {/* Column 2: Biography & Tags (Span 4 on XL) */}
          <div className="lg:col-span-7 xl:col-span-4 flex flex-col justify-center space-y-8 py-4 lg:px-4">
             <div>
                <h3 className="text-3xl md:text-5xl font-display font-black text-green-600 italic mb-6 leading-none">HUILENSE <br/><span className="text-slate-900">DE CORAZÓN.</span></h3>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                   <p>
                     "Soy una mujer de carácter que ha forjado su camino con preparación y valentía. Como Natalia Caviedes Chinchilla, entiendo que la política es la herramienta para transformar realidades."
                   </p>
                   <p className="font-medium text-slate-800">
                     Mi historia es la de miles de huilenses que trabajan duro por sus sueños y merecen ser escuchados en el Congreso. 
                   </p>
                </div>
             </div>
             
             <div className="pt-4 border-t border-slate-100 mt-4">
                <div className="flex flex-wrap gap-3">
                   {PROFILE_INFO.roles.map((role, i) => (
                     <span key={i} className="px-5 py-2 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest border border-green-100 hover:bg-green-600 hover:text-white transition-all cursor-default">
                       {role}
                     </span>
                   ))}
                </div>
             </div>
          </div>

          {/* Column 3: Quote Card (Span 4 on XL) */}
          <div className="lg:col-span-12 xl:col-span-4 h-full min-h-[400px]">
             <div className="bg-green-600 text-white p-10 md:p-12 rounded-[3rem] h-full relative overflow-hidden shadow-2xl shadow-green-600/30 flex flex-col justify-center group hover:scale-[1.02] transition-transform duration-500">
                {/* Decorative background circles */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                
                <Quote className="text-green-300/40 mb-8 transform group-hover:scale-110 transition-transform" size={80} fill="currentColor" />
                
                <p className="text-xl md:text-2xl font-medium italic leading-relaxed relative z-10 mb-8">
                  {PROFILE_INFO.challenge.text}
                </p>

                <div className="mt-auto flex items-center space-x-4 pt-8 border-t border-white/20">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-700 shadow-lg">
                      <CheckCircle2 size={24} />
                   </div>
                   <div>
                      <p className="font-display font-black text-lg uppercase italic">Garantía Verde</p>
                      <p className="text-xs text-green-100 uppercase tracking-widest">Compromiso Total</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TrajectorySection = () => {
  return (
    <section id="trayectoria" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-green-600 font-black uppercase tracking-[0.4em] text-[12px] block mb-4">MÁS DE 12 AÑOS DE GESTIÓN</span>
            <h2 className="text-7xl md:text-9xl font-display font-black text-slate-900 tracking-tighter leading-none uppercase">RESULTADOS <br/><span className="text-green-600 italic">QUE SE VEN.</span></h2>
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
                <h4 className="text-4xl font-display font-black text-slate-900 mb-6 uppercase italic">
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

const ProposalsSection = () => {
  return (
    <section id="propuestas" className="py-40 bg-green-50 relative overflow-hidden section-curve">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-32">
          <span className="bg-green-600 text-white px-6 py-2 rounded-full font-black uppercase tracking-[0.5em] text-[10px]">PLAN DE TRABAJO 2026</span>
          <h2 className="text-7xl md:text-[9rem] font-display font-black text-slate-950 mt-10 tracking-tighter italic uppercase leading-none">Nuestras Banderas</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {BANDERAS.map((b, i) => (
            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-green-900/10 border-b-[12px] border-green-600 flex flex-col h-full transform hover:-translate-y-4 transition-all">
              <div className="mb-10 p-6 rounded-[2rem] bg-green-600 text-white inline-block w-fit shadow-lg shadow-green-600/30">
                {b.icon}
              </div>
              <h3 className="text-3xl font-display font-black text-slate-900 mb-6 uppercase italic leading-tight">
                {b.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-auto font-light">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VotingSection = () => {
  return (
    <section id="votar" className="py-48 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-12 gap-24 items-center">
        <div className="lg:col-span-7">
          <div className="inline-block bg-green-600 text-white px-8 py-4 rounded-3xl mb-12 shadow-2xl shadow-green-600/30 transform -rotate-2">
             <span className="text-4xl font-display font-black italic tracking-tighter">HUILA ES CONTIGO</span>
          </div>
          <h2 className="text-8xl md:text-[12rem] font-display font-black leading-[0.75] mb-20 tracking-tighter italic uppercase">
            VOTA <br/><span className="text-green-600">103 VERDE.</span>
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
               src={BALLOT_IMAGE} 
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

const ContactCTA = () => {
  return (
    <section className="py-48 bg-green-600 relative overflow-hidden">
       <div className="absolute inset-0 bg-slate-950 opacity-10"></div>
       <div className="max-w-5xl mx-auto px-8 relative z-10 text-center text-white">
          <h2 className="text-7xl md:text-9xl font-display font-black mb-16 tracking-tighter italic uppercase leading-none">
            TU VOZ ES <span className="text-slate-900">EL MOTOR.</span>
          </h2>
          <p className="text-green-50 text-3xl font-light mb-20 italic max-w-3xl mx-auto leading-relaxed">
            Hablemos hoy. Natalia está lista para escucharte y llevar tus propuestas al Congreso Nacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="https://wa.me/573000000000" target="_blank" className="bg-white text-green-700 px-16 py-8 rounded-full font-black text-2xl flex items-center gap-6 hover:scale-105 transition-all shadow-2xl">
              <MessageCircle size={36} /> CHATEA CON NOSOTROS
            </a>
            <a href="mailto:info@nataliacaviedes.com" className="text-white border-2 border-white/30 px-16 py-8 rounded-full font-black text-2xl hover:bg-white/10 transition-all">
              ENVIAR PROPUESTA
            </a>
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-24 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-20 items-center mb-20">
          <div className="md:col-span-5 flex items-center space-x-10">
            <img src={PARTY_LOGO} className="h-16" alt="PV" />
            <div className="border-l-4 border-green-600 pl-10">
              <img src={NAME_LOGO} className="h-12 w-auto object-contain" alt="Natalia Caviedes" />
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center space-x-10 text-slate-400">
              <Facebook size={32} className="hover:text-green-600 cursor-pointer transition-all" />
              <Twitter size={32} className="hover:text-green-600 cursor-pointer transition-all" />
              <Instagram size={32} className="hover:text-green-600 cursor-pointer transition-all" />
          </div>
          <div className="md:col-span-3 text-right">
             <div className="bg-white border-4 border-slate-900 p-4 rounded-[2.5rem] inline-block shadow-2xl transform rotate-3">
               <img src={BALLOT_IMAGE} alt="103" className="h-20" />
             </div>
          </div>
        </div>
        <p className="text-center text-slate-400 text-[10px] font-black tracking-[0.5em] uppercase italic pt-10 border-t border-slate-50">
          &copy; 2026 NATALIA CAVIEDES CHINCHILLA • HUILA PRIMERO • CÁMARA POR EL HUILA
        </p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="antialiased bg-white text-slate-900">
      <Navbar />
      <Hero />
      <ImpactSection />
      <ProfileSection />
      <TrajectorySection />
      <ProposalsSection />
      <VotingSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default App;
