import React from "react";

const Error = ({ msg ,className}) => {
  return <div className={"text-red-500 "+className}>{msg}</div>;
};

export default Error;
