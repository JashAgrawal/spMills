import Image from "next/image";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import constants from "@/utils/constants";

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false);
	const menu = [
		{ id: 1, text: "Home", to: "/" },
		{ id: 2, text: "About Us", to: "/about-us" },
		{ id: 3, text: "Categories", to: "/categories" },
		// { id: 3, text: "Products", to: "/products" },
		{ id: 4, text: "Contact Us", to: "/contact-us" },
	];

	//handle click
	const handleClick = () => {
		setMobileNav(!mobileNav);
	};
	return (
		<>
			{/* desktop nav  */}
			<nav className="flex border border-b-accent z-20 sticky top-0 items-center lg:px-12 px-6 bg-white border-gray-300 py-3">
				{/* brand  */}
				{/* <div> */}
				<Link
					href="/"
					className="flex items-center lg:space-x-8 space-x-4 flex-grow"
					onClick={() => setMobileNav(false)}
				>
					{/* <div className="bg-black rounded-3xl"> */}
					<Image src={constants.logo} alt="logo" className="w-24 h-16" />
					{/* </div> */}

					<h1 className="lg:text-4xl text-md font-Fatface text-gray-900 select-none">
						{constants.name}
					</h1>
				</Link>
				{/* </div> */}
				{/* menu s */}

				<div className="hidden md:flex lg:flex space-x-3 mr-6">
					<ul className="flex items-center space-x-8">
						{menu.map((item) => (
							<li key={item.id}>
								<Link href={item.to} className="text-xl">
									<p className="relative w-max one">
										<span>{item.text}</span>
										<span className="absolute duration-300 -bottom-1 left-0 w-0 transition-all h-1 bg-yellow-400"></span>
									</p>
								</Link>
								{/* {item.text} */}
							</li>
						))}
					</ul>
				</div>

				{/* menu icon  */}
				<div className="block md:hidden lg:hidden">
					<HiMenuAlt3
						className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110"
						onClick={handleClick}
					/>
				</div>
			</nav>

			{/* mobile nav  */}
			{mobileNav && (
				<Fade>
					<nav className="fixed z-20 w-[96%] bg-white shadow-lg mx-[2%] mt-2 rounded-lg border border-gray-300 p-4 block md:hidden lg:hidden">
						<ul>
							{menu.map((item) => (
								<Link
									key={item.id}
									href={item.to}
									className="text-gray-600 text-lg"
									onClick={() => setMobileNav(false)}
								>
									<li className="py-2 px-3 w-full border-b-2 border-accent hover:bg-gray-200 transition duration-300 cursor-default">
										{item.text}
									</li>
								</Link>
							))}
						</ul>
					</nav>
				</Fade>
			)}
		</>
	);
};

export default Navbar;
