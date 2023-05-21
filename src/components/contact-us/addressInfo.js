import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddressInfo = (props) => {
	return (
		<div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
			{/* <div className="w-86 h-64 flex justify-center items-center"> */}
			<Image
				src={props.image}
				alt="plant"
				className="h-64 w-96 object-cover object-center"
			/>
			{/* </div> */}
			<div className="p-5">
				<p className="text-2xl pb-2 border-b-2 border-accent mb-5 text-gray-700">
					{props.name}
				</p>
				<p className="text-medium mb-5 text-gray-700">{props.address}</p>
				<Link href={props.map || ""}>
					<button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
						Locate us
					</button>
				</Link>
			</div>
		</div>
	);
};

export default AddressInfo;
