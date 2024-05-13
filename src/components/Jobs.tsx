import { Job } from "@/config/jobs";
import { ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Badge } from "./Badge";

export default function Jobs({ banner, title, excerpt, techs, url }: Job) {
  return (
    <>
      <div className="border rounded-lg overflow-hidden">
        <Image
          src={banner}
          alt={title}
          width={512}
          height={256}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="flex items-start flex-col lg:flex-row lg:items-center gap-2">
        {techs.slice(0, 3).map((tech) => (
          <Badge key={tech} tech={tech} />
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-base text-zinc-600 mt-1">{excerpt}</span>
      </div>
      <div className="flex gap-4">
        <a
          href={url ? url : "#"}
          className="text-base bg-[#0694FE]  text-white px-4 py-2 rounded-lg flex items-center justify-center gap-1"
        >
          <ArrowTopRightIcon className="size-5" />
          Visitar
        </a>
        <button className="text-base bg-zinc-50 border rounded-lg px-4 py-2 flex items-center justify-center gap-1">
          <PlusIcon className="size-5" />
          Saiba Mais
        </button>
      </div>
    </>
  );
}
