import { findWorkersForRequest } from "@/lib/data/seed-adapter";
import type { JobRequest } from "@/lib/schemas/job";

export function searchWorkers(jobRequest: JobRequest) {
  return findWorkersForRequest(jobRequest);
}

