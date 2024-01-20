import { Button, ProductCard } from "@/modules/shared";
import { MdOutlineMonitor, MdOutlineArrowForwardIos } from "react-icons/md";


import React from 'react'
import { SearchInput } from "@/modules/shared/search-input";
import { ArrowButton } from "@/modules/shared/arrow-button";
import { Filter } from "../filter";
import { ListItem } from "@/modules/shared/list-item";

type Props = {}


const list = [
  "Product Hunt",
  "indeed",
  "linkedIn",
  "Google",
  "Product Hunt",
  "indeed",
  "linkedIn",
  "Google",
];
export const ProductList = (props: Props) => {
  return (
    <div>
      <Button title="Monitoring" leftAdornment={<MdOutlineMonitor />} />
      <ProductCard
        title="Monitor Company Info on LinkedIn"
        description="Monitor a company's details on LinkedIn and get an alert when their details or employees list change."
        logo="https://images.prismic.io/browseai/0f942303-6026-4fb6-9966-c501d6a1627a_linkedin%40full.png?auto=compress,format&rect=0,0,800,800&w=80&h=80"
      />
      <ArrowButton icon={<MdOutlineArrowForwardIos size={20} />} />
      <Filter>
        <SearchInput />
       <ListItem list={list} />
      </Filter>
    </div>
  );
}