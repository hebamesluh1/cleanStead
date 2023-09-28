import React, { useState } from "react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";

const SubCard = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [counters, setCounters] = useState(0);
  const [activeChecked, setChecked] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  const addCounter = () => {
    setCounters((prev) => prev + 1);
  };
  const minusCounter = () => {
    if (counters > 0) {
      setCounters((prev) => prev - 1);
    }
  };

  const handleActive = () => {
    setChecked(!activeChecked);
  };
  console.log(item);
  return (
    <div>
      <div
        className={`subtitle border border-${
          activeChecked ? "btnColor" : "borderColor"
        } my-3 rounded-2xl p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div className="checkbox">
            <label className="flex align-items justify-center items-center gap-[10px] ">
              <input type="checkbox" onChange={handleActive} />
              <img
                src={item.img}
                alt=""
                width="80px"
                height="80px"
                className="rounded-2xl"
              />
              <h4>{item.subtitles}</h4>
            </label>
          </div>
          <div className="price">{item.price}$</div>
          <div className="counter flex items-center gap-[10px]">
            <button
              className="text-iconsColor bg-footerBg buttonStyle"
              onClick={addCounter}
            >
              +
            </button>
            <p className="border border-footerBg buttonStyle ">{counters}</p>
            <button
              className="text-iconsColor bg-footerBg buttonStyle "
              onClick={minusCounter}
            >
              -
            </button>
          </div>
          <div
            className="showDetails flex items-center gap-[10px] cursor-pointer"
            onClick={toggleShowDetails}
          >
            {showDetails ? (
              <>
                <MdExpandLess className="text-btnColor" />
                <h3 className="text-btnColor">عرض أقل</h3>
              </>
            ) : (
              <>
                <MdOutlineExpandMore className="text-btnColor" />
                <h3 className="text-btnColor">رؤية التفاصيل</h3>
              </>
            )}
          </div>
        </div>
        {showDetails && (
          <div className="pt-4">
            <h4 className="text-sm text-textColor my-2">
              العناصر التي ستيم تنظيفها في هذه الغرفة
            </h4>
            <ul className="text-sm list-disc my-2 p-4 leading-8">
              {item.details.map((singleItem) => (
                <li key={singleItem.id}>{singleItem.detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCard;
