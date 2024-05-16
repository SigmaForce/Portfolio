import About from '@/components/Sections/About'
import Contact from '@/components/Sections/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Hero } from '@/components/Sections/Hero'
import Tecnologias from '@/components/Sections/Tecnologias'
import Works from '@/components/Sections/Works'

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
  )
}
