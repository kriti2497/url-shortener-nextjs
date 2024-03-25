"use client";

import React, { useState } from "react";

import Image from "next/image";

const Socials: React.FC<{ social: any }> = ({ social }) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <Image
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="h-fit text-xl"
      src={onHover ? social.hoverIcon : social.icon}
      alt="img"
    />
  );
};

export default Socials;
