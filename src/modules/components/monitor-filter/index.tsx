import { useProductFilter } from '@/hooks';
import { Button } from '@/modules/shared';
import { FiltersType, ProductItemType } from '@/types';
import React, { useEffect } from 'react';
import { MdOutlineMonitor } from 'react-icons/md';

export const MonitorFilter = () => {
  const { setIsMonitorFilter, isMonitorFilter, setAllFilters, items } =
    useProductFilter();

  // Used to handle Monitor filter changes
  useEffect(() => {
    if (isMonitorFilter) {
      const monitor = items.filter((item: ProductItemType) =>
        item.title.toLowerCase().includes('monitor')
      );
      setAllFilters((prev: FiltersType) => ({ ...prev, monitor: monitor }));
      return;
    }
    setAllFilters((prev) => ({ ...prev, monitor: [] }));
  }, [isMonitorFilter]);
  return (
    <Button
      data-cy='monitor-button'
      title='Monitor'
      leftAdornment={<MdOutlineMonitor />}
      onClick={() => setIsMonitorFilter((prev) => !prev)}
      isSelected={isMonitorFilter}
    />
  );
};
