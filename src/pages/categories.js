import Categories from "@/components/Products/Categories";
import React from "react";
import { productCategories } from "@/utils/constants";

export default function categories() {
  const getCategories = () => {};
  return (
    <div className="md:px-16 md:py-10">
      <Categories title="Product Categories" products={productCategories} />
    </div>
  );
}
