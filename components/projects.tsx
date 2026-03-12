"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Calendar, Globe, BookOpen } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Agenda en Java",
    description: "Agenda creada durante el segundo Hackaton de Generation. Aplicación de escritorio desarrollada completamente en Java para la gestión de contactos.",
    technologies: ["Java"],
    type: "Aplicación de Escritorio",
    icon: BookOpen,
    features: [
      "Gestión de contactos",
      "Interfaz de consola",
      "Desarrollado en Hackaton",
      "Código limpio y estructurado"
    ],
    github: "https://github.com/Gabriel-Onitsuaf/AgendaEnJava",
    demo: null,
  },
  {
    title: "KinConecta",
    description: "Red social enfocada en conectar viajeros. Plataforma web que permite a los usuarios compartir experiencias de viaje y conectar con otros aventureros.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    type: "Red Social",
    icon: Globe,
    features: [
      "Conexión entre viajeros",
      "Diseño responsivo",
      "Experiencia de usuario intuitiva",
      "Comunidad de viajeros"
    ],
    github: "https://github.com/Gabriel-Onitsuaf/KinConecta",
    demo: "https://kinconecta.com",
  },
  {
    title: "Combat MX",
    description: "Página web dedicada al mundo del combate y artes marciales en México. Plataforma informativa con diseño moderno y atractivo.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    type: "Página Web",
    icon: Calendar,
    features: [
      "Diseño moderno y dinámico",
      "Contenido de artes marciales",
      "Experiencia visual impactante",
      "Responsivo en todos los dispositivos"
    ],
    github: "https://github.com/Gabriel-Onitsuaf/Combat_MX",
    demo: "https://combatmx.com",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl">
        <h2 className="text-sm font-medium text-primary tracking-wider mb-4">
          PROYECTOS
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Una selección de proyectos personales que demuestran mis habilidades 
          en desarrollo Full Stack con Java y tecnologías web.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-secondary">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Ver código de ${project.title}`}
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    {project.demo && (
                      <Link 
                        href={project.demo}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Ver demo de ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {project.type}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="mb-4 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-border text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
