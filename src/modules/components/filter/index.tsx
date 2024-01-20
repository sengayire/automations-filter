import { Button } from '@/modules/shared'
import { Dropdown } from '@/modules/shared/dropdown'
import React, { ReactNode, useState } from 'react'
import { HiPlus } from "react-icons/hi";

interface FilterProps {
  children: ReactNode;
  title: string
}



export const Filter = ({ children, title }: FilterProps) => {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  return (
    <div>
      <Button
        leftAdornment={<HiPlus />}
        title={title}
        onClick={() => setIsShowDropDown((prev) => !prev)}
      />
      <Dropdown show={isShowDropDown}>{children}</Dropdown>
    </div>
  );
};