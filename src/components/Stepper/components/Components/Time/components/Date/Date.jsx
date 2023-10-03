import React from "react";
import Error from "../../../../../../Error";

const Date = ({
  name,
  onChange,
  onBlur,
  value,
  error,
  errorMessage,
  ...rest
}) => {
  console.log({ error, errorMessage, rest });
  return (
    <>
      <input
        type="datetime-local"
        className="p-2 border border-borderColor text-textColor"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && (
        <div className="inline-block mx-2">
          <Error msg={errorMessage} />
        </div>
      )}
    </>
  );
};

export default Date;
