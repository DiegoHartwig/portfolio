export type Project = {
  title: string;
  description: string;
  tags: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    title: "Arquiteturas Data Lakehouse",
    description:
      "Desenho e implementação de plataformas de dados em arquitetura lakehouse, com foco em governança, confiabilidade e escalabilidade.",
    tags: ["Delta Lake", "MinIO", "Trino", "Lakehouse"],
    impact: "Dados confiáveis e disponíveis para decisões estratégicas."
  },
  {
    title: "Pipelines de dados escaláveis",
    description:
      "Estruturação de pipelines de dados orientados a resiliência operacional, qualidade de informação e disponibilidade contínua para consumo analítico.",
    tags: ["Airflow", "Spark", "SQL", "Python"],
    impact: "Maior throughput analítico com redução de falhas operacionais."
  },
  {
    title: "IA aplicada a documentos",
    description:
      "Aplicação de inteligência artificial em fluxos documentais para transformar dados não estruturados em informação acionável com rastreabilidade.",
    tags: ["OCR", "Computer Vision", "Machine Learning"],
    impact: "Automação de processos críticos e ganho de produtividade."
  },
  {
    title: "Transformações analíticas com dbt",
    description:
      "Modelagem de camadas analíticas com padronização semântica, consistência de métricas e observabilidade para apoiar decisões de negócio.",
    tags: ["dbt", "Analytics Engineering", "Data Quality"],
    impact: "Mais confiança em indicadores de negócio e compliance."
  }
];
