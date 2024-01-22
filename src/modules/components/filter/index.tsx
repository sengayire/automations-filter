import { useClickOutside } from '@/hooks';
import { Button } from '@/modules/shared'
import { Dropdown } from '@/modules/shared/dropdown'
import React, { ReactNode, useRef, useState } from 'react'
import { HiPlus } from "react-icons/hi";
import styles from './styles.module.css'


interface FilterProps {
  children: ReactNode;
  title: string
}



export const Filter = ({ children, title }: FilterProps) => {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null)
  const onClickOutSide = () => {
    setIsShowDropDown(false)
  }

 useClickOutside(popupRef, onClickOutSide);
 
  return (
    <div className={styles.container} ref={popupRef}>
      <Button
        leftAdornment={<HiPlus />}
        title={title}
        onClick={() => setIsShowDropDown((prev) => !prev)}
      />
      <Dropdown show={isShowDropDown}>{children}</Dropdown>
    </div>
  );
};
