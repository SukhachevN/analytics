import { useEffect } from 'react';

import { Dropdown } from '../components/Dropdown';
import { dropdownItems, timePeriods } from '../utils/constants';
import { TimePeriods } from '../components/TimePeriods';
import {
  store,
  setPeriod,
  setPipeline,
  getAnalytics,
  analytics,
} from './store';
import { observer } from 'mobx-react-lite';
import { reaction } from 'mobx';

import './styles.scss';
import 'antd/dist/antd.css';

const App = observer(() => {
  useEffect(() => {
    const watcher = reaction(
      () => [store.period, store.pipeline],
      () => getAnalytics()
    );

    getAnalytics();

    return () => watcher();
  }, []);

  return (
    <main className='container'>
      <div className='container__controls'>
        <Dropdown items={dropdownItems} onChange={setPipeline} />
        <TimePeriods times={timePeriods} onChange={setPeriod} />
      </div>
    </main>
  );
});

export default App;
