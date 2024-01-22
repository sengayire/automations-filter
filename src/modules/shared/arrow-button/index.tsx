import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'
import { motion} from 'framer-motion'

interface SearchInputPropsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export const ArrowButton = ({icon, ...props}: SearchInputPropsProps) => {
 
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
      <button className={styles["button"]} {...props}>
        {icon}
      </button>
    </motion.div>
  );
}
