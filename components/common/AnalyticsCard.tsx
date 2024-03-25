import { IAnalytics } from "../Statistics";
import React from "react";

const AnalyticsCard: React.FC<{ value: IAnalytics }> = ({ value }) => {
  const { img, title, details } = value;
  return (
    <div className="bg-white px-8 pb-10 pt-16 flex flex-col gap-5 rounded-md relative flex-1">
      <span className="p-5 bg-shortlyDarkViolet w-fit rounded-full absolute -top-10 left-1/2 -translate-x-1/2">
        {img}
      </span>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-shortlyGrayishViolet text-sm">{details}</div>
    </div>
  );
};

export default AnalyticsCard;
