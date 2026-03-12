import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-muted-foreground text-sm">
          © {currentYear} Gabriel Flores. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <Link 
            href="https://github.com/Gabriel-Onitsuaf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/onitsuafdeveloperjr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link 
            href="mailto:gabrielonitsuaf@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
