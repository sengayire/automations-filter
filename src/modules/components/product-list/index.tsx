import {  ProductCard } from "@/modules/shared";
import styles from './styles.module.css'

import React from 'react'

interface ProductListProps{
  items?: Record<string, string>[]
}

export const ProductList= ({items}: ProductListProps) => {

  return (
    <div className={styles["container"]}>
      <div className={styles["list-container"]}>
        {items?.map((item) => {
          return (
            <ProductCard
              key={item.id}
              title={item.title}
              description={item.shortDescription}
              logo={item.sites[0]["logoSmall2x"]}
            />
          );
        })}
      </div>
    </div>
  );
};