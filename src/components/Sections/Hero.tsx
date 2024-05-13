"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export function Hero() {
  const images = [
    { src: "./linkedin.svg", width: 48, height: 48 },
    { src: "./github.svg", width: 48, height: 48 },
    { src: "./instagram.svg", width: 48, height: 48 },
  ];
  const currentImageIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const animatedImages = document.querySelectorAll(".animated-image");
      animatedImages[currentImageIndex.current].classList.add("hidden");
      currentImageIndex.current =
        (currentImageIndex.current + 1) % images.length;
      animatedImages[currentImageIndex.current].classList.remove("hidden");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0694FE] flex flex-col items-center justify-center text-white">
      <main className="relative max-w-7xl h-screen flex flex-col w-full justify-center px-4">
        <span className="lg:text-3xl text-2xl my-4">
          Olá, eu sou o leonardo
        </span>
        <div className="flex items-end gap-8 relative">
          <h1 className="lg:text-8xl text-7xl font-bold leading-none">
            Frontend
          </h1>
          <div>
            {images.map((image, index) => (
              <Image
                key={index}
                className={`py-3 animated-image ${index !== 0 ? "hidden" : ""}`}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Logo ${index}`}
              />
            ))}
          </div>
        </div>

        <h2 className="lg:text-7xl text-5xl font-bold leading-none">
          Developer
        </h2>
        <span className="text-2xl lg:text-3xl my-3 text-left max-w-2xl leading-relaxed">
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
        <div className="absolute bottom-2/5 left-3/4   hidden lg:flex">
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
  );
}
