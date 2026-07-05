import { motion, useReducedMotion } from "framer-motion";
import { Clock, Database, Code2, Cpu, Server } from "lucide-react";

const signals = [
  { icon: Clock, value: "+15 anos", label: "em tecnologia" },
  { icon: Server, value: "Sistemas reais", label: "soluções confiáveis em operação" },
  { icon: Database, value: "Pipelines", label: "dados confiáveis em escala" },
  { icon: Code2, value: "Arquitetura", label: "software, dados e integração" },
  { icon: Cpu, value: "IA Aplicada", label: "soluções orientadas por contexto" },
];

export function AuthorityStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-label="Sinais de autoridade profissional" className="border-y border-slate-700/25 bg-slate-900/30 py-8">
      <div className="mx-auto max-w-6xl px-5 md:px-8 xl:px-12">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
          {signals.map((item, index) => (
            <motion.div
              key={item.value}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.06 }}
              className="flex items-start gap-3"
            >
              <item.icon size={18} className="mt-0.5 shrink-0 text-cyan-400" />
              <div>
                <p className="text-sm font-bold text-white">{item.value}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
