import React from 'react'
import styles from './styles.module.css'
import { FaCheck } from "react-icons/fa6";

interface  ListItemProps  {
  list: string[]
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
            <div
              key={item}
              className={styles["item"]}
              onClick={() => handleItemClick(item)}
            >
              <span> 
              {item}
              </span>
              <span className={styles.selected}>
                <FaCheck />
              </span>
            </div>
          );
        })
      ) : (
        <div className={styles['empty']}>Item not found</div>
      )}
    </div>
  );
};