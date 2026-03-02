"use client";

import { useRef, useState } from "react";
import { AddressIcon } from "@/components/icons";
import Button from "./Button";
import Toast from "@/components/Toast";

type Feedback = { success: boolean; message: string } | null;

export default function Contacts() {
  const [isPending, setIsPending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [dismissedFeedback, setDismissedFeedback] = useState<Feedback>(null);
  const showToast = !!feedback && feedback !== dismissedFeedback;
  const formRef = useRef<HTMLFormElement>(null);

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
            onSubmit={async (e) => {
              e.preventDefault();
              setIsPending(true);
              setFeedback(null);
              const data = new FormData(e.currentTarget);
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    first_name: data.get("first_name"),
                    last_name: data.get("last_name"),
                    email: data.get("email"),
                    phone: data.get("phone"),
                    message: data.get("message"),
                  }),
                });
                let json: { error?: string } = {};
                try {
                  json = await res.json();
                } catch {}
                if (!res.ok) {
                  setFeedback({
                    success: false,
                    message:
                      json.error ?? "Erro ao enviar mensagem. Tente novamente.",
                  });
                } else {
                  setFeedback({
                    success: true,
                    message: "Mensagem enviada com sucesso!",
                  });
                  formRef.current?.reset();
                }
              } catch {
                setFeedback({
                  success: false,
                  message: "Erro ao conectar com o servidor. Tente novamente.",
                });
              } finally {
                setIsPending(false);
              }
            }}
          >
            <input
              className="col-span-2 md:col-span-1 px-5 py-2 border border-white"
              placeholder="Nome"
              name="first_name"
              required
            />
            <input
              className="col-span-2 md:col-span-1 px-5 py-2 border border-white"
              placeholder="Sobrenome"
              name="last_name"
              required
            />
            <input
              className="col-span-2 md:col-span-1 px-5 py-2 border border-white"
              placeholder="E-mail"
              name="email"
              required
            />
            <input
              className="col-span-2 md:col-span-1 px-5 py-2 border border-white"
              placeholder="Telefone"
              name="phone"
              required
            />
            <textarea
              className="px-5 py-2 col-span-2 border border-white"
              placeholder="Mensagem"
              name="message"
              rows={4}
            />
            <label className="col-span-2">
              <input className="mr-1" type="checkbox" required />
              Você concorda com nossa politica de privacidade.
            </label>
            <div>
              <Button variant="inverted" disabled={isPending}>
                {isPending ? "Enviando..." : "Enviar"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {showToast && (
        <Toast
          message={feedback!.message}
          variant={feedback!.success ? "success" : "error"}
          onClose={() => setDismissedFeedback(feedback)}
        />
      )}
    </section>
  );
}
