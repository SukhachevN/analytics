import { memo } from 'react';
import cn from 'classnames';
import { useHandleClickItem } from '../../utils/utils';
import { ChangeHandler, ClickableItem } from '../../utils/types';

import styles from './styles.module.scss';

type TimePeriodsProps = {
  times: ClickableItem[];
  onChange: ChangeHandler;
  defaultValue?: string;
};

const TimePeriods: React.FC<TimePeriodsProps> = memo(
  ({ times, onChange, defaultValue = 'all' }) => {
    const [selectedItem, onClick] = useHandleClickItem({
      onChange,
      defaultValue,
    });

    return (
      <div className={styles.timePeriods}>
        {times.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onClick(key)}
            className={cn(styles.timePeriods__el, {
              [styles.timePeriods__el_selected]: key === selectedItem,
            })}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }
);

export { TimePeriods };
