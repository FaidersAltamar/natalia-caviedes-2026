
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
        detailedImpact: "Durante su mandato, Palermo vivió una transformación sin precedentes. Logró la gestión de más de 200 viviendas dignas, la pavimentación de puntos críticos en vías urbanas y rurales, y la modernización de 5 centros educativos. Además, alcanzó una cobertura de electrificación rural cercana al 98%, llevando luz a zonas que esperaron por décadas.",
        icon: <Award className="text-green-400" />
      },
      {
        role: "Concejal de Palermo (2016-2019)",
        desc: "Elegida en 2015, inició su camino de servicio público entendiendo las necesidades de su comunidad desde la base.",
        detailedImpact: "Como concejal, se destacó por un control político riguroso y transparente. Lideró la aprobación de acuerdos municipales enfocados en el bienestar social, la protección de la mujer y el fortalecimiento de las asociaciones de productores rurales, consolidándose como la voz más firme en defensa de los recursos públicos.",
        icon: <Users className="text-green-400" />
      },
      {
        role: "Liderazgo con Responsabilidad",
        desc: "Aprendió que administrar los recursos de todos es una tarea sagrada que exige rigor, honestidad y transparencia.",
        detailedImpact: "Su liderazgo se basa en la premisa de que lo público es sagrado. Ha sido reconocida por su capacidad de gerencia pública eficiente, logrando niveles de ejecución presupuestal superiores al 90% y manteniendo siempre canales abiertos de comunicación directa con la ciudadanía sin intermediarios.",
        icon: <ShieldCheck className="text-green-400" />
      },
      {
        role: "Formación de Excelencia",
        desc: "Como Abogada y Empresaria, Natalia aporta el equilibrio perfecto entre la legalidad y la visión estratégica para el desarrollo del Huila.",
        detailedImpact: "Su perfil combina la rigurosidad legal como abogada con la visión pragmática del sector empresarial. Esta dualidad le permite entender cómo crear leyes que no solo sean justas, sino que también impulsen la productividad y generen empleo real en el departamento del Huila.",
        icon: <Star className="text-green-400" />
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
  { title: "Productividad con Oportunidades", desc: "Fortalecer el agro y el emprendimiento para un Huila con futuro.", icon: <TrendingUp /> },
  { title: "Inclusión y Bienestar", desc: "Promover políticas que garanticen la equidad, el apoyo a la mujer y la protección de los más vulnerables.", icon: <Heart /> }
];

export const HUILA_STATS = [
  { label: "Municipios", value: "37" },
  { label: "Votos Históricos", value: "9.757" },
  { label: "% Votación", value: "63.95%" },
  { label: "Número en Tarjetón", value: "103" }
];

export const PRESS_RELEASES = [
  {
    title: "Inversión de $4.449 millones para redes y vías en El Juncal",
    date: "2022",
    file: "/prensa/PERIODICO 2022 - Modificaciones Noviembre.pdf",
    category: "Periódico",
    image: "/assets/previews/periodico.png",
    summary: "Edición especial que detalla la reposición de redes de acueducto con 40 años de uso y la pavimentación total de la vía principal del centro poblado El Juncal."
  },
  {
    title: "Palermo invierte más de $33.406 millones de regalías",
    date: "2022",
    file: "/prensa/2 (1).pdf",
    category: "Gestión",
    image: "/assets/previews/boletin.png",
    summary: "El municipio se destaca por el uso eficiente de regalías con 18 proyectos en vías, vivienda y electrificación rural, beneficiando a cientos de familias palermunas."
  },
  {
    title: "Palermo avanza hacia una transformación integral",
    date: "2023",
    file: "/prensa/palermo.pdf",
    category: "Gestión",
    image: "/assets/previews/boletin.png",
    summary: "Balance de gestión con inversión histórica de $39.862 millones para reducir brechas sociales a través de 641 mejoramientos de vivienda, electrificación y alcantarillado."
  },
  {
    title: "Palermo invierte $3.900 millones en escenarios deportivos",
    date: "2022",
    file: "/prensa/palermo (1).pdf",
    category: "Deporte y Social",
    image: "/assets/previews/boletin.png",
    summary: "Construcción de cubiertas y modernización integral de 7 polideportivos en barrios clave para fortalecer el tejido social y el sano esparcimiento."
  },
  {
    title: "Palermo reactiva la economía en fiestas decembrinas",
    date: "2021",
    file: "/prensa/palermo (2).pdf",
    category: "Economía y Cultura",
    image: "/assets/previews/informativo.png",
    summary: "Reactivación económica masiva a través del fomento al turismo navideño, ferias artesanales y la primera Feria Cafetera del Noroccidente del Huila."
  },
  {
    title: "Palermo le apuesta a la educación",
    date: "2022",
    file: "/prensa/2.pdf",
    category: "Educación",
    image: "/assets/previews/boletin.png",
    summary: "Inversión histórica en educación: entrega de 5.073 kits escolares, transporte para 756 estudiantes, dotación de restaurantes y optimización de infraestructura en 7 instituciones."
  },
  {
    title: "Palermo, potencializa la productividad del campo",
    date: "2022",
    file: "/prensa/2 (2).pdf",
    category: "Productividad",
    image: "/assets/previews/informativo.png",
    summary: "Apoyo histórico al agro palermuno con la creación de la Oficina de Productividad, mercados campesinos y gestiones para la primera Planta de Transformación de Mármol."
  },
  {
    title: "Palermo le apuesta a la recuperación de la malla vial con más de $15 mil millones",
    date: "2022",
    file: "/prensa/2 (3).pdf",
    category: "Infraestructura",
    image: "/assets/previews/boletin.png",
    summary: "Rehabilitación histórica de la malla vial con más de 40 tramos urbanos intervenidos, optimización de redes de acueducto y gestiones para la vía Juncal-Palermo."
  },
  {
    title: "Palermo invertirá $1.907 millones en proyecto de electrificación rural",
    date: "2021",
    file: "/prensa/3 (1).pdf",
    category: "Desarrollo Rural",
    image: "/assets/previews/boletin.png",
    summary: "Ampliación de la red eléctrica para beneficiar a 131 familias de Brisas del Carmen y El Quebradón, llevando energía a zonas que esperaron por más de una década."
  },
  {
    title: "Palermo entre los primeros lugares en gestión de salud",
    date: "2022",
    file: "/prensa/3 (2).pdf",
    category: "Salud",
    image: "/assets/previews/informativo.png",
    summary: "Reconocimiento departamental por excelente gestión en salud (98.75 puntos). Reapertura de centros, nueva ambulancia y más de 10.480 usuarios atendidos en brigadas."
  },
  {
    title: "Inversión histórica de $4.400 millones para El Juncal",
    date: "2022",
    file: "/prensa/3 (3).pdf",
    category: "Infraestructura",
    image: "/assets/previews/boletin.png",
    summary: "Optimización integral de redes de acueducto y alcantarillado con más de 40 años de antigüedad, junto a la pavimentación asfáltica para beneficio de 4.750 habitantes."
  },
  {
    title: "Subsidios de vivienda para 591 familias",
    date: "2022",
    file: "/prensa/3.pdf",
    category: "Vivienda",
    image: "/assets/previews/boletin.png",
    summary: "Gestión de recursos ante el DPS y la UNGR para el mejoramiento de vivienda en zonas rural y urbana, incluyendo atención prioritaria a damnificados por el invierno."
  },
  {
    title: "Rehabilitación de vías antiguas en Palermo ($4.300 millones)",
    date: "2021",
    file: "/prensa/palermo (3).pdf",
    category: "Infraestructura",
    image: "/assets/previews/boletin.png",
    summary: "Reposición total de redes de acueducto y pavimentación en barrios históricos como Santa Rosalía y Fátima, beneficiando a más de 12.000 palermunos."
  },
  {
    title: "Más de $1.200 millones en automotores para Palermo",
    date: "2021",
    file: "/prensa/Palermo (4).pdf",
    category: "Equipamiento",
    image: "/assets/previews/boletin.png",
    summary: "Adquisición de carro compactador, volquetas y kit de maquinaria amarilla ($3.100M) para optimizar el aseo público y el mantenimiento de vías rurales."
  },
  {
    title: "Optimización de redes en 11 sectores ($2.675 millones)",
    date: "2021",
    file: "/prensa/palermo (5).pdf",
    category: "Infraestructura",
    image: "/assets/previews/boletin.png",
    summary: "Reposición técnica de redes de acueducto y alcantarillado en 11 sectores que no habían sido intervenidos en 20 años, generando 30 empleos directos."
  },
  {
    title: "Palermo respalda al comercio informal por primera vez",
    date: "2021",
    file: "/prensa/PALERMO (6).pdf",
    category: "Social y Económico",
    image: "/assets/previews/boletin.png",
    summary: "Entrega de 20 módulos móviles y capacitaciones integrales para dignificar el trabajo de los vendedores ambulantes y organizar el espacio público."
  }
];
