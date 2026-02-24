import type { Metadata } from "next";
import BannersClient from "@/components/admin/BannersClient";
import { listBanners } from "@/lib/admin/store";

export const metadata: Metadata = { title: "Banners" };

export default async function BannersPage() {
  const banners = await listBanners();
  return (
    <div className="p-6">
      <BannersClient initialBanners={banners} />
    </div>
  );
}
