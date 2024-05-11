import Image from "next/image";
import React from "react";

type CardsProps = {
  nome: string;
  url: string;
  site: string;
};

export function Cards({ nome, url, site }: CardsProps) {
  return (
    <a
      href={site}
      target="_blank"
      className="flex items-center gap-3 rounded-md p-3 w-full bg-zinc-100 hover:scale-110 transition-all duration-300"
    >
      <div className="invert-0 stack-img-container p-2 flex items-center justify-center rounded-lg relative overflow-hidden undefined">
        <Image
          src={url}
          alt={nome}
          width={24}
          height={24}
          className="size-6 z-10"
        />
        <Image
          src={url}
          alt={nome}
          width={24}
          height={24}
          className="blur-lg size-12 absolute inset-0 opacity-80 z-0"
        />
      </div>
      <span>{nome}</span>
    </a>
  );
}
