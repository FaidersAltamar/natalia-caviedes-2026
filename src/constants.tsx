
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
    detailedDesc: "La Representación Real busca que las necesidades de los huilenses sean escuchadas en Bogotá. Natalia Caviedes trabajará para tender puentes entre el Gobierno Nacional y el territorio, asegurando que los proyectos vitales para el departamento no se queden en el olvido y que el Huila tenga el peso que merece en las decisiones nacionales.",
    icon: <Map className="w-12 h-12 text-green-400" />
  },
  {
    title: "Resultados con Sentido Humano",
    desc: "Su experiencia demuestra que cuando se gobierna con el corazón, los resultados llegan.",
    detailedDesc: "Buscamos que la labor legislativa tenga un impacto real en la dignidad de las personas. Nos enfocaremos en impulsar políticas que mejoren el acceso a servicios básicos y fortalezcan el tejido social, promoviendo siempre que los recursos públicos lleguen a quienes más lo necesitan con transparencia y calidez.",
    icon: <Heart className="text-green-400" />
  },
  {
    title: "Congreso Cercano",
    desc: "La política debe volver a escuchar; estará en el territorio, rindiendo cuentas y caminando junto a la gente.",
    detailedDesc: "Un Congreso cercano significa mantener un diálogo permanente con la comunidad. Realizaremos ejercicios de escucha activa en los municipios para informar sobre la gestión legislativa, recoger inquietudes y asegurar que nuestra posición en el Congreso sea un reflejo de lo que el Huila realmente necesita.",
    icon: <Users className="w-12 h-12 text-green-400" />
  },
  {
    title: "Construir desde la Región",
    desc: "Su oficina será el Huila, porque el desarrollo se construye desde las veredas y los municipios.",
    detailedDesc: "Promovemos el fortalecimiento de la autonomía regional. Trabajaremos en la gestión de recursos para que los municipios tengan mayores facilidades de inversión en sus áreas prioritarias, apoyando siempre las iniciativas que surjan desde el corazón de nuestras comunidades rurales y urbanas.",
    icon: <Briefcase className="w-12 h-12 text-green-400" />
  },
  {
    title: "Renovación Política",
    desc: "Una política honesta y valiente que recupere la confianza de la gente con resultados transparentes.",
    detailedDesc: "La renovación política empieza por el ejemplo. Nos comprometemos con una práctica legislativa ética y transparente, rindiendo cuentas de manera clara y promoviendo leyes que mejoren la eficiencia administrativa y el acceso a la información pública para todos los ciudadanos.",
    icon: <Sparkles className="text-green-400" />
  },
  {
    title: "Seguridad y Orden",
    desc: "Legislar para proteger el derecho a la vida y la tranquilidad de todas las familias del Huila.",
    detailedDesc: "Impulsaremos el fortalecimiento de las instituciones para garantizar la paz en nuestros territorios. Haremos seguimiento a las políticas de seguridad nacional para que se traduzcan en una presencia efectiva que proteja la vida, el trabajo y la tranquilidad de las familias huilenses.",
    icon: <Shield className="text-green-400" />
  },
  {
    title: "Vías para el Progreso",
    desc: "Transformar la infraestructura para que el progreso y las oportunidades lleguen hasta la última vereda.",
    detailedDesc: "Gestionaremos ante el Gobierno Nacional la inversión necesaria para el mantenimiento y mejora de nuestras vías terciarias. Nuestro objetivo es facilitar que el desarrollo llegue a cada rincón, permitiendo que el esfuerzo de nuestros productores se traduzca en mayor bienestar.",
    icon: <TrendingUp className="text-green-400" />
  },
  {
    title: "Huila Productivo",
    desc: "Fortalecer el agro y el emprendimiento, garantizando que el esfuerzo de nuestra gente valga más.",
    detailedDesc: "Fomentaremos el apoyo al campo a través de incentivos y gestiones que mejoren la competitividad de nuestros productores. Buscamos promover leyes que faciliten el acceso a mercados y tecnología, reconociendo al agro como el gran motor de la economía huilense.",
    icon: <Leaf className="text-green-400" />
  },
  {
    title: "Educación y Futuro",
    desc: "Trabajar por una educación con calidad e infraestructura digna que brinde oportunidades reales a los jóvenes.",
    detailedDesc: "Trabajaremos en la gestión de mejores espacios educativos y en el fortalecimiento de programas que preparen a nuestros jóvenes para los retos de hoy. Nuestro compromiso es promover leyes que garanticen una educación pertinente y accesible para todos los rincones del departamento.",
    icon: <Award className="text-green-400" />
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
