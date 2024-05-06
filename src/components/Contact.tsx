import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto h-screen">
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

      <div className="flex gap-8 items-center justify-between max-w-xl w-full mx-auto">
        <div>Linkedin</div>
        <div>Instagram</div>
        <div>Github</div>
        <div>Discord</div>
      </div>
    </div>
  );
}
