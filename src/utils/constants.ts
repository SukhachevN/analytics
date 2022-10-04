import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { TimeItem } from '../components/TimePeriods/TimePeriods';

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
