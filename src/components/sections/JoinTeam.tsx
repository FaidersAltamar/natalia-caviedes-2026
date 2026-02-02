import React from 'react';
import { Users, Heart, Share2, MessageCircle } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_LINK } from '../../constants';

const JoinTeam = () => {
    return (
        <section id="sumate" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl overflow-hidden relative group">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs mb-8 border border-white/30">
                                <Users size={16} />
                                Únete al Equipo
                            </span>
                            <h2 className="text-5xl md:text-7xl font-display leading-[0.95] mb-8 uppercase italic">
                                Juntos <br />
                                <span className="text-green-300">Construimos.</span>
                            </h2>
                            <p className="text-xl text-green-50/90 leading-relaxed font-light mb-10 max-w-lg">
                                Este proyecto no es de una sola persona, es de todos los que soñamos con un Huila con carácter. Súmate como voluntario y ayúdanos a llevar nuestro mensaje a cada rincón.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-green-700 font-black uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 text-sm"
                                >
                                    <MessageCircle size={20} />
                                    Ser Voluntario
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <Heart className="text-green-400" />,
                                    title: "En el Territorio",
                                    desc: "Acompáñanos en nuestras caminatas y reuniones en los municipios."
                                },
                                {
                                    icon: <Share2 className="text-green-400" />,
                                    title: "En Redes Sociales",
                                    desc: "Ayúdanos a compartir nuestras propuestas y llegar a más huilenses."
                                },
                                {
                                    icon: <Users className="text-green-400" />,
                                    title: "Multiplica el Mensaje",
                                    desc: "Habla con tus amigos y familiares sobre nuestro proyecto de renovación."
                                },
                                {
                                    icon: <MessageCircle className="text-green-400" />,
                                    title: "Danos tus Ideas",
                                    desc: "Tu conocimiento de la región es fundamental para construir el Plan Huila."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg scale-110">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold uppercase mb-2 leading-tight">{item.title}</h4>
                                    <p className="text-green-100/80 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinTeam;
