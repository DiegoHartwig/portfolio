import { motion, useReducedMotion } from "framer-motion";

const trajectoryStats = [
  { value: "15+ anos", label: "atuando em tecnologia" },
  { value: "Base multidisciplinar", label: "software, dados e IA aplicada" },
  { value: "Produção e escala", label: "experiência em ambientes críticos" }
];

export function Trajectory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="autoridade" className="py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="text-3xl font-semibold text-white"
        >
          Trajetória e especialização
        </motion.h2>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="mt-3 max-w-3xl text-slate-300"
        >
          Experiência construída em projetos complexos, conectando engenharia de software,
          engenharia de dados e inteligência artificial aplicada para criar soluções confiáveis,
          escaláveis e orientadas a resultado.
        </motion.p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {trajectoryStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_14px_30px_-18px_rgba(34,211,238,0.65)]"
            >
              <p className="text-2xl font-bold text-cyan-200">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
