import React, { ReactNode } from 'react'

import styles from './styles.module.css'


interface ListDropdownProps {
  children: ReactNode
  show: boolean
};


export const Dropdown = ({ children, show }: ListDropdownProps) => {
  return show ? <div className={styles["container"]}>{children}</div> : null;
};