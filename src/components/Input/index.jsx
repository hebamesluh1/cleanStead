import React from "react";
import Error from "../Error";

const Input = ({
  area,
  type,
  placeholder,
  label,
  name,
  onChange,
  value,
  onBlur,
  error,
  errorMessage
}) => {
  return (
    <div className="w-full pt-5">
      <label htmlFor="">{label}</label>
      {area ? (
        <textarea
          className={`w-full border-2 border-solid ${
            error ? "border-red-500" : "border-borderColor"
          } rounded-lg resize-none p-2`}
          rows={4}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        ></textarea>
      ) : (
        <input
          className={`w-full border-2 border-solid ${
            error ? "border-red-500" : "border-borderColor"
          } rounded-lg p-2`}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      )}
      {errorMessage && <Error msg={errorMessage} />}
    </div>
  );
};

export default Input;
