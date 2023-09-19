import React from "react";

import img from "../../assets/images/heroContact.svg";
import effect from "../../assets/images/header.svg";

import Input from "../../components/Input";
import Btn from "../../components/Btn";

import { useFormik } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const validationSchema = Yup.object({
    service: Yup.string().required("هذا الحقل مطلوب"),
    name: Yup.string()
      .min(2, "النص قصير جدًا")
      .max(50, "النص طويل جدًا")
      .required("هذا الحقل مطلوب"),
    phone: Yup.number().required("هذا الحقل مطلوب"),
    msg: Yup.string().max(1000, "النص طويل جدًا").required("هذا الحقل مطلوب"),
  });

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
    validationSchema,
  });

  const restInputProps = (key) => {
    return {
      name: key,
      onChange: formik.handleChange,
      value: formik.values[key],
      onBlur: formik.handleBlur,
      error: formik.touched[key] && formik.errors[key],
      errorMessage:
        formik.touched[key] && formik.errors[key] ? formik.errors[key] : "",
    };
  };


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
          <Btn type="submit" text="أرسل" />
        </form>
      </div>
      <div className="images flex-1 hidden md:block">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Contact;
