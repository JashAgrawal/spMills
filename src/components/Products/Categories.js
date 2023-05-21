import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import bg1 from "../../assests/vaktoba.jpeg";
import { productCategories } from "@/utils/constants";
import categories from "@/pages/categories";
import CategoryCard from "./CategoryCard";

export default function Categories({ title, products }) {
	return (
		<>
			<div className="mx-auto container px-6 xl:px-0 py-12">
				<div className="flex flex-col">
					<div className="flex flex-col justify-center">
						<div className="relative rounded-3xl bg-accent">
							<Image
								className="hidden max-h-[50vh] rounded-3xl object-cover opacity-90 sm:block w-full"
								src={bg1}
								alt="sofa"
							/>
							<Image className="sm:hidden w-full" src={bg1} alt="sofa" />
							<div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
								<p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
									{/* Premium Range Products */}
								</p>
							</div>
						</div>
					</div>
					<div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
						{productCategories.map((category, index) => (
							<CategoryCard key={index} category={category} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
