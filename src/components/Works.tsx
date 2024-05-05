import Image from "next/image";
import React from "react";

export default function Works() {
  return (
    <section className="container w-full flex flex-col items-center justify-center text-[#0694FE] mx-auto">
      <main className="relative h-screen flex flex-col w-full items-start">
        <div className="flex justify-start gap-4 items-center">
          <Image
            className="py-3"
            src="./square.svg"
            width={72}
            height={72}
            alt="Logo da empresa linkedin"
          />
          <h1 className="text-[#0694FE] font-bold text-7xl">Selected Works</h1>
        </div>
        <ol className="list-decimal flex flex-col w-full">
          <li className="text-4xl flex justify-between relative group w-full items-center h-40">
            <div className="w-full bg-red-600 h-40 flex items-center justify-between">
              Todo List
            </div>
            <div className="w-full h-full group-hover:max-w-[33%] group-hover:max-h-40 group-hover:flex items-center justify-center ease-in-out group duration-1000  transition-all max-w-0 max-h-0">
              <span className="group-hover:flex hidden">Teste</span>
            </div>
            <div className="bg-[#0694FE] w-20 h-20 absolute rounded-full right-12 text-base text-white cursor-pointer hover:h-[7rem] hover:w-[7rem] hover:bg-[#0694FE]/50 flex items-center justify-center duration-300 transition-all ease-in-out">
              View
            </div>
          </li>
          <li className="text-4xl flex justify-between relative group w-full items-center h-40">
            <div className="w-full bg-red-600 h-40 flex items-center justify-between">
              Blog
            </div>
            <div className="w-full h-full group-hover:max-w-[33%] group-hover:max-h-40 group-hover:flex items-center justify-center ease-in-out group duration-1000  transition-all max-w-0 max-h-0">
              <span className="group-hover:flex hidden">Teste</span>
            </div>
            <div className="bg-[#0694FE] w-20 h-20 absolute rounded-full right-12 text-base text-white cursor-pointer hover:h-[7rem] hover:w-[7rem] hover:bg-[#0694FE]/50 flex items-center justify-center duration-300 transition-all ease-in-out">
              View
            </div>
          </li>
          <li className="text-4xl flex justify-between relative group w-full items-center h-40">
            <div className="w-full bg-red-600 h-40 flex items-center justify-between">
              Nintendo 64
            </div>
            <div className="w-full h-full group-hover:max-w-[33%] group-hover:max-h-40 group-hover:flex items-center justify-center ease-in-out group duration-1000  transition-all max-w-0 max-h-0">
              <span className="group-hover:flex hidden">Teste</span>
            </div>
            <div className="bg-[#0694FE] w-20 h-20 absolute rounded-full right-12 text-base text-white cursor-pointer hover:h-[7rem] hover:w-[7rem] hover:bg-[#0694FE]/50 flex items-center justify-center duration-300 transition-all ease-in-out">
              View
            </div>
          </li>
          <li className="text-4xl flex justify-between relative group w-full items-center h-40">
            <div className="w-full bg-red-600 h-40 flex items-center justify-between">
              Sauana Oliveira
            </div>
            <div className="w-full h-full group-hover:max-w-[33%] group-hover:max-h-40 group-hover:flex items-center justify-center ease-in-out group duration-1000  transition-all max-w-0 max-h-0">
              <span className="group-hover:flex hidden">Teste</span>
            </div>
            <div className="bg-[#0694FE] w-20 h-20 absolute rounded-full right-12 text-base text-white cursor-pointer hover:h-[7rem] hover:w-[7rem] hover:bg-[#0694FE]/50 flex items-center justify-center duration-300 transition-all ease-in-out">
              Soon
            </div>
          </li>
        </ol>
      </main>
      {/*
      <Image
        className="w-full"
        src="./bg-hero.svg"
        fill={true}
        alt="Logo da empresa linkedin"
      />
      <main className="relative max-w-7xl h-screen flex flex-col w-full items-start">
        <div className="flex justify-start gap-4 items-center">
          <Image
            className="py-3"
            src="./square.svg"
            width={72}
            height={72}
            alt="Logo da empresa linkedin"
          />
          <h1 className="text-[#0694FE] font-bold text-7xl">Selected Works</h1>
        </div>
        <ol className="list-decimal flex flex-col justify-around">
          <li className="text-4xl py-8 mx-8 my-10 ">Teste</li>
          <li className="text-4xl py-8 mx-8 my-10 ">Teste</li>
          <li className="text-4xl py-8 mx-8 my-10 ">Teste</li>
        </ol>
      </main>*/}
    </section>
  );
}
