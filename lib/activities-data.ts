import { Mountain, Wrench, MessagesSquare, BookOpenCheck, Users, Leaf, MapPin, Zap } from "lucide-react"

export type Activity = {
  id: string
  icon: any
  title: string
  description: string
  image: string
  alt: string
  tag: string
}

export const activities: Activity[] = [
  {
    id: "fieldtrip-1",
    icon: Mountain,
    title: "Viaje de campo a Milla Milla",
    description:
      "Nos trasladamos a la comunidad de Milla Milla para vivir su realidad, recorrer las parcelas y construir confianza con las familias productoras.",
    image: "/activity-fieldtrip.jpg",
    alt: "Estudiantes recorriendo Milla Milla",
    tag: "Viajes",
  },
  {
    id: "fieldtrip-2",
    icon: Mountain,
    title: "Recorrido en Viscachani",
    description:
      "Expedición a Viscachani con el equipo multidisciplinario para mapear el territorio y entender la dinámica agrícola local.",
    image: "/activity-fieldtrip.jpg",
    alt: "Equipo en Viscachani",
    tag: "Viajes",
  },
  {
    id: "fieldtrip-3",
    icon: MapPin,
    title: "Viaje exploratorio a Sica Sica",
    description:
      "Prospección de nuevas comunidades en la región de Sica Sica para expandir el diagnóstico integral del territorio.",
    image: "/activity-fieldtrip.jpg",
    alt: "Estudiantes explorando Sica Sica",
    tag: "Viajes",
  },
  {
    id: "fieldtrip-4",
    icon: MapPin,
    title: "Visita a Patacamaya",
    description:
      "Encuentro con productores de quinua en Patacamaya para validar metodologías y recopilar datos de rendimiento.",
    image: "/activity-fieldtrip.jpg",
    alt: "Trabajo de campo en Patacamaya",
    tag: "Viajes",
  },
  {
    id: "workshop-1",
    icon: Wrench,
    title: "Taller de capacitación agrícola",
    description:
      "Sesión práctica en campo donde el conocimiento se construye en conjunto con los productores bajo el principio de 'Aprender Haciendo'.",
    image: "/activity-workshop.jpg",
    alt: "Taller agrícola práctico",
    tag: "Talleres",
  },
  {
    id: "workshop-2",
    icon: Wrench,
    title: "Capacitación en manejo de suelos",
    description:
      "Workshop intensivo sobre análisis y mejoramiento de suelos, dirigido tanto a estudiantes como a productores locales.",
    image: "/activity-workshop.jpg",
    alt: "Taller de suelos",
    tag: "Talleres",
  },
  {
    id: "workshop-3",
    icon: Leaf,
    title: "Taller de técnicas agroecológicas",
    description:
      "Formación teórico-práctica en métodos sustentables de cultivo de quinua y rotación de cultivos.",
    image: "/activity-workshop.jpg",
    alt: "Técnicas agroecológicas",
    tag: "Talleres",
  },
  {
    id: "workshop-4",
    icon: Zap,
    title: "Capacitación en uso de Yapu Aroma",
    description:
      "Formación para productores en el uso de la aplicación móvil Yapu Aroma y sus funcionalidades de planificación.",
    image: "/activity-workshop.jpg",
    alt: "Capacitación app Yapu Aroma",
    tag: "Talleres",
  },
  {
    id: "community-1",
    icon: MessagesSquare,
    title: "Socialización con autoridades locales",
    description:
      "Espacios de diálogo con autoridades de Sica Sica y Patacamaya para validar resultados y escuchar inquietudes.",
    image: "/activity-community.jpg",
    alt: "Reunión con autoridades",
    tag: "Comunidad",
  },
  {
    id: "community-2",
    icon: Users,
    title: "Asamblea comunitaria",
    description:
      "Encuentro con familias productoras para co-diseñar las herramientas y validar avances del proyecto.",
    image: "/activity-community.jpg",
    alt: "Asamblea comunitaria",
    tag: "Comunidad",
  },
  {
    id: "community-3",
    icon: MessagesSquare,
    title: "Devolución de resultados",
    description:
      "Presentación participativa del diagnóstico integral en territorios, recogiendo retroalimentación para ajustes.",
    image: "/activity-community.jpg",
    alt: "Devolución de resultados",
    tag: "Comunidad",
  },
  {
    id: "community-4",
    icon: Users,
    title: "Encuentro de saberes",
    description:
      "Espacios de intercambio entre conocimientos académicos y saberes ancestrales de las comunidades productoras.",
    image: "/activity-community.jpg",
    alt: "Encuentro de saberes",
    tag: "Comunidad",
  },
  {
    id: "research-1",
    icon: BookOpenCheck,
    title: "Levantamiento de datos de campo",
    description:
      "Recolección sistemática de información sobre variedades de quinua, rendimientos y prácticas productivas locales.",
    image: "/activity-diagnosis.jpg",
    alt: "Levantamiento de datos",
    tag: "Investigación",
  },
  {
    id: "research-2",
    icon: BookOpenCheck,
    title: "Análisis de muestras de suelo",
    description:
      "Procesamiento científico de muestras del territorio para caracterizar composición, pH y nutrientes.",
    image: "/activity-diagnosis.jpg",
    alt: "Análisis de suelos",
    tag: "Investigación",
  },
  {
    id: "research-3",
    icon: BookOpenCheck,
    title: "Sistematización de saberes",
    description:
      "Documentación y análisis de prácticas ancestrales de productores para integrarlas al modelo multidisciplinario.",
    image: "/activity-diagnosis.jpg",
    alt: "Sistematización de saberes",
    tag: "Investigación",
  },
  {
    id: "research-4",
    icon: BookOpenCheck,
    title: "Revisión científica de metodología",
    description:
      "Validación académica de cada decisión metodológica por tutores y expertos externos.",
    image: "/activity-diagnosis.jpg",
    alt: "Revisión científica",
    tag: "Investigación",
  },
  {
    id: "research-5",
    icon: BookOpenCheck,
    title: "Mapeo de actores territoriales",
    description:
      "Identificación y caracterización de instituciones, cooperativas y líderes clave en los territorios.",
    image: "/activity-diagnosis.jpg",
    alt: "Mapeo de actores",
    tag: "Investigación",
  },
  {
    id: "fieldtrip-5",
    icon: MapPin,
    title: "Reconocimiento de ecosistemas",
    description:
      "Evaluación de factores ecológicos, clima y biodiversidad que influyen en la producción de quinua.",
    image: "/activity-fieldtrip.jpg",
    alt: "Ecosistemas del altiplano",
    tag: "Viajes",
  },
  {
    id: "workshop-5",
    icon: Wrench,
    title: "Taller de comercialización",
    description:
      "Formación en estrategias de venta, empaque y posicionamiento de quinua en mercados locales y regionales.",
    image: "/activity-workshop.jpg",
    alt: "Taller de comercialización",
    tag: "Talleres",
  },
  {
    id: "community-5",
    icon: Users,
    title: "Jornada de integración",
    description:
      "Evento de confraternidad entre estudiantes UMSA y productores para fortalecer vínculos y crear espacios de confianza.",
    image: "/activity-community.jpg",
    alt: "Jornada de integración",
    tag: "Comunidad",
  },
  {
    id: "research-6",
    icon: BookOpenCheck,
    title: "Seguimiento y monitoreo",
    description:
      "Visitas periódicas para evaluar implementación de recomendaciones y registrar cambios en prácticas productivas.",
    image: "/activity-diagnosis.jpg",
    alt: "Seguimiento de impacto",
    tag: "Investigación",
  },
]
