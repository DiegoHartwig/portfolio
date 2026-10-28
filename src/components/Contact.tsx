import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const contactLinks = [
  {
    href: "mailto:hartwig.diego@gmail.com",
    label: "E-mail profissional",
    description: "Contato direto e oportunidades",
    icon: Mail,
    external: false
  },
  {
    href: "https://www.linkedin.com/in/diegohartwig/",
    label: "LinkedIn",
    description: "Trajetória e conexões profissionais",
    icon: Linkedin,
    external: true
  },
  {
    href: "https://github.com/diegohartwig",
    label: "GitHub",
    description: "Código e repositórios públicos",
    icon: Github,
    external: true
  }
];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8 xl:px-12">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone"
        >
          06 / Contato
        </motion.p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
              className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl"
            >
              Boas ideias surgem quando
              <br />
              diferentes <em className="font-serif italic text-bronze">perspectivas se encontram.</em>
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
              className="mt-5 max-w-md text-stone"
            >
              Aberto a conexões profissionais e conversas sobre arquitetura de software,
              plataformas de dados, IA aplicada e desafios de engenharia.
            </motion.p>
          </div>

          <div className="divide-y divide-line border-t border-line lg:border-t-0">
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.45, delay: 0.1 + index * 0.08, ease: "easeOut" }
                }
                className="group flex items-center justify-between gap-4 py-5 first:pt-0"
              >
                <div className="flex items-center gap-4">
                  <item.icon size={18} className="shrink-0 text-forest" />
                  <div>
                    <p className="text-sm font-bold text-ink">{item.label}</p>
                    <p className="mt-0.5 text-xs text-stone">{item.description}</p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-stone transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
