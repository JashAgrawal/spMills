import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Categories({ title, products }) {
	return (
		<div>
			<div class="bg-white">
				<div class="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 class="w-full mb-6 lg:text-4xl text-3xl text-center">{title}</h2>

					<div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
						{products.map((product) => (
							<Link
								key={React.useId}
								href={product.path}
								class="group pb-4  max-lg:h-72 border border-accent shadow-xl shadow-gray-700/60 rounded-lg bg-gray-200 flex flex-col justify-between items-center"
							>
								<div class="aspect-h-1 mb-12 flex justify-center aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
									<Image
										src={product.image}
										alt={product.title}
										height="30%"
										// width="30%"
										class="h-48 w-full lg:h-64 rounded-lg object-cover object-center group-hover:opacity-75"
									/>
								</div>
								<div className="flex px-6  mb-4 w-full justify-between">
									<h3 class="mt-1 text-2xl font-medium">{product.title}</h3>
									<p class="mt-1 text-2xl font-semibold text-gray-900">
										${product.price}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
