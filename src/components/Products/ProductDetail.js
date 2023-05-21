import React from "react";
import c9 from "@/assests/suryaprakash silk mills/SUPREMO/I1.jpg";
import Image from "next/image";

const ProductDetail = () => {
	return (
		<>
			{/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
				<div className="flex flex-col w-[50%] lg:flex-row -mx-4">
					<div className="lg:flex lg:flex-col px-4">
						<div className="bg-slate-300 flex h-full rounded-md my-4">
							<Image
								src={c9}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
						<div className="flex space-x-2 h-full">
							<div className="bg-slate-100 flex w-full h-full border rounded-md">
								<Image
									src={c9}
									// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
									// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
									alt="sofa-2"
								/>
							</div>
							<div className="bg-slate-100 flex w-full h-full rounded-md">
								<Image
									src={c9}
									// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
									// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
									alt="sofa-2"
								/>
							</div>
							<div className="bg-slate-100 flex w-full h-full rounded-md">
								<Image
									src={c9}
									// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
									// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
									alt="sofa-2"
								/>
							</div>
							<div className="bg-slate-100 flex w-full h-full rounded-md">
								<Image
									src={c9}
									// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
									// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
									alt="sofa-2"
								/>
							</div>
						</div>
					</div>
					<div className="lg:flex lg:flex-col px-4">
						<h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
							Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
						</h2>

						<p className="text-gray-500">
							Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
							exercitationem porro saepe ea harum corrupti vero id laudantium
							enim, libero blanditiis expedita cupiditate a est.
						</p>

						<div className="flex py-4 space-x-4">
							<button
								type="button"
								className="h-14 px-6 py-2 font-semibold rounded-xl bg-gray-700 hover:bg-gray-500 text-white"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div> */}
			<div className="flex max-w-7xl max-md:flex-col p-4">
				<div className="flex flex-col lg: w-full h-full p-4">
					<div className="bg-slate-300 flex items-center justify-center rounded-md my-4">
						<Image
							src={c9}
							className="bg-slate-300 md:w-[50%] rounded-md my-4"
							quality={75}
							style={{ objectFit: "fill" }}
							// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
							// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
							alt="sofa-2"
						/>
					</div>
					<div className="md:hidden flex space-x-4 h-full w-full">
						<div className="bg-slate-100 flex w-full h-full border rounded-md">
							<Image
								src={c9}
								quality={75}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
						<div className="bg-slate-100 flex w-full h-full border rounded-md">
							<Image
								src={c9}
								quality={75}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
						<div className="bg-slate-100 flex w-full h-full border rounded-md">
							<Image
								src={c9}
								quality={75}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
						<div className="bg-slate-100 flex w-full h-full border rounded-md">
							<Image
								src={c9}
								quality={75}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
					</div>
				</div>
				<div className="flex w-full h-full md:space-y-12 text-left p-6 justify-start items-start flex-col">
					<div className="max-md:hidden flex space-x-4 h-[70%] w-full">
						<div className="bg-slate-100 flex w-full h-full border rounded-md">
							<Image
								src={c9}
								quality={75}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
						<div className="bg-slate-100 flex w-full h-full border rounded-md">
							<Image
								src={c9}
								quality={75}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
						<div className="bg-slate-100 flex w-full h-full border rounded-md">
							<Image
								src={c9}
								quality={75}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
						<div className="bg-slate-100 flex w-full h-full border rounded-md">
							<Image
								src={c9}
								quality={75}
								// className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
								// src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
								alt="sofa-2"
							/>
						</div>
					</div>
					<h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
						BOMBAY FILAFIL
					</h2>

					<p className="text-gray-500">
						2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed
					</p>
					<div className="flex justify-start w-full py-4 space-x-4">
						<button
							type="button"
							className="h-14 px-6 py-2 font-semibold rounded-xl bg-gray-700 hover:bg-gray-500 text-white"
						>
							Contact Us
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
