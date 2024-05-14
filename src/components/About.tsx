import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className="min-h-screen h-full flex flex-col gap-4 mx-4 lg:mx-0">
      <div className="container mx-auto">
        <h2 className="font-bold text-[#0694FE] text-3xl mt-24 mb-12 text-start lg:text-center">
          Sobre Mim
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-8 border rounded-lg p-4 bg-primary-foreground">
          <div className="">
            <Image
              src="/images/Eu.jpg"
              alt="Imagem de um Jovem de Cabelos Longos com os braços abertos em cima de um buggy"
              width={400}
              height={400}
              className="object-cover w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex-1">
              <h3 className="font-bold text-[#0694FE] text-2xl mb-4">
                Informações pessoais
              </h3>
              <p>
                Meu nome é Leonardo Lucas, tenho 25 anos. Atualmente, trabalho
                como desenvolvedor Frontend, sempre buscando resolver problemas
                de maneira eficiente e inteligente. Possuo três anos de
                experiência na área e estou constantemente procurando por novas
                oportunidades para crescer profissionalmente e aprender.
              </p>
            </div>
            <div className="mt-auto">
              <h4 className="text-[#0694FE] text-xl mt-4 ">
                Principais Skills
              </h4>
              <div className="flex gap-2 text-white mt-3">
                <div className="bg-[#0694FE] w-fit px-4 rounded-full">
                  ReactJS
                </div>
                <div className="bg-[#0694FE] w-fit px-4 rounded-full">
                  TypeScript
                </div>
                <div className="bg-[#0694FE] w-fit px-4 rounded-full">
                  NextJS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row  gap-4">
        <div className="w-full flex flex-col gap-8 border rounded-lg p-4 bg-primary-foreground  ">
          <h3 className="font-bold text-[#0694FE] text-2xl mb-4">
            Um resumo sobre minhas atividades
          </h3>
          <span>
            Como desenvolvedor, tive a oportunidade de participar de uma
            variedade de projetos que contribuíram significativamente para o
            aprimoramento das minhas habilidades e conhecimentos. Além disso,
            mantenho o compromisso contínuo de explorar e dominar novas
            tecnologias e metodologias. Minha experiência abrange projetos em
            frontend e backend, nos quais utilizei metodologias ágeis, como
            Scrum e Kanban, para assegurar uma entrega eficiente e de alta
            qualidade.
          </span>
          <span>
            Para uma visão mais detalhada da minha trajetória profissional,
            abaixo está o meu currículo.
          </span>
          <button className="bg-[#0694FE] w-fit px-4 py-2 rounded-lg text-white">
            Baixar Curriculo
          </button>
        </div>
        <div className="w-full flex flex-col gap-8 rounded-lg p-4 flex-auto max-w-lg  border bg-primary-foreground">
          <h3 className="font-bold text-[#0694FE] text-2xl mb-4">Educação</h3>
          <span className="">
            Minha formação acadêmica é sólida, com um diploma de Técnico em
            Informática pelo Instituto Federal de Mato Grosso do Sul (IFMS) e
            uma graduação em Sistemas de Informação pela Universidade Federal de
            Mato Grosso do Sul (UFMS). Durante meu período acadêmico, desenvolvi
            competências significativas em áreas como robótica, desenvolvimento
            de software e pesquisa. Essa experiência não apenas solidificou meu
            conhecimento teórico, mas também me proporcionou a oportunidade de
            aplicar esses conhecimentos em projetos práticos, aprimorando minhas
            habilidades práticas e analíticas.
          </span>
        </div>
      </div>
    </section>
  )
}
