import { Button } from "@/modules/shared";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Filter } from "../filter";
import { SearchInput } from "@/modules/shared/search-input";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

import { ListItem } from "@/modules/shared/list-item";
import { ArrowButton } from "@/modules/shared/arrow-button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiltersType, ProductItemType } from "@/types";
import { removeDuplicates } from "@/utils";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMonitor } from "react-icons/md";
import {
  extractFilterAtom,
  filtersAtom,
  monitorFilterAtom,
  productsAtom,
} from "@/store";
import { useAtom } from "jotai";
interface ProductFilter {
  items?: ProductItemType[];
}

const getList = (
  items: ProductItemType[],
  listName: "sites" | "categories"
) => {
  const list = items?.flatMap((item: ProductItemType) =>
    item[listName]?.map((value) => value.title)
  );

  return removeDuplicates(list);
};

export const ProductFilter = () => {
  const [items] = useAtom(productsAtom);
  const [isExtractFilter, setIsExtractFilter] = useAtom(extractFilterAtom);
  const [isMonitorFilter, setIsMonitorFilter] = useAtom(monitorFilterAtom);
  const [, setAllFilters] = useAtom(filtersAtom);
  const [searchValue, setSearchValue] = useState("");
  const sitesList = getList(items, "sites");
  const categoryList = getList(items, "categories");
  const ref = useRef<HTMLDivElement>(null);
  const refDiv = useRef<HTMLDivElement>(null)

  const [keywords, setKeywords] = useState<string[]>([]);
  const [categories, setCategories] = useState<string>();

  const [sites, setSites] = useState(sitesList);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setSearchValue(value);
    const filterSites = sites.filter((site) =>
      site.toLowerCase().includes(value.toLowerCase())
    );
    setSites(filterSites);
  };

  const handleRemoveFilter = (itemIndex: number) => {
    const removeFilter = keywords.splice(itemIndex, 1) as unknown;
    setKeywords((prev) => {
      return prev.filter((filter) => filter !== removeFilter);
    });
  };

  useEffect(() => {
    if (searchValue === "") {
      const sitesList = getList(items, "sites");
      setSites(sitesList);
    }
  }, [searchValue]);

  useEffect(() => {
    if (isExtractFilter) {
      const extract = items.filter((item: ProductItemType) =>
        item.title.toLowerCase().includes("extract")
      );
      setAllFilters((prev: FiltersType) => ({ ...prev, extract: extract }));
      return;
    }
  setAllFilters((prev) => ({ ...prev, extract: [] }));
  }, [isExtractFilter]);

  useEffect(() => {
    if (isMonitorFilter) {
      const monitor = items.filter((item: ProductItemType) =>
        item.title.toLowerCase().includes("monitor")
      );
      setAllFilters((prev: FiltersType) => ({ ...prev, monitor: monitor }));
      return;
    }
    setAllFilters((prev) => ({ ...prev, monitor: [] }));
  }, [isMonitorFilter]);

  useEffect(() => {
    if (keywords.length) {
      const keywordsFilters = keywords.map((key) => {
        const d = items.filter((item: ProductItemType) => {
          return item.sites[0].title === key;
        });
        return d;
      });

      setAllFilters((prev) => ({
        ...prev,
        keywords: keywordsFilters.flatMap((a) => a) as [],
      }));
      return;
    }
    setAllFilters((prev) => ({ ...prev, keywords: [] }));
  }, [keywords]);

  useEffect(() => {
    if (!!categories) {
      const categoriesFilters = items.filter((item: ProductItemType) =>
        item.categories.find((category) => category.title === categories)
      );
      setAllFilters((prev) => ({
        ...prev,
        categories: categoriesFilters,
      }));
      return;
    }
    setAllFilters((prev) => ({ ...prev, keywords: [] }));
  }, [categories]);

  const scroll = (scrollOffset: number) => {
    if (ref.current) ref.current.scrollLeft += scrollOffset;

  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const { boundingClientRect } = entry;
      // Check if the right side of filters-container is at or beyond the right side of the viewport
      if (
        ref.current && boundingClientRect.right - 100 >=
        ref.current.clientWidth
      ) {
        scroll(100);
        // Do something when the right side of filters-container reaches the end
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (refDiv.current) {
      observer.observe(refDiv.current);
    }

    return () => {
      if (refDiv.current) {
        observer.unobserve(refDiv.current);
      }
    };
  }, [keywords, categories]);

  return (
    <div className={styles["container"]}>
      <div className={styles["leftArrow"]}>
        <ArrowButton icon={<IoIosArrowBack />} onClick={() => scroll(100)} />
      </div>
      <div ref={ref} className={styles["filters-container"]}>
        <Button
          title="Extract Data"
          leftAdornment={<HiMiniArrowsUpDown />}
          onClick={() => setIsExtractFilter((prev) => !prev)}
          isSelected={isExtractFilter}
          data-cy="extract-button"
        />
        <Button
          data-cy="monitor-button"
          title="Monitor"
          leftAdornment={<MdOutlineMonitor />}
          onClick={() => setIsMonitorFilter((prev) => !prev)}
          isSelected={isMonitorFilter}
        />
        {keywords.map((filter, index) => {
          return (
            <Button
              key={index}
              title={filter}
              isSelected={keywords.length > 0}
              rightAdornment={
                <IoMdClose onClick={() => handleRemoveFilter(index)}  data-testid="keyword-id"/>
              }
            />
          );
        })}
        {categories && (
          <Button
            title={categories}
            isSelected={!!categories}
            rightAdornment={
              <IoMdClose onClick={() => setCategories(undefined)}  />
            }
          />
        )}
        <div ref={refDiv}>
          <Filter  data-cy="filter-site" title="Filter by Site">
            <div>
              <SearchInput data-cy="search-input" onChange={handleSearch} placeholder="Search"/>
            </div>
            <ListItem
              data-cy="site-item"
              list={sites}
              selectedItem={(item) => {
                if (keywords.includes(item)) {
                  return;
                }
                setKeywords((prev) => [...prev, item]);
              }}
            />
          </Filter>
        </div>
        <Filter data-cy="filter-category" title="Filter by Category" data-testid="filter-id">
          <ListItem
            data-cy="category-item"
            list={categoryList}
            selectedItem={(item) => {
              setCategories(item);
            }}
          />
        </Filter>
      </div>

      <div className={styles["rightArrow"]}>
        <ArrowButton
          icon={<IoIosArrowForward />}
          onClick={() => scroll(-100)}
        />
      </div>
    </div>
  );
};
