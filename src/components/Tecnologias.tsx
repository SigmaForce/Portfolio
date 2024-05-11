import React from "react";
import { Cards } from "./Cards";
import { techStack } from "../config/techs";

export default function Tecnologias() {
  return (
    <section className="min-h-screen h-full container w-full mx-auto px-4 lg:px-0">
      <h2 className="text-4xl font-bold text-[#0694FE] pb-2">Tecnologias</h2>
      <span className="max-w-2xl w-full block mb-12">
        Sou um programador versátil com experiência em diversas linguagens de
        programação, frameworks e ferramentas. Da construção do front-end ao
        back-end, tenho habilidades sólidas em desenvolver soluções robustas e
        escaláveis.
      </span>
      <div>
        <h5 className="text-xl font-bold my-4 text-[#0694FE]">Frontend</h5>
        <div className="grid grid-cols-12 w-full gap-4 pb-8">
          {techStack.frontend.map((tech, index) => (
            <div className="lg:col-span-2 col-span-6">
              <Cards
                key={tech.nome + index}
                nome={tech.nome}
                url={tech.url}
                site={tech.site}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-xl font-bold my-4 text-[#0694FE]">Backend</h5>
        <div className="grid grid-cols-12 w-full gap-4 pb-8">
          {techStack.backend.map((tech, index) => (
            <div className="lg:col-span-2 col-span-6">
              <Cards
                key={tech.nome + index}
                nome={tech.nome}
                url={tech.url}
                site={tech.site}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-xl font-bold my-4 text-[#0694FE]">
          Banco de Dados
        </h5>
        <div className="grid grid-cols-12 w-full gap-4 pb-8">
          {techStack.database.map((tech, index) => (
            <div className="lg:col-span-2 col-span-6">
              <Cards
                key={tech.nome + index}
                nome={tech.nome}
                url={tech.url}
                site={tech.site}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-xl font-bold my-4 text-[#0694FE]">
          Controle de Versões
        </h5>
        <div className="grid grid-cols-12 w-full gap-4 pb-8">
          {techStack.version.map((tech, index) => (
            <div className="lg:col-span-2 col-span-6">
              <Cards
                key={tech.nome + index}
                nome={tech.nome}
                url={tech.url}
                site={tech.site}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-xl font-bold my-4 text-[#0694FE]">Extras</h5>
        <div className="grid grid-cols-12 w-full gap-4 pb-8">
          {techStack.others.map((tech, index) => (
            <div className="lg:col-span-2 col-span-6">
              <Cards
                key={tech.nome + index}
                nome={tech.nome}
                url={tech.url}
                site={tech.site}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
