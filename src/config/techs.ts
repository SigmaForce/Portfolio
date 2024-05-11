interface Tech {
  nome: string;
  url: string;
  site: string;
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
      site: "https://nodejs.org/",
    },
    {
      nome: "Express",
      url: "/images/techs/Express.svg",
      site: "https://expressjs.com/",
    },
    {
      nome: "Fastify",
      url: "/images/techs/fastify.svg",
      site: "https://www.fastify.io/",
    },
    {
      nome: "JavaScript",
      url: "/images/techs/javascript.svg",
      site: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      nome: "TypeScript",
      url: "/images/techs/typescript.svg",
      site: "https://www.typescriptlang.org/",
    },
    {
      nome: "Prisma",
      url: "/images/techs/prisma.svg",
      site: "https://www.prisma.io/",
    },
    {
      nome: "Python",
      url: "/images/techs/python.svg",
      site: "https://www.python.org/",
    },
    {
      nome: "Flask",
      url: "/images/techs/flask.svg",
      site: "https://flask.palletsprojects.com/",
    },
    {
      nome: "Pandas",
      url: "/images/techs/pandas.svg",
      site: "https://pandas.pydata.org/",
    },
  ],
  frontend: [
    {
      nome: "HTML",
      url: "/images/techs/html.svg",
      site: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      nome: "CSS",
      url: "/images/techs/css.svg",
      site: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      nome: "JavaScript",
      url: "/images/techs/javascript.svg",
      site: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      nome: "TypeScript",
      url: "/images/techs/typescript.svg",
      site: "https://www.typescriptlang.org/",
    },
    {
      nome: "NextJS",
      url: "/images/techs/nextjs.svg",
      site: "https://nextjs.org/",
    },
    {
      nome: "NextAuth",
      url: "/images/techs/nextauth.svg",
      site: "https://next-auth.js.org/",
    },
    {
      nome: "React",
      url: "/images/techs/react.svg",
      site: "https://reactjs.org/",
    },
    {
      nome: "React Router",
      url: "/images/techs/react-router.svg",
      site: "https://reactrouter.com/",
    },
    {
      nome: "TailwindCSS",
      url: "/images/techs/tailwindcss.svg",
      site: "https://tailwindcss.com/",
    },
    {
      nome: "Styled Components",
      url: "/images/techs/styled-components.svg",
      site: "https://styled-components.com/",
    },
    {
      nome: "Sass",
      url: "/images/techs/sass.svg",
      site: "https://sass-lang.com/",
    },
    {
      nome: "Tanstack Query",
      url: "/images/techs/tanstack-query.svg",
      site: "https://tanstack.com/query/v4",
    },
    {
      nome: "Vite",
      url: "/images/techs/vite.svg",
      site: "https://vitejs.dev/",
    },
    {
      nome: "Zustand",
      url: "/images/techs/zustand.svg",
      site: "https://zustand-demo.pmnd.rs/",
    },
    {
      nome: "Zod",
      url: "/images/techs/zod.svg",
      site: "https://zod.dev/",
    },
  ],
  database: [
    {
      nome: "PostgreSQL",
      url: "/images/techs/postgresql.svg",
      site: "https://www.postgresql.org/",
    },
    {
      nome: "MongoDB",
      url: "/images/techs/mongodb.svg",
      site: "https://www.mongodb.com/",
    },
    {
      nome: "MySQL",
      url: "/images/techs/mysql.svg",
      site: "https://www.mysql.com/",
    },
    {
      nome: "SQL Server",
      url: "/images/techs/sql-server.svg",
      site: "https://www.microsoft.com/en-us/sql-server",
    },
  ],
  version: [
    {
      nome: "Git",
      url: "/images/techs/git.svg",
      site: "https://git-scm.com/",
    },
    {
      nome: "GitHub",
      url: "/images/techs/github.svg",
      site: "https://github.com/",
    },
  ],
  others: [
    {
      nome: "Docker",
      url: "/images/techs/docker.svg",
      site: "https://www.docker.com/",
    },
    {
      nome: "Jest",
      url: "/images/techs/jest.svg",
      site: "https://jestjs.io/",
    },
    {
      nome: "Vercel",
      url: "/images/techs/vercel.svg",
      site: "https://vercel.com/",
    },
    {
      nome: "Google Analytics",
      url: "/images/techs/google-analytics.svg",
      site: "https://marketingplatform.google.com/about/analytics/",
    },
    {
      nome: "Figma",
      url: "/images/techs/figma.svg",
      site: "https://www.figma.com/",
    },
  ],
};
