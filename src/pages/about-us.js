import Button from "@/components/Common/Button";
import Image from "next/image";
import React from "react";
import handShake from "../assests/hd.jpg";
import MessageBanner from "@/components/Common/MessageBanner";
export default function AboutUs() {
	return (
		<div>
			<MessageBanner message="About Us" />
			<div className="w-full text-center lg:p-24 lg:px-40 py-8 px-12 lg:text-2xl text-sm tracking-wide leading-relaxed">
				<span className="text-accent w-full text-left font-medium text-xl lg:text-4xl">
					Surya Prakash Silk Mills
				</span>{" "}
				is a textile company that stands out for its exceptional quality uniform
				fabrics. With a rich history dating back several decades, the company
				has been a leading provider of high-quality products to customers across
				India. Surya Prakash Silk Mills has a wide range of uniform products to
				suit every need. Whether you{"'"}re looking for traditional designs or
				contemporary styles, you{"'"}re sure to find something that catches your
				eye.
				<br />
				<br /> One of the key features of Surya Prakash Silk Mills is its
				commitment to quality. Every product is made using the finest quality
				yarns, ensuring that customers receive only the best. The company also
				employs skilled artisans who use traditional techniques to create
				beautiful, intricate designs that are both unique and timeless. <br />
				<br />
				Another great aspect of Surya Prakash Silk Mills is its dedication to
				customer satisfaction. <br />
				The company places a high priority on ensuring that every customer is
				happy with their purchase, and goes above and beyond to provide
				excellent customer service. Whether you have a question about a product
				or need assistance with an order, the Surya Prakash Silk Mills team is
				always ready to help. <br />
				<br />
				Overall, Surya Prakash Silk Mills is a company that offers exceptional
				quality uniform products and outstanding customer service. With a
				commitment to tradition and a focus on innovation, this company is sure
				to continue to be a leader in the uniform textile industry for years to
				come.
			</div>
		</div>
	);
}
