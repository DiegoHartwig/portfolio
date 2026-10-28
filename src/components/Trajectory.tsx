import { motion, useReducedMotion } from "framer-motion";

const phases = [
  {
    number: "01",
    subtitle: "Fundamentos",
    title: "Base em engenharia de software",
    description:
      "Desenvolvimento de aplicações, integração de sistemas e atenção à qualidade e manutenção do código."
  },
  {
    number: "02",
    subtitle: "Evolução e escala",
    title: "Sistemas de maior criticidade",
    description:
      "Atuação em soluções complexas, com requisitos de confiabilidade, integração, disponibilidade e sustentação."
  },
  {
    number: "03",
    subtitle: "Dados e plataformas",
    title: "Engenharia de dados",
    description:
      "Arquitetura de processamento, pipelines, lakehouse, orquestração e operação de plataformas analíticas."
  },
  {
    number: "04",
    subtitle: "Próxima fronteira",
    title: "Inteligência artificial aplicada",
    description:
      "Aprofundamento em modelos de linguagem, RAG e agentes, com base sólida em dados e preparação de informação."
  }
];

export function Trajectory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="trajetoria" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8 xl:px-12">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone"
        >
          04 / Trajetória
        </motion.p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
          <div>
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
              className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl"
            >
              Uma evolução
              <br />
              com <em className="font-serif italic text-bronze">continuidade.</em>
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
              className="mt-4 max-w-md text-stone"
            >
              Uma base construída na engenharia de software, ampliada pela experiência em sistemas
              críticos, plataformas de dados e IA aplicada.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
              className="mt-10 border-t border-line pt-6"
            >
              <p className="font-serif text-5xl font-medium text-bronze">15+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-stone">
                Anos de experiência em tecnologia
              </p>
            </motion.div>
          </div>

          <div className="divide-y divide-line border-t border-line">
            {phases.map((phase, index) => (
              <motion.article
                key={phase.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="grid grid-cols-[48px_1fr] gap-5 py-6 first:pt-0"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-bronze">{phase.number}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone">{phase.subtitle}</p>
                  <h3 className="mt-1 font-serif text-lg font-medium text-ink">{phase.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">{phase.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
