import { listClients } from "@/lib/admin/actions";
import ClientsClient from "@/components/admin/ClientsClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Clientes" };

export default async function ClientsPage() {
  let clients: Awaited<ReturnType<typeof listClients>> = [];
  try {
    clients = await listClients();
  } catch (err) {
    console.error("[ClientsPage] failed to load clients:", err instanceof Error ? err.message : err);
  }
  return (
    <div className="p-6">
      <ClientsClient initialClients={clients} />
    </div>
  );
}
