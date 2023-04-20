import React from "react";

export default function Button(props) {
	const color = props.color || "#fb923c";
	return (
		<button
			class="relative inline-block lg:text-xl text-md group"
			onClick={() => {
				props.onClick ? props.onClick() : "";
			}}
		>
			<span
				class={`relative z-10 block lg:px-5 lg:py-3 px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-500 ease-out border-2 border-[${color}] rounded-lg group-hover:text-white`}
			>
				<span class="absolute inset-0 w-full h-full lg:px-5 lg:py-3 sm:px-3 sm:py-2 rounded-lg bg-gray-50"></span>
				<span
					class={`absolute left-0 w-48 h-48 -ml-2 transition-all duration-500 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[${color}] group-hover:-rotate-180 ease`}
				></span>
				<span class="relative flex">{props.text}</span>
			</span>
			<span
				class={`absolute bottom-0 right-0 w-full lg:h-12 h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[${color}] rounded-lg group-hover:mb-0 group-hover:mr-0`}
				data-rounded="rounded-lg"
			></span>
		</button>
	);
}
