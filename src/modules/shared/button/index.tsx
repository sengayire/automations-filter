import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  rightAdornment?: ReactNode;
  leftAdornment?: ReactNode;
  isSelected?: boolean;
}

export const Button = ({ title, rightAdornment, leftAdornment, isSelected, ...props }: ButtonProps) => {
  return (
    <button
      className={isSelected ? styles["button-selected"] : styles.button}
      {...props}
    >
      {leftAdornment}
      <span className={styles.title}>{title}</span>
      {rightAdornment}
    </button>
  );
};