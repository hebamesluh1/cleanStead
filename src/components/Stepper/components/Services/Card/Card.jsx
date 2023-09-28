import React, { useState } from "react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import SubCard from "./SubCard/SubCard";

const Card = ({ title, subtitle }) => {
  const [openSubTitle, setOpenSubTitle] = useState(false);

  const toggleSubTitle = () => {
    setOpenSubTitle(!openSubTitle);
  };

  return (
    <div className="border border-borderColor my-3 rounded-2xl p-3">
      <div className="flex justify-between">
        <div className="title text-lg">{title}</div>
        <div
          className="showmore flex items-center gap-[10px] cursor-pointer"
          onClick={toggleSubTitle}
        >
          {openSubTitle ? (
            <>
              <MdExpandLess className="text-btnColor" />
              <h3 className="text-btnColor">عرض أقل</h3>
            </>
          ) : (
            <>
              <MdOutlineExpandMore className="text-btnColor" />
              <h3 className="text-btnColor">رؤية الخدمات</h3>
            </>
          )}
        </div>
      </div>
      {openSubTitle && (
        <div className="border-t border-solid border-borderColor my-3">
          {subtitle.map((item) => (
            <SubCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
