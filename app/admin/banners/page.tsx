import { listBanners } from "@/lib/admin/actions";
import BannersClient from "@/components/admin/BannersClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Banners" };

export default async function BannersPage() {
  let banners: Awaited<ReturnType<typeof listBanners>> = [];
  try {
    banners = await listBanners();
  } catch (err) {
    console.error("[BannersPage] failed to load banners:", err instanceof Error ? err.message : err);
  }
  return (
    <div className="p-6">
      <BannersClient initialBanners={banners} />
    </div>
  );
}
