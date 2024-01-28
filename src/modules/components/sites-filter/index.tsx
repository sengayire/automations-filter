import React, { ChangeEvent, forwardRef, useEffect } from 'react';
import { Filter } from '../filter';
import { SearchInput } from '@/modules/shared/search-input';
import { ListItem } from '@/modules/shared/list-item';
import { useProductFilter } from '@/hooks';
import { ProductItemType } from '@/types';

export const SitesFilter = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    setSearchValue,
    sites,
    keywords,
    setKeywords,
    setSites,
    setAllFilters,
    items,
  } = useProductFilter();
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setSearchValue(value);
    const filterSites = sites.filter((site) =>
      site.toLowerCase().includes(value.toLowerCase())
    );
    setSites(filterSites);
  };
  // Used to handle and set sites filter changes
  useEffect(() => {
    if (keywords.length) {
      const keywordsFilters = keywords.map((key) => {
        const d = items.filter((item: ProductItemType) => {
          return item.sites[0].title === key;
        });
        return d;
      });

      setAllFilters((prev) => ({
        ...prev,
        keywords: keywordsFilters.flatMap((a) => a) as [],
      }));
      return;
    }
    setAllFilters((prev) => ({ ...prev, keywords: [] }));
  }, [keywords]);
  return (
    <div ref={ref}>
      <Filter
        onClose={() => setSearchValue('')}
        data-cy='filter-site'
        title='Filter by Site'
      >
        <div>
          <SearchInput
            data-cy='search-input'
            onChange={handleSearch}
            placeholder='Search'
          />
        </div>
        <ListItem
          data-cy='site-item'
          list={sites}
          selectedItem={(item) => {
            if (keywords.includes(item)) {
              return;
            }
            setKeywords((prev) => [...prev, item]);
          }}
        />
      </Filter>
    </div>
  );
});
