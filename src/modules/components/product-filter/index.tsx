import { Button } from "@/modules/shared";
import React from "react";
import styles from "./styles.module.css";
import { Filter } from "../filter";
import { SearchInput } from "@/modules/shared/search-input";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { MdOutlineMonitor } from "react-icons/md";
import { ListItem } from "@/modules/shared/list-item";
import { ArrowButton } from "@/modules/shared/arrow-button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ProductFilter {
  items: Record<string, Record<string, string[]>[]>[];
};


export const ProductFilter = ({items}: ProductFilter) => {
  console.log('items', items)
  function remove_duplicates(arr?: string[]) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
  }
  const categoryList = items?.flatMap((item) =>
    item.sites?.map((site) => site.title)
  );

  const sitesList = items?.flatMap((item) =>
    item.categories?.map((category) => category.title)
  );
  const category = remove_duplicates(categoryList as any);
  const sites = remove_duplicates(sitesList as any);
  return (
    <div className={styles["container"]}>
      <div>
        <ArrowButton icon={<IoIosArrowBack />} />
      </div>
      <div className={styles["static-filter"]}>
        <Button title="Extract Data" leftAdornment={<HiMiniArrowsUpDown />} />
        <Button title="Monitoring" leftAdornment={<MdOutlineMonitor />} />
      </div>
      <Filter title="Filter by Site">
        <SearchInput />
        <ListItem list={sites} />
      </Filter>
      <Filter title="Filter by Category">
        <ListItem list={category} />
      </Filter>
      <ArrowButton icon={<IoIosArrowForward />} />
    </div>
  );
};
