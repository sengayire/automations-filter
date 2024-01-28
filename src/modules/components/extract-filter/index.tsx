import { useProductFilter } from '@/hooks';
import { Button } from '@/modules/shared';
import { FiltersType, ProductItemType } from '@/types';
import { useEffect } from 'react';
import { HiMiniArrowsUpDown } from 'react-icons/hi2';

export const ExtractFilter = () => {
  const { setIsExtractFilter, isExtractFilter, setAllFilters, items } =
    useProductFilter();

  // Used to handle extract filter changes
  useEffect(() => {
    if (isExtractFilter) {
      const extract = items.filter((item: ProductItemType) =>
        item.title.toLowerCase().includes('extract')
      );
      setAllFilters((prev: FiltersType) => ({ ...prev, extract: extract }));
      return;
    }
    setAllFilters((prev) => ({ ...prev, extract: [] }));
  }, [isExtractFilter]);

  return (
    <Button
      title='Extract Data'
      leftAdornment={<HiMiniArrowsUpDown />}
      onClick={() => setIsExtractFilter((prev) => !prev)}
      isSelected={isExtractFilter}
      data-cy='extract-button'
    />
  );
};
