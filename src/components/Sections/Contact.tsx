import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import React from 'react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto min-h-screen h-full flex items-center justify-center px-4 lg:px-0"
    >
      <div>
        <h2 className="text-[#0694FE] text-5xl font-bold text-center">
          Vamos nos Conectar?
        </h2>

        <h3 className="text-3xl text-center my-16 font-light">
          hi@leonardodev.com.br
        </h3>

        <hr />
        <h3 className="py-8 text-3xl font-bold text-center text-[#0694FE]">
          Ou se preferir
        </h3>

        <div className="flex gap-8 items-center lg:justify-between justify-center max-w-xl w-full mx-auto">
          <div className="flex gap-2 items-center">
            <LinkedInLogoIcon className="size-8 text-[#0694FE]" />
            <a href="#" className="relative lg:inline-block group hidden">
              <span className="relative z-10">Linkedin</span>
              <span className="absolute bottom-0 left-1/2 bg-[#0694FE] h-0.5 transition-all transform -translate-x-1/2 origin-bottom group-hover:w-full w-0 duration-500"></span>
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <InstagramLogoIcon className="size-8 text-[#0694FE]" />
            <a href="#" className="relative lg:inline-block group hidden">
              <span className="relative z-10">Instagram</span>
              <span className="absolute bottom-0 left-1/2 bg-[#0694FE] h-0.5 transition-all transform -translate-x-1/2 origin-bottom group-hover:w-full w-0 duration-500"></span>
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <GitHubLogoIcon className="size-8 text-[#0694FE]" />
            <a href="#" className="relative lg:inline-block group hidden">
              <span className="relative z-10">Github</span>
              <span className="absolute bottom-0 left-1/2 bg-[#0694FE] h-0.5 transition-all transform -translate-x-1/2 origin-bottom group-hover:w-full w-0 duration-500"></span>
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <DiscordLogoIcon className="size-8 text-[#0694FE]" />
            <a href="#" className="relative lg:inline-block group hidden">
              <span className="relative z-10"> Discord</span>
              <span className="absolute bottom-0 left-1/2 bg-[#0694FE] h-0.5 transition-all transform -translate-x-1/2 origin-bottom group-hover:w-full w-0 duration-500"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
