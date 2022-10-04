import { memo, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as Arrow } from '../../assets/icons/Arrow.svg';
import { useHandleClickItem } from '../../utils/utils';
import { ChangeHandler, ClickableItem } from '../../utils/types';

import styles from './styles.module.scss';

type DropdownProps = {
  items?: ClickableItem[];
  onChange: ChangeHandler;
  defaultValue?: string;
};

const DropdownComponent: React.FC<DropdownProps> = memo(
  ({ items, onChange, defaultValue = 'all' }) => {
    const [selectedItem, onClick] = useHandleClickItem({
      onChange,
      defaultValue,
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClickItem = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      newVal: string
    ) => {
      e.stopPropagation();
      onClick(newVal);
      setIsDropdownOpen(false);
    };

    const dropdown = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const listener = (e: MouseEvent) => {
        const condition =
          e.target === dropdown.current ||
          dropdown.current?.contains(e.target as Node);

        setIsDropdownOpen(Boolean(condition));
      };

      document.addEventListener('click', (e) => listener(e));

      return document.removeEventListener('click', listener);
    }, []);

    return (
      <div className={styles.dropdown} ref={dropdown}>
        <button
          className={cn(styles.dropdown__button, {
            [styles.dropdown__button_open]: isDropdownOpen,
          })}
        >
          {selectedItem !== 'all' ? selectedItem : 'All Pipelines'} <Arrow />
        </button>
        <div
          className={cn(styles.dropdown__overlay, {
            [styles.dropdown__overlay_open]: isDropdownOpen,
          })}
        >
          <ul className={styles.dropdown__ul}>
            {items?.map(({ key, label }) => (
              <li key={key} className={styles.dropdown__li}>
                <button
                  onClick={(e) => handleClickItem(e, key)}
                  className={styles.dropdown__el}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

export { DropdownComponent };
