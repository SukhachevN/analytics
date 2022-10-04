import { observer } from 'mobx-react-lite';
import { store } from '../../App/store';
import { Spinner } from '../Spinner';
import { Card } from './Card';

import styles from './styles.module.scss';

const Analytics = observer(() => {
  if (store.isLoading)
    return (
      <div className={`${styles.analytics} ${styles.analytics_loading}`}>
        <Spinner />
      </div>
    );

  if (!store.analytics) return <div className='error'>SERVER ERROR</div>;

  const {
    totalLeadsAndDeals,
    totalTasks,
    won,
    completedTasks,
    lost,
    expiredTasks,
    newLeads,
    noTasks,
  } = store.analytics;

  return (
    <div className={styles.analytics}>
      <div className={styles.analytics__block}>
        <Card
          cardKey='totalLeadsAndDeals'
          num={totalLeadsAndDeals.number}
          sum={totalLeadsAndDeals.sum}
        />
        <Card cardKey='totalTasks' num={totalTasks} />
      </div>
      <div className={styles.analytics__block}>
        <Card cardKey='won' num={won.number} sum={won.sum} />
        <Card cardKey='completedTasks' num={completedTasks} />
      </div>
      <div className={styles.analytics__block}>
        <Card cardKey='lost' num={lost.number} sum={lost.sum} />
        <Card cardKey='expiredTasks' num={expiredTasks} />
      </div>
      <div className={styles.analytics__block}>
        <Card cardKey='newLeads' num={newLeads} />
        <Card cardKey='noTasks' num={noTasks} />
      </div>
    </div>
  );
});

export { Analytics };
