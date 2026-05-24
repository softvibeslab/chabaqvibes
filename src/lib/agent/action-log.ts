import type { ActionLogItem } from "@/lib/schemas/outreach";

export function actionLogItem(tool: string, summary: string, index: number): ActionLogItem {
  return {
    id: `action_${String(index).padStart(2, "0")}`,
    tool,
    status: "completed",
    summary,
    timestamp: new Date(Date.now() + index * 1000).toISOString()
  };
}

