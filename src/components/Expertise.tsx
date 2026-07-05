import { motion, useReducedMotion } from "framer-motion";
import { Database, Code2, Cpu, Server } from "lucide-react";

const expertiseAreas = [
  {
    icon: Database,
    title: "Engenharia de Dados",
    description:
      "Construção de pipelines, modelos, transformações e plataformas de dados com foco em confiabilidade, rastreabilidade e aplicação prática.",
    tools: ["Apache Spark", "dbt", "Apache Airflow", "Trino", "Delta Lake", "OpenMetadata"],
    span: "lg:col-span-4",
  },
  {
    icon: Code2,
    title: "Engenharia de Software",
    description:
      "Base em arquitetura, integração entre sistemas, APIs, sustentação e boas práticas para soluções robustas e evolutivas.",
    tools: ["Python", ".NET / C#", "Microservices", "Event-Driven", "CI/CD"],
    span: "lg:col-span-2",
  },
  {
    icon: Cpu,
    title: "IA Aplicada",
    description:
      "Aplicação de IA com visão de engenharia: dados confiáveis, contexto bem definido, validação, integração com ferramentas e uso real.",
    tools: ["LLMs", "RAG", "Agentes", "OCR", "Visão Computacional", "MLOps"],
    span: "lg:col-span-2",
  },
  {
    icon: Server,
    title: "Plataformas e Ambientes Reais",
    description:
      "Estruturação de ambientes, automações, orquestrações e integrações que precisam operar de forma consistente em cenários reais.",
    tools: ["Kubernetes", "MinIO / Ceph", "Hive Metastore", "Linux", "Observabilidade"],
    span: "lg:col-span-4",
  },
];

export function Expertise() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="especialidades" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400"
        >
          Especialidades
        </motion.p>
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="text-3xl font-extrabold tracking-tight text-white md:text-4xl"
        >
          Engenharia aplicada a ambientes reais
        </motion.h2>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-slate-300"
        >
        Minha trajetória combina uma base sólida em Engenharia de Software com atuação em Engenharia de Dados e visão aplicada de IA. Na prática, trabalho com pipelines, plataformas, modelagem, transformação e integração entre sistemas.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {expertiseAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={`group rounded-2xl border border-slate-700/30 bg-slate-900/50 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500/50 hover:shadow-[0_12px_28px_-10px_rgba(2,6,23,0.7)] ${area.span}`}
            >
              <div className="mb-4 inline-flex rounded-lg border border-slate-600/30 bg-slate-800/50 p-2.5">
                <area.icon size={20} className="text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-white">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{area.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {area.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
