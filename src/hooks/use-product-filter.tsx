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

  const ref = useRef<HTMLDivElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);

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

  // const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //   entries.forEach((entry) => {
  //     const { boundingClientRect } = entry;
  //     console.log(
  //       ' ref.current.clientWidth',
  //       ref.current?.clientWidth,
  //       boundingClientRect.right
  //     );
  //     if (ref.current && boundingClientRect.right >= ref.current.clientWidth) {
  //       scroll(ref, 100);
  //       setShowArrow(true);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersection);
  //   console.log('refDiv', refDiv);
  //   if (refDiv.current) {
  //     observer.observe(refDiv.current);
  //   }

  //   return () => {
  //     if (refDiv.current) {
  //       observer.unobserve(refDiv.current);
  //     }
  //   };
  // }, [keywords, categories]);

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
    // ref,
    sites,
    // refDiv,
    setAllFilters,
    items,
    setShowArrow,
  };
};
