import { motion, useReducedMotion } from "framer-motion";
import { specialties } from "../data/skills";

export function Expertise() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="especialidades" className="py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="text-3xl font-semibold text-white"
        >
          Especialidades
        </motion.h2>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-slate-300"
        >
          Três pilares complementares para construir produtos, plataformas e operações de dados de
          alto impacto.
        </motion.p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {specialties.map((item, index) => (
            <motion.article
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_14px_30px_-18px_rgba(34,211,238,0.65)]"
            >
              <h3 className="text-lg font-semibold text-cyan-200">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
