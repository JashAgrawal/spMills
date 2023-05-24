import Curvy from "@/assests/curvy";
import React from "react";
import Card from "../Common/Card";
import { productCategories } from "@/utils/constants";
export default function CategorySection() {
  return (
    <div>
      <h1 className="lg:text-7xl text-3xl  w-full text-center text-gray-700 font-semibold my-12 ">
        PRODUCTS CATEGORIES
      </h1>
      <div className="flex flex-wrap md:flex-start space-y-4 w-full justify-evenly bg-accent items-center">
        <Curvy direction={"down"} color="#fff" />

        {productCategories.slice(0, 5).map((category, idx) => (
          <Card
            key={category.categoryID}
            image={category.image}
            title={category.title}
          />
        ))}
        <Curvy direction={"up"} color="#fff" />
      </div>
    </div>
  );
}
