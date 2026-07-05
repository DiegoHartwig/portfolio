import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { articles } from "../data/articles";

export function Articles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="insights" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400"
        >
          Conteúdos
        </motion.p>
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
          className="text-3xl font-extrabold tracking-tight text-white md:text-4xl"
        >
          Conteúdos e insights técnicos
        </motion.h2>
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-slate-300"
        >
          Análises, perspectivas e reflexões técnicas sobre engenharia de dados, software e IA aplicada.
        </motion.p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col rounded-2xl border border-slate-700/30 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500/50 hover:shadow-[0_12px_28px_-10px_rgba(2,6,23,0.7)]"
            >
              <span className="inline-flex self-start rounded-md border border-slate-500/30 bg-slate-800/50 px-2.5 py-1 text-xs font-semibold text-slate-300">
                {article.tag}
              </span>
              <h3 className="mt-4 flex-1 text-base font-bold leading-snug text-white">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{article.description}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition-colors duration-200 hover:text-cyan-300"
              >
                Ler artigo
                <ExternalLink size={13} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
