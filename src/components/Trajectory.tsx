import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const phases = [
  {
    number: "01",
    subtitle: "Engenharia de Software",
    title: "Base em Software",
    description:
      "Fundação sólida em engenharia de software, sistemas distribuídos, APIs, arquitetura e automação. Experiência com ambientes críticos e práticas de qualidade de código.",
  },
  {
    number: "02",
    subtitle: "Escala e Confiabilidade",
    title: "Sistemas Reais",
    description:
      "Atuação em sistemas de alta disponibilidade, integrações enterprise e ambientes complexos com foco em confiabilidade, observabilidade e entrega contínua.",
  },
  {
    number: "03",
    subtitle: "Dados e Plataformas",
    title: "Engenharia de Dados",
    description:
      "Consolidação em engenharia de dados: pipelines, lakehouse, orquestração, modelagem e governança. Construção de plataformas de dados escaláveis e confiáveis.",
  },
  {
    number: "04",
    subtitle: "Dados + Inteligência",
    title: "IA Aplicada",
    description:
      "Expansão natural para IA aplicada: LLMs, RAG, agentes, visão computacional e automação inteligente. IA com base sólida em dados e engenharia — para uso real, não apenas demonstrações.",
  },
];

export function Trajectory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="autoridade" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400"
        >
          Trajetória
        </motion.p>
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="text-3xl font-extrabold tracking-tight text-white md:text-4xl"
        >
          Trajetória e especialização
        </motion.h2>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-slate-300"
        >
          Uma evolução coerente: a base em software fortalece a atuação em dados, e a atuação em dados
          fortalece a aplicação real de IA.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.18 }}
          className="mt-4 flex flex-wrap items-center gap-2"
          aria-hidden="true"
        >
          {["Software", "Sistemas", "Dados", "IA"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-400">{step}</span>
              {i < arr.length - 1 && <ArrowRight size={14} className="text-cyan-400/50" />}
            </div>
          ))}
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative rounded-2xl border border-slate-700/30 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500/50 hover:shadow-[0_12px_28px_-10px_rgba(2,6,23,0.7)]"
            >
              <p className="text-3xl font-black leading-none text-slate-600/60">{phase.number}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {phase.subtitle}
              </p>
              <h3 className="mt-1 text-base font-bold text-white">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{phase.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
