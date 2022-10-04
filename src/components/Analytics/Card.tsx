import { memo } from 'react';
import {
  colorsByType,
  formatter,
  Icon,
  icons,
  textByType,
} from '../../utils/constants';

import styles from './styles.module.scss';

type CardProps = {
  cardKey: Icon;
  num: number;
  sum?: number;
};

const Card: React.FC<CardProps> = memo(({ cardKey, num, sum }) => {
  const color = styles[colorsByType[cardKey]];

  const formattedSum =
    typeof sum === 'number' ? `${formatter.format(sum)} €` : '';

  const formattedNum = sum ? `${num} | ` : num;

  return (
    <div className={styles.card}>
      <div className={`${styles.card__icon} ${color}`}>{icons[cardKey]}</div>
      <div className={styles.card__text}>
        <h2 className={`${styles.card__h2} ${color}`}>{textByType[cardKey]}</h2>
        <div className={styles.card__numbers}>
          <b>{formattedNum}</b>
          {formattedSum}
        </div>
      </div>
    </div>
  );
});

export { Card };
