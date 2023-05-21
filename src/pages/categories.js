import Categories from "@/components/Products/Categories";
import React from "react";
import { productCategories } from "@/utils/constants";

export default function categories() {
	const getCategories = () => {};
	return (
		<div>
			<Categories title="Product Categories" products={productCategories} />
		</div>
	);
}
