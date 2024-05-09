interface Tech {
  nome: string;
  url: string;
}

interface TechStack {
  backend: Tech[];
  frontend: Tech[];
  database: Tech[];
  version: Tech[];
  others: Tech[];
}

export const techStack: TechStack = {
  backend: [
    {
      nome: "Node.js",
      url: "/images/techs/nodejs.svg",
    },
    {
      nome: "Express",
      url: "/images/techs/Express.svg",
    },
    {
      nome: "Fastify",
      url: "/images/techs/fastify.svg",
    },
    {
      nome: "JavaScript",
      url: "/images/techs/javascript.svg",
    },
    {
      nome: "TypeScript",
      url: "/images/techs/typescript.svg",
    },
    {
      nome: "Prisma",
      url: "/images/techs/prisma.svg",
    },
    {
      nome: "Python",
      url: "/images/techs/python.svg",
    },
    {
      nome: "Flask",
      url: "/images/techs/flask.svg",
    },
    {
      nome: "Pandas",
      url: "/images/techs/pandas.svg",
    },
  ],
  frontend: [
    {
      nome: "HTML",
      url: "/images/techs/html.svg",
    },
    {
      nome: "CSS",
      url: "/images/techs/css.svg",
    },
    {
      nome: "JavaScript",
      url: "/images/techs/javascript.svg",
    },
    {
      nome: "TypeScript",
      url: "/images/techs/typescript.svg",
    },
    {
      nome: "NextJS",
      url: "/images/techs/nextjs.svg",
    },
    {
      nome: "NextAuth",
      url: "/images/techs/nextauth.svg",
    },
    {
      nome: "React",
      url: "/images/techs/react.svg",
    },
    {
      nome: "React Router",
      url: "/images/techs/react-router.svg",
    },
    {
      nome: "TailwindCSS",
      url: "/images/techs/tailwindcss.svg",
    },
    {
      nome: "Styled Components",
      url: "/images/techs/styled-components.svg",
    },
    {
      nome: "Sass",
      url: "/images/techs/sass.svg",
    },
    {
      nome: "Tanstack Query",
      url: "/images/techs/tanstack-query.svg",
    },
    {
      nome: "Vite",
      url: "/images/techs/vite.svg",
    },
    {
      nome: "Zustand",
      url: "/images/techs/zustand.svg",
    },
    {
      nome: "Zod",
      url: "/images/techs/zod.svg",
    },
  ],
  database: [
    {
      nome: "PostgreSQL",
      url: "/images/techs/postgresql.svg",
    },
    {
      nome: "MongoDB",
      url: "/images/techs/mongodb.svg",
    },
    {
      nome: "MySQL",
      url: "/images/techs/mysql.svg",
    },
    {
      nome: "SQL Server",
      url: "/images/techs/sql-server.svg",
    },
  ],
  version: [
    {
      nome: "Git",
      url: "/images/techs/git.svg",
    },
    {
      nome: "GitHub",
      url: "/images/techs/github.svg",
    },
  ],
  others: [
    {
      nome: "Docker",
      url: "/images/techs/docker.svg",
    },
    {
      nome: "Jest",
      url: "/images/techs/jest.svg",
    },
    {
      nome: "Vercel",
      url: "/images/techs/vercel.svg",
    },
    {
      nome: "Google Analytics",
      url: "/images/techs/google-analytics.svg",
    },
    {
      nome: "Figma",
      url: "/images/techs/figma.svg",
    },
  ],
};
