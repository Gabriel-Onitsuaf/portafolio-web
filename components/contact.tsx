"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-primary tracking-wider mb-4">
          CONTACTO
        </h2>
        <p className="text-2xl md:text-3xl text-foreground font-medium mb-4 text-balance">
          ¿Tienes un proyecto en mente o quieres discutir una oportunidad?
        </p>
        <p className="text-muted-foreground text-lg mb-8">
          Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
          No dudes en contactarme.
        </p>

        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <Link 
              href="mailto:gabrielonitsuaf@gmail.com" 
              className="hover:text-foreground transition-colors"
            >
              gabrielonitsuaf@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="mailto:gabrielonitsuaf@gmail.com">
              Enviar Email
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
            <Link href="https://www.linkedin.com/in/onitsuafdeveloperjr" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-border text-foreground hover:bg-secondary">
            <Link href="https://github.com/Gabriel-Onitsuaf" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
