import React from "react";

const Btn = ({ text, type, className, ...rest }) => {
  return (
    <button
      type={type}
      className={
        "rounded-full px-4 py-2  hover:bg-gray-300 focus:outline-none " +
        className
      }
      {...rest}
    >
      {text}
    </button>
  );
};

export default Btn;
