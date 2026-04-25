import { Mail, Github, Linkedin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const contactLinks = [
    { href: "mailto:hartwig.diego@gmail.com", label: "E-mail", icon: Mail, external: false },
    { href: "https://www.linkedin.com/in/diegohartwig/", label: "LinkedIn", icon: Linkedin, external: true },
    { href: "https://github.com/diegohartwig", label: "GitHub", icon: Github, external: true }
  ];

  return (
    <section id="contato" className="py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8 xl:px-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-card"
        >
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="text-3xl font-semibold text-white"
          >
            Contato
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="mt-4 text-slate-300"
          >
            Canais profissionais para contato, networking e troca de ideias sobre engenharia de
            dados, inteligência artificial aplicada e engenharia de software.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.18 + index * 0.1, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:border-cyan-300/40"
              >
                <item.icon size={16} />
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
