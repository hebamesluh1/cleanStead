import React from "react";
import effect from "../../assets/images/header.svg";

const Title = ({ title }) => {
  return (
    <h1 className="flex items-center gap-3 text-custom-40 overflow-hidden">
      {title}
      <img src={effect} alt="effect" />
    </h1>
  );
};

export default Title;
