import { Menu, Dropdown } from 'antd';
import { memo, useState } from 'react';
import cn from 'classnames';
import { ReactComponent as Arrow } from '../../assets/icons/Arrow.svg';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useHandleClickItem } from '../../utils/utils';
import { ChangeHandler } from '../../utils/types';

import styles from './styles.module.scss';

type DropdownProps = {
  items?: ItemType[];
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

    const menu = (
      <Menu
        onClick={({ key }) => {
          onClick(key);
          setIsDropdownOpen(false);
        }}
        items={items}
      />
    );

    return (
      <Dropdown
        overlay={menu}
        onOpenChange={setIsDropdownOpen}
        trigger={['click']}
        overlayClassName={styles.dropdown__overlay}
      >
        <div
          className={cn(styles.dropdown, {
            [styles.dropdown_open]: isDropdownOpen,
          })}
        >
          {selectedItem !== 'all' ? selectedItem : 'All Pipelines'} <Arrow />
        </div>
      </Dropdown>
    );
  }
);

export { DropdownComponent };
