import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../../assests/bg1.jpeg";
import ImageBanner from "./ImageBanner";

import Curvy from "@/assests/curvy";
import Card from "../Common/Card";
import Button from "../Common/Button";
import CategorySection from "./CategorySection";
import FactSection from "./FactSection";
import MessageBanner from "../Common/MessageBanner";
export default function HomeComp() {
	const bannerImages = [bg1, bg1, bg1, bg1];

	return (
		<>
			<div>
				<Carousel showArrows={true} showStatus={false} showThumbs={false}>
					{bannerImages.map((bannerImage) => (
						<ImageBanner
							height="87vh"
							key={React.useId}
							imageSrc={bannerImage}
							messageText={"Leading Textile Mill since 1998"}
							buttonText={"Contact us"}
						/>
					))}
				</Carousel>
			</div>
			<div className="flex max-w-full flex-wrap flex-col justify-center items-center">
				<FactSection />

				<CategorySection />

				<MessageBanner title="Agents/Dealers" message="message" />
			</div>
		</>
	);
}
