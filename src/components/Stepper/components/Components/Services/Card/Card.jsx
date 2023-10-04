import React, { useState } from "react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import SubCard from "./SubCard/SubCard";
import { useBookContext } from "../../../../../../context/BookContext";

const Card = ({ subtitle, serv }) => {
  const { setLists } = useBookContext();
  const [openSubTitle, setOpenSubTitle] = useState(false);

  const toggleSubTitle = () => {
    setOpenSubTitle(!openSubTitle);
  };
  const handleTitle = (list) => {
    setLists((prevLists) =>
      prevLists.map((serv) => {
        // check if any subservice completed skip the flow
        const haveItems = serv.subTitl.some(subTitle => {
          return subTitle.completed === true
        })
        console.log({ subTitl: serv.subTitl });
        if (haveItems) {
          return serv
        }
        return serv.id === list.id ? { ...serv, active: !serv.active } : serv
      }
      )
    );
  };

  return (
    <div className="border border-borderColor my-3 rounded-2xl p-3">
      <div className="flex justify-between" onClick={() => handleTitle(serv)}>
        <div className="title text-lg">{serv.title}</div>
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
            <SubCard key={item.id} item={item} serv={serv} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
