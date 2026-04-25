export type SkillCategory = {
  category: string;
  description: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Plataformas de Dados & Arquitetura Lakehouse",
    description:
      "Construção e operação de plataformas de dados em produção, com foco em escalabilidade, governança, confiabilidade e performance.",
    items: [
      "Data Lakehouse",
      "Apache Spark",
      "Trino",
      "Delta Lake",
      "MinIO / Ceph",
      "Apache Airflow",
      "dbt",
      "Hive Metastore",
      "OpenMetadata",
      "Kubernetes",
      "Linux"
    ]
  },
  {
    category: "Engenharia de Software para Sistemas Distribuídos",
    description:
      "Desenvolvimento de sistemas robustos, APIs e integrações, aplicando práticas de arquitetura, qualidade de código e automação em ambientes críticos.",
    items: [
      "Python",
      ".NET / C#",
      "APIs e Integrações",
      "Arquitetura de Software",
      "Microservices",
      "Event-Driven Architecture",
      "RabbitMQ",
      "SQL",
      "Testes Automatizados",
      "CI/CD",
      "Sistemas Distribuídos"
    ]
  },
  {
    category: "Inteligência Artificial Aplicada a Problemas Reais",
    description:
      "Aplicação prática de IA em soluções voltadas à resolução de problemas reais, incluindo visão computacional, OCR, modelos preditivos e IA generativa.",
    items: [ 
      "Machine Learning",
      "Deep Learning",
      "Redes Neurais Artificiais",
      "OCR",
      "Visão Computacional",
      "MLOps",
      "LLMs (Large Language Models)",
      "RAG (Retrieval-Augmented Generation)",
      "Vector Databases",
      "Prompt Engineering",
      "Extração de Dados com IA"
    ]
  }
];

export const specialties = [
  {
    title: "Engenharia de Dados",
    text: "Arquitetura, construção e operação de pipelines e plataformas de dados em produção, com foco em lakehouse, governança, escalabilidade e confiabilidade."
  },
  {
    title: "Engenharia de Software",
    text: "Aplicação de boas práticas de arquitetura, qualidade de código, APIs, automação e sistemas distribuídos para sustentar soluções críticas e escaláveis."
  },
  {
    title: "Inteligência Artificial Aplicada",
    text: "Desenvolvimento e integração de soluções de IA aplicadas a problemas reais, incluindo machine learning, deep learning, OCR, visão computacional e IA generativa."
  }
];