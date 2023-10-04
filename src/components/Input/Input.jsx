import React, { useState } from "react";
import Error from "../Error";

import { HiOutlineMail } from "react-icons/hi";
import { IoPersonOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock } from "react-icons/ai";

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
  pass,
  className=""
}) => {

  const [showToggle, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!showToggle);
  }
  return (
    <div className={`w-full pt-5 ${icons && "relative"}${className}`}>
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
        >
        </textarea>
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
            className={`w-full border-2 border-solid rounded-lg  ${error ? "border-red-500" : "border-borderColor"
              } ${icons ? "py-2 px-10" : "p-2"}`}
            type={type === 'password' ?
              !showToggle ?
                "password" :
                "text"
              : type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
          {icons &&
            <div className="absolute top-[57px] left-[10px] text-iconsColor text-xl">
              {pass ?
                !showToggle ?
                  <AiOutlineEyeInvisible onClick={toggle} className="cursor-pointer" /> :
                  <AiOutlineEye onClick={toggle} className="cursor-pointer" />
                :
                ""
              }
            </div>
          }
        </>
      )}
      {errorMessage && <Error msg={errorMessage} />}
    </div>
  );
};

export default Input;
