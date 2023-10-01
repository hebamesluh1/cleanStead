import React from 'react'
import { useBookContext } from '../../../../context/BookContext';
import Btn from '../../../Btn';

const Btns = () => {
  const { setComplete, complete, setCurrentStep, currentStep, steps } = useBookContext()
  return (
    <div className="flex justify-between">
      {currentStep != 1 ? (
        <Btn
          onClick={() => setCurrentStep(currentStep - 1)}
          text="رجوع"
          className="text-btnColor border border-btnColor"
        />
      ) : (
        ""
      )}
      <Btn
        className="bg-btnColor text-white"
        text={
          !complete
            ? steps.length === currentStep
              ? "ارسال"
              : "استمرار"
            : steps.length === currentStep
              ? "تم الارسال"
              : "استمرار"
        }
        onClick={() => {
          if (currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
          } else {
            setComplete(true);
          }
        }}
      />
    </div>
  )
}

export default Btns