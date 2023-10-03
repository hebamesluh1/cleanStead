import React from "react";

import img from "../../assets/images/heroContact.svg";

import { Input, Btn, Title } from "../../components";

import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { contactSchema } from "../../validation/validationSchemas";
import { restInputProps } from "../../utils/restInputProps";
import { initialContactValues } from "../../constant/initialValues";

const ContactPage = () => {
  const notify = () => {
    toast.success("تم الارسال بنجاح", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onSubmit = () => {
    notify();
  };

  const formik = useFormik({
    initialValues: initialContactValues,
    onSubmit,
    validationSchema: contactSchema,
  });

  return (
    <div className="flex justify-between flex-wrap mt-10 mb-10 gap-3">
      <ToastContainer />
      <div className="form flex-1 ms:flex-full p-5">
        <form onSubmit={formik.handleSubmit}>
          <Title title="تواصل معنا" />
          <Input
            label="الخدمة"
            placeholder="اسم الخدمة"
            type="text"
            {...restInputProps(formik, "service")}
          />

          <div className="flex gap-5 justify-between">
            <div>
              <Input
                label="الاسم"
                placeholder="الاسم"
                type="text"
                {...restInputProps(formik, "name")}
              />
            </div>
            <div>
              <Input
                label="رقم الجوال"
                placeholder="رقم الجوال"
                type="tel"
                {...restInputProps(formik, "phone")}
              />
            </div>
          </div>
          <Input
            label="الرسالة"
            placeholder="أكتب رسالتك هنا"
            type="text"
            {...restInputProps(formik, "msg")}
            area
          />
          <Btn
            type="submit"
            text="أرسل"
            className="px-8 py-3 bg-btnColor text-white"
          />
        </form>
      </div>
      <div className="images flex-1 hidden md:block">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default ContactPage;
