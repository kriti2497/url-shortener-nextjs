import Button from "./common/button";
import IllustrationWorkingImg from "../images/illustration-working.svg";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="order-2 flex items-center lg:items-start text-center lg:text-left flex-col gap-2 lg:order-1 px-5 py-12 lg:p-16 justify-center">
        <div className="text-5xl leading-[3.5rem] lg:text-6xl font-bold text-shortlyVeryDarkViolet lg:leading-[4rem]">
          More than just shorter links
        </div>
        <div className="text-shortlyGrayishViolet mb-6">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </div>
        <Button textValue="Get Started" styling="w-36 h-11" />
      </div>
      <div
        className="lg:hidden"
        style={{
          backgroundImage: `url(${IllustrationWorkingImg.src})`,
          width: "100%",
          minHeight: "310px", // 510px
          backgroundPositionX: "70px", //220px
          backgroundRepeat: "no-repeat",
          backgroundSize: "110%",
        }}
      ></div>
      <div
        className="hidden lg:block  lg:order-2"
        style={{
          backgroundImage: `url(${IllustrationWorkingImg.src})`,
          width: "100%",
          backgroundPositionX: "50px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "120%",
          minHeight: "75vh",
        }}
      ></div>
    </div>
  );
};

export default Hero;
