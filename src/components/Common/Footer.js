import Image from "next/image";
import React from "react";
import constants from "@/utils/constants";
import Curvy from "@/assests/curvy";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import FotterSection from "./FotterSection";
export default function Footer() {
	return (
		<div>
			<Curvy direction="up" color={"#fb923c"} />
			<footer class="relative bg-white text-black dark:bg-accent">
				<div class="mx-auto w-full">
					<div className="p-4 py-4 lg:py-6">
						<div class="md:flex md:justify-between">
							<div class="mb-6 md:mb-0">
								<a
									href="https://SP Silk Mills.com/"
									class="flex max-lg:justify-center max-lg:w-full items-center"
								>
									<Image
										src={constants.logo}
										class="h-8 w-8 mr-3 rounded-full"
										alt="SP Silk Mills Logo"
									/>
									<span class="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
										{constants.name}
									</span>
								</a>
							</div>
							<div class="flex lg:pr-20 space-x-16 max-lg:space-x-8">
								<FotterSection
									name="Resources"
									items={[
										{ title: constants.name, path: constants.link },
										{ title: "Freepik", path: "https://www.freepik.com/" },
									]}
								/>
								<FotterSection
									name="Contact us"
									items={[
										{ title: "Mobile", path: `tel:+91${constants.mobile}` },
										{
											title: "Email",
											path: `https://mail.google.com/mail/?view=cm&fs=1&to=${constants.email}`,
										},
									]}
								/>
								<FotterSection
									name="Legal"
									items={[
										{
											title: "Privacy Policy",
											path: "https://www.freeprivacypolicy.com/live/1ae70b96-8a12-4f2e-9b33-9e22b664aa7f",
										},
										{
											title: `Terms & Conditions`,
											path: "https://www.freeprivacypolicy.com/live/1ae70b96-8a12-4f2e-9b33-9e22b664aa7f",
										},
									]}
								/>
							</div>
						</div>
						<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
						<div class="sm:flex sm:items-center sm:justify-between">
							<span class="text-md text-gray-500 sm:text-center dark:text-black">
								© 2023{" "}
								<a href="https://SP Silk Mills.com/" class="hover:underline">
									SP Silk Mills™
								</a>
								. All Rights Reserved.
							</span>
							<div class="flex mt-4 space-x-8 sm:justify-center sm:mt-0">
								<a
									href="#"
									class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								>
									<BsFacebook />
									<span class="sr-only">Facebook page</span>
								</a>
								<a
									href="#"
									class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								>
									<BsInstagram />

									<span class="sr-only">Instagram page</span>
								</a>
								<a
									href="#"
									class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								>
									<BsTwitter />
									<span class="sr-only">Twitter page</span>
								</a>
								<a
									href="#"
									class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
								>
									<BsGithub />
									<span class="sr-only">GitHub account</span>
								</a>
							</div>
						</div>
					</div>
					<Curvy
						direction={"up"}
						color={"#000"}
						classes={"absoulte bottom-0 lg:-my-24 opacity-20 -z-10"}
					/>
				</div>
			</footer>
		</div>
	);
}
