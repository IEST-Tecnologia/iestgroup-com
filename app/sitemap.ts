import type { MetadataRoute } from "next";
import { listJobs } from "@/lib/public/store";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://iestgroup.com";

export const revalidate = 3600;

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    changeFrequency: "monthly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/vagas-iest`,
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/sobre-nos`,
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/carreira-iest`,
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/recursos-humanos`,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/consultoria-profissional`,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/servico-digital-e-marketing`,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/bpo-contabil-e-financeiro`,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/precos-de-transferencia`,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/paralegal`,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/we-chat`,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/contato`,
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/politica-de-privacidade`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/codigo-de-etica`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let jobRoutes: MetadataRoute.Sitemap = [];

  try {
    const { jobs } = await listJobs(1, 1000, { status: "open" });

    jobRoutes = jobs.map((job) => ({
      url: `${BASE_URL}/vagas-iest/${job.slug}`,
      lastModified: new Date(job.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    // Se o backend estiver indisponível, retorna apenas as rotas estáticas
  }

  return [...staticRoutes, ...jobRoutes];
}
