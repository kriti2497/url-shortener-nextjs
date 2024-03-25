import React, { useRef, useState } from "react";

import { LinkCreated } from "../MainUrlDiv";

const LinkOption: React.FC<{ linkValues: LinkCreated }> = ({ linkValues }) => {
  const { originalLink, newLink } = linkValues;
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(newLink);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } catch (err) {
      setIsCopied(false);
    }
  };
  return (
    <div className="bg-white lg:flex justify-between items-center lg:px-5 py-3 rounded">
      <div className="px-5  py-2 lg:p-0 text-shortlyVeryDarkViolet overflow-ellipsis whitespace-nowrap overflow-hidden">
        {originalLink}
      </div>
      <hr className="bg-shortlyGray h-[2px] lg:hidden" />
      <div className="px-5 pt-2 lg:p-0 lg:flex items-center gap-4">
        <p className="text-shortlyCyan pb-2 lg:p-0">{newLink}</p>
        <button
          className={`${
            isCopied ? "bg-shortlyDarkViolet" : "bg-shortlyCyan"
          } text-white rounded px-3 py-2 text-sm`}
          onClick={() => copyToClipboard()}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default LinkOption;
