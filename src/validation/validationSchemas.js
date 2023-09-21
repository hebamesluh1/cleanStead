import * as Yup from "yup";

export const contactSchema = Yup.object({
  service: Yup.string().required("هذا الحقل مطلوب"),

  name: Yup.string()
    .min(2, "النص قصير جدًا")
    .max(50, "النص طويل جدًا")
    .required("هذا الحقل مطلوب"),

  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "رقم الهاتف غير صحيح"
    )
    .min(9, "رقم الهاتف الذي أدخلته قصير")
    .max(20, "رقم الهاتف الذي أدخلته طويل جدًا")
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
    .matches(/^(?:(?:\+|00)[1-9]\d{0,2})?[1-9]\d{1,14}$/, "رقم هاتف غير صحيح")
    .required("هذا الحقل مطلوب"),

  username: Yup.string()
    .min(2, "النص قصير جدًا")
    .max(50, "النص طويل جدًا")
    .required("هذا الحقل مطلوب"),
});
