import { motion, useReducedMotion } from "framer-motion";

function PlatformMark() {
  return (
    <svg viewBox="0 0 160 64" className="h-14 w-full" aria-hidden="true" focusable="false">
      <rect x="2" y="20" width="34" height="24" rx="5" fill="none" stroke="#183830" strokeOpacity="0.5" />
      <rect x="63" y="20" width="34" height="24" rx="5" fill="#183830" />
      <rect x="124" y="20" width="34" height="24" rx="5" fill="none" stroke="#183830" strokeOpacity="0.5" />
      <line x1="36" y1="32" x2="63" y2="32" stroke="#A17C4A" strokeWidth="1.5" />
      <line x1="97" y1="32" x2="124" y2="32" stroke="#A17C4A" strokeWidth="1.5" />
      <circle cx="49.5" cy="32" r="2" fill="#A17C4A" />
      <circle cx="110.5" cy="32" r="2" fill="#A17C4A" />
    </svg>
  );
}

function SystemsMark() {
  return (
    <svg viewBox="0 0 160 64" className="h-14 w-full" aria-hidden="true" focusable="false">
      <rect x="20" y="10" width="46" height="18" rx="4" fill="none" stroke="#183830" strokeOpacity="0.5" />
      <rect x="94" y="10" width="46" height="18" rx="4" fill="none" stroke="#183830" strokeOpacity="0.5" />
      <rect x="57" y="40" width="46" height="18" rx="4" fill="#183830" />
      <line x1="43" y1="28" x2="80" y2="40" stroke="#A17C4A" strokeWidth="1.5" />
      <line x1="117" y1="28" x2="80" y2="40" stroke="#A17C4A" strokeWidth="1.5" />
    </svg>
  );
}

function AiMark() {
  return (
    <svg viewBox="0 0 160 64" className="h-14 w-full" aria-hidden="true" focusable="false">
      <rect x="4" y="18" width="30" height="28" rx="5" fill="none" stroke="#183830" strokeOpacity="0.5" />
      <circle cx="98" cy="32" r="17" fill="#183830" />
      <circle cx="98" cy="32" r="4" fill="#BC9865" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 98 + Math.cos(rad) * 11;
        const y = 32 + Math.sin(rad) * 11;
        return <circle key={deg} cx={x} cy={y} r="1.6" fill="#F5F3EE" opacity="0.8" />;
      })}
      <line x1="34" y1="32" x2="81" y2="32" stroke="#A17C4A" strokeWidth="1.5" />
      <rect x="126" y="18" width="30" height="28" rx="5" fill="none" stroke="#183830" strokeOpacity="0.5" />
      <line x1="115" y1="32" x2="126" y2="32" stroke="#A17C4A" strokeWidth="1.5" />
    </svg>
  );
}

const fields = [
  {
    tag: "Arquitetura / Dados",
    number: "01",
    icon: PlatformMark,
    title: "Plataformas de dados e lakehouse",
    description:
      "Pipelines confiáveis, camadas de armazenamento, orquestração e integração entre processamento e consumo analítico.",
    tags: "CONFIABILIDADE · GOVERNANÇA · ESCALA"
  },
  {
    tag: "Arquitetura / Sistemas",
    number: "02",
    icon: SystemsMark,
    title: "Sistemas e operação confiável",
    description:
      "Integração de serviços, análise de gargalos, observabilidade e práticas de sustentação de ambientes críticos.",
    tags: "INTEGRAÇÃO · OBSERVABILIDADE · EVOLUÇÃO"
  },
  {
    tag: "Arquitetura / IA",
    number: "03",
    icon: AiMark,
    title: "Dados preparados para IA aplicada",
    description:
      "Estruturação de fontes, recuperação de conhecimento, avaliação de qualidade e integração de modelos e processos reais.",
    tags: "PREPARAÇÃO · RAG · AVALIAÇÃO"
  }
];

export function Specialties() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="especialidades" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8 xl:px-12">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone"
        >
          03 / Campos de especialidade
        </motion.p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-12">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
            className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl"
          >
            Onde a experiência
            <br />
            gera <em className="font-serif italic text-bronze">contribuição.</em>
          </motion.h2>

          <div className="hidden bg-line lg:block" aria-hidden="true" />

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="border-l-2 border-bronze/40 pl-5 text-stone lg:border-l-0 lg:pl-0"
          >
            Alguns dos tipos de desafio em que minha atuação técnica se concentra. O foco não é
            uma ferramenta isolada, mas a arquitetura necessária para resolver o problema.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {fields.map((field, index) => (
            <motion.article
              key={field.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-xl border border-line bg-surface/50 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-stone">
                  {field.tag}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-bronze">
                  {field.number}
                </span>
              </div>

              <field.icon />

              <h3 className="mt-4 font-serif text-lg font-medium leading-snug text-ink">{field.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{field.description}</p>
              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-stone">{field.tags}</p>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-stone">
          Estas são frentes de atuação técnica, não um portfólio de clientes. Estudos de caso e
          projetos concretos podem ser incorporados ao portfólio futuramente, com autorização e
          evidências.
        </p>
      </div>
    </section>
  );
}
