import Button from "./common/button";
import React from "react";

const BoostLinks = () => {
  return (
    <div
      className="bg-shortlyDarkViolet py-28 px-8 lg:px-24 lg:py-16 bg-boost-mobile lg:bg-boost-desktop "
      style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <p className="text-white text-2xl font-extrabold lg:text-4xl text-center mb-4">
        Boost your links today!
      </p>
      <div className="text-center">
        <Button textValue="Get Started" styling="w-36 h-11" />
      </div>
    </div>
  );
};

export default BoostLinks;
