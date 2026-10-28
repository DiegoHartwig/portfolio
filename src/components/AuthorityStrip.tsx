const stats = [
  { value: "15+", label: "Anos em tecnologia" },
  { value: "03", label: "Áreas integradas de atuação" },
  { value: "End-to-end", label: "Da concepção à operação" }
];

export function AuthorityStrip() {
  return (
    <section aria-label="Resumo de experiência" className="bg-forest">
      <div className="mx-auto max-w-content px-5 py-10 md:px-8 md:py-12 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:divide-x sm:divide-onDark/10">
          {stats.map((item) => (
            <div key={item.label} className="sm:pl-8 sm:first:pl-0">
              <p className="font-serif text-2xl font-medium text-onDark md:text-3xl">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-onDark/65">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
