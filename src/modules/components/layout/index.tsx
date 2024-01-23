import React, { ReactNode } from 'react'

import styles from './styles.module.scss'
interface LayoutPros{
  children: ReactNode
}
export const Layout = ({ children }: LayoutPros) => {
  return <div className={styles["container"]}>{children}</div>;
};