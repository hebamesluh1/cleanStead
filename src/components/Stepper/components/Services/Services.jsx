import React from "react";
import { servicesType } from "../../../../mock/data";
import Card from "./Card";

const Services = () => {
  return (
    <div className="my-3">
      <h2 className="text-xl">
        اختر الخدمات التي تحتاج تنظيفها من اي تصنيف تريده{" "}
      </h2>
      <div className="accordion">
        {servicesType.map((serv) => (
          <Card title={serv.title} subtitle={serv.subTitl} />
        ))}
      </div>
    </div>
  );
};

export default Services;
