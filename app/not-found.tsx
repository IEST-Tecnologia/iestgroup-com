import { redirect } from "next/navigation";
import React from "react";

// TODO: adicionar pesquisa quando tiver as vagas
export default async function Page404() {
  redirect("/");
}
