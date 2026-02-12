"use client";

import { useState, useCallback } from "react";
import AdminModal from "./AdminModal";
import ClientForm from "./ClientForm";
import type { Client, CreateClientInput } from "@/lib/admin/types";

interface ClientsClientProps {
  initialClients: Client[];
}

export default function ClientsClient({ initialClients }: ClientsClientProps) {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openCreateModal = useCallback(() => {
    setEditingClient(null);
    setError(null);
    setIsModalOpen(true);
  }, []);

  const openEditModal = useCallback((client: Client) => {
    setEditingClient(client);
    setError(null);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setEditingClient(null);
    setError(null);
  }, []);

  const handleSubmit = useCallback(
    async (values: CreateClientInput) => {
      setIsSubmitting(true);
      setError(null);
      try {
        if (editingClient) {
          const res = await fetch(`/api/admin/clients/${editingClient.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          if (!res.ok) {
            const body = (await res.json()) as { error?: string };
            throw new Error(body.error ?? "Erro ao atualizar");
          }
          const { data } = (await res.json()) as { data: Client };
          setClients((prev) =>
            prev.map((c) => (c.id === data.id ? data : c)),
          );
        } else {
          const res = await fetch("/api/admin/clients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          if (!res.ok) {
            const body = (await res.json()) as { error?: string };
            throw new Error(body.error ?? "Erro ao criar");
          }
          const { data } = (await res.json()) as { data: Client };
          setClients((prev) => [...prev, data]);
        }
        closeModal();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setIsSubmitting(false);
      }
    },
    [editingClient, closeModal],
  );

  const handleDelete = useCallback(async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este cliente?")) return;
    try {
      const res = await fetch(`/api/admin/clients/${id}`, {
        method: "DELETE",
      });
      if (!res.ok && res.status !== 204) {
        const body = (await res.json()) as { error?: string };
        alert(body.error ?? "Erro ao excluir");
        return;
      }
      setClients((prev) => prev.filter((c) => c.id !== id));
    } catch {
      alert("Erro de rede ao excluir");
    }
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-foreground">Clientes</h1>
        <button
          onClick={openCreateModal}
          className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded hover:bg-secondary transition-colors"
        >
          Novo Cliente
        </button>
      </div>

      <div className="bg-white rounded shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                Logo
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                URL do logo
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">
                Criado em
              </th>
              <th className="px-4 py-3 text-right font-medium text-gray-600">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-8 text-center text-gray-400"
                >
                  Nenhum cliente cadastrado
                </td>
              </tr>
            )}
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt="Logo preview"
                    className="h-10 w-20 object-contain rounded border border-gray-200"
                  />
                </td>
                <td className="px-4 py-3 text-gray-500 max-w-xs">
                  <span className="truncate block">{client.logo}</span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(client.createdAt).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => openEditModal(client)}
                      className="px-3 py-1.5 text-xs font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="px-3 py-1.5 text-xs font-medium text-secondary border border-secondary rounded hover:bg-secondary hover:text-white transition-colors"
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminModal
        isOpen={isModalOpen}
        title={editingClient ? "Editar Cliente" : "Novo Cliente"}
        onClose={closeModal}
      >
        {error && (
          <p className="mb-4 text-sm text-secondary bg-red-50 px-3 py-2 rounded">
            {error}
          </p>
        )}
        <ClientForm
          initialValues={editingClient ? { logo: editingClient.logo } : {}}
          onSubmit={handleSubmit}
          onCancel={closeModal}
          isSubmitting={isSubmitting}
        />
      </AdminModal>
    </div>
  );
}
