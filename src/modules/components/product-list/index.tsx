import {  ProductCard } from "@/modules/shared";
import styles from './styles.module.css'

import React, { useEffect, useState } from 'react'
import { ProductItemType } from "@/types";

import { useAtom } from "jotai";
import { filtersAtom, productsAtom } from "@/store";
import { removeDuplicates } from "@/utils";

export const ProductList= () => {
const  [items, ] =  useAtom(productsAtom);
const [filters] = useAtom(filtersAtom);
const [filteredItem, setFilteredItem] = useState<ProductItemType[]>(items);

useEffect(() => {
  const f =  Object.values(filters);
  if (f.flat().length) {
    setFilteredItem(removeDuplicates(f.flat() as []) as []);
    return;
  }
  setFilteredItem(items);
}, [filters]);

  return (
    <div className={styles["list-container"]}>
      {filteredItem?.map((item: ProductItemType) => {
        return (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.shortDescription}
            logo={item.sites?.[0]["logoSmall2x"]}
          />
        );
      })}
    </div>
  );
};
