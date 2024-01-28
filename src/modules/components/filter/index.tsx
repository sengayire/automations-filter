import { useClickOutside } from '@/hooks';
import { Button } from '@/modules/shared'
import { Dropdown } from '@/modules/shared/dropdown'
import React, { ReactNode, useRef, useState } from 'react'
import { HiPlus } from "react-icons/hi";
import styles from './styles.module.scss'


interface FilterProps {
  /**
   * Component children
   */
  children: ReactNode;
  /**
   * Filter title
   */
  title: string;
  /**
   *
   * @returns Callback when component closed
   */
  onClose?: () => void;
}

export const Filter = ({ children, title, onClose, ...props }: FilterProps) => {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const onClickOutSide = () => {
    setIsShowDropDown(false);
    onClose?.();
  };

  useClickOutside(popupRef, onClickOutSide);

  return (
    <div className={styles.container} ref={popupRef}>
      <Button
        leftAdornment={<HiPlus />}
        title={title}
        onClick={() => setIsShowDropDown((prev) => !prev)}
        {...props}
      />
      <Dropdown show={isShowDropDown}>{children}</Dropdown>
    </div>
  );
};
