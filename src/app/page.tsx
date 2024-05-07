import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full bg-[#0694FE] flex flex-col items-center justify-center text-white">
        <main className="relative max-w-7xl h-screen flex flex-col w-full justify-center">
          <span className="text-3xl">Olá, eu sou o leonardo</span>
          <div className="flex items-end gap-8">
            <h1 className="text-8xl font-bold leading-none">Frontend</h1>
            <Image
              className="py-3"
              src="./linkedin.svg"
              width={72}
              height={72}
              alt="Logo da empresa linkedin"
            />
            <Image
              className="py-3"
              src="./github.svg"
              width={64}
              height={48}
              alt="Logo da empresa linkedin"
            />
          </div>

          <h1 className="text-7xl font-bold leading-none">Developer</h1>
          <span className="text-3xl text-right max-w-2xl px-8 leading-relaxed">
            Transformando ideias em código.
          </span>
          <div className="absolute bottom-0 right-1/2 -translate-y-1/2 translate-x-1/2 animate-bounce cursor-pointer">
            <Image
              className="py-3"
              src="./seta.svg"
              width={64}
              height={64}
              alt="Uma seta apontada para baixo"
            />
          </div>
          <div className="absolute bottom-2/5 left-3/4   ">
            <div className="flex items-center justify-center relative">
              <div className="flex absolute z-10 font-bold text-2xl pr-10 cursor-pointer">
                <Image
                  className="arrow-bounce"
                  src="./arrow.svg"
                  width={48}
                  height={48}
                  alt="Uma Flecha apontada para o texto"
                />
                <h2>WORKS</h2>
              </div>
              <Image
                className="py-3 square-rotate"
                src="./big-square.svg"
                width={344}
                height={344}
                alt="Uma seta apontada para baixo"
              />
            </div>
          </div>
        </main>
      </div>
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
