import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  rightAdornment?: ReactNode;
  leftAdornment?: ReactNode;
  isSelected?: boolean;
}

export const Button = ({ title, rightAdornment, leftAdornment, isSelected, ...props }: ButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <button
        className={isSelected ? styles["button-selected"] : styles.button}
        {...props}
      >
        {leftAdornment}
        <span className={styles.title}>{title}</span>
        {rightAdornment}
      </button>
    </motion.div>
  );
};