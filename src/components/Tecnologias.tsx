import React from "react";
import { Cards } from "./Cards";
import { techStack } from "../config/techs";

export default function Tecnologias() {
  return (
    <section className="h-screen container w-full mx-auto">
      <h2 className="text-4xl font-bold text-[##0694FE] pb-2">Tecnologias</h2>
      <span className="max-w-2xl w-full block mb-12">
        Sou um programador versátil com experiência em diversas linguagens de
        programação, frameworks e ferramentas. Da construção do front-end ao
        back-end, tenho habilidades sólidas em desenvolver soluções robustas e
        escaláveis.
      </span>
      <div>
        <h3>Frontend</h3>
        <div className="grid grid-cols-12 w-full gap-4">
          {techStack.frontend.map((tech) => (
            <div className="col-span-2">
              <Cards key={tech.nome} nome={tech.nome} url={tech.url} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Backend</h3>
        <div className="grid grid-cols-12 w-full gap-4">
          {techStack.backend.map((tech) => (
            <div className="col-span-2">
              <Cards key={tech.nome} nome={tech.nome} url={tech.url} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Banco de Dados</h3>
        <div className="grid grid-cols-12 w-full gap-4">
          {techStack.database.map((tech) => (
            <div className="col-span-2">
              <Cards key={tech.nome} nome={tech.nome} url={tech.url} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Controle de Versões</h3>
        <div className="grid grid-cols-12 w-full gap-4">
          {techStack.version.map((tech) => (
            <div className="col-span-2">
              <Cards key={tech.nome} nome={tech.nome} url={tech.url} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Extras</h3>
        <div className="grid grid-cols-12 w-full gap-4">
          {techStack.others.map((tech) => (
            <div className="col-span-2">
              <Cards key={tech.nome} nome={tech.nome} url={tech.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
