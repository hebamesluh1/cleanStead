import React from "react";

const Btn = ({ text, type, className, ...rest }) => {
  return (
    <button
      type={type}
      className={
        "relative rounded-full bg-btnColor px-4 py-2 text-white hover:bg-gray-300 focus:outline-none " +
        className
      }
      {...rest}
    >
      {text}
    </button>
  );
};

export default Btn;
