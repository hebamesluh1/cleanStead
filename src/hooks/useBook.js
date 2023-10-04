import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { initialStepsValues } from "../constant/initialValues";
import { validationSchemaSteps } from "../validation/validationSchemas";
import { servicesType } from "../mock/data";

const useBook = () => {
  const [userData, setUserData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [lists, setLists] = useState(servicesType);
  const [ServicesTitle, setServicesTitle] = useState([]);
  const steps = ["اختر الخدمات", "التاريخ والوقت", "معلوماتك"];

  const onsubmit = (body) => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setComplete(true);
    }
    setUserData({ ...userData, body });
    setSelectedData([...selectedData, body.selectedServices]);
  };

  const formik = useFormik({
    initialValues: initialStepsValues,
    validationSchema: validationSchemaSteps[currentStep],
    onSubmit: onsubmit,
  });

  useEffect(() => {
    console.log(lists);
  }, [lists]);

  return {
    currentStep,
    setCurrentStep,
    complete,
    setComplete,
    steps,
    totalPrice,
    setTotalPrice,
    formik,
    onsubmit,
    setLists,
    lists,
    ServicesTitle,
    setServicesTitle,
  };
};

export default useBook;
