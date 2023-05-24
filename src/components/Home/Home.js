import React from "react";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../../assests/bg1.jpeg";
import ImageBanner from "./ImageBanner";
import CategorySection from "./CategorySection";
import FactSection from "./FactSection";
import VideoBanner from "./videoPlayer";
export default function HomeComp() {
  const bannerImages = [bg1];

  return (
    <>
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        {bannerImages.map((bannerImage) => (
          <ImageBanner
            height="87vh"
            key={React.useId}
            imageSrc={bannerImage}
            messageText={"Leading Textile Mill Since 1962"}
            buttonText={"Contact us"}
          />
        ))}
      </Carousel>
      {/* <div className="flex max-w-full flex-wrap flex-col justify-center items-center"> */}
      <FactSection />
      <CategorySection />
      <VideoBanner />
      {/* </div> */}
    </>
  );
}
