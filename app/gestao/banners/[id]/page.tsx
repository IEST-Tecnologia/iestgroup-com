import Link from "next/link";
import Form from "next/form";
import { redirect } from "next/navigation";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { ImageEditor } from "@/components/BannerImageEditor";

import { getBanner, updateBanner } from "@/lib/admin/store";
import { revalidatePath } from "next/cache";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const banner = await getBanner(id);
  return (
    <Form
      action={async (formData) => {
        "use server";
        const id = formData.get("id") as string;
        await updateBanner(id, formData);
        revalidatePath("/gestao/banners");
        redirect("/gestao/banners");
      }}
      className="space-y-4 p-5"
    >
      <h1 className="text-2xl font-bold">Editar Banner</h1>
      <input hidden name="id" value={id} readOnly />
      <Input
        type="url"
        label="URL de destino"
        required
        placeholder="https://example.com"
        name="url"
        defaultValue={banner.url}
      />
      <ImageEditor
        label="Imagem desktop"
        required
        name="image"
        defaultValue={banner.imageUrl}
        aspect={512 / 171}
      />
      <ImageEditor
        label="Imagem mobile"
        required
        name="mobile_image"
        defaultValue={banner.mobileImageUrl}
        aspect={768 / 853}
      />
      <div className="flex justify-end gap-3 pt-2">
        <Link href="/gestao/banners">
          <Button type="button" variant="destructive">
            Cancelar
          </Button>
        </Link>
        <Button type="submit">Salvar</Button>
      </div>
    </Form>
  );
}
