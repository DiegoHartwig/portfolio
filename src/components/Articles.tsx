import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { articles } from "../data/articles";

export function Articles() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="publicacoes" className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8 xl:px-12">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: "easeOut" }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone"
        >
          05 / Publicações
        </motion.p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1px_1fr] lg:gap-12">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.06, ease: "easeOut" }}
            className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl"
          >
            Ideias, prática
            <br />e <em className="font-serif italic text-bronze">pensamento técnico.</em>
          </motion.h2>

          <div className="hidden bg-line lg:block" aria-hidden="true" />

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="border-l-2 border-bronze/40 pl-5 text-stone lg:border-l-0 lg:pl-0"
          >
            Temas que ajudam a orientar decisões de arquitetura, desenvolvimento e o uso
            responsável de novas tecnologias.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-line pt-10 md:grid-cols-3 md:divide-x md:divide-line">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="flex flex-col md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-stone">{article.tag}</span>
              <h3 className="mt-3 font-serif text-lg font-medium leading-snug text-ink">{article.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{article.description}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors duration-200 hover:text-forest-deep"
              >
                Ler resumo
                <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
