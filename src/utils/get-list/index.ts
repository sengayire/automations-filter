import { ProductItemType } from "@/types";
import { removeDuplicates } from "..";

export const getList = (
  items: ProductItemType[],
  listName: "sites" | "categories"
) => {
  const list = items?.flatMap((item: ProductItemType) =>
    item[listName]?.map((value) => value.title)
  );

  return removeDuplicates(list);
};