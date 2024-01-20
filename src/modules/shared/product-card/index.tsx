
import React from 'react'
import { ProductLogo } from '..';

import styles from './styles.module.css'

interface ProductCardProps {
  logo: string;
  title: string;
  description: string;
}

export const ProductCard = ({ logo, title, description }: ProductCardProps) => {
  return (
    <div className={styles["container"]}>
      <ProductLogo logo={logo} />
      <div className={styles["title"]}>{title}</div>
      <p className={styles["description"]}>{description}</p>
    </div>
  );
};
