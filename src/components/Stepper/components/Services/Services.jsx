import React from "react";
import { servicesType } from "../../../../mock/data";
import Card from "./Card";
import { useBookContext } from "../../../../context/BookContext";

const Services = () => {
  const { formik } = useBookContext();
  return (
    <div className="my-3">
      <h2 className="text-xl">
        اختر الخدمات التي تحتاج تنظيفها من اي تصنيف تريده{" "}
      </h2>
      <div className="accordion">
        {servicesType.map((serv) => (
          <Card title={serv.title} subtitle={serv.subTitl} key={serv.id} />
        ))}
      </div>
      {formik.touched.selectedServices && formik.errors.selectedServices && (
        <div className="text-red-500">{formik.errors.selectedServices}</div>
      )}
    </div>
  );
};

export default Services;
