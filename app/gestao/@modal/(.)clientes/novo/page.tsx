import AdminModal from "@/components/admin/AdminModal";
import { NewClientForm } from "./NewClientForm";

export default function page() {
  return (
    <AdminModal title="Adicionar Cliente">
      <NewClientForm />
    </AdminModal>
  );
}