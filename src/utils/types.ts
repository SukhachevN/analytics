export type StringOrNull = string | null;

export type ChangeHandler = (newVal: string) => void;

export type WithSum = {
  number: number;
  sum: number;
};

export type Analytics = {
  totalLeadsAndDeals: WithSum;
  totalTasks: number;
  won: WithSum;
  completedTasks: number;
  lost: WithSum;
  expiredTasks: number;
  newLeads: number;
  noTasks: number;
};

export type AnalyticsRespsonse = {
  pipeline: string;
  period: string;
  result: Analytics;
};
