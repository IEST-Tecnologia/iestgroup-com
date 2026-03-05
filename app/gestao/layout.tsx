import AdminSidebar from "@/components/admin/AdminSidebar";
import ToastProvider from "@/components/ToastProvider";
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
  // requireAdmin not needed because proxy takes care of it
  return (
    <ToastProvider>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        {modal}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ToastProvider>
  );
}
