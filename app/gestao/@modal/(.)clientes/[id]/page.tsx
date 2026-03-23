import { getClient } from "@/lib/admin/store";
import AdminModal from "@/components/admin/AdminModal";
import { EditClientForm } from "./EditClientForm";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = await getClient(id);
  return (
    <AdminModal title="Editar Cliente">
      <EditClientForm id={id} logoUrl={client.logoUrl} />
    </AdminModal>
  );
}