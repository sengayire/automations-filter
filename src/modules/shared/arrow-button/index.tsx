import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

interface SearchInputPropsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export const ArrowButton = ({icon, ...props}: SearchInputPropsProps) => {
  return <button className={styles['button']} {...props}>{icon}</button>;
}
