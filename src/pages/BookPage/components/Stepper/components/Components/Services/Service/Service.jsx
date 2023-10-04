import React, { useState } from "react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import SubService from "./SubService";
import { useBookContext } from "../../../../../../../../context/BookContext";

const Card = ({ subtitle, service }) => {
  const { setLists } = useBookContext();
  const [openSubTitle, setOpenSubTitle] = useState(false);

  const toggleSubTitle = () => {
    setOpenSubTitle(prevState=>!prevState);
  };
  const handleTitle = (list) => {
    setLists((prevLists) =>
      prevLists.map((service) => {
        const haveItems = service.subTitl.some(subTitle => {
          return subTitle.completed === true
        })
        if (haveItems) {
          return service
        }
        return service.id === list.id ? { ...service, active: !service.active } : service
      }
      )
    );
  };

  return (
    <div className="border border-borderColor my-3 rounded-2xl p-3">
      <div className="flex justify-between" onClick={() => handleTitle(service)}>
        <div className="title text-lg">{service.title}</div>
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
            <SubService key={item.id} item={item} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
