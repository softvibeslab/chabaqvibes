import fs from "node:fs";
import path from "node:path";
import type { GraphSummary } from "@/lib/control-tower/types";

const root = process.cwd();

export function getGraphSummary(): GraphSummary {
  const graphPath = path.join(root, "graphify-out/graph.json");
  const reportPath = path.join(root, "graphify-out/GRAPH_REPORT.md");
  const graph = JSON.parse(fs.readFileSync(graphPath, "utf8")) as {
    nodes: { id: string }[];
    links?: unknown[];
    edges?: unknown[];
    hyperedges?: unknown[];
  };
  const report = fs.readFileSync(reportPath, "utf8");

  return {
    nodes: graph.nodes.length,
    edges: (graph.links ?? graph.edges ?? []).length,
    hyperedges: graph.hyperedges?.length ?? 0,
    controlTowerNodes: graph.nodes.filter((node) => node.id.includes("control_tower")).length,
    reportExcerpt: report.split("\n").slice(0, 28).join("\n")
  };
}

export function getPromptFile(relativePath: string) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

export function getArizeStatus() {
  const axPaths = ["/opt/homebrew/bin/ax", "/usr/local/bin/ax"];
  const installed = axPaths.some((candidate) => fs.existsSync(candidate));
  return {
    axInstalled: installed,
    skillsInstalled: fs.existsSync(path.join(process.env.HOME ?? "", ".agents/skills/arize-ai-provider-integration/SKILL.md")),
    nextCommand: installed ? "ax spaces list" : "Install and configure Arize AX CLI"
  };
}

