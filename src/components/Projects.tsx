import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../data/projects";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projetos" className="py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <h2 className="text-3xl font-semibold text-white">Projetos e cases em destaque</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_14px_30px_-18px_rgba(34,211,238,0.65)]"
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm font-medium text-cyan-200">{project.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                  >
                    {tag}
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
