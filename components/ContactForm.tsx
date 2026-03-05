"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/TextArea";
import Button from "@/components/Button";
import { useToast } from "@/context/ToastContext";

export default function ContactForm() {
  const { addToast } = useToast();
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    null,
  );
  const toastedState = useRef(state);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state || state === toastedState.current) return;
    toastedState.current = state;
    addToast(state.message, state.success ? "success" : "error");
    if (state.success) formRef.current?.reset();
  }, [state, addToast]);

  return (
    <>
      <form ref={formRef} className="flex flex-col gap-4" action={formAction}>
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
          <input className="mr-1" type="checkbox" required />
          Você concorda com nossa politica de privacidade.
        </label>
        <div>
          <Button disabled={pending}>
            {pending ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>

    </>
  );
}
