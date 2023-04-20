import Curvy from "@/assests/curvy";
import Image from "next/image";
import React from "react";
import yarn from "../../assests/facts/yarn.png";
import windmill from "../../assests/facts/windmill.png";
import rating from "../../assests/facts/rating.png";
import shirt from "../../assests/facts/shirt.png";
import jeans from "../../assests/facts/jeans.png";
import fabric from "../../assests/facts/fabric.png";
import Fade from "react-reveal/Fade";
export default function FactSection() {
	const facts = [
		{
			title: "Yarn Production",
			image: yarn,
			value: "33,000 tons",
			message: `Yarn / year`,
		},
		{
			title: "Fabric Production",
			image: fabric,
			value: "28,800 tons",
			message: `Cotton fabric / year`,
		},
		{
			title: "Knitted Garments",
			image: shirt,
			value: "20,000 Pieces",
			message: `Of knitted garments / day`,
		},
		{
			title: "Woven Garments ",
			image: jeans,
			value: "16,000",
			message: `Pieces of woven garments / day`,
		},
		{
			title: "Wind Energy Usage",
			image: windmill,
			value: "42.33 MW",
			message: `Our power is wind power`,
		},
		{
			title: "Employees",
			image: rating,
			value: "7,500",
			message: `Total number of happy employees`,
		},
	];
	return (
		<div className=" w-full">
			<h1 className="lg:text-7xl text-3xl text-gray-700 font-semibold my-12 text-center">
				FACTS
			</h1>
			<div className="bg-[#fb923c]  w-full">
				<Curvy direction="DOWN" color="#fff" />
				<div className="flex flex-wrap justify-between lg:px-20 px-16 bg-[#fb923c]  w-full">
					{facts.slice(0, 3).map((fact, idx) => (
						<Fade duration={1500} left key={idx}>
							<div
								className={`max-w-[16rem] lg:${
									idx === 1 || idx === 4 ? "-mt-16" : ""
								}  lg:mx-16 mx-6 flex flex-col justify-center items-center`}
							>
								<Image
									src={fact.image}
									className="lg:w-52 sm:w-44 my-8 hover:scale-[1.1]	] duration-200 ease-in-out"
									alt={fact.title + " image"}
								/>
								<h1 className="lg:text-4xl text-3xl lg:mb-4 mb-2 text-center font-medium ">
									{fact.value}
								</h1>
								<h1 className="text-xl text-center text-white">
									{fact.message}
								</h1>
							</div>
						</Fade>
					))}
				</div>
				<Curvy direction={"up"} color="#fff" />
			</div>
		</div>
	);
}
