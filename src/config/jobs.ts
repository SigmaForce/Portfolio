interface JobImage {
  url: string;
  alt: string;
}

export interface Job {
  slug: string;
  url: string | null;
  title: string;
  banner: string;
  techs: string[];
  images: JobImage[];
  excerpt: string;
}

interface JobsConfig {
  frontend: Job[];
}

export const JobsList: JobsConfig = {
  frontend: [
    {
      slug: "nitendo",
      url: "https://games-production-4060.up.railway.app/",
      title: "Nintendo",
      banner: "/nintendo.png",
      techs: ["NextJS", "Prisma", "TailwindCSS", "Typescript", "SQLite", "Zod"],
      images: [
        {
          url: "",
          alt: "",
        },
      ],
      excerpt:
        "Aplicação web desenvolvida com NextJS 14, Utilizando Tópicos essenciais, Incluindo integração com banco de dados, SSR (Server-Side Rendering), arquitetura, design patterns, typeScript e organização de projetos.",
    },
    {
      slug: "sauana",
      url: null,
      title: "Sauana Oliveira",
      banner: "/sauana.png",
      techs: ["NextJS", "TailwindCSS", "Typescript"],
      images: [
        {
          url: "",
          alt: "",
        },
      ],
      excerpt:
        "Site desenvolvido para a Nutricionista Sauana Oliveira. utilizei as NextJS, TailwindCSS, Typescript e Figma para o Design",
    },
    {
      slug: "todo",
      url: null,
      title: "Todo App",
      banner: "/todo.png",
      techs: [
        "Zod",
        "Prisma",
        "shadcn/ui",
        "NextJS",
        "TailwindCSS",
        "Typescript",
      ],
      images: [
        {
          url: "",
          alt: "",
        },
      ],
      excerpt:
        "Projeto para estudar o desenvolvimento de um micro-sass, Foi utilizado NextJS, TailwindCSS, Typescript, shadcn/ui e Zod",
    },
  ],
};
