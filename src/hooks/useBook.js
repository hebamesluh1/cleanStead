import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { initialStepsValues } from "../constant/initialValues";
import { validationSchemaSteps } from "../validation/validationSchemas";

const useBook = () => {
  const [selectedData, setSelectedData] = useState([]);
  const [finalData , setFinalData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [titles, setSelectedTitles] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const steps = ["اختر الخدمات", "التاريخ والوقت", "معلوماتك"];

  const onsubmit = (body) => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setComplete(true);
    }
    setUserData({ ...userData, body });
    setSelectedData([...selectedData,body.selectedServices])
  };
  const setFinalDataFunc =()=>{
    
  }

  const formik = useFormik({
    initialValues: initialStepsValues,
    validationSchema: validationSchemaSteps[currentStep],
    onSubmit: onsubmit,
  });

  useEffect(()=>{
  console.log(userData)
  },[userData])
  
  return {
    selectedData,
    setSelectedData,
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
    onsubmit,
  };
};

export default useBook;
