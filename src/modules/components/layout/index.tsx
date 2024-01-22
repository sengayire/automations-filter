import React, { ReactNode } from 'react'

import styles from './styles.module.css'
interface LayoutPros{
  children: ReactNode
}
export const Layout = ({ children }: LayoutPros) => {
  return <div className={styles["container"]}>{children}</div>;
};