import React from "react";

// TODO: adicionar pesquisa quando tiver as vagas
export default function Page404() {
  return (
    <main className="w-full flex flex-col gap-6 justify-center items-center py-12">
      <h1 className="text-3xl font-medium text-blue-iest">
        Esta página não existe.
      </h1>
      <h2 className="text-center text-2xl font-semibold text-primary">
        Parece que o link que apontava para aqui estava quebrado. Tente uma
        pesquisa, talvez?
      </h2>
    </main>
  );
}
