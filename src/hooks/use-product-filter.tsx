import { useEffect, useRef, useState } from 'react';
import {
  arrowsAtom,
  categoryKeywordAtom,
  extractFilterAtom,
  filtersAtom,
  keywordsAtom,
  monitorFilterAtom,
  productsAtom,
} from '@/store';
import { getList } from '@/utils/get-list';
import { useAtom } from 'jotai';
import { useScroll } from './use-scroll';

/**
 *  Product filtering hook
 * @returns return { Object}
 */
export const useProductFilter = () => {
  const [items] = useAtom(productsAtom);
  const sitesList = getList(items, 'sites');
  const categoryList = getList(items, 'categories');

  const [isExtractFilter, setIsExtractFilter] = useAtom(extractFilterAtom);
  const [isMonitorFilter, setIsMonitorFilter] = useAtom(monitorFilterAtom);
  const [keywords, setKeywords] = useAtom(keywordsAtom);
  const [categories, setCategories] = useAtom(categoryKeywordAtom);
  const [, setAllFilters] = useAtom(filtersAtom);
  const [showArrow, setShowArrow] = useAtom(arrowsAtom);

  const [sites, setSites] = useState(sitesList);
  const [searchValue, setSearchValue] = useState('');


  const { scroll } = useScroll();

  /**
   *  Used to check if filter value is empty
   * Other wise it return all available sites
   */
  useEffect(() => {
    if (searchValue === '') {
      const sitesList = getList(items, 'sites');
      setSites(sitesList);
    }
  }, [searchValue]);

  return {
    setIsExtractFilter,
    setKeywords,
    setCategories,
    isExtractFilter,
    isMonitorFilter,
    setIsMonitorFilter,
    showArrow,
    scroll,
    keywords,
    categories,
    setSearchValue,
    setSites,
    categoryList,
    sites,
    setAllFilters,
    items,
    setShowArrow,
  };
};
