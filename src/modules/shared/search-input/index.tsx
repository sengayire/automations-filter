import React, { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {};

export const SearchInput = (props: SearchInputProps) => {
  
  return <input className={styles["input"]} {...props} />;
};