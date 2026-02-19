import AdminSidebar from "@/components/admin/AdminSidebar";
import { requireAdminServer } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Admin",
    default: "Admin",
  },
};

export default async function AdminLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  await requireAdmin();
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      {modal}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
