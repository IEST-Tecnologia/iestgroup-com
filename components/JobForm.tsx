"use client";

import { sendForm } from "@/app/carreira-iest/action";
import Link from "next/link";
import React, { useTransition } from "react";

export default function JobForm() {
  const [isPending, startTransition] = useTransition();
  return (
    <section className="w-full bg-blue-iest py-8">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-4">
        <h3 className="text-xl md:text-3xl text-white font-semibold text-center mb-6">
          Quero registrar meu currículo
        </h3>
        <form
          action={(formData) => {
            startTransition(async () => {
              await sendForm(formData);
            });
          }}
          className="w-full max-w-full md:max-w-[50vw] md:w-[50vw] flex flex-wrap flex-col md:flex-row gap-6"
        >
          <input
            className="p-4 bg-white w-full"
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            required
          />
          <div className="w-full flex flex-col md:flex-row gap-6">
            <input
              className="p-4 bg-white w-full md:w-1/2"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <input
              className="p-4 bg-white w-full md:w-1/2"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Telefone"
              required
            />
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-6">
            <p className="w-full md:w-1/3 text-white text-md font-extralight">
              Enviar curriculo
            </p>
            <div>
              <input
                className="w-full md:2/3 file:bg-white file:rounded-full file:px-4 file:py-2 file:text-blue-iest file:mr-2 text-white"
                type="file"
                name="resume"
                required
              />
            </div>
          </div>
          <div className="w-full flex gap-2 text-white">
            <input
              className="rounded-none"
              type="checkbox"
              id="terms"
              name="terms"
              required
            />
            <label htmlFor="terms">
              Concorda com os{" "}
              <Link
                className="underline decoration-1"
                href="politica-de-privacidade "
              >
                termos de uso
              </Link>
            </label>
          </div>
          <div className="w-full ">
            <button
              type="submit"
              className={`w-full bg-blue-iest border py-2 cursor-pointer ${isPending ? "bg-white/50 text-blue-iest" : "text-white border-white hover:bg-white hover:text-blue-iest "}`}
              disabled={isPending}
            >
              {isPending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
