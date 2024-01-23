export type SiteType = {
  logoSmall2x: string;
  title: string;
  slug: string 
};
export type CategoryType = {
  title: string;
  slug: string;
};

export type ProductItemType = {
  id: string;
  title: string;
  shortDescription: string;
  sites: SiteType[];
  categories: CategoryType[]
};

export type FiltersType = {
  extract: ProductItemType[];
  monitor: ProductItemType[];
  keywords: ProductItemType[];
  categories: ProductItemType[];
};