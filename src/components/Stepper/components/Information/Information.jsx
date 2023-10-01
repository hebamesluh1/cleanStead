import React from "react";
import Input from "../../../Input/Input";
import { useRestInputProps } from "../../../../hooks/useRestProps";
import { useBookContext } from "../../../../context/BookContext";
import { InformationInput } from "../../../../constant/inputData";

const Information = () => {
  const { formik } = useBookContext();
  const restInputProps = (key) => useRestInputProps(formik, key);
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
              {...restInputProps(input.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Information;
