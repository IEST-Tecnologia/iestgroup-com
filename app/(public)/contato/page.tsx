import { getBackgroundImage } from "@/lib/utils";
import { getImageProps } from "next/image";
import React, { ReactNode } from "react";
import { AddressIcon, EmailIcon, PhoneIcon } from "@/components/icons";
import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/TextArea";
export default async function page() {
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
      <main className="z-10 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto -mt-17.5 ">
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
          <div className="z-20  rounded-[29px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.24)] pt-[15%] pr-[7%] pb-[10%] pl-[7%] bg-neutral-50">
            <form
              className="flex flex-col gap-4"
              action={async (formData) => {
                "use server";
                const res = await fetch(
                  process.env.NEXT_PUBLIC_BACKEND_URL + "/contact",

                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      nome: formData.get("first_name"),
                      sobrenome: formData.get("last_name"),
                      email: formData.get("email"),
                      telefone: formData.get("phone"),
                      mensagem: formData.get("message"),
                    }),
                  },
                );
                // TODO: Add return message
              }}
            >
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-3">
                <Input
                  label="Nome"
                  name="first_name"
                  required
                  placeholder="Seu nome"
                />
                <Input
                  label="Sobrenome"
                  name="last_name"
                  required
                  placeholder="Seu sobrenome"
                />
              </div>
              <Input
                label="E-mail"
                name="email"
                required
                placeholder="seuemail@email.com"
              />
              <Input
                label="Telefone"
                name="phone"
                required
                placeholder="(00) 00000-0000"
              />
              <Textarea label="Mensagem" name="message" />
              <label>
                <input className="mr-1" type="checkbox" />
                Você concorda com nossa politica de privacidade.
              </label>
              <div>
                <Button>Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <section className="bg-neutral-50 mt-12.5">
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="p-2.5 col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.673051995317!2d-46.637425!3d-23.574314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce596e11f7ee37%3A0xb6f8e0c49f5f729d!2sR.%20do%20Para%C3%ADso%2C%20595%20-%20Para%C3%ADso%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004103-001%2C%20Brazil!5e0!3m2!1sen!2sus!4v1770260434328!5m2!1sen!2sus"
              className="w-full"
              height={450}
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-2.5">
            <div className="flex flex-col mx-10 p-2.5 h-full justify-between">
              <h2 className="text-[59px] leading-[1.3em] font-semibold text-primary ">
                Onde Estamos
              </h2>
              <div className="flex flex-col">
                <AddressIcon className="w-6 h-6 mb-2 text-primary" />
                <p className="font-bold">IEST GROUP</p>
                <p>Rua do Paraíso</p>
                <p>595 - 11º andar</p>
                <p>São Paulo/SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
