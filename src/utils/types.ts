export type StringOrNull = string | null;

export type ChangeHandler = (newVal: string) => void;

export type WithSum = {
  number: number;
  sum: number;
};

export type Analytics = {
  leadsAndDeals: WithSum;
  tasks: number;
  won: WithSum;
  completedTasks: number;
  lost: WithSum;
  expiredTasks: number;
  newIdeas: number;
  noTasks: number;
};
