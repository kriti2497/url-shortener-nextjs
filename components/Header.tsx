"use client";

import React, { useState } from "react";

import Button from "./common/button";
import Image from "next/image";
import logo from "../public/images/logo.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {/* <div
        className={
          openMenu ? "fixed top-0 left-0 right-0 bottom-0 blur" : "invisible"
        }
      ></div> */}
      <div className="flex justify-between py-3 px-8 lg:px-16 lg:py-5 items-center relative z-10">
        <div className="flex gap-6 items-center">
          <Image src={logo} alt="logo" />
          <div className="gap-4 items-center hidden lg:flex">
            <span className="text-shortlyGrayishViolet text-base font-semibold hover:text-black cursor-pointer">
              Features
            </span>
            <span className="text-shortlyGrayishViolet text-base font-semibold hover:text-black cursor-pointer">
              Pricing
            </span>
            <span className="text-shortlyGrayishViolet text-base font-semibold hover:text-black cursor-pointer">
              Resources
            </span>
          </div>
        </div>
        <div className="gap-6 items-center hidden lg:flex">
          <span className="text-shortlyGrayishViolet text-base font-semibold hover:text-black cursor-pointer">
            Login
          </span>
          <Button textValue="Sign Up" />
        </div>
        <div className="lg:hidden">
          <i
            className="fa-solid fa-bars text-2xl text-shortlyGrayishViolet"
            aria-hidden
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      </div>
      <div
        className={
          openMenu
            ? "flex flex-col gap-5 bg-shortlyDarkViolet my-1 p-5 rounded-lg absolute w-[calc(100%_-_60px)]  left-[50%] -translate-x-1/2 mx-auto"
            : "hidden"
        }
      >
        <div className="text-white text-base font-semibold hover:text-shortlyGray cursor-pointer text-center p-2">
          Features
        </div>
        <div className="text-white text-base font-semibold hover:text-shortlyGray cursor-pointer text-center p-2">
          Pricing
        </div>
        <div className="text-white text-base font-semibold hover:text-shortlyGray cursor-pointer text-center p-2">
          Resources
        </div>
        <hr />
        <div className="text-white text-base font-semibold hover:text-shortlyGray cursor-pointer text-center p-2">
          Login
        </div>
        <Button textValue="Sign Up" styling="py-3" />
      </div>
    </>
  );
};

export default Header;
