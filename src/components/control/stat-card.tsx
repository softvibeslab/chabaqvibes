import { Card, CardBody } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  helper
}: {
  label: string;
  value: string | number;
  helper: string;
}) {
  return (
    <Card>
      <CardBody>
        <p className="text-sm font-semibold text-muted">{label}</p>
        <p className="mt-2 text-3xl font-bold">{value}</p>
        <p className="mt-1 text-sm text-muted">{helper}</p>
      </CardBody>
    </Card>
  );
}

