import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, BriefcaseBusiness } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-transparent pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <p className="mb-4 max-w-[34ch] text-xs uppercase tracking-[0.18em] text-cyan-300 sm:text-sm sm:tracking-[0.2em]">
            ENGENHARIA DE DADOS • IA APLICADA • SOFTWARE
          </p>
          <h1 className="max-w-[900px] text-[clamp(2rem,10vw,3rem)] font-bold leading-[1.08] text-white md:text-[clamp(2.2rem,4.8vw,4.2rem)] md:leading-[1.1]">
          Tecnologia aplicada a problemas reais
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          Atuo há mais de 15 anos em tecnologia, com foco na construção de soluções robustas em Engenharia de Dados e Inteligência Artificial Aplicada.

          Minha atuação combina uma base sólida em Engenharia de Software com experiência prática em ambientes de produção, incluindo sistemas críticos, pipelines de dados e arquiteturas escaláveis.

          Ao longo da minha trajetória, venho aplicando princípios de engenharia para transformar dados em soluções confiáveis, sustentáveis e orientadas a resultado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/diegohartwig/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/diegohartwig"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              <BriefcaseBusiness size={16} />
              Ver especialidades
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
