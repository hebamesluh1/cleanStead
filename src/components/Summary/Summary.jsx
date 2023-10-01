import React from "react";
import { useBookContext } from "../../context/BookContext";

const Summary = () => {
  const { selectedData, titles, totalPrice } = useBookContext();
  const countMap = {};
  titles.forEach((value) => {
    if (countMap[value]) {
      countMap[value]++;
    } else {
      countMap[value] = 1;
    }
  });
  return (
    <div className="p-5 fit-height">
      <div className="border-b-4  border-white p-5 my-5">
        <h2 className="text-2xl">ملخص</h2>
      </div>
      <div className="leading-10 my-5">
        <h3 className="text-lg text-textColor">الخدمة</h3>
        <p className="text-lg">
          {titles.length > 0
            ? Object.keys(countMap).map((key) => (
                <span key={key}>
                  {key}: {countMap[key]}
                  <br />
                </span>
              ))
            : "لم يتم اختيار خدمات بعد"}
        </p>
      </div>
      <div className="my-5">
        <h3 className="text-lg text-textColor">العناصر المختارة</h3>
        <ul className="text-lg">
          {selectedData.length > 0 ? (
            selectedData.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>لم يتم اختيار خدمات بعد</li>
          )}
        </ul>
      </div>
      <div className="my-5">
        <h3 className="text-lg text-textColor">اجمالي السعر</h3>
        <p className="text-lg">${totalPrice}</p>
      </div>
    </div>
  );
};

export default Summary;
