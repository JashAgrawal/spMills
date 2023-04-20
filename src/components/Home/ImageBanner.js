import Image from "next/image";
import React from "react";
import Button from "../Common/Button";

export default function ImageBanner(props) {
	return (
		<div>
			<div className="relative">
				<Image
					src={props.imageSrc}
					className={`lg:h-[87vh] sm:h-[78vh] opacity-80`}
					alt="sa"
				/>
				<div className="flex w-full h-full overflow-hidden lg:space-y-8 space-y-4 flex-col items-center justify-center absolute top-0 left-0">
					{props.messageText && (
						<h1 className="lg:text-4xl text-2xl font-semibold ">
							{props.messageText}
						</h1>
					)}
					{props.buttonText && <Button text="Contact Us" />}
				</div>
			</div>
		</div>
	);
}
