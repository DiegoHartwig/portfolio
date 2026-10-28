import { motion, useReducedMotion } from "framer-motion";

const disciplines = [
  {
    number: "01",
    title: "Engenharia de Software",
    description:
      "Da concepção de novas soluções à modernização de sistemas legados, com sólida experiência em arquitetura, desenvolvimento, refatoração e integração de aplicações, priorizando qualidade, escalabilidade e continuidade operacional.",
    tags: [
      "ARQUITETURA DE SISTEMAS",
      "PLANEJAMENTO DE SOLUÇÕES",
      "DESENVOLVIMENTO DE SOFTWARE",
      "APIs & INTEGRAÇÕES",
      "MODERNIZAÇÃO & REFATORAÇÃO DE SISTEMAS LEGADOS"
    ]
  },
  {
    number: "02",
    title: "Engenharia de Dados",
    description:
      "Arquitetura, construção e modernização de plataformas de dados, evoluindo ambientes legados para soluções modernas e escaláveis, com pipelines, processamento distribuído, orquestração e governança.",
    tags: [
      "ARQUITETURA DE DADOS",
      "MODERNIZAÇÃO DE PLATAFORMAS DE DADOS",
      "PIPELINES ETL/ELT",
      "LAKEHOUSE",
      "ORQUESTRAÇÃO & GOVERNANÇA"
    ]
  },
  {
    number: "03",
    title: "Inteligência Artificial Aplicada",
    description:
      "Preparação e engenharia de dados para inteligência artificial, com foco em modelos de linguagem, RAG, agentes inteligentes e integração de soluções de IA a sistemas e processos corporativos.",
    tags: [
      "PREPARAÇÃO DE DADOS PARA IA",
      "ENGENHARIA DE DADOS PARA IA",
      "LLMS & RAG",
      "AGENTES DE IA",
      "INTEGRAÇÃO COM SISTEMAS"
    ]
  }
];

export function Expertise() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="atuacao" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8 xl:px-12">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone"
        >
          01 / Atuação
        </motion.p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-12">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
            className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl"
          >
            Três disciplinas.
            <br />
            Uma visão de <em className="font-serif italic text-bronze">engenharia.</em>
          </motion.h2>

          <div className="hidden bg-line lg:block" aria-hidden="true" />

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="border-l-2 border-bronze/40 pl-5 text-stone lg:border-l-0 lg:pl-0"
          >
            Tecnologia exige decisões conectadas. Combino experiência no desenvolvimento de
            sistemas com a construção de plataformas de dados e a aplicação criteriosa de
            inteligência artificial.
          </motion.p>
        </div>

        <div className="mt-16 divide-y divide-line border-t border-line">
          {disciplines.map((item, index) => (
            <motion.article
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[72px_1fr] sm:gap-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-bronze">{item.number}</p>
              <div>
                <h3 className="font-serif text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone">{item.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-bronze/25 bg-bronze/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-bronze"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
