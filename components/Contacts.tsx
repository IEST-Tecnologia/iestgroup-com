import Image from "next/image";
import React from "react";
import AddressIcon from "@/assets/address.svg";
import Button from "./Button";

export default function Contacts() {
  return (
    <section className="bg-primary text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-10">
        <div className="w-1/4 p-2.5 flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <Image
              src={AddressIcon}
              alt="icone"
              className="h-8.75 text-white fill-white w-auto"
            />
            <h2 className="font-bold uppercase leading text-[32px]">
              Endereço
            </h2>
          </div>
          <p className="text-[19px] font-semibold">
            Rua do Paraíso, 595 <br />
            11º andar - Paraíso <br />
            São Paulo/SP
          </p>
          <p className="text-[18px]">
            Em caso de dúvida entre em contato através do e-mail{" "}
            <strong className="font-bold">br@iestgroup.com </strong> ou pelo
            telefone <strong className="font-bold">+55 11 2309-5904 </strong>
          </p>
        </div>
        <div className="w-3/5 text-[18px]  p-2.5">
          <div className="mb-5">
            Preencha seus dados abaixo e esclareça suas dúvidas:
          </div>
          <form className="grid grid-cols-2 gap-4">
            <input
              className="px-5 py-2 col-span-2 border border-white"
              placeholder="Nome"
            />
            <input
              className="px-5 py-2 border border-white"
              placeholder="E-mail"
            />
            <input
              className="px-5 py-2 border border-white"
              placeholder="Telefone"
            />
            <textarea
              className="px-5 py-2 col-span-2 border border-white"
              placeholder="Mensagem"
              rows={4}
            />
            <div>
              <Button variant="inverted">Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
