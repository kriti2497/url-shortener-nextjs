import AnalyticsCard from "./common/AnalyticsCard";
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";
import Image from "next/image";
import React from "react";
export interface IAnalytics {
  img: React.ReactNode;
  title: string;
  details: string;
}
const Statistics = () => {
  const analyticsArr: IAnalytics[] = [
    {
      img: <Image src={BrandRecognition} alt="brand" />,
      title: "Brand Recognition",
      details:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      img: <Image src={DetailedRecords} alt="records" />,
      title: "Detailed Records",
      details:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps Inform better decisions.",
    },
    {
      img: <Image src={FullyCustomizable} alt="custom" />,
      title: "Fully Customizable",
      details:
        "Improve brand awareness and content aiscoveraibility through customizable links, supercnarging audience engagement.",
    },
  ];
  return (
    <div className="px-9 pt-12 pb-32 pt lg:px-12 lg:pt-20 lg:pb-40 bg-shortlyLightestGray">
      <div className="mb-24">
        <div className="text-center font-bold text-[28px] lg:text-3xl mb-2 text-shortlyVeryDarkViolet">
          Advanced Statistics
        </div>
        <p className="text-shortlyGrayishViolet text-center text-sm lg:w-[36%] lg:mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="relative">
        <hr className="h-2 rotate-90 lg:rotate-180 bg-shortlyCyan absolute top-2/4 w-full border-0" />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 [&>*:nth-child(2)]:top-7 [&>*:nth-child(3)]:top-14">
          {analyticsArr.map((analytic: IAnalytics) => (
            <AnalyticsCard value={analytic} key={analytic.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
