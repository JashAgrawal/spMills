import Image from "next/image";
import React from "react";
import Button from "./Button";
import handShake from "../../assests/hd.jpg";
export default function MessageBanner(props) {
  return (
    <div className="w-full">
      {props.title && (
        <h1 className="lg:text-7xl text-3xl text-center text-gray-700 font-semibold my-12">
          {props.title}
        </h1>
      )}
      <div
        className={`relative flex max-w-[${props.width || "100vw"}]  max-h-[${
          props.height || "70vh"
        }] justify-center  overflow-hidden`}
      >
        <Image
          quality={60}
          src={props.image || handShake}
          className={`opacity-90 lg:h-[${
            props.height || 70
          }vh] sm:h-[50vh] w-full  object-center object-cover`}
          alt="sa"
        />
        <div className="flex w-full h-full overflow-hidden space-y-8 flex-col items-center justify-center absolute top-0 left-0">
          <h1
            style={{ textShadow: "2px 5px 5px #000" }}
            className="md:text-5xl text-2xl  text-white font-bold"
          >
            {props.message}
          </h1>

          {props.buttonText && <Button text={props.buttonText} />}
        </div>
      </div>
    </div>
  );
}
