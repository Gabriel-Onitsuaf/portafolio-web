"use client"

import { Badge } from "@/components/ui/badge"

const technologies = {
  backend: [
    { name: "Java", level: "Principal" },
    { name: "Spring Boot", level: "Principal" },
    { name: "APIs REST", level: "Principal" },
    { name: "MySQL", level: "Principal" },
  ],
  frontend: [
    { name: "HTML", level: "Intermedio" },
    { name: "CSS", level: "Intermedio" },
    { name: "JavaScript", level: "Intermedio" },
    { name: "Bootstrap", level: "Intermedio" },
  ],
  tools: [
    { name: "Git", level: "Intermedio" },
    { name: "GitHub", level: "Intermedio" },
    { name: "Postman", level: "Intermedio" },
    { name: "Apache Maven", level: "Intermedio" },
  ],
}

export function Technologies() {
  return (
    <section id="tecnologias" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-primary tracking-wider mb-12">
          TECNOLOGÍAS
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.backend.map((tech) => (
                <Badge 
                  key={tech.name} 
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1.5"
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.frontend.map((tech) => (
                <Badge 
                  key={tech.name} 
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1.5"
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Herramientas
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.tools.map((tech) => (
                <Badge 
                  key={tech.name} 
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1.5"
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
