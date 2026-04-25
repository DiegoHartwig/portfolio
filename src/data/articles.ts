export type Article = {
  title: string;
  tag: string;
  description: string;
  link: string;
};

export const articles: Article[] = [
  {
    title: "Data Warehouse, Data Lake e Lakehouse: Entendendo o contexto por trás dessas arquiteturas",
    tag: "Lakehouse",
    description:
      "Data Warehouse, Data Lake e Lakehouse não são apenas lugares para armazenar dados, mas arquiteturas que surgiram para resolver limitações reais de organização, flexibilidade, governança e confiabilidade em ambientes analíticos.",
    link: "https://www.linkedin.com/posts/diegohartwig_engenhariadedados-arquiteturadedados-datalake-share-7448040459232432129-xWJD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAApaY14BEkxFTHsBTSUDFq949h3LIC918CY"
  },
  {
    title: "Spec-Driven Development: na era da IA, a Engenharia de Software voltou ao centro do desenvolvimento",
    tag: "IA Aplicada",
    description:
      "Spec-Driven Development mostra que, na era da IA, desenvolver software com qualidade exige menos improviso e mais engenharia, especificação, contexto e validação..",
    link: "https://www.linkedin.com/posts/diegohartwig_spec-driven-development-na-era-da-ia-a-share-7446874809205989376-Urnw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAApaY14BEkxFTHsBTSUDFq949h3LIC918CY"
  },
  {
    title: "A aplicação de boas práticas de engenharia de software na engenharia de dados faz muita diferença na construção dos pipelines.",
    tag: "dbt",
    description:
      "Boas práticas de engenharia de software aplicadas aos dados tornam pipelines mais confiáveis, documentados, versionados e fáceis de evoluir com ferramentas como o dbt.",
    link: "https://www.linkedin.com/in/diegohartwig/"
  }
];
