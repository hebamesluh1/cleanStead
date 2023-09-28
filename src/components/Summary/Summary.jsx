import React from "react";

const Summary = () => {
  return (
    <div className="p-5 ">
      <div className="border-b-4  border-white p-5 my-5">
        <h2 className="text-2xl">ملخص</h2>
      </div>
      <div className="leading-10 my-5">
        <h3 className="text-lg text-textColor">الخدمة</h3>
        <p className="text-lg">تنظيف المنازل</p>
      </div>
      <div className="my-5">
        <h3 className="text-lg text-textColor">العناصر المختارة</h3>
        <ul className="text-lg">
          <li>text-1-</li>
          <li>text-1-</li>
          <li>text-1-</li>
        </ul>
      </div>
      <div className="my-5">
        <h3 className="text-lg text-textColor">اجمالي السعر</h3>
        <p className="text-lg">$1000</p>
      </div>
    </div>
  );
};

export default Summary;
