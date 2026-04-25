import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Stack", href: "#stack" },
  { label: "Trajetória", href: "#autoridade" },
  { label: "Conteúdos", href: "#insights" },
  { label: "Contato", href: "#contato" }
];

export function Header() {
  const [activeSection, setActiveSection] = useState("#inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.35, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8 xl:px-12">
        <a href="#inicio" className="text-sm font-semibold tracking-wide text-white">
          Diego Hartwig
        </a>
        <button
          type="button"
          className="inline-flex rounded-lg border border-white/15 p-2 text-slate-200 transition hover:border-cyan-300/50 hover:text-white md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative pb-1 text-base font-medium transition-colors duration-300 ${
                    activeSection === item.href ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-center bg-cyan-200/90 transition-transform duration-300 ${
                      activeSection === item.href ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav
        aria-label="Navegação principal mobile"
        className={`overflow-hidden border-t border-white/10 bg-slate-950/80 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 md:px-8 xl:px-12">
          {navItems.map((item) => (
            <li key={`mobile-${item.href}`}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors duration-300 ${
                  activeSection === item.href
                    ? "bg-cyan-300/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
