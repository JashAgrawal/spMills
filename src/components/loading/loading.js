import React from "react";
import Image from "next/image";
import sew from "@/assests/sew.gif";
const Loading = () => {
  return (
    <div className="flex absolute left-0 top-0 flex-col space-y-12 items-center bg-white justify-center text-center w-screen h-screen z-2000">
      <Image src={sew} className="h-64 w-96 rounded-md" alt="code" />
      <h1 className="text-white text-xl">Loading !!!!</h1>
    </div>
  );
};
export default Loading;
