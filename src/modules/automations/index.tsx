import { ProductList } from "@/modules/components";
import { ProductFilter } from "../components/product-filter";
import { Layout } from "../components/layout";
export const Automations = () => {
  return (
<Layout>
  <ProductFilter />
  <ProductList />
</Layout>

  );
};