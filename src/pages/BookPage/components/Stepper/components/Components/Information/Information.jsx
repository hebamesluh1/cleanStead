import React from "react";
import { restInputProps } from "./../../../../../../../utils/restInputProps";
import { InformationInput } from "../../../../../../../constant/inputData";
import {Input} from './../../../../../../../components';
import { useBookContext } from "../../../../../../../context/BookContext";

const Information = () => {
  const { formik } = useBookContext();
  return (
    <div className="my-3">
      <h2 className="text-xl">أدخل معلوماتك</h2>
      <div className="flex flex-wrap gap-[10px] mb-4">
        {InformationInput.map((input) => {
          return (
            <Input
              className="basis-full md:basis-[45%]"
              key={input.id}
              {...input}
              {...restInputProps(formik, input.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Information;
