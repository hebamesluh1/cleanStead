import React from "react";
import { Title } from "../../components";
import { Stepper, Summary } from "./components";

const BookPage = () => {
  return (
    <div className="mb-10">
      <Title title="احجز الآن" />
      <div className="flex justify-between flex-col md:flex-row">
        <div className="components basis-[60%]  p-3  fit-height">
          <Stepper />
        </div>
        <div className="summary bg-footerBg w-full md:w-[30%] rounded-2xl max-h-fit fit-height">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default BookPage;
