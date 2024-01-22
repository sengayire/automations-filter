
import React from 'react'
import { ProductLogo } from '..';
import { motion } from "framer-motion";
import styles from './styles.module.css'

interface ProductCardProps {
  logo: string;
  title: string;
  description: string;
}

export const ProductCard = ({ logo, title, description }: ProductCardProps) => {
  return (
     <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{
        duration: 0.8,
        delay: 0.0,
        ease: 'backOut',
      }}
    >
    <div className={styles["container"]}>
      <ProductLogo logo={logo} />
      <div className={styles["title"]}>{title}</div>
      <p className={styles["description"]}>{description}</p>
    </div>
    </motion.div>
  );
};
