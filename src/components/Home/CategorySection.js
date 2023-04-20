import Curvy from "@/assests/curvy";
import React from "react";
import Card from "../Common/Card";
import cyarn from "../../assests/category/cyarn.jpg";
import organic from "../../assests/category/organic.jpg";
import cfabric from "../../assests/category/fabric.jpg";
import garments from "../../assests/category/garments.jpg";
import home from "../../assests/category/home.jpeg";
import Roll from "react-reveal/Roll";
export default function CategorySection() {
	const productCategories = [
		{
			categoryID: "1",
			image: garments,
			title: "Garments",
			path: `/garments`,
		},
		{
			categoryID: "2",
			image: cyarn,
			title: "Yarn",
			path: `/yarn`,
		},
		{
			categoryID: "3",
			image: cfabric,
			title: "Fabric",
			path: `/fabric`,
		},
		{
			categoryID: "123",
			image: home,
			title: "Home textile",
			path: `/home-textile`,
		},
		{
			categoryID: "123",
			image: organic,
			title: "Organic",
			path: `/organic`,
		},
	];
	return (
		<div>
			<h1 className="lg:text-7xl text-3xl  w-full text-center text-gray-700 font-semibold my-12 ">
				PRODUCTS CATEGORIES
			</h1>
			<div className="flex flex-wrap lg:flex-start space-y-4 w-full justify-evenly bg-accent items-center">
				<Curvy direction={"down"} color="#fff" />

				{/* <Roll left> */}
				{productCategories.map((category, idx) => (
					<Card
						key={category.categoryID}
						image={category.image}
						title={category.title}
					/>
				))}
				{/* </Roll> */}
				<Curvy direction={"up"} color="#fff" />
			</div>
		</div>
	);
}
