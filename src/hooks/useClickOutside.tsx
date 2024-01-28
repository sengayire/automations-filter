import { RefObject, useEffect } from "react";

/**
 * Close referenced component when click outside triggered 
 * @param ref 
 * @param callback 
 */
export const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      if (!ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [callback, ref]);
};