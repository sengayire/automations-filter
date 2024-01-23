import React, { ReactNode } from 'react'

import styles from './styles.module.scss'
import { motion } from "framer-motion";

interface ListDropdownProps {
  children: ReactNode
  show: boolean
};


export const Dropdown = ({ children, show }: ListDropdownProps) => {
  
  return show ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={styles["container"]}
    >
      {children}
    </motion.div>
  ) : null;
};