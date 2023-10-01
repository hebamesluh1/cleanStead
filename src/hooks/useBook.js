import { useFormik } from "formik";
import React, { useState } from "react";
import { initialStepsValues } from "../constant/initialValues";
import { validationSchemaSteps } from "../validation/validationSchemas";

const useBook = () => {
  const [selectedData, setSelectedData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [titles, setSelectedTitles] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const steps = ["اختر الخدمات", "التاريخ والوقت", "معلوماتك"];


  const displayData = () => {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    setCurrentStep(1);
    setSelectedData("");
  };

  const onsubmit = (body) => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setComplete(true);
    }
    setUserData({ ...userData, body });
    console.log(userData);
  }
  console.log(userData)

  const formik = useFormik({
    initialValues: initialStepsValues,
    validationSchema: validationSchemaSteps[currentStep],
    onSubmit: onsubmit,
  });

  return {
    displayData,
    selectedData,
    setSelectedData,
    finalData,
    currentStep,
    setCurrentStep,
    complete,
    setComplete,
    steps,
    titles,
    setSelectedTitles,
    totalPrice,
    setTotalPrice,
    formik,
    onsubmit
  };
};

export default useBook;
