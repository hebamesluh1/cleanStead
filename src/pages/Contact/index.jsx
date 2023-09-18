import React from 'react'


import img from '../../assets/images/heroContact.svg';
import effect from '../../assets/images/header.svg'


import Input from '../../components/Input';
import Btn from '../../components/Btn';
import Error from '../../components/Error';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const validationSchema = Yup.object({
    service: Yup
      .string()
      .required('هذا الحقل مطلوب'),
    name: Yup
      .string()
      .min(2, 'النص قصير جدًا')
      .max(50, 'النص طويل جدًا')
      .required('هذا الحقل مطلوب'),
    phone: Yup
      .number()
      .required('هذا الحقل مطلوب'),
    msg: Yup
      .string()
      .max(1000, 'النص طويل جدًا')
      .required('هذا الحقل مطلوب'),
  })

  const initialValues = {
    service: "",
    name: "",
    phone: "",
    msg: ""
  }

  const notify = () => {
    toast.success("تم الارسال بنجاح سنرد عليك بالقريب العاجل :)", {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const onSubmit = () => {
    notify();
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })
  return (
    <div className='flex justify-between flex-wrap mt-10 mb-10 gap-3'>
      <ToastContainer />
      <div className="form flex-1 ms:flex-full p-5">
        <form onSubmit={formik.handleSubmit}>
          <h1 className='flex items-center gap-3 text-custom-40'>
            تواصل معنا
            <img src={effect} alt="effect" />
          </h1>
          <Input
            label="الخدمة"
            placeholder="اسم الخدمة"
            type="text"
            name="service"
            onChange={formik.handleChange}
            value={formik.values.service}
            onBlur={formik.handleBlur}
            error={formik.touched.service && formik.errors.service}
          />
          {formik.touched.service && formik.errors.service && <Error msg={formik.errors.service} />}

          <div className='flex gap-5'>
            <div>
              <Input
                label="الاسم"
                placeholder="الاسم"
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
              />
              {formik.touched.name && formik.errors.name && <Error msg={formik.errors.name} />}
            </div>
            <div>
              <Input
                label="رقم الجوال"
                placeholder="رقم الجوال"
                type="tel"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && formik.errors.phone}
              />
              {formik.touched.phone && formik.errors.phone && <Error msg={formik.errors.phone} />}
            </div>
          </div>
          <Input
            label="الرسالة"
            placeholder="أكتب رسالتك هنا ..."
            type="text"
            name="msg"
            onChange={formik.handleChange}
            value={formik.values.msg}
            onBlur={formik.handleBlur}
            error={formik.touched.msg && formik.errors.msg}
            area
          />
          {formik.touched.msg && formik.errors.msg && <Error msg={formik.errors.msg} />}
          <Btn type="submit" text="أرسل" />
        </form>
      </div>
      <div className="images flex-1 hidden md:block">
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default Contact