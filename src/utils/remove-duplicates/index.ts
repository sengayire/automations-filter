export const removeDuplicates = (arr?: string[]) => {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
};
