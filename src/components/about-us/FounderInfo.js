import Image from "next/image";
import React from "react";

const FounderInfo = (props) => {
  return (
    <div className="w-full bg-gray-900 mt-24  rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full lg:w-1/5 bg-gray-400 border md:w-2/5 h-80">
        <Image
          className="object-center object-fill w-full h-full"
          src={props.founderImg}
          alt="photo"
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
        <p className="text-xl text-accent font-bold">{props.founderName}</p>
        <p className="text-base text-gray-400 font-normal">Managing Director</p>
        <p className="text-2xl md:pt-12 pt-6 leading-relaxed text-white font-normal">
          {'"'}
          <span className="px-2">{props.founderQuote}</span>
          {'"'}
        </p>
      </div>
    </div>
  );
};

export default FounderInfo;
