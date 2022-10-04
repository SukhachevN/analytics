import { useCallback, useEffect, useState } from 'react';
import { ChangeHandler, StringOrNull } from './types';

type UseHandleClickItemParams = {
  onChange: ChangeHandler;
  defaultValue?: string;
};

export const useHandleClickItem = ({
  onChange,
  defaultValue = 'all',
}: UseHandleClickItemParams): [StringOrNull, ChangeHandler] => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultValue);

  const onClick = useCallback(
    (newVal: string) =>
      setSelectedItem((state) => (state === newVal ? 'all' : newVal)),
    []
  );

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem, onChange]);

  return [selectedItem, onClick];
};
