import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface LayoutPros {
  /**
   * Layout react element children
   */
  children: ReactNode;
}
export const Layout = ({ children }: LayoutPros) => {
  return <div className={styles["container"]}>{children}</div>;
};