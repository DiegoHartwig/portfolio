import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, BriefcaseBusiness, Database, Code2, Cpu, Server } from "lucide-react";

const authorityItems = [
  { icon: Server, value: "15+ anos", label: "trajetória em tecnologia" },
  { icon: Database, value: "Dados", label: "pipelines e plataformas" },
  { icon: Code2, value: "Software", label: "sistemas e integrações" },
  { icon: Cpu, value: "IA Aplicada", label: "arquiteturas e automação" },
];

const techStack = ["Spark", "dbt", "Airflow", "Trino", "Python", "Delta Lake", "Kubernetes"];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] lg:gap-14">

          {/* Left: headline and CTAs */}
          <div>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400"
            >
              ENGENHARIA DE DADOS • SOFTWARE • IA APLICADA
            </motion.p>
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.08, ease: "easeOut" }}
              className="text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
            >
              Engenharia de Dados, Software e IA Aplicada para ambientes reais
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.16, ease: "easeOut" }}
              className="mt-6 max-w-[58ch] text-base leading-relaxed text-slate-300 md:text-lg"
            >
              Mais de 15 anos em tecnologia, com base consolidada em Engenharia de Software e atuação atual voltada à Engenharia de Dados e Inteligência Artificial Aplicada.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.24, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="https://www.linkedin.com/in/diegohartwig/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/15 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/25 hover:text-white"
              >
                <Linkedin size={15} />
                Conectar no LinkedIn
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <BriefcaseBusiness size={15} />
                Ver especialidades
              </a>
              <a
                href="https://github.com/diegohartwig"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                <Github size={15} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right: authority panel — desktop only */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-slate-700/30 bg-slate-900/70 p-5 shadow-card backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-2.5">
                {authorityItems.map((item) => (
                  <div
                    key={item.value}
                    className="rounded-xl border border-slate-700/25 bg-[#050c1a]/80 p-4 transition-all duration-300 hover:border-slate-600/40 hover:bg-slate-900/60"
                  >
                    <item.icon size={15} className="mb-2.5 text-slate-400" />
                    <p className="text-sm font-bold leading-tight text-white">{item.value}</p>
                    <p className="mt-0.5 text-xs leading-snug text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-slate-700/25 pt-4">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Stack principal
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-slate-700/40 bg-slate-800/50 px-2 py-0.5 text-xs font-medium text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
