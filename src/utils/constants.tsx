import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { TimeItem } from '../components/TimePeriods/TimePeriods';
import { ReactComponent as TotalLeads } from '../assets/icons/totalLeadsAndDeals.svg';
import { ReactComponent as TotalTasks } from '../assets/icons/totalTasks.svg';
import { ReactComponent as Won } from '../assets/icons/won.svg';
import { ReactComponent as CompletedTasks } from '../assets/icons/completedTasks.svg';
import { ReactComponent as Lost } from '../assets/icons/lost.svg';
import { ReactComponent as ExpiredTasks } from '../assets/icons/expiredTasks.svg';
import { ReactComponent as NewLeads } from '../assets/icons/newLeads.svg';
import { ReactComponent as NoTasks } from '../assets/icons/noTasks.svg';
import { Analytics } from './types';

export const dropdownItems: ItemType[] = [
  {
    key: 'sales',
    label: 'Sales',
  },
  {
    key: 'marketing',
    label: 'Marketing',
  },
  {
    key: 'partners',
    label: 'Partners',
  },
];

export const timePeriods: TimeItem[] = [
  {
    key: 'month',
    label: 'Months',
  },
  {
    key: 'week',
    label: 'Week',
  },
  {
    key: 'yesterday',
    label: 'Yesterday',
  },
  {
    key: 'today',
    label: 'Today',
  },
];

export const baseUrl = 'http://localhost:3000';

export type Icon = keyof Analytics;

export const icons: Record<Icon, JSX.Element> = {
  totalLeadsAndDeals: <TotalLeads />,
  totalTasks: <TotalTasks />,
  won: <Won />,
  completedTasks: <CompletedTasks />,
  lost: <Lost />,
  expiredTasks: <ExpiredTasks />,
  newLeads: <NewLeads />,
  noTasks: <NoTasks />,
};

export const colorsByType = {
  totalLeadsAndDeals: 'purple',
  totalTasks: 'purple',
  won: 'green',
  completedTasks: 'green',
  lost: 'red',
  expiredTasks: 'red',
  newLeads: 'blue',
  noTasks: 'blue',
};

export const textByType = {
  totalLeadsAndDeals: 'Total Leads and Deals',
  totalTasks: 'Total tasks',
  won: 'Won',
  completedTasks: 'Completed tasks',
  lost: 'Lost',
  expiredTasks: 'Expired tasks',
  newLeads: 'New leads',
  noTasks: 'No tasks',
};

export const formatter = new Intl.NumberFormat('us');

export const pipelineKey = 'pipelineKey';

export const periodKey = 'periodKey';
