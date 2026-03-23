import { unsubscribeNewsletter } from "@/lib/admin/store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancelar inscrição",
  robots: { index: false },
};

interface Props {
  searchParams: Promise<{ id?: string }>;
}

export default async function UnsubscribePage({ searchParams }: Props) {
  const { id } = await searchParams;

  if (!id) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Link inválido
          </h1>
          <p className="text-gray-600">
            O link de cancelamento de inscrição é inválido ou está incompleto.
          </p>
        </div>
      </main>
    );
  }

  let success = false;
  let errorMessage: string | null = null;

  try {
    const found = await unsubscribeNewsletter(id);
    if (!found) {
      errorMessage = "Inscrição não encontrada.";
    } else {
      success = true;
    }
  } catch (err) {
    errorMessage =
      err instanceof Error ? err.message : "Ocorreu um erro inesperado.";
  }

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {success ? (
          <>
            <h1 className="text-2xl font-bold text-primary mb-4">
              Inscrição cancelada
            </h1>
            <p className="text-gray-600">
              Você foi removido da nossa lista de e-mails com sucesso.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-primary mb-4">
              Não foi possível cancelar
            </h1>
            <p className="text-gray-600">{errorMessage}</p>
          </>
        )}
      </div>
    </main>
  );
}
