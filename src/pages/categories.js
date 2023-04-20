import CategorySection from "@/components/Home/CategorySection";
import Categories from "@/components/Products/Categories";
import React from "react";
import cyarn from "../assests/category/cyarn.jpg";
import organic from "../assests/category/organic.jpg";
import cfabric from "../assests/category/fabric.jpg";
import garments from "../assests/category/garments.jpg";
import home from "../assests/category/home.jpeg";

export default function categories() {
	const productCategories = [
		{
			price: 444,
			categoryID: "1",
			image: garments,
			title: "Garments",
			path: `/garments`,
		},
		{
			price: 444,
			categoryID: "2",
			image: cyarn,
			title: "Yarn",
			path: `/yarn`,
		},
		{
			price: 444,
			categoryID: "3",
			image: cfabric,
			title: "Fabric",
			path: `/fabric`,
		},
		{
			price: 444,
			categoryID: "123",
			image: home,
			title: "Home textile",
			path: `/home-textile`,
		},
		{
			price: 444,
			categoryID: "123",
			image: organic,
			title: "Organic",
			path: `/organic`,
		},
	];
	return (
		<div>
			<Categories title="Product Categories" products={productCategories} />
		</div>
	);
}
