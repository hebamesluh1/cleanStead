import React, { useState } from "react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { useBookContext } from "../../../../../../context/BookContext";

const SubCard = ({ item, parentTitle }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [counters, setCounters] = useState(1);
  const [activeChecked, setChecked] = useState(false);
  const { setSelectedTitles, setSelectedData, setTotalPrice, formik } = useBookContext();

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const addCounter = (e) => {
    setCounters((prev) => prev + 1);
    updateTotalPrice((prev) => prev + item.price);
  };

  const minusCounter = () => {
    if (counters > 0) {
      setCounters((prev) => prev - 1);
      updateTotalPrice((prev) => prev - item.price);
    }
  };

  const updateTotalPrice = (calculateTotal) => {
    setTotalPrice(calculateTotal);
  };
  // validate if main service id included
  // if yes validate if subservice id included => remove subservice id, double check if mainService.length>0, if not included push it
  // if not added (main service) push new object for main service which is includes array of subservices at least should include selected subservice

  const handleChange = (e, itemId) => {
    const activeData = e.target.checked;
    setChecked(activeData);
    // item.checked = activeData;

    //to stored this in summary
    if (activeData) {
      setSelectedData((prev) => [...prev, e.target.value]);
      setSelectedTitles((prev) => [...prev, parentTitle]);
      updateTotalPrice((prev) => prev + counters * item.price);
    } else {
      setSelectedData((prev) => prev.filter((val) => val !== e.target.value));
      setSelectedTitles((prev) => prev.filter((title) => title !== parentTitle));
      updateTotalPrice((prev) => prev - counters * item.price);
    }

    //validation with formik  
    if (formik.values.selectedServices.includes(itemId)) {
      formik.setFieldValue(
        "selectedServices",
        formik.values.selectedServices.filter((id) => id !== itemId)
      );
    } else {
      formik.setFieldValue("selectedServices", [
        ...formik.values.selectedServices,
        itemId,
      ]);
    }
  };

  return (
    <div>
      <div
        className={`subtitle border border-${activeChecked ? "btnColor" : "borderColor"
          } my-3 rounded-2xl p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div className="checkbox">
            <label className="flex align-items justify-center items-center gap-[10px] ">
              <input
                id={item.id}
                type="checkbox"
                name={item.subtitles}
                value={item.subtitles}
                checked={item.checked}
                onChange={(e) => handleChange(e, item.subtitles)}
              />
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
              disabled={!activeChecked}
              type="button"
            >
              +
            </button>
            <p className="border border-footerBg buttonStyle ">{counters}</p>
            <button
              className="text-iconsColor bg-footerBg buttonStyle "
              onClick={minusCounter}
              disabled={!activeChecked}
              type="button"
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
