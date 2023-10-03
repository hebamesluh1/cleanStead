import React, { useCallback, useMemo } from "react";
import { useBookContext } from "../../../../context/BookContext";
import Btn from "../../../Btn";

const Btns = () => {
  const { complete, setCurrentStep, currentStep, steps } = useBookContext();

  const isFirstStep = useMemo(() => {
    return currentStep === 1;
  }, [currentStep]);

  const isLastStep = useMemo(() => {
    return steps.length === currentStep;
  }, [currentStep, steps.length]);

  const ButtonText = useCallback(() => {
    if (complete) {
      return isLastStep ? "تم الارسال" : "استمرار";
    }
    return isLastStep ? "ارسال" : "استمرار";
  }, [complete, isLastStep]);

  return (
    <div className="flex justify-between">
      {!isFirstStep && (
        <Btn
          onClick={() => setCurrentStep(currentStep - 1)}
          text="رجوع"
          className="text-btnColor border border-btnColor"
          type="button"
        />
      )}
      <Btn
        type="submit"
        className="bg-btnColor text-white"
        text={ButtonText()}
      />
    </div>
  );
};

export default Btns;
