import Curvy from "@/assests/curvy";
import Image from "next/image";
import React from "react";
import yarn from "../../assests/facts/yarn.png";
import shirt from "../../assests/facts/shirt.png";
import fabric from "../../assests/facts/fabric.png";
import Fade from "react-reveal/Fade";
import { Slide } from "react-reveal";
export default function FactSection() {
  const facts = [
    {
      title: "Yarn Production",
      image: yarn,
      value: "700 tons",
      message: `Yarn / year`,
    },
    {
      title: "Fabric Production",
      image: fabric,
      value: "60,00,000 meters",
      message: `Fabric / year`,
    },
    // {
    //   title: "Knitted Garments",
    //   image: shirt,
    //   value: "32,00,000 Pieces",
    //   message: `Of knitted garments / day`,
    // },
  ];
  return (
    <div className=" w-full">
      <h1 className="lg:text-7xl text-3xl text-gray-700 font-semibold my-12 text-center">
        FACTS
      </h1>
      <div className="bg-[#fb923c]  w-full">
        <Curvy direction="DOWN" color="#fff" />
        <div className="flex flex-wrap justify-evenly lg:px-20 px-16 bg-[#fb923c]  w-full">
          {facts.slice(0, 3).map((fact, idx) => (
            <Slide duration={1500} left={idx == 0} right={idx == 1} key={idx}>
              <div
                className={`max-w-[16rem] lg:${
                  idx === 1 || idx === 4 ? "-mt-16" : ""
                }  lg:mx-16 mx-6 flex flex-col justify-center items-center`}
              >
                <Image
                  src={fact.image}
                  className="lg:w-52 sm:w-44 my-8 hover:scale-[1.1]	] duration-200 ease-in-out"
                  quality={75}
                  alt={fact.title + " image"}
                />
                <h1 className="lg:text-4xl text-3xl lg:mb-4 mb-2 text-center font-medium ">
                  {fact.value}
                </h1>
                <h1 className="text-xl text-center text-white">
                  {fact.message}
                </h1>
              </div>
            </Slide>
          ))}
        </div>
        <Curvy direction={"up"} color="#fff" />
      </div>
    </div>
  );
}
