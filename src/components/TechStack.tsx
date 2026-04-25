import { motion, useReducedMotion } from "framer-motion";
import { skills } from "../data/skills";

export function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="stack" className="py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="text-3xl font-semibold text-white"
        >
          Stack Técnica
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_14px_30px_-18px_rgba(34,211,238,0.65)]"
            >
              <h3 className="text-lg font-semibold text-cyan-200">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
