import React from "react";

import img from "../../assets/images/heroContact.svg";
import effect from "../../assets/images/header.svg";

import Input from "../../components/Input";
import Btn from "../../components/Btn";

import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { contactSchema } from "../../validation/validationSchemas";
import { useRestInputProps } from "../../hooks/useRestProps";

const ContactPage = () => {

  const initialValues = {
    service: "",
    name: "",
    phone: "",
    msg: "",
  };

  const notify = () => {
    toast.success("تم الارسال بنجاح سنرد عليك بالقريب العاجل :)", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onSubmit = () => {
    notify();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: contactSchema,
  });

  const restInputProps = (key) => useRestInputProps(formik, key);

  return (
    <div className="flex justify-between flex-wrap mt-10 mb-10 gap-3">
      <ToastContainer />
      <div className="form flex-1 ms:flex-full p-5">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="flex items-center gap-3 text-custom-40 overflow-hidden">
            تواصل معنا
            <img src={effect} alt="effect" />
          </h1>
          <Input
            label="الخدمة"
            placeholder="اسم الخدمة"
            type="text"
            {...restInputProps("service")}
          />

          <div className="flex gap-5 justify-between">
            <div>
              <Input
                label="الاسم"
                placeholder="الاسم"
                type="text"
                {...restInputProps("name")}
              />
            </div>
            <div>
              <Input
                label="رقم الجوال"
                placeholder="رقم الجوال"
                type="tel"
                {...restInputProps("phone")}
              />
            </div>
          </div>
          <Input
            label="الرسالة"
            placeholder="أكتب رسالتك هنا"
            type="text"
            {...restInputProps("msg")}
            area
          />
          <Btn type="submit" text="أرسل" className="px-8 py-3 bg-btnColor text-white" />
        </form>
      </div>
      <div className="images flex-1 hidden md:block">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default ContactPage;
