import React from "react";
import { Radio, Date } from "./components";
import { restInputProps } from "../../../../../utils/restInputProps";
import { useBookContext } from "../../../../../context/BookContext";

const Time = () => {
  const { formik } = useBookContext();
  return (
    <div className="my-3">
      <h2 className="text-xl">اختر موعد الخدمة</h2>
      <form>
        <div className="my-5">
          <h4 className="text-lg my-2">تكرار الخدمة</h4>
          <div className="flex gap-[10px]">
            <Radio
              name="repeatServices"
              options={["مرة واحدة", "يوميًا", "أسبوعيًا", "شهريًا"]}
              {...restInputProps(formik, "repeatServices")}
              checked={formik.values["repeatServices"]}
            />
          </div>
        </div>
        <div className="my-5">
          <h4 className="text-lg my-2">التاريخ والوقت</h4>
          <Date
            {...restInputProps(formik, "date")}
          />
        </div>
      </form>
    </div>
  );
};

export default Time;
