import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Slide } from "react-reveal";

const CategoryCard = (props) => {
  const { title, otherImages, image, details } = props.category;
  const [activeImg, setActiveImg] = useState(image);
  // const [h, setH] = useState(false);
  return (
    // <>

    <div
      // onMouseEnter={() => setH(!h)}
      id={`${title}`}
      className="group h-full group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-24 py-24 px-6 flex justify-center items-center"
    >
      <Link
        href={{
          pathname: "/contact-us",
          query: { message: `I want to Know More About ${title} Product` },
        }}
      >
        <Slide
          left={props.index % 2 == 0 ? true : false}
          right={props.index % 2 !== 0 ? true : false}
        >
          <Image
            // onMouseLeave={setH(!h)}
            src={activeImg}
            className=" h-full object-cover object-center transition duration-500"
            // src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
            alt="sofa-2"
          />
        </Slide>
      </Link>
      <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
        <div>
          <p
            style={{ textShadow: "2px 5px #000" }}
            className=" transition duration-500 text-2xl border-b-2 pb-2 border-accent leading-5 text-gray-600 dark:text-white"
          >
            {title}
          </p>
        </div>
        <div>
          <p className=" transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white"></p>
        </div>
      </div>
      <div className=" transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
        {otherImages.map((img, idx) => (
          <button
            onClick={() => setActiveImg(img)}
            key={idx}
            className="bg-white border lg:p-2 rounded-full focus:bg-gray-800 border-gray-600 p-1.5"
          ></button>
        ))}
      </div>
      <div className="flex flex-col bottom-8 left-8 space-y-4 absolute max-w-[60%]">
        <p className="md:text-xl text-sm text-gray-100">
          {details || "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed"}
        </p>
      </div>
    </div>
    // </>
  );
};

export default CategoryCard;
