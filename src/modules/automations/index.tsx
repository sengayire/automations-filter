import { ProductList } from "@/modules/components";
import { useEffect, useState } from "react";
import { ProductFilter } from "../components/product-filter";

type responseType = {
  oneClickAutomations: { items: Record<string, string>[] };
};
export const Automations = () => {
  const [data, setData] = useState<responseType>();

  useEffect(() => {
    fetch("./Assessment.json")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);
  return (
    <div>
      <div>
        <ProductFilter items={data?.oneClickAutomations.items} />
      </div>
      <ProductList items={data?.oneClickAutomations.items} />
    </div>
  );
};
