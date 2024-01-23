import React from "react";
import styles from "./styles.module.scss";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
interface ListItemProps {
  list: string[];
  selectedItem?: (item: string) => void;
}

export const ListItem = ({ list, selectedItem }: ListItemProps) => {
  const handleItemClick = (item: string) => {
    selectedItem?.(item);
  };
  return (
    <div className={styles["items-container"]}>
      {list.length ? (
        list.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 1.01 }}
              key={item}
              className={styles["item"]}
              onClick={() => handleItemClick(item)}
            >
              <span>{item}</span>
              <span className={styles.selected}>
                <FaCheck />
              </span>
            </motion.div>
          );
        })
      ) : (
        <div className={styles["empty"]}>Item not found</div>
      )}
    </div>
  );
};
