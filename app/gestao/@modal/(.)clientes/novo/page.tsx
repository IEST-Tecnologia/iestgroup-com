import AdminModal from "@/components/admin/AdminModal";
import { NewClientForm } from "./NewClientForm";
import Form from "next/form";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/admin/store";
import ModalFormActions from "@/components/admin/ModalFormActions";
import { ImageEditor } from "@/components/BannerImageEditor";
import { revalidatePath } from "next/cache";

export default function page() {
  return (
    <AdminModal title="Adicionar Cliente">
      <NewClientForm />
    </AdminModal>
  );
}
