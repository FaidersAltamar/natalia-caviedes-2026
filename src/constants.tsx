
import React from 'react';
import {
  Users, Award, MessageSquare, Map, Briefcase, Leaf, Shield, TrendingUp, Heart, Star, Sparkles, Zap, ShieldCheck
} from 'lucide-react';

export const CAMPAIGN_NAME = "Natalia Caviedes Chinchilla";
export const BALLOT_NUMBER = "103";
export const SLOGAN = "¡Es Ahora, y Es Contigo!";

export const IMAGES = {
  PARTY_LOGO: "https://i.imgur.com/GET3Llz.png",
  CANDIDATE_PHOTO: "https://i.imgur.com/8OZ22Hm.png",
  BALLOT_IMAGE: "https://i.imgur.com/UMqlEou.png",
  NAME_LOGO: "https://i.imgur.com/ZTiriwm.png"
};

export const CONTACT_PHONE = "+57 318 2222232";
export const WHATSAPP_LINK = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, '')}?text=${encodeURIComponent("Hola Natalia, quiero conocer más sobre tus propuestas para la Cámara.")}`;
export const FACEBOOK_LINK = "https://www.facebook.com/NataliaCaviedesChinchilla/";
export const INSTAGRAM_LINK = "https://www.instagram.com/caviedeschinchilla/";

export const PROFILE_INFO = {
  roles: ["Abogada", "Empresaria", "Líder Política", "Madre", "Esposa"],
  whoAmI: {
    title: "¿Quién es Natalia Caviedes Chinchilla?",
    text: "Es una mujer de fe, resiliente y profundamente convencida de que el cambio sí es posible. Abrió su camino en lo público enfrentando la política tradicional, haciendo política con la gente, escuchando en el territorio y entendiendo que servir es un acto de valentía. Cada dificultad la formó, cada resistencia la fortaleció y cada experiencia le enseñó a cuidar lo público con amor, carácter y responsabilidad."
  },
  trajectory: {
    title: "Trayectoria: Servir con Hechos",
    intro: "El compromiso de Natalia Caviedes con el Huila no nació hoy; se ha construido caminando junto a su gente.",
    points: [
      {
        role: "Alcaldesa Histórica de Palermo (2020-2023)",
        desc: "Fue la primera mujer alcaldesa del municipio de Palermo con una votación histórica de 9.757 votos (63.95%). Lideró con hechos reales: vivienda digna, vías, infraestructura educativa, electrificación rural y apoyo al campo.",
        icon: <Award className="text-green-400" />
      },
      {
        role: "Concejal de Palermo (2016-2019)",
        desc: "Elegida en 2015, inició su camino de servicio público entendiendo las necesidades de su comunidad desde la base.",
        icon: <Users className="text-green-400" />
      },
      {
        role: "Liderazgo con Responsabilidad",
        desc: "Aprendió que administrar los recursos de todos es una tarea sagrada que exige rigor, honestidad y transparencia.",
        icon: <ShieldCheck className="text-green-400" />
      }
    ]
  },
  challenge: {
    title: "Su Reto: Ser la Voz del Huila",
    text: "Hoy asume el desafío más grande de su vida: levantar la voz del Huila en el Congreso. No busca un cargo; busca representar con verdad, cercanía y compromiso. Cree en una renovación política que nazca del territorio y defienda lo que somos."
  }
};

export const BANDERAS = [
  {
    title: "Representación Real",
    desc: "Su voz nace de conocer el Huila y de amar esta tierra. No va a figurar, va a defender a su gente.",
    icon: <Map className="w-12 h-12 text-green-400" />
  },
  {
    title: "Resultados con Sentido Humano",
    desc: "Su experiencia demuestra que cuando se gobierna con el corazón, los resultados llegan.",
    icon: <Heart className="w-12 h-12 text-green-400" />
  },
  {
    title: "Congreso Cercano",
    desc: "La política debe volver a escuchar; estará en el territorio, rindiendo cuentas y caminando junto a la gente.",
    icon: <Users className="w-12 h-12 text-green-400" />
  },
  {
    title: "Construir desde la Región",
    desc: "Su oficina será el Huila, porque el desarrollo se construye desde las veredas y los municipios.",
    icon: <Briefcase className="w-12 h-12 text-green-400" />
  }
];

export const LINES_OF_ACTION = [
  { title: "Gestión con Propósito", desc: "Trabajar incansablemente para traer oportunidades, inversión y proyectos que transformen vidas.", icon: <Briefcase /> },
  { title: "Renovación Política", desc: "Una política honesta, valiente y transparente que recupere la confianza de la gente.", icon: <Sparkles /> },
  { title: "Seguridad", desc: "Defender el derecho de las familias a vivir y trabajar en paz.", icon: <Shield /> },
  { title: "Vías para el Progreso", desc: "Conectar el campo con los mercados para que el esfuerzo del campesino valga más.", icon: <Map /> },
  { title: "Productividad con Oportunidades", desc: "Fortalecer el agro y el emprendimiento para un Huila con futuro.", icon: <TrendingUp /> }
];

export const HUILA_STATS = [
  { label: "Municipios", value: "37" },
  { label: "Votos Históricos", value: "9.757" },
  { label: "% Votación", value: "63.95%" },
  { label: "Número en Tarjetón", value: "103" }
];
