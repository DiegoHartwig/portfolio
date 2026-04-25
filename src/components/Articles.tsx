import { motion, useReducedMotion } from "framer-motion";
import { articles } from "../data/articles";

export function Articles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="insights" className="py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="text-3xl font-semibold text-white"
        >
          Conteúdos e insights técnicos
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_14px_30px_-18px_rgba(34,211,238,0.65)]"
            >
              <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                {article.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{article.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{article.description}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 rounded-md border border-transparent px-2 py-1 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                Ler mais
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
