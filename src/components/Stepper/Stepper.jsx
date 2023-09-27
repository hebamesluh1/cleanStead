import React, { useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';

import { Information, Services, Time } from './components';
import Btn from '../Btn';

const StepperComponent = {
    1: Services,
    2: Time,
    3: Information
};



const Stepper = () => {
    const steps = ["اختر الخدمات", "التاريخ والوقت", "معلوماتك"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const Component = StepperComponent[currentStep];


    return (
        <>
            <div className='flex justify-between py-3'>
                {steps.map((step, i) => (
                    <div key={i} className={`step-item ${currentStep === i + 1 ? "active" : ""} ${(i + 1 < currentStep || complete) ? "complete" : ""}`}>
                        <div className='step'>
                            {!(i + 1 < currentStep || complete) ? i + 1 : <BsCheck2 size={24} />}
                        </div>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
            <div className="content border-t border-b border-footerBg my-5 py-3">
                <Component />
            </div>

            <div className="flex justify-between">
                {currentStep != 1 ?
                    <Btn onClick={() => setCurrentStep(currentStep - 1)} text="رجوع" className="text-btnColor border border-btnColor" />
                    : ""}

                <Btn className="bg-btnColor text-white"
                    text={
                        !complete
                            ? (steps.length === currentStep ? "ارسال" : "استمرار")
                            : (steps.length === currentStep) ? "تم الارسال" : "استمرار"
                    }
                    onClick={() => {
                        if (currentStep < steps.length) {
                            setCurrentStep((prev) => prev + 1);
                        } else {
                            setComplete(true);
                        }
                    }} />

            </div>
        </>
    );
}

export default Stepper;
