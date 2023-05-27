import Image from "next/image";
import React from "react";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Roll } from "react-reveal";
import Link from "next/link";

export default function Card({ image, title, buttonText }) {
  const color = "#fb923c";
  return (
    <div className="relative border shadow-lg shadow-gray-600/80 border-white [&>img]:hover:scale-110  lg:w-[30%] w-[45%]  lg:my-8 my-2 rounded-xl lg:h-[30%] h-[40%] flex overflow-hidden">
      <div className="bg-black">
        {/* <Flip left> */}
        <Image
          quality={20}
          src={image}
          className="w-full h-full duration-500 opacity-80 ease-in-out object-contain"
          alt={`${title} Category image`}
        />
        {/* </Flip> */}
      </div>
      <Roll right>
        <div className="absolute pb-24 flex w-full h-full flex-col top-0 left-0 justify-end items-center">
          <h1
            // style={{ textShadow: "2px 5px #000" }}
            className="lg:text-4xl drop-shadow-xl shadow-black text-sm mb-4 font-semibold text-white"
          >
            {title}
          </h1>
          <Link href={`/categories/#${title}`}>
            <button className="relative inline-block lg:text-xl text-xs group">
              <span
                className={`relative z-10 block lg:px-5 lg:py-3 px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-500 ease-out border-2 border-[${color}] rounded-lg group-hover:text-white`}
              >
                <span className="absolute inset-0 w-full h-full lg:px-5 lg:py-3 sm:px-3 sm:py-2 rounded-lg bg-gray-50"></span>
                <span
                  className={`absolute left-0 w-48 h-48 -ml-2 transition-all duration-500 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[${color}] group-hover:-rotate-180 ease`}
                ></span>
                <span className="relative flex">
                  <div className="flex w-full items-center justify-evenly">
                    <p>View more</p>
                    <AiOutlineArrowRight className="pt-1 pl-1" />
                  </div>
                </span>
              </span>
              <span
                className={`absolute bottom-0 right-0 w-full lg:h-12 h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[${color}] rounded-lg group-hover:mb-0 group-hover:mr-0`}
                data-rounded="rounded-lg"
              ></span>
            </button>
          </Link>
        </div>
      </Roll>
    </div>
  );
}
