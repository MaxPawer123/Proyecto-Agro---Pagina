import { Code2, Sprout, HeartHandshake, BarChart3, Briefcase, GraduationCap } from "lucide-react"

export type TeamMember = {
  id: string
  name: string
  role: string
  department: string
  image: string
  bio: string
  achievements: string[]
}

export type TeamArea = {
  id: string
  name: string
  description: string
  icon: any
  color: string
  members: TeamMember[]
}

export const coordinators: TeamMember[] = [
  {
    id: "coord-1",
    name: "Dr. Juan Carlos Mamani",
    role: "Coordinador General",
    department: "Facultad de Agronomía",
    image: "/placeholder-user.jpg",
    bio: "Ingeniero Agrónomo con especialización en cultivos andinos. Más de 15 años de experiencia en investigación aplicada con comunidades campesinas del altiplano boliviano.",
    achievements: [
      "Director de 5 proyectos de desarrollo rural",
      "Publicaciones en revistas internacionales",
      "Reconocimiento de CONACYT por investigación en quinua",
    ],
  },
  {
    id: "coord-2",
    name: "Lic. María Flores Condori",
    role: "Coordinadora Académica",
    department: "Dirección de Postgrado",
    image: "/placeholder-user.jpg",
    bio: "Magíster en Desarrollo Rural. Especialista en vinculación entre universidades y comunidades. Lidera procesos de co-investigación participativa.",
    achievements: [
      "Formadora de facilitadores comunitarios",
      "Autora del Manual de Investigación Participativa",
      "Coordinadora de 3 cohortes del proyecto",
    ],
  },
]

export const teamAreas: TeamArea[] = [
  {
    id: "informatica",
    name: "Informática",
    description:
      "Desarrollo de soluciones tecnológicas innovadoras para el contexto rural. Arquitectura de la app Yapu Aroma con enfoque offline-first.",
    icon: Code2,
    color: "bg-blue-50 text-blue-600",
    members: [
      {
        id: "info-1",
        name: "Carlos Arancibia López",
        role: "Desarrollador Full Stack",
        department: "Carrera de Informática",
        image: "/placeholder-user.jpg",
        bio: "Ingeniero en Sistemas con especialización en desarrollo mobile y arquitectura de software. 8 años de experiencia en startups tech.",
        achievements: [
          "Arquitecto de Yapu Aroma",
          "Experto en React Native y desarrollo offline",
          "Mentor técnico del equipo",
        ],
      },
      {
        id: "info-2",
        name: "Daniela Sánchez Rojas",
        role: "Ingeniera de Base de Datos",
        department: "Carrera de Informática",
        image: "/placeholder-user.jpg",
        bio: "Especialista en optimización de bases de datos y seguridad de información. Enfoque en soluciones para contextos con conectividad limitada.",
        achievements: [
          "Diseño de arquitectura de datos distribuida",
          "Implementación de sincronización offline",
          "Certificación en PostgreSQL avanzado",
        ],
      },
    ],
  },
  {
    id: "agronomia",
    name: "Agronomía",
    description:
      "Análisis científico del cultivo de quinua, mejoramiento de prácticas y validación de tecnologías agrícolas.",
    icon: Sprout,
    color: "bg-green-50 text-green-600",
    members: [
      {
        id: "agro-1",
        name: "Ing. Roberto Quispe Mamani",
        role: "Especialista en Cultivos Andinos",
        department: "Carrera de Agronomía",
        image: "/placeholder-user.jpg",
        bio: "Agrónomo especializado en quinua y papa nativa. Investigador de técnicas de manejo agroecológico en el altiplano.",
        achievements: [
          "Publicaciones en Agronomía Tropical",
          "Certificación en Agroecología",
          "Productor de semilla certificada",
        ],
      },
      {
        id: "agro-2",
        name: "Lic. Paola Condori Yucra",
        role: "Técnica en Suelos",
        department: "Carrera de Agronomía",
        image: "/placeholder-user.jpg",
        bio: "Especialista en análisis de suelos y enmiendas orgánicas. Trabajo de campo con comunidades campesinas de Sica Sica.",
        achievements: [
          "Capacitadora en manejo de suelos",
          "Desarrollo de protocolos de análisis",
          "Líder en levantamiento de información",
        ],
      },
    ],
  },
  {
    id: "trabajo-social",
    name: "Trabajo Social",
    description: "Fortalecimiento de vínculos comunitarios, facilitación del diálogo y procesos participativos.",
    icon: HeartHandshake,
    color: "bg-red-50 text-red-600",
    members: [
      {
        id: "ts-1",
        name: "Lic. Gabriela Murillo Araujo",
        role: "Coordinadora Comunitaria",
        department: "Carrera de Trabajo Social",
        image: "/placeholder-user.jpg",
        bio: "Trabajadora social especializada en organizaciones campesinas. Facilita procesos de empoderamiento comunitario.",
        achievements: [
          "Mediadora en conflictos territoriales",
          "Formadora de líderes comunitarios",
          "Documentalista de narrativas comunitarias",
        ],
      },
      {
        id: "ts-2",
        name: "Lic. Juan Pablo Vargas Condori",
        role: "Facilitador de Procesos",
        department: "Carrera de Trabajo Social",
        image: "/placeholder-user.jpg",
        bio: "Especialista en metodologías participativas y animación sociocultural. Promotor de espacios de diálogo inclusivo.",
        achievements: [
          "Diseñador de talleres participativos",
          "Experto en comunicación intercultural",
          "Coordinador de espacios de encuentro",
        ],
      },
    ],
  },
  {
    id: "economia",
    name: "Economía",
    description:
      "Análisis de viabilidad económica, estructura de costos y acceso a mercados para productores.",
    icon: BarChart3,
    color: "bg-yellow-50 text-yellow-600",
    members: [
      {
        id: "econ-1",
        name: "Lic. Eduardo Flores Cáceres",
        role: "Analista Económico",
        department: "Carrera de Economía",
        image: "/placeholder-user.jpg",
        bio: "Economista especializado en economía agrícola y seguridad alimentaria. Analista de cadenas de valor.",
        achievements: [
          "Desarrollador de modelos de costos",
          "Especialista en economía campesina",
          "Investigador de mercados locales",
        ],
      },
      {
        id: "econ-2",
        name: "Lic. Mirtha López Chávez",
        role: "Especialista en Finanzas",
        department: "Carrera de Economía",
        image: "/placeholder-user.jpg",
        bio: "Especialista en acceso a financiamiento y crédito agrícola. Diseña estrategias de sostenibilidad financiera.",
        achievements: [
          "Diseñadora de planes de negocio",
          "Capacitadora en finanzas para productores",
          "Gestora de alianzas con instituciones financieras",
        ],
      },
    ],
  },
  {
    id: "administracion",
    name: "Administración",
    description: "Gestión integral del proyecto, planificación y organización de recursos.",
    icon: Briefcase,
    color: "bg-purple-50 text-purple-600",
    members: [
      {
        id: "admin-1",
        name: "Lic. Fernando Guzmán Rojas",
        role: "Administrador del Proyecto",
        department: "Carrera de Administración",
        image: "/placeholder-user.jpg",
        bio: "Administrador de empresas especializado en gestión de proyectos de desarrollo. Certificado en Project Management.",
        achievements: [
          "Gestor de presupuesto y recursos",
          "Coordinador de logística",
          "Especialista en reportes y evaluación",
        ],
      },
      {
        id: "admin-2",
        name: "Lic. Verónica Ponce Ulloa",
        role: "Asistente Administrativa",
        department: "Carrera de Administración",
        image: "/placeholder-user.jpg",
        bio: "Administradora especializada en gestión operativa. Responsable de documentación y seguimiento administrativo.",
        achievements: [
          "Gestora de bases de datos administrativas",
          "Coordinadora de agendas y eventos",
          "Responsable de comunicación interna",
        ],
      },
    ],
  },
  {
    id: "equipo-academico",
    name: "Equipo Académico",
    description: "Tutores y docentes que acompañan el rigor metodológico del proyecto.",
    icon: GraduationCap,
    color: "bg-indigo-50 text-indigo-600",
    members: [
      {
        id: "aca-1",
        name: "Dr. Luis Mendoza García",
        role: "Tutor Principal",
        department: "Facultad de Agronomía",
        image: "/placeholder-user.jpg",
        bio: "Doctor en Ciencias Agrarias con investigación en agroecología. Tutor de trabajos de grado desde 2008.",
        achievements: [
          "Director de 20+ trabajos de grado",
          "Publicaciones en Desarrollo Rural",
          "Asesor técnico del modelo",
        ],
      },
      {
        id: "aca-2",
        name: "Dra. Patricia Arteaga Vera",
        role: "Tutora Académica",
        department: "Facultad de Humanidades",
        image: "/placeholder-user.jpg",
        bio: "Doctora en Educación y Desarrollo Social. Especialista en metodologías de investigación participativa.",
        achievements: [
          "Asesora de metodología participativa",
          "Investigadora en educación rural",
          "Facilitadora de aprendizajes comunitarios",
        ],
      },
    ],
  },
]
