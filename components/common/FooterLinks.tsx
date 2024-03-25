import React from "react";

const FooterLinks: React.FC<{ title: string; arr: string[] }> = ({
  title,
  arr,
}) => {
  return (
    <div className="text-white">
      <p className="font-semibold text-lg mb-2">{title}</p>
      <div className="flex flex-col gap-2">
        {arr.map((eachFeature: string) => (
          <div
            key={eachFeature}
            className="font-light text-sm text-shortlyGray hover:text-shortlyCyan cursor-pointer"
          >
            {eachFeature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
