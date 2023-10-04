import React from "react";
import Services from "./Services";
import Time from "./Time";
import Information from "./Information";

import { useBookContext } from './../../../../../../context/BookContext';

const StepperComponent = {
  1: Services,
  2: Time,
  3: Information,
};

const Components = () => {
  const { currentStep } = useBookContext();
  const Component = StepperComponent[currentStep];
  return (
    <div className="content border-t border-b border-footerBg my-5 py-3">
      <Component />
    </div>
  );
};

export default Components;
