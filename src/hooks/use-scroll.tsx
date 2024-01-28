import { RefObject } from 'react';
/**
 * Function to scroll on a component
 * @returns (ref, scrollOffset) => void
 */
export const useScroll = () => {
  const scroll = (ref: RefObject<HTMLElement>, scrollOffset: number) => {
    if (ref.current) ref.current.scrollLeft += scrollOffset;
  };

  return { scroll };
};
