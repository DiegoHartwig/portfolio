import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Entender o problema",
    description: "Objetivo, contexto, restrições, riscos e critérios de sucesso antes da escolha tecnológica."
  },
  {
    number: "02",
    title: "Projetar com clareza",
    description: "Arquitetura, contratos, decisões registradas e trade-offs compreensíveis por toda a equipe."
  },
  {
    number: "03",
    title: "Entregar com disciplina",
    description: "Implementação, testes, automação, observabilidade e segurança na operação."
  },
  {
    number: "04",
    title: "Facilitar a continuidade",
    description: "Documentação útil, transferência de conhecimento e evolução sem dependência de uma única pessoa."
  }
];

export function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="abordagem" aria-label="Abordagem de trabalho" className="bg-forest-deep py-20 text-onDark md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <div>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-onDark/60"
            >
              02 / Abordagem de trabalho
            </motion.p>
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.06, ease: "easeOut" }}
              className="font-serif text-2xl font-medium leading-snug md:text-3xl"
            >
              A arquitetura começa
              <br />
              <em className="italic text-bronze-light">antes da ferramenta.</em>
            </motion.h2>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
              className="mt-5 max-w-md text-sm leading-relaxed text-onDark/70"
            >
              Meu ponto de partida é entender o contexto, os riscos e as restrições do negócio.
              Ferramentas são meios; documentação, decisões explícitas e qualidade operacional
              fazem parte da entrega.
            </motion.p>
          </div>

          <div className="divide-y divide-onDark/15 border-t border-onDark/15">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="grid grid-cols-[48px_1fr] gap-5 py-6 first:pt-0"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-bronze-light">{step.number}</p>
                <div>
                  <h3 className="font-serif text-lg font-medium leading-snug">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-onDark/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
