import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "./Header";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="inicio" className="hero-scene relative text-onDark">
      <Header />

      <div className="relative mx-auto max-w-content px-5 pb-28 pt-6 md:px-8 md:pb-32 lg:px-12 lg:pb-36 lg:pt-10 xl:px-16">
        <div className="max-w-[46rem]">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-onDark/80"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brandGold" aria-hidden="true" />
            Engenharia de Software <span className="text-brandGold">/</span> Dados{" "}
            <span className="text-brandGold">/</span> IA Aplicada
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="mt-7 font-sans text-[clamp(2.5rem,5.4vw,4.75rem)] font-semibold leading-[1.04] tracking-tight text-onDark"
          >
            Engenharia para{" "}
            <em className="font-serif text-[0.92em] italic font-medium text-brandGold">problemas reais.</em>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-7 max-w-[52ch] text-base leading-relaxed text-onDark/85 [text-shadow:0_2px_18px_rgba(0,0,0,0.25)] md:text-lg"
          >
            Projeto e evoluo sistemas, plataformas de dados e soluções de inteligência
            artificial aplicada, com visão de arquitetura, confiabilidade e operação em
            ambientes reais.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-7"
          >
            <a
              href="#atuacao"
              className="inline-flex items-center gap-2 rounded-[3px] bg-brandGold px-5 py-3.5 text-sm font-bold text-brandDark shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-colors duration-200 hover:bg-[#f8d9a4]"
            >
              Ver minhas áreas de atuação
              <ArrowRight size={16} />
            </a>
            <a
              href="#especialidades"
              className="group inline-flex items-center gap-1.5 border-b border-onDark/50 pb-1 text-sm font-semibold text-onDark transition-colors duration-200 hover:border-brandGold"
            >
              Conhecer especialidades
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.32 }}
            className="mt-16 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-onDark/75"
          >
            <span className="h-px w-6 bg-brandGold" aria-hidden="true" />
            <strong className="font-bold text-onDark">15+ anos</strong>
            de experiência em tecnologia.
          </motion.p>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-content flex-col gap-2 px-5 pb-6 text-[11px] font-semibold uppercase tracking-[0.13em] text-onDark/75 sm:flex-row sm:items-center sm:gap-8 md:px-8 lg:px-12 xl:px-16">
        <span className="text-brandGold">Curitiba · PR</span>
        <span>Atuação remota em todo o Brasil</span>
      </div>
    </section>
  );
}
