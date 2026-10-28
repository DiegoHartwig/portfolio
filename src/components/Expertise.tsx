import { motion, useReducedMotion } from "framer-motion";

const disciplines = [
  {
    number: "01",
    title: "Engenharia de Software",
    description:
      "Arquitetura, integração entre sistemas, desenvolvimento de aplicações e evolução de soluções que precisam ser compreensíveis, resilientes e sustentáveis.",
    tags: "ARQUITETURA DE SISTEMAS · APIS · PYTHON · INTEGRAÇÕES"
  },
  {
    number: "02",
    title: "Engenharia de Dados",
    description:
      "Desenho de pipelines, plataformas analíticas, processamento distribuído, orquestração, modelagem e governança para transformar dados em ativos confiáveis.",
    tags: "SPARK · AIRFLOW · DBT · TRINO · LAKEHOUSE"
  },
  {
    number: "03",
    title: "Inteligência Artificial Aplicada",
    description:
      "Uso de IA conectado a necessidades concretas: preparação de dados, soluções com modelos de linguagem, recuperação de informação e integração com sistemas reais.",
    tags: "LLMS · RAG · AGENTES · IA EM PRODUTOS"
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
                <p className="mt-5 text-xs font-medium uppercase tracking-wide text-stone">{item.tags}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
