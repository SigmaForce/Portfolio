import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Jobs from "@/components/Jobs";
import { Hero } from "@/components/Sections/Hero";
import Tecnologias from "@/components/Tecnologias";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <Works />
      <Tecnologias />
      <Contact />
      <Footer />
    </>
  );
}
