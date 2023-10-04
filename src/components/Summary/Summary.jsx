import React from "react";
import { useBookContext } from "../../context/BookContext";

const Summary = () => {
  const { totalPrice, lists } = useBookContext();

  const activeServices = lists.filter((service) => service.active);

  const getServiceTitles = () => {
    return lists.filter((service) => service.active).map((service) => service.title);
  };

  const getSubTitleServices = () => {
    const subtitlesArray = lists.filter((service) => service.active).flatMap((service) =>
      service.subTitl
        .filter((subtitle) => subtitle.completed)
        .map((subtitle) => subtitle.subtitles)
    );

    return subtitlesArray;
  };

  const serviceTitlesList = getServiceTitles();
  const subtitleServices = getSubTitleServices();

  return (
    <div className="p-5 fit-height">
      <div className="border-b-4 border-white p-5 my-5">
        <h2 className="text-2xl">ملخص</h2>
      </div>

      <div className="leading-10 my-5">
        <div>
          <h3 className="text-lg text-textColor">الخدمة</h3>
          <ul className="text-lg">
            {serviceTitlesList.length > 0 ? (
              serviceTitlesList.map((item) => <li>{item}</li>)
            ) : (
              <li>لم يتم اختيار اي خدمات بعد </li>
            )}
          </ul>
        </div>
      </div>

      <div className="my-5">
        <h3 className="text-lg text-textColor">العناصر المختارة</h3>
        <ul className="text-lg">
          {subtitleServices.length > 0 ? (
            subtitleServices.map((item, index) => <li key={index}>{item}</li>)
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
