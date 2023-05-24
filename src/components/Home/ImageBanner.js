import Image from "next/image";
import React from "react";
import Button from "../Common/Button";
import Link from "next/link";
import { Bounce, Zoom } from "react-reveal";

export default function ImageBanner(props) {
  return (
    <div>
      <div className="relative">
        <Image
          src={props.imageSrc}
          className={`lg:h-[87vh] sm:h-[78vh] opacity-80`}
          alt="sa"
        />
        <div className="flex w-full h-full overflow-hidden lg:space-y-8 space-y-4 flex-col items-center justify-center absolute top-0 left-0">
          {props.messageText && (
            <Bounce duration={1500} bottom>
              <h1
                style={{ textShadow: "2px 5px #000" }}
                className="lg:text-6xl text-white drop-shadow-xl shadow-black text-2xl font-semibold "
              >
                {props.messageText}
              </h1>
            </Bounce>
          )}
          <Link href="contact-us">
            {props.buttonText && (
              <Zoom duration={1500} bottom>
                {" "}
                <Button text="Contact Us" />
              </Zoom>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
