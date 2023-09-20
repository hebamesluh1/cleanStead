import * as Yup from "yup";

export const contactSchema = Yup.object({
  service: Yup.string().required("هذا الحقل مطلوب"),

  name: Yup.string()
    .min(2, "النص قصير جدًا")
    .max(50, "النص طويل جدًا")
    .required("هذا الحقل مطلوب"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "رقم الهاتف يجب أن يحتوي على 10 أرقام")
    .required("هذا الحقل مطلوب"),

  msg: Yup.string().max(1000, "النص طويل جدًا").required("هذا الحقل مطلوب"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email("هذا الايميل غير صحيح").required("هذا الحقل مطلوب"),
  password: Yup.string().required("هذا الحقل مطلوب"),
});

export const signupSchems = Yup.object({
  email: Yup.string().email("هذا الايميل غير صحيح").required("هذا الحقل مطلوب"),

  password: Yup.string()
    .min(8, "يجب أن تكون أكبر من 8")
    .matches(/[a-z]/g, "يجب أن تحتوي على حرف واحد على الأقل ")
    .matches(/\d/g, "يجب أن تحتوي على رقم واحد على الأقل")
    .matches(/[!@#$%^&*)(+=._-]/g, "يجب أن تحتوي على رمز واحد على الأقل")
    .required("هذا الحقل مطلوب"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "رقم الهاتف يجب أن يحتوي على 10 أرقام")
    .required("هذا الحقل مطلوب"),

  username: Yup.string()
    .min(2, "النص قصير جدًا")
    .max(50, "النص طويل جدًا")
    .required("هذا الحقل مطلوب"),
});
