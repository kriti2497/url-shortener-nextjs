import React from "react";

const LinkOption = () => {
  return (
    <div className="bg-white lg:flex justify-between items-center lg:px-5 py-3 rounded">
      <div className="px-5  py-2 lg:p-0 text-shortlyVeryDarkViolet overflow-ellipsis whitespace-nowrap overflow-hidden">
        https://frontendmentor.io
      </div>
      <hr className="bg-shortlyGray h-[2px] lg:hidden" />
      <div className="px-5 pt-2 lg:p-0 lg:flex items-center gap-4">
        <p className="text-shortlyCyan pb-2 lg:p-0">https://rel.ink/jdgfYu</p>
        <button className="bg-shortlyCyan text-white w-full rounded px-3 py-2 text-sm">
          Copy
        </button>
      </div>
    </div>
  );
};

export default LinkOption;
