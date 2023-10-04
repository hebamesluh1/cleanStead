import React from "react";
import Service from "./Service";
import { useBookContext } from "../../../../../../../context/BookContext";
import { servicesType } from "../../../../../../../mock/data";

const Services = () => {
  const { formik } = useBookContext();
  return (
    <div className="my-3">
      <h2 className="text-xl">
        اختر الخدمات التي تحتاج تنظيفها من اي تصنيف تريده{" "}
      </h2>
      <div className="accordion">
        {servicesType.map((service) => (
          <Service
          service={service}
            subtitle={service.subTitl}
            key={service.id}
          />
        ))}
      </div>
      {formik.touched.selectedServices && formik.errors.selectedServices && (
        <div className="text-red-500">{formik.errors.selectedServices}</div>
      )}
    </div>
  );
};

export default Services;
