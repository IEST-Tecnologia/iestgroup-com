import { listClients } from "@/lib/admin/actions";
import ClientsClient from "@/components/admin/ClientsClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Clientes" };

export default async function ClientsPage() {
  const clients = await listClients();
  return (
    <div className="p-6">
      <ClientsClient initialClients={clients} />
    </div>
  );
}
