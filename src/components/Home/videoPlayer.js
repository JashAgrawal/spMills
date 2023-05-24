import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

const VideoBanner = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      <div className="w-full max-md:py-6 mb-6 py-6 md:h-[110vh] flex flex-col justify-center items-center">
        <h1 className="md:text-7xl text-3xl w-full text-center text-gray-700 font-semibold md:my-12 mb-6">
          More About Us
        </h1>
        {hasWindow && (
          <ReactPlayer
            playing
            controls={false}
            loop
            width="90%"
            height="100%"
            url="https://youtu.be/lxHJfVjj5Zc"
            // light={true}
            muted
          />
        )}
      </div>
    </>
  );
};

export default VideoBanner;
