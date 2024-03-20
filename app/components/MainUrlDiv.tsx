"use client";

import React, { useState } from "react";

import LinkOption from "./common/LinkOption";

const MainUrlDiv = () => {
  const [linkValue, setLinkValue] = useState("");
  return (
    <div className=" bg-shortlyLightestGray">
      <div className="relative flex flex-col gap-4 mx-auto py-10 w-[80%]">
        <div className="bg-shortlyDarkViolet rounded-lg flex flex-col lg:flex-row bg-shorten-desktop h-full px-6 py-5 lg:py-9 lg:px-12 gap-4">
          <input
            type="text"
            placeholder="Shoten a link here"
            className="w-full h-12 px-4 py-1 rounded-[4px]"
            value={linkValue}
            onChange={(e: any) => {
              if (e.target.value.trim()) setLinkValue(e.target.value);
            }}
          />
          <button className="bg-shortlyCyan text-white w-full lg:w-40 rounded-lg p-3">
            Shorten it!
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <LinkOption />
          <LinkOption />
          <LinkOption />
        </div>
      </div>
    </div>
  );
};

export default MainUrlDiv;
