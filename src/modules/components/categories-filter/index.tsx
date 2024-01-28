import React, { useEffect } from 'react';
import { Filter } from '../filter';
import { ListItem } from '@/modules/shared/list-item';
import { useProductFilter } from '@/hooks';
import { ProductItemType } from '@/types';

export const CategoriesFilter = () => {
  const { categoryList, setCategories, categories, items, setAllFilters } =
    useProductFilter();

  // Used to handle and set sites filter changes
  useEffect(() => {
    if (!!categories) {
      const categoriesFilters = items.filter((item: ProductItemType) =>
        item.categories.find((category) => category.title === categories)
      );
      setAllFilters((prev) => ({
        ...prev,
        categories: categoriesFilters,
      }));
      return;
    }
    setAllFilters((prev) => ({ ...prev, categories: [] }));
  }, [categories]);

  return (
    <Filter
      data-cy='filter-category'
      title='Filter by Category'
      data-testid='filter-id'
    >
      <ListItem
        data-cy='category-item'
        list={categoryList}
        selectedItem={(item) => {
          setCategories(item);
        }}
      />
    </Filter>
  );
};
