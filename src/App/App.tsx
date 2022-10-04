import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { reaction } from 'mobx';
import { Dropdown } from '../components/Dropdown';
import { dropdownItems, timePeriods } from '../utils/constants';
import { TimePeriods } from '../components/TimePeriods';
import {
  store,
  setPeriod,
  setPipeline,
  getAnalytics,
  initialize,
} from './store';
import { Analytics } from '../components/Analytics';
import { Spinner } from '../components/Spinner';

import './styles.scss';

const App = observer(() => {
  useEffect(() => {
    const watcher = reaction(
      () => [store.period, store.pipeline],
      () => getAnalytics()
    );

    initialize();

    return () => watcher();
  }, []);

  useEffect(() => {
    store.initialized && getAnalytics();
  }, [store.initialized]);

  if (!store.initialized)
    return (
      <div className='container container_loading'>
        <Spinner />
      </div>
    );

  return (
    <main className='container'>
      <div className='container__controls'>
        <Dropdown items={dropdownItems} onChange={setPipeline} />
        <TimePeriods times={timePeriods} onChange={setPeriod} />
      </div>
      <Analytics />
    </main>
  );
});

export default App;
