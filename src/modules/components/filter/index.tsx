import { Button } from '@/modules/shared'
import { Dropdown } from '@/modules/shared/dropdown'
import React, { ReactNode, useState } from 'react'

interface FilterProps {
  children: ReactNode;
}



export const Filter = ({ children }: FilterProps) => {

  const [isShowDropDown, setIsShowDropDown] = useState(false)
  console.log('isShowDropDown',isShowDropDown)
  return (
    <div>
      <Button
        title="Filter by Site"
        onClick={() => setIsShowDropDown((prev) => !prev)}
      />
      <Dropdown show={isShowDropDown}>{children}</Dropdown>
    </div>
  );
};