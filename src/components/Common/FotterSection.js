import constants from "@/utils/constants";
import React from "react";

export default function FotterSection(props) {
	return (
		<div>
			<h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
				{props.name}
			</h2>
			<ul className="text-gray-60 max-lg:text-xs dark:text-black font-medium">
				{props.items.map((item) => (
					<li key={React.useId} className="mb-4 max-lg:mb-2">
						<a href={item.path} className="hover:underline">
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
