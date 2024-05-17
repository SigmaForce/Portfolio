import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full h-20 bg-[#0694FE]/95 z-50 backdrop-blur-sm text-white">
      <main className="flex justify-between items-center max-w-7xl mx-auto h-20">
        <div className="flex flex-col">
          <h2 className="text-white">Leonardo Lucas</h2>
          <span className="text-sm text-zinc-300">
            Todos os direitos reservados®
          </span>
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/sigmaforc3/" target="_blank">
            <LinkedInLogoIcon className="size-8 text-white hover:text-[#1e1e1e] transition-colors duration-500 ease-in-out" />
          </a>
          <a href="https://www.instagram.com/sigmaforc3/" target="_blank">
            <InstagramLogoIcon className="size-8 text-white hover:text-[#1e1e1e] transition-colors duration-500 ease-in-out" />
          </a>

          <a href="https://github.com/SigmaForce" target="_blank">
            <GitHubLogoIcon className="size-8 text-white hover:text-[#1e1e1e] transition-colors duration-500 ease-in-out" />
          </a>
        </div>
      </main>
    </footer>
  )
}
