import JobsClient from "@/components/admin/JobsClient";
import { listJobs } from "@/lib/admin/actions";
import type { JobResponse } from "@/lib/admin/types";

const PAGE_SIZE = 10;

interface JobPageProps {
  searchParams: Promise<{
    page?: string;
    search?: string;
    status?: string;
    sort_by?: string;
    sort_dir?: string;
    archived?: string;
  }>;
}

export default async function JobPage({ searchParams }: JobPageProps) {
  const { page: pageParam, search, status, sort_by, sort_dir, archived } =
    await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const showArchived = archived === "true";

  let data: JobResponse = { jobs: [], total: 0, page };
  try {
    data = await listJobs(page, PAGE_SIZE, {
      search,
      status,
      sort_by,
      sort_dir,
      archived: showArchived,
    });
  } catch (err) {
    console.error(
      "[JobsPage] failed to load jobs:",
      err instanceof Error ? err.message : err,
    );
  }

  const totalPages = Math.ceil(data.total / PAGE_SIZE);

  return (
    <div className="p-6">
      <JobsClient
        key={`${page}-${status}-${sort_by}-${sort_dir}-${archived}`}
        initialJobs={data}
        totalPages={totalPages}
        showArchived={showArchived}
      />
    </div>
  );
}
