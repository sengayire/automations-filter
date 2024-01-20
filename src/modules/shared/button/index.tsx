import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  rightAdornment?: ReactNode;
  leftAdornment?: ReactNode;
}

export const Button = ({ title, rightAdornment, leftAdornment, ...props }: ButtonProps) => {
  return (
    <button className={styles.btnSelected} {...props}>
      {leftAdornment}
      <span className={styles.title}>{title}</span>
      {rightAdornment}
    </button>
  );
};