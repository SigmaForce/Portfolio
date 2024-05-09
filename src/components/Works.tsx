import Image from "next/image";
import React from "react";

export default function Works() {
  return (
    <section className="container w-full flex flex-col items-center justify-center text-[#0694FE] mx-auto py-16">
      <main className="relative flex flex-col w-full items-start">
        <div className="flex justify-start gap-4 items-center">
          <h2 className="text-[#0694FE] font-bold text-4xl mb-8 ">
            Selected Works
          </h2>
        </div>
        <ol className="list-decimal flex flex-col w-full">
          <li className="text-4xl flex justify-between relative group w-full items-center h-40">
            <div className="w-full h-40 flex items-center justify-between">
              Blog
            </div>
            <div className="w-full h-full group-hover:max-w-[33%] group-hover:max-h-40 group-hover:flex items-center justify-center ease-in-out group duration-1000  transition-all max-w-0 max-h-0">
              <img
                src="/blog.png"
                className="group-hover:flex hidden h-full w-full"
              />
            </div>
            <div className="bg-[#0694FE] w-20 h-20 absolute rounded-full right-12 text-base text-white cursor-pointer hover:h-[7rem] hover:w-[7rem] hover:bg-[#0694FE]/50 flex items-center justify-center duration-300 transition-all ease-in-out">
              View
            </div>
          </li>
          <hr />
          <li className="text-4xl flex justify-between relative group w-full items-center h-40">
            <div className="w-fullh-40 flex items-center justify-between">
              Nintendo 64
            </div>
            <div className="w-full h-full group-hover:max-w-[33%] group-hover:max-h-40 group-hover:flex items-center justify-center ease-in-out group duration-1000  transition-all max-w-0 max-h-0">
              <img
                src="/nintendo.png"
                className="group-hover:flex hidden h-full w-full"
              />
            </div>
            <div className="bg-[#0694FE] w-20 h-20 absolute rounded-full right-12 text-base text-white cursor-pointer hover:h-[7rem] hover:w-[7rem] hover:bg-[#0694FE]/50 flex items-center justify-center duration-300 transition-all ease-in-out">
              View
            </div>
          </li>
          <hr />
          <li className="text-4xl flex justify-between relative group w-full items-center h-40">
            <div className="w-full  h-40 flex items-center justify-between">
              Sauana Oliveira
            </div>
            <div className="w-full h-full group-hover:max-w-[33%] group-hover:max-h-40 group-hover:flex items-center justify-center ease-in-out group duration-1000  transition-all max-w-0 max-h-0">
              <img
                src="/sauana.png"
                className="group-hover:flex hidden h-full w-full"
              />
            </div>
            <div className="bg-[#0694FE] w-20 h-20 absolute rounded-full right-12 text-base text-white cursor-pointer hover:h-[7rem] hover:w-[7rem] hover:bg-[#0694FE]/50 flex items-center justify-center duration-300 transition-all ease-in-out">
              Soon
            </div>
          </li>
          <hr />
        </ol>
      </main>
    </section>
  );
}
