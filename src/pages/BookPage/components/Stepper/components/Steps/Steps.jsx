import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { useBookContext } from './../../../../../../context/BookContext';

const Steps = () => {
  const { steps, complete, currentStep } = useBookContext();
  return (
    <div className="flex justify-between py-3">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`step-item ${currentStep === i + 1 ? "active" : ""} ${
            i + 1 < currentStep || complete ? "complete" : ""
          }`}
        >
          <div className="step">
            {!(i + 1 < currentStep || complete) ? (
              i + 1
            ) : (
              <BsCheck2 size={24} />
            )}
          </div>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
