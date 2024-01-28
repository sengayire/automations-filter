import { useProductFilter } from '@/hooks';
import React from 'react';
import styles from './styles.module.scss';

export const FiltersHeader = () => {
  const { setKeywords, setCategories } = useProductFilter();
  return (
    <div className={styles['see-all']}>
      <div>
        Here are some Automations that pre-defined fro product availability
      </div>
      <div>
        <span
          onClick={() => {
            setKeywords([]);
            setCategories('');
          }}
        >
          See all
        </span>
      </div>
    </div>
  );
};
