"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/TextArea";
import Button from "@/components/Button";
import Toast from "@/components/Toast";

export default function ContactForm() {
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
    <>
      <form ref={formRef} className="flex flex-col gap-4" action={formAction}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-3">
          <Input label="Nome" name="first_name" required placeholder="Seu nome" />
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
          <Button disabled={pending}>
            {pending ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>

      {toast && (
        <Toast
          message={toast.message}
          variant={toast.success ? "success" : "error"}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
