import FacebookIcon from "../images/icon-facebook.svg";
import FacebookIconHover from "../images/icon-facebook-hover.svg";
import FooterLinks from "./common/FooterLinks";
import Image from "next/image";
import InstagramIcon from "../images/icon-instagram.svg";
import InstagramIconHover from "../images/icon-instagram-hover.svg";
import Logo from "../images/logowhite.svg";
import PinterestIcon from "../images/icon-pinterest.svg";
import PinterestIconHover from "../images/icon-pinterest-hover.svg";
import React from "react";
import Socials from "./Socials";
import TwitterIcon from "../images/icon-twitter.svg";
import TwitterIconHover from "../images/icon-twitter-hover.svg";

const Footer = () => {
  const features = ["Link Shortening", "Branded Links", "Analytics"];
  const resources = ["Blog", "Developers", "Support"];
  const company = ["About", "Our Team", "Careers", "Contact"];
  const iconsArr = [
    {
      id: 1,
      icon: FacebookIcon,
      hoverIcon: FacebookIconHover,
    },
    {
      id: 2,
      icon: PinterestIcon,
      hoverIcon: PinterestIconHover,
    },
    {
      id: 3,
      icon: TwitterIcon,
      hoverIcon: TwitterIconHover,
    },
    {
      id: 4,
      icon: InstagramIcon,
      hoverIcon: InstagramIconHover,
    },
  ];
  return (
    <div className="bg-shortlyVeryDarkViolet text-center lg:text-left px-24 py-14 lg:grid lg:grid-cols-[2fr_4fr]">
      <div className="mb-8 flex justify-center lg:justify-start lg:mb-0">
        <Image src={Logo} className="invert h-fit" alt="white-logo" />
      </div>
      <div className="flex gap-10 lg:gap-20 flex-col lg:flex-row">
        <FooterLinks title="Features" arr={features} />
        <FooterLinks title="Resources" arr={resources} />
        <FooterLinks title="Company" arr={company} />
        <div className="flex gap-5 lg:gap-3 justify-center">
          {iconsArr.map((each: any) => (
            <Socials social={each} key={each.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
