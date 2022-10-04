import { useCallback } from 'react';

import { Dropdown } from '../components/Dropdown';
import { dropdownItems, timePeriods } from '../utils/constants';
import { TimePeriods } from '../components/TimePeriods';

import './styles.scss';
import 'antd/dist/antd.css';

const App = () => {
  const onPipelineChange = useCallback(
    (pipeline: string) => console.log(pipeline),
    []
  );

  const onTimeChange = useCallback(
    (newTime: string) => console.log(newTime),
    []
  );

  return (
    <main className='container'>
      <div className='container__controls'>
        <Dropdown items={dropdownItems} onChange={onPipelineChange} />
        <TimePeriods times={timePeriods} onChange={onTimeChange} />
      </div>
    </main>
  );
};

export default App;
