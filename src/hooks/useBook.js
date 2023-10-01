import React, { useState } from "react";

const useBook = () => {
  const [selectedData, setSelectedData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ["اختر الخدمات", "التاريخ والوقت", "معلوماتك"];




  const storageData = (body) => {
    setUserData({ ...userData, ...body });
  };
  const displayData = () => {
    setFinalData((finalData) => [...finalData, userData]);
    setUserData("");
    setCurrentStep(1);
    setSelectedData("");
  };
  return {
    storageData,
    displayData,
    selectedData,
    finalData,
    currentStep,
    setCurrentStep,
    complete,
    setComplete,
    steps
  };
};

export default useBook;
