import { redirect } from "next/navigation";

export default async function Page404() {
  redirect("/");
}
