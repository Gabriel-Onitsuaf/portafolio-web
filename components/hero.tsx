"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          Gabriel Flores
        </h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
          Java Full Stack Developer Jr.
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
          Desarrollador apasionado por crear soluciones robustas y escalables. 
          Especializado en el ecosistema Java con Spring Boot, APIs REST y bases de datos MySQL, 
          combinando experiencia en backend con habilidades frontend para entregar 
          aplicaciones completas y funcionales.
        </p>

        <nav className="flex flex-col gap-4 mb-12">
          <Link 
            href="#sobre-mi" 
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3 group"
          >
            <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
            SOBRE MÍ
          </Link>
          <Link 
            href="#tecnologias" 
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3 group"
          >
            <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
            TECNOLOGÍAS
          </Link>
          <Link 
            href="#proyectos" 
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3 group"
          >
            <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
            PROYECTOS
          </Link>
          <Link 
            href="#contacto" 
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3 group"
          >
            <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
            CONTACTO
          </Link>
        </nav>

        <div className="flex gap-6">
          <Link 
            href="https://github.com/Gabriel-Onitsuaf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/onitsuafdeveloperjr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto:gabrielonitsuaf@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
