import React from "react";

import { Components, Btns, Steps } from "./components";
import { useBookContext } from "../../context/BookContext";

const Stepper = () => {
  const { formik } = useBookContext();
  return (
    <form onSubmit={formik.handleSubmit} className="fit-height">
      <Steps />
      <Components />
      <Btns />
    </form>
  );
};

export default Stepper;
