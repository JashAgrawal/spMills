import Image from "next/image";
import React from "react";
import constants from "@/utils/constants";
import Curvy from "@/assests/curvy";
import FotterSection from "./FotterSection";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <Curvy direction="up" color={"#fb923c"} />
      <footer className="relative bg-white text-black dark:bg-accent">
        <div className="mx-auto w-full">
          <div className="p-4 py-4 lg:py-6">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <Link
                  href="/"
                  className="flex max-lg:justify-center max-lg:w-full items-center"
                >
                  <Image
                    src={constants.logo}
                    className="h-8 w-8 mr-3 rounded-full"
                    alt="SP Silk Mills Logo"
                  />
                  <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
                    {constants.name}
                  </span>
                </Link>
              </div>
              <div className="flex w-full max-md:justify-evenly justify-end lg:pr-20 space-x-16 max-lg:space-x-8">
                {/* <FotterSection
									name="Resources"
									items={[
										{ title: constants.name, path: constants.link },
										{ title: "Freepik", path: "https://www.freepik.com/" },
									]}
								/> */}
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
                  name="Quick Links"
                  items={[
                    { title: "Categories", path: `/categories` },
                    {
                      title: "About us",
                      path: `/about-us`,
                    },
                  ]}
                />
                {/* <FotterSection
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
								/> */}
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center md:justify-between">
              <span className="text-md text-gray-500 sm:text-center dark:text-black">
                © 2023{" "}
                <a
                  href="https://suryaprakashsilkmills.com/"
                  className="hover:underline"
                >
                  SP Silk Mills™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex flex-col mt-4 pr-8 space-x-8 sm:justify-center sm:mt-0"></div>
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
