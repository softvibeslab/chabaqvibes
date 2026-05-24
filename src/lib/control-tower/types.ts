export type MemberStatus = "draft" | "active" | "paused" | "archived";

export type ChannelConnection = {
  provider: "telegram" | "whatsapp" | "email" | "other";
  label: string;
  externalHandle: string;
  status: "not_connected" | "pending" | "connected" | "paused";
  approvalPolicy: "always_approve" | "trusted_drafts" | "disabled";
  secretRef: string;
};

export type AgencyAgentAssignment = {
  name: string;
  sourcePath: string;
  reason: string;
  activationMode: "always_on" | "task_based" | "review_only" | "on_request";
};

export type MemberProfile = {
  id: string;
  displayName: string;
  handle: string;
  role: string;
  purpose: string;
  status: MemberStatus;
  bio: string;
  superpowers: string[];
  skills: string[];
  agencyAgents: AgencyAgentAssignment[];
  channels: ChannelConnection[];
  tasks: string[];
  knowledge: {
    profilePath: string;
    soulPath: string;
    personalKnowledgeRoot: string;
    graphPath: string;
  };
  hermesAgentId: string;
  createdAt: string;
  updatedAt: string;
};

export type HermesAgent = {
  id: string;
  memberId: string;
  name: string;
  status: "draft" | "ready" | "connected" | "paused" | "needs_review";
  mission: string;
  systemPromptPath: string;
  customerPromptPath: string;
  profilePath: string;
  soulPath: string;
  projectKnowledgeScope: string[];
  personalKnowledgeScope: string[];
  graph: {
    graphJsonPath: string;
    graphHtmlPath: string;
    reportPath: string;
    lastGeneratedAt: string;
  };
  assignedAgencyAgents: string[];
  tools: string[];
  channels: string[];
  permissions: {
    canEditPrompts: boolean;
    canSendExternalMessages: boolean;
    requiresApprovalForExternalMessages: boolean;
    canRunGraphify: boolean;
    canRunArizeEvaluations: boolean;
  };
  observability: {
    arizeProject: string;
    aiIntegrationId: string;
    traceEnabled: boolean;
  };
  createdAt: string;
  updatedAt: string;
};

export type ControlTask = {
  id: string;
  title: string;
  description: string;
  status: "backlog" | "assigned" | "in_progress" | "blocked" | "review" | "done";
  priority: "low" | "medium" | "high";
  ownerMemberId: string;
  supportHermesId: string;
  supportAgencyAgents: string[];
  source: string;
  dueDate: string;
  links: string[];
};

export type TeamSeed = {
  members: MemberProfile[];
  hermesAgents: HermesAgent[];
  tasks: ControlTask[];
};

export type GraphSummary = {
  nodes: number;
  edges: number;
  hyperedges: number;
  controlTowerNodes: number;
  reportExcerpt: string;
};

