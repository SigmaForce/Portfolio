import React from "react";

export default function About() {
  return (
    <section className="h-screen flex flex-col gap-4">
      <div className="container mx-auto">
        <h2 className="font-bold text-[#0694FE] text-center  text-3xl mt-24 mb-12">
          Sobre Mim
        </h2>
        <div className="w-full flex gap-8 shadow-md rounded-lg p-4 bg-zinc-50">
          <div className="h-80 w-80 bg-zinc-500 rounded-lg"></div>
          <div className="flex flex-col flex-grow">
            <div className="flex-1">
              <h3 className="font-bold text-[#0694FE] text-2xl mb-4">
                Informações pessoais
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam ullam sit possimus eveniet perspiciatis sunt. Sapiente
                itaque facilis ea velit iste, sint delectus maxime amet, vitae
                incidunt laborum reprehenderit suscipit.
              </p>
            </div>
            <div className="mt-auto">
              <h4 className="text-[#0694FE] text-xl mb-4">Principais Skills</h4>
              <div className="flex gap-2 text-white">
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
      <div className="container mx-auto flex  gap-4">
        <div className="w-full flex flex-col gap-8 shadow-md rounded-lg p-4 bg-zinc-50  ">
          <h2>Um resumo sobre minhas atividades</h2>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            consequatur, amet sapiente quo nemo sint? Delectus neque, facilis
            eveniet ipsam explicabo porro sequi accusantium omnis ducimus itaque
            debitis mollitia iusto. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ullam consequatur, amet sapiente quo nemo sint?
            Delectus neque, facilis eveniet ipsam explicabo porro sequi
            accusantium omnis ducimus itaque debitis mollitia iusto.{" "}
          </span>
          <button className="bg-[#0694FE] w-fit px-4 py-2 rounded-lg text-white">
            Baixar Curriculo
          </button>
        </div>
        <div className="w-full flex flex-col gap-8 shadow-md rounded-lg p-4 bg-zinc-50  flex-auto max-w-xl">
          <h2>Educação</h2>
          <span className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            rem nisi laudantium voluptas quibusdam voluptatum magnam vel
            blanditiis esse ipsam maxime neque eius, quasi ratione facere
            nesciunt assumenda rerum consequuntur.
          </span>
        </div>
      </div>
    </section>
  );
}
