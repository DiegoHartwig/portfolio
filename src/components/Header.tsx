import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Atuação", href: "#atuacao" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Publicações", href: "#publicacoes" }
];

export function Header() {
  const [activeSection, setActiveSection] = useState("#atuacao");
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
      if (window.innerWidth >= 1280) setIsMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header role="banner" className="relative z-20">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-6 md:px-8 md:py-7 lg:px-12 xl:px-16">
        <div className="flex items-center gap-8 lg:gap-11 xl:gap-12">
          <a href="#inicio" aria-label="Diego Hartwig — página inicial" className="flex items-center gap-3">
            <img
              src="/brand/simbolo-principal.svg"
              alt=""
              aria-hidden="true"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
            />
            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.1em] text-onDark sm:text-base">
                Diego Hartwig
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-onDark/65 sm:block">
                Software, Dados &amp; IA
              </span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden xl:block">
            <ul className="flex items-center gap-9 xl:gap-10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative pb-1.5 text-[15px] font-medium transition-colors duration-200 ${
                      activeSection === item.href ? "text-onDark" : "text-onDark/65 hover:text-onDark"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0 h-[1.5px] origin-center bg-brandGold transition-transform duration-200 ${
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

        <button
          type="button"
          className="inline-flex rounded-md border border-onDark/25 p-2 text-onDark transition hover:border-onDark/45 xl:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <a
          href="#contato"
          className="group hidden items-center gap-2.5 whitespace-nowrap rounded-md bg-brandGold px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-brandDark shadow-sm transition-colors duration-200 hover:bg-[#f2d5a5] xl:inline-flex"
        >
          Vamos conversar
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>

      <nav
        aria-label="Navegação principal mobile"
        className={`overflow-hidden bg-[#06201b]/95 backdrop-blur-sm transition-[max-height,opacity] duration-300 xl:hidden ${
          isMenuOpen ? "max-h-[70vh] border-t border-onDark/15 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-content flex-col gap-1 px-5 py-3 md:px-8">
          {navItems.map((item) => (
            <li key={`mobile-${item.href}`}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-md px-3 py-3 text-base font-medium transition-colors duration-200 ${
                  activeSection === item.href
                    ? "bg-onDark/10 text-onDark"
                    : "text-onDark/65 hover:bg-onDark/5 hover:text-onDark"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="group mt-2 flex items-center justify-center gap-2.5 rounded-md bg-brandGold px-3 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.06em] text-brandDark shadow-sm transition-colors duration-200 hover:bg-[#f2d5a5]"
            >
              Vamos conversar
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
