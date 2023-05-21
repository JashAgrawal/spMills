import Curvy from "@/assests/curvy";
import LeftSection from "@/components/contact-us/LeftSection";
import constants, { address } from "@/utils/constants";
import React, { useState } from "react";
import { sendContactForm } from "../utils/api";
import AddressInfo from "@/components/contact-us/addressInfo";
import { useRouter } from "next/router";
export default function ContactUs() {
	const router = useRouter();
	const currentColor = "#fb923c";
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState(router.query.message || "");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await sendContactForm({ name, email, message });
	};
	return (
		<div>
			<div className="bg-accent text-gray-100 px-8 py-4">
				<div className="max-w-screen-xl mt-4 mb-2 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
					<LeftSection />

					<div className="">
						<div>
							<span className="uppercase text-sm text-gray-600 font-bold">
								Full Name
							</span>
							<input
								required
								className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="text"
								placeholder="Your Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mt-8">
							<span className="uppercase text-sm text-gray-600 font-bold">
								Email
							</span>
							<input
								required
								className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								type="email"
								placeholder="Your Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mt-8">
							<span className="uppercase text-sm text-gray-600 font-bold">
								Message
							</span>
							<textarea
								required
								className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
								value={message}
								placeholder="Whatever do you wanna talk about ......."
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
						<div className="mt-8">
							<button
								type="submit"
								disabled={!name || !email || !message}
								onClick={(e) => handleSubmit(e)}
								className="uppercase text-sm font-bold tracking-wide bg-accent text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
							>
								Send Us a Message
							</button>
						</div>
					</div>
				</div>
			</div>
			<Curvy direction={"down"} color={currentColor} />
			<div className="flex max-md:flex-col max-md:space-y-4 max-md:px-4 justify-evenly py-20 md:py-24 items-center">
				{address.map((add, idx) => (
					<AddressInfo
						name={add.name}
						address={add.address}
						image={add.image}
						map={add.map}
						key={idx}
					/>
				))}
			</div>
		</div>
	);
}
