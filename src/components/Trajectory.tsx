import { motion, useReducedMotion } from "framer-motion";

const phases = [
  {
    number: "01",
    subtitle: "Fundamentos",
    title: "Engenharia de software como alicerce",
    description:
      "Desenvolvimento de aplicações, integração entre sistemas e compreensão de regras de negócio, consolidando uma base sólida em arquitetura, qualidade e evolução de software."
  },
  {
    number: "02",
    subtitle: "Experiência e Modernização",
    title: "Sistemas legados e ambientes críticos",
    description:
      "Experiência em sistemas de alta complexidade e criticidade, incluindo sustentação, refatoração, modernização de aplicações legadas e evolução tecnológica, preservando a continuidade operacional e as regras de negócio."
  },
  {
    number: "03",
    subtitle: "Arquiteturas Modernas",
    title: "Engenharia e modernização de dados",
    description:
      "Projeto, construção e modernização de plataformas de dados, com arquiteturas Lakehouse, pipelines, processamento distribuído e orquestração, utilizando tecnologias como Spark, Airflow, dbt, Trino e ClickHouse."
  },
  {
    number: "04",
    subtitle: "Inovação e IA Aplicada",
    title: "Engenharia de dados para inteligência artificial",
    description:
      "Preparação e estruturação de dados para IA, com aprofundamento em modelos de linguagem, RAG, busca semântica e agentes inteligentes, conectando a experiência em software e dados às novas possibilidades da inteligência artificial."
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
              Do legado à inovação,
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
              Mais de 15 anos de experiência conectando diferentes gerações de tecnologia. Uma
              trajetória construída no desenvolvimento e sustentação de sistemas críticos, na
              modernização de aplicações legadas e na evolução para arquiteturas modernas,
              plataformas de dados e inteligência artificial.
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
