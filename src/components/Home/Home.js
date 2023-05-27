import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../../assests/bg1.jpeg";
import ImageBanner from "./ImageBanner";
import CategorySection from "./CategorySection";
import FactSection from "./FactSection";
import VideoBanner from "./videoPlayer";
import constants from "@/utils/constants";

export default function HomeComp() {
  const bannerImages = [bg1];
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(typeof window !== "undefined" ? true : false);
  }, []);

  return (
    <>
      {/* <Carousel showArrows={true} showStatus={false} showThumbs={false}> */}
      {/* {bannerImages.map((bannerImage) => (
        <ImageBanner
          height="87vh"
          key={React.useId}
          imageSrc={bannerImage}
          messageText={"Leading Textile Mill Since 1962"}
          buttonText={"Contact us"}
        />
      ))} */}
      {showVideo && (
        <div className="w-full  items-center flex">
          <video
            src="/intro.mp4"
            className=" h-[40vh] md:h-[88vh] w-full object-fill"
            autoPlay
            muted
            controls={false}
          />
        </div>
      )}
      {/* <source src={require("@/assests/intro.mp4")} type="video/mp4" /> */}
      {/* </Carousel> */}
      <FactSection />
      <CategorySection />
      {/* <VideoBanner /> */}
    </>
  );
}
