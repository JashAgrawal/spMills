import React from "react";
// import handShake from "../assests/hd.jpg";
import bg from "@/assests/bg1.jpeg";
import MessageBanner from "@/components/Common/MessageBanner";
import FounderInfo from "@/components/about-us/FounderInfo";
import constants from "@/utils/constants";
export default function AboutUs() {
  return (
    <div>
      <MessageBanner image={bg} message="Leading Textile Mill Since 1962" />

      <h1
        style={{ textShadow: "2px 2px #fb923c" }}
        className="lg:text-7xl  text-3xl text-gray-700 font-semibold mt-16 text-center"
      >
        ABOUT US
      </h1>
      <div className="w-full text-center md:pb-16 lg:px-40 py-8 px-12 flex flex-col justify-center items-center lg:text-2xl text-sm tracking-wide leading-relaxed">
        <span className="text-accent w-full text-left font-medium text-xl lg:text-4xl">
          Shri Vaktavarmal Pokarchand Jain
        </span>
        At the age of 17 yrs used to sell onions and potatoes in Sewri, Mumbai
        to earn his bread and butter. Once visited Bhiwandi to meet his friend.
        Here, he was attracted to the textile industry which pulled him to shift
        here and learn about manufacturing of fabrics. He started this business
        with 6 powerlooms and a rented shed of 600 sqft and a capital of 10000
        Rupees in Bhiwandi.
        <br />
        <br />
        Currently Mr. Prakash Vaktavarmal Jain along with his sons are
        forwarding the dreams built by Mr. Vaktavarmal Pokarchand Jain and
        running this business with sincerity and dedication. At present, Surya
        Prakash Silk Mills owns a manufacturing unit of 28000 sqft and a monthly
        capacity of 500000 Mtrs per month.
        <br />
        <br />
        At present , Surya Prakash Silk Mills severs quality uniform products
        pan India. Till date we have severed thousands of customers across
        India.
        <br />
        <FounderInfo
          founderImg={constants.founderImg}
          founderName={constants.founderName}
          founderQuote={constants.founderQuote}
        />
      </div>
    </div>
  );
}
