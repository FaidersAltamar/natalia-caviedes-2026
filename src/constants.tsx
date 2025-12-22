
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

export const PROFILE_INFO = {
  roles: ["Hija", "Madre", "Esposa", "Líder de resultados"],
  whoAmI: {
    title: "¿Quién es Natalia Caviedes Chinchilla?",
    text: "Soy una mujer de carácter que ha forjado su camino con preparación y valentía. Como Natalia Caviedes Chinchilla, entiendo que la política es la herramienta para transformar realidades, no para beneficio personal. Mi historia es la de miles de huilenses que trabajan duro por sus sueños y merecen ser escuchados en el Congreso."
  },
  trajectory: {
    title: "Experiencia Probada en el Territorio",
    intro: "Mi compromiso con el Huila se demuestra con hechos concretos y una hoja de vida intachable:",
    points: [
      {
        role: "Ex-Alcaldesa de Palermo",
        desc: "Lideré una administración de puertas abiertas, enfocada en la eficiencia administrativa y el impacto social real en cada vereda del municipio. Palermo fue ejemplo de gestión pública transparente.",
        icon: <Award className="text-green-400" />
      },
      {
        role: "Gestión con Resultados",
        desc: "He demostrado que el presupuesto público rinde cuando se cuida con rigor y honestidad. Mi prioridad siempre ha sido y será la gente del Huila.",
        icon: <ShieldCheck className="text-green-400" />
      }
    ]
  },
  challenge: {
    title: "Misión: Cámara de Representantes por el Huila",
    text: "Llevaremos la voz del Huila al Congreso con la fuerza de quien conoce la región palmo a palmo. Natalia Caviedes Chinchilla es la garantía de una representación que no se arrodilla ante el centralismo y que siempre pone al Huila primero."
  }
};

export const BANDERAS = [
  {
    title: "Defensa del Territorio",
    desc: "Nuestras necesidades no se entienden desde un escritorio en Bogotá. Seré la voz firme que exija lo que el Huila merece por derecho y por justicia.",
    icon: <Map className="w-12 h-12 text-green-400" />
  },
  {
    title: "Mujer y Familia",
    desc: "Impulsaré leyes que protejan y empoderen a la mujer huilense, motor de nuestra economía y pilar fundamental de nuestros hogares.",
    icon: <Heart className="w-12 h-12 text-green-400" />
  },
  {
    title: "Agro Productivo",
    desc: "Legislaré para que nuestros campesinos tengan vías, tecnología y precios justos. El campo no es solo pasado, es el futuro del Huila.",
    icon: <TrendingUp className="w-12 h-12 text-green-400" />
  },
  {
    title: "Transparencia Total",
    desc: "Cero tolerancia con la corrupción. El 103 verde representa una política limpia, de frente al ciudadano y con resultados a la vista de todos.",
    icon: <Shield className="w-12 h-12 text-green-400" />
  }
];

export const HUILA_STATS = [
  { label: "Municipios", value: "37" },
  { label: "Número en Tarjetón", value: "103" },
  { label: "Años de Gestión", value: "+12" },
  { label: "Compromiso Huila", value: "100%" }
];
