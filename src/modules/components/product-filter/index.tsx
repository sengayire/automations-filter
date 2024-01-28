import styles from './styles.module.scss';
import { ArrowButton } from '@/modules/shared/arrow-button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useProductFilter } from '@/hooks';
import { ExtractFilter } from '../extract-filter';
import { MonitorFilter } from '../monitor-filter';
import { SitesFilter } from '../sites-filter';
import { CategoriesFilter } from '../categories-filter';
import { FilterKeywords } from '../filter-keywords';
import { FiltersHeader } from '../filters-header';
import { useEffect, useRef } from 'react';

// Product filter component to handle automations filtering
export const ProductFilter = () => {
  const { showArrow, scroll, setShowArrow, keywords, categories } =
    useProductFilter();
  const ref = useRef<HTMLDivElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const { boundingClientRect } = entry;
      console.log(
        ' ref.current.clientWidth',
        ref.current?.clientWidth,
        boundingClientRect.right
      );
      if (ref.current && boundingClientRect.right >= ref.current.clientWidth) {
        scroll(ref, 100);
        return setShowArrow(true);
      }
      setShowArrow(false);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (refDiv.current) {
      observer.observe(refDiv.current);
    }

    return () => {
      if (refDiv.current) {
        observer.unobserve(refDiv.current);
      }
    };
  }, [keywords, categories]);

  return (
    <div className={styles['container']}>
      <FiltersHeader />
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {showArrow && (
          <div className={styles['leftArrow']}>
            <ArrowButton
              icon={<IoIosArrowBack />}
              onClick={() => scroll(ref, -100)}
            />
          </div>
        )}
        <div ref={ref} className={styles['filters-container']}>
          <ExtractFilter />
          <MonitorFilter />
          <FilterKeywords />
          <SitesFilter ref={refDiv} />
          <CategoriesFilter />
        </div>
        {showArrow && (
          <div className={styles['rightArrow']}>
            <ArrowButton
              icon={<IoIosArrowForward />}
              onClick={() => scroll(ref, 100)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
