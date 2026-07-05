import { Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-400 sm:flex-row md:px-8 xl:px-12">
        <p>© {new Date().getFullYear()} Diego Hartwig. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/diegohartwig/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/diegohartwig"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan-400"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
