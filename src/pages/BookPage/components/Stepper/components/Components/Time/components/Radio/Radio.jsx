import React from "react";
import { Error } from "../../../../../../../../../components";

const Radio = ({ name, options, errorMessage, onChange, checked }) => {
  return (
    <>
      {options.map((option, index) => (
        <div
          className="p-2 border border-borderColor border-2 rounded-md"
          key={index}
        >
          <label className="flex items-center justify-center text-textColor">
            <input
              type="radio"
              name={name}
              value={option}
              checked={checked === option}
              onChange={onChange}
            />
            {option}
          </label>
        </div>
      ))}
      {errorMessage && (
        <div className="block">
          {" "}
          <Error msg={errorMessage} />
        </div>
      )}
    </>
  );
};

export default Radio;
