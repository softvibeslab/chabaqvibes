import seedData from "../../../dataset/seeds/seed_data.json";
import { workerSchema, type Worker } from "@/lib/schemas/worker";
import { jobSchema, type Job, type JobRequest } from "@/lib/schemas/job";

const workers = workerSchema.array().parse(seedData.workers);
const jobs = jobSchema.array().parse(seedData.jobs);
const employers = seedData.employers;
const reviews = seedData.reviews;
const certifications = seedData.certifications;

export function getSeedData() {
  return {
    workers,
    jobs,
    employers,
    reviews,
    certifications,
    outreach_logs: seedData.outreach_logs
  };
}

export function findWorkersForRequest(jobRequest: JobRequest): Worker[] {
  const city = normalize(jobRequest.city);
  return workers.filter((worker) => {
    const sameTrade = worker.trade_canonical === jobRequest.trade_canonical;
    const sameCity = normalize(worker.city) === city;
    const verified = worker.verification_status === "verified";
    const available = worker.availability.includes(jobRequest.availabilitySlot);
    return sameTrade && sameCity && verified && available;
  });
}

export function createSeedJob(jobRequest: JobRequest, employerId: string): Job {
  return {
    _id: `job_${Date.now()}`,
    employer_id: employerId,
    trade: jobRequest.trade,
    trade_canonical: jobRequest.trade_canonical,
    city: jobRequest.city,
    state: jobRequest.state,
    neighborhood: jobRequest.neighborhood,
    urgency: jobRequest.urgency,
    budget_mxn: jobRequest.budget_mxn,
    quality_priority: jobRequest.quality_priority,
    description: jobRequest.description,
    status: "shortlisted",
    shortlisted_worker_ids: [],
    created_at: new Date().toISOString()
  };
}

export function getWorkerReviews(workerId: string) {
  return reviews.filter((review) => review.worker_id === workerId);
}

export function getWorkerCertifications(workerId: string) {
  return certifications.filter((certification) => certification.worker_id === workerId);
}

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

