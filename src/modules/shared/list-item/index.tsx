import React from 'react'
import styles from './styles.module.css'
interface  ListItemProps  {
  list: string[]
}

export const ListItem = ({ list }: ListItemProps) => {
  return (
      <div className={styles["items-container"]}>
        {list.map((item) => {
          return (
            <div key={item} className={styles["item"]}>
              {item}
            </div>
          );
        })}
      </div>
  );
};