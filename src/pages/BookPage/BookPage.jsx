import React from "react";
import { Title } from "../../components";
import { Stepper, Summary } from "../../components";
import BookProvider from "../../context/BookContext";

const BookPage = () => {
  return (
    <div className="mb-10">
      <Title title="احجز الآن" />
      <div className="flex justify-between flex-col md:flex-row">
        <div className="components basis-[60%]  p-3 ">
          <Stepper />
        </div>
        <div className="summary bg-footerBg w-full md:w-[30%] rounded-2xl max-h-fit">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default BookPage;
