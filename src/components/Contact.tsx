import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const contactLinks = [
  {
    href: "https://www.linkedin.com/in/diegohartwig/",
    label: "LinkedIn",
    description: "Conecte-se e acompanhe publicações técnicas",
    icon: Linkedin,
    external: true,
    primary: true,
  },
  {
    href: "mailto:hartwig.diego@gmail.com",
    label: "E-mail",
    description: "Para projetos, propostas ou colaboração",
    icon: Mail,
    external: false,
    primary: false,
  },
  {
    href: "https://github.com/diegohartwig",
    label: "GitHub",
    description: "Projetos, código e repositórios públicos",
    icon: Github,
    external: true,
    primary: false,
  },
];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contato" className="py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8 xl:px-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-slate-700/30 bg-slate-900/60 p-8 shadow-card md:p-12"
        >
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400"
          >
            Contato
          </motion.p>
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-2xl font-extrabold tracking-tight text-white md:text-3xl"
          >
            Vamos conversar sobre dados, software e IA aplicada a problemas reais?
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-4 max-w-xl text-slate-300"
          >
            Aberto a conexões profissionais, trocas técnicas e conversas sobre engenharia, dados,
            arquitetura e soluções aplicáveis em ambientes reais.
          </motion.p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
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
                    : { duration: 0.45, delay: 0.2 + index * 0.08, ease: "easeOut" }
                }
                className={`group flex flex-col gap-3 rounded-xl p-4 transition-all duration-200 ${
                  item.primary
                    ? "border border-slate-600/40 bg-slate-800/50 hover:border-slate-500/60 hover:bg-slate-800/70"
                    : "border border-slate-700/25 bg-slate-900/40 hover:border-slate-600/40 hover:bg-slate-800/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <item.icon
                    size={18}
                    className="text-slate-400"
                  />
                  <ArrowRight
                    size={14}
                    className="text-slate-600 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{item.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
