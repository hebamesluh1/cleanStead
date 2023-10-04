import React, { useCallback, useMemo, useState } from "react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { useBookContext } from "../../../../../../../context/BookContext";

const SubCard = ({ item, serv }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [counters, setCounters] = useState(1);
  const { setTotalPrice, setLists, formik, lists } = useBookContext();

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

  const handleChange = (selectedList) => (e) => {
    const { checked, name } = e.target;
    const activeSelected = e.target.checked;
    if (activeSelected) {
      updateTotalPrice((prev) => prev + counters * item.price);
    } else {
      updateTotalPrice((prev) => prev - counters * item.price);
    }

    const updatedSelectedServices = checked
      ? [...formik.values.selectedServices, name]
      : formik.values.selectedServices.filter((id) => id !== name);

    formik.setFieldValue("selectedServices", updatedSelectedServices);

    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === selectedList.id
          ? {
              ...list,
              subTitl: list.subTitl.map((subServices) =>
                subServices.id === name
                  ? {
                      ...subServices,
                      completed: checked,
                    }
                  : subServices
              ),
            }
          : list
      )
    );
  };

  const isSelected = useMemo(() => {
    const currentList = lists.find((list) => list.id === serv.id);
    const subService = currentList.subTitl.find(
      (subService) => subService.id === item.id
    );
    return subService.completed;
  }, [lists, serv.id]);

  return (
    <div>
      <div
        className={`subtitle border border-${
          isSelected ? "btnColor" : "borderColor"
        } my-3 rounded-2xl p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div className="checkbox">
            <label className="flex align-items justify-center items-center gap-[10px] ">
              <input
                type="checkbox"
                name={item.id}
                value={item.subtitles}
                checked={isSelected}
                onChange={handleChange(serv)}
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
              disabled={!isSelected}
              type="button"
            >
              +
            </button>
            <p className="border border-footerBg buttonStyle ">{counters}</p>
            <button
              className="text-iconsColor bg-footerBg buttonStyle "
              onClick={minusCounter}
              disabled={!isSelected}
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
