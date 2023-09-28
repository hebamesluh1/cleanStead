import React from "react";
import Input from "../../../Input/Input";

const Information = () => {
  return (
    <div className="my-3">
      <h2 className="text-xl">أدخل معلوماتك</h2>
      <form>
        <div className="flex gap-[10px]">
          <Input label="الاسم" type="text" placeholder="الاسم" />
          <Input label="رقم الجوال" type="tel" placeholder="رقم الجوال" />
        </div>
        <div className="flex gap-[10px]">
          <Input label="العنوان" type="text" placeholder="العنوان" />
          <Input
            label="العنوان التفصيلي"
            type="text"
            placeholder="العنوان التفصيلي"
          />
        </div>
      </form>
    </div>
  );
};

export default Information;
