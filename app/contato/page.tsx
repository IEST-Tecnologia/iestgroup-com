import { getBackgroundImage } from "@/lib/utils";
import { getImageProps } from "next/image";
import React from "react";
import { EmailIcon, PhoneIcon } from "@/components/icons";

export default function page() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 1920,
    height: 827,
    src: "/contact.jpg",
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { backgroundImage };

  return (
    <div>
      <div
        className="relative bg-center bg-no-repeat bg-cover px-4 min-h-[50vh] -z-10"
        style={style}
      ></div>
      <section className="z-10 grid grid-cols-2 max-w-7xl mx-auto -mt-17.5">
        <div className="p-7.5 mt-17.5 flex flex-col gap-10">
          <div className="gap-5 flex flex-col">
            <h1 className="text-3xl font-bold text-primary">
              Entre em contato
            </h1>
            <p>
              Conte conosco para o que precisar! Sua empresa necessita de
              auxílio ou consultoria para iniciar o negócio no mercado chinês ou
              brasileiro? Saiba como nos encontrar.
            </p>
            <p>Preencha o formulário ao lado e deixe-nos uma mensagem.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="pl-3 border-l border-secondary text-primary text-[23px] font-semibold">
              Assessoria de imprensa
            </h2>
            <p className="font-bold">Keila Cândido</p>
            <p>imprensa@iestgroup.com</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <EmailIcon className="text-primary w-7.25 h-7.25 mb-4" />
              <h3 className="font-bold">Email</h3>
              <p>br@iestgroup.com</p>
            </div>
            <div className="flex flex-col gap-2">
              <PhoneIcon className="text-primary w-7.25 h-7.25 mb-4" />
              <h3 className="font-bold">Phone</h3>
              <p>+55 11 2309-5904</p>
            </div>
          </div>
        </div>
        <div className="p-7.5 ">
          <div className="z-20 bg-white rounded-[29px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.24)] pt-[15%] pr-[7%] pb-[10%] pl-[7%]">
            <form className="grid grid-cols-2">
              <div>
                <label className="flex flex-col">
                  Nome
                  <input className="bg-white border-[#D5D7DA] rounded-[7px] border p-3" />
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
