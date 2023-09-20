import React from "react";
import Error from "../Error";

import { HiOutlineMail } from "react-icons/hi";
import { IoPersonOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineEyeInvisible, AiOutlineLock } from "react-icons/ai";

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
  errorMessage,
  icons,
  mail,
  user,
  phone,
  pass
}) => {
  return (
    <div className="w-full pt-5 relative">
      <label htmlFor="">{label}</label>
      {area ? (
        <textarea
          className={`w-full border-2 border-solid ${error ? "border-red-500" : "border-borderColor"
            } rounded-lg resize-none p-2`}
          rows={4}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        ></textarea>
      ) : (
        <>
          {icons &&
            <div className="absolute top-[57px] right-[10px] text-iconsColor text-xl">
              {mail && <HiOutlineMail />}
              {user && <IoPersonOutline />}
              {phone && <BsTelephone />}
              {pass && <AiOutlineLock />}
            </div>
          }
          <input
            className={`w-full border-2 border-solid ${error ? "border-red-500" : "border-borderColor"
              } rounded-lg  ${icons ? "py-2 px-10" : "p-2"}`}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
          {icons &&
            <div className="absolute top-[57px] left-[10px] text-iconsColor text-xl">
              {pass && <AiOutlineEyeInvisible />}
            </div>
          }
        </>
      )}
      {errorMessage && <Error msg={errorMessage} />}
    </div>
  );
};

export default Input;
