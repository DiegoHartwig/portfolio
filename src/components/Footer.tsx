import { Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-5 text-sm text-stone sm:flex-row md:px-8 xl:px-12">
        <div>
          <p className="font-semibold text-ink">Diego Hartwig.</p>
          <p className="text-xs uppercase tracking-wide text-stone">Software, Dados &amp; IA</p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/diegohartwig/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-forest"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/diegohartwig"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-forest"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
          <p className="text-xs text-stone">© {new Date().getFullYear()} · Engenharia além das ferramentas.</p>
        </div>
      </div>
    </footer>
  );
}
