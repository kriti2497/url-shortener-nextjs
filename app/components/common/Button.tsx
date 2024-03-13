import React from "react";

const Button: React.FC<{ styling?: string; textValue: string }> = ({
  styling,
  textValue,
}) => {
  return (
    <button
      className={`text-white bg-shortlyCyan rounded-3xl px-4 py-1 text-base font-semibold ${
        styling ?? ""
      }`}
    >
      {textValue}
    </button>
  );
};

export default Button;
