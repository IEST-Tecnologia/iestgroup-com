import type { Metadata } from "next";
import BannersClient from "@/components/admin/BannersClient";
import { listBanners } from "@/lib/admin/store";
import { Banner } from "@/lib/admin/types";

export const metadata: Metadata = { title: "Banners" };

export default async function BannersPage() {
  let data: Banner[] = [];
  try {
    data = await listBanners();
  } catch (err) {
    console.error(
      "[BannersPage] failed to load banners:",
      err instanceof Error ? err.message : err,
    );
  }

  return (
    <div className="p-6">
      <BannersClient initialBanners={data} />
    </div>
  );
}
