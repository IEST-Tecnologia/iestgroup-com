import { getJobBySlug } from "@/lib/admin/actions";
import JobEditForm from "./JobEditForm";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const job = await getJobBySlug(slug);
  if (!job) redirect("/gestao/vagas");
  return <JobEditForm job={job} />;
}
