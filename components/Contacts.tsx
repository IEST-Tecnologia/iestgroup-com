"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { AddressIcon } from "@/components/icons";
import Button from "./Button";
import { submitContact, type ContactState } from "@/app/actions/contact";
import Toast from "@/components/Toast";

export default function Contacts() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    null,
  );
  const [toast, setToast] = useState<ContactState>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return;
    setToast(state);
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section className="bg-primary text-white">
      <div className="flex flex-col lg:flex-row justify-between items-start max-w-7xl mx-auto py-6 md:py-10 px-4 gap-8 lg:gap-0">
        <div className="w-full lg:w-1/4 p-2.5 flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <AddressIcon className="fill-white h-8.75 w-auto" />
            <h2 className="font-bold uppercase leading text-2xl md:text-[28px] lg:text-[32px]">
              Endereço
            </h2>
          </div>
          <p className="text-base md:text-lg lg:text-[19px] font-semibold">
            Rua do Paraíso, 595 <br />
            11º andar - Paraíso <br />
            São Paulo/SP
          </p>
          <p className="text-base md:text-lg lg:text-[18px]">
            Em caso de dúvida entre em contato através do e-mail{" "}
            <strong className="font-bold">br@iestgroup.com </strong> ou pelo
            telefone <strong className="font-bold">+55 11 2309-5904 </strong>
          </p>
        </div>
        <div className="w-full lg:w-3/5 text-base md:text-lg lg:text-[18px] p-2.5">
          <div className="mb-5">
            Preencha seus dados abaixo e esclareça suas dúvidas:
          </div>
          <form
            ref={formRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            action={formAction}
          >
            <input
              className="px-5 py-2 border border-white"
              placeholder="Nome"
              name="first_name"
              required
            />
            <input
              className="px-5 py-2 border border-white"
              placeholder="Sobrenome"
              name="last_name"
              required
            />
            <input
              className="px-5 py-2 border border-white"
              placeholder="E-mail"
              name="email"
              required
            />
            <input
              className="px-5 py-2 border border-white"
              placeholder="Telefone"
              name="phone"
              required
            />
            <textarea
              className="px-5 py-2 col-span-1 md:col-span-2 border border-white"
              placeholder="Mensagem"
              name="message"
              rows={4}
            />
            <div>
              <Button variant="inverted" disabled={pending}>
                {pending ? "Enviando..." : "Enviar"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          variant={toast.success ? "success" : "error"}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
