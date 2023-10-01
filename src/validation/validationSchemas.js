import * as Yup from "yup";

const contactSchema = Yup.object({
  service: Yup.string().required("هذا الحقل مطلوب"),

  name: Yup.string()
    .min(2, "النص قصير جدًا")
    .max(50, "النص طويل جدًا")
    .required("هذا الحقل مطلوب"),

  phone: Yup.string()
    .min(9, "رقم الهاتف الذي أدخلته قصير")
    .max(20, "رقم الهاتف الذي أدخلته طويل جدًا")
    .required("هذا الحقل مطلوب"),

  msg: Yup.string().max(1000, "النص طويل جدًا").required("هذا الحقل مطلوب"),
});

const loginSchema = Yup.object({
  email: Yup.string().email("هذا الايميل غير صحيح").required("هذا الحقل مطلوب"),
  password: Yup.string().required("هذا الحقل مطلوب"),
});

const signupSchems = Yup.object({
  email: Yup.string().email("هذا الايميل غير صحيح").required("هذا الحقل مطلوب"),

  password: Yup.string()
    .min(8, "يجب أن تكون أكبر من 8")
    .matches(/[a-z]/g, "يجب أن تحتوي على حرف واحد على الأقل ")
    .matches(/\d/g, "يجب أن تحتوي على رقم واحد على الأقل")
    .matches(/[!@#$%^&*)(+=._-]/g, "يجب أن تحتوي على رمز واحد على الأقل")
    .required("هذا الحقل مطلوب"),

  phone: Yup.string()
    .min(9, "رقم الهاتف الذي أدخلته قصير")
    .max(20, "رقم الهاتف الذي أدخلته طويل جدًا")
    .required("هذا الحقل مطلوب"),

  username: Yup.string()
    .min(2, "النص قصير جدًا")
    .max(50, "النص طويل جدًا")
    .required("هذا الحقل مطلوب"),
});

const firstStepValidation = Yup.object().shape({
  selectedServices: Yup.array()
    .min(1, "يجب اختيار خدمة على الأقل للاستمرار")
    .required("يجب اختيار خدمة على الأقل للاستمرار"),
});

const secondStepValidation = Yup.object({
  repeatServices: Yup.string().required("هذا الحقل مطلوب"),
  date: Yup.string().required("هذا الحقل مطلوب"),
});

const thirdStepValidation = Yup.object({
  username: Yup.string().required("هذا الحقل مطلوب"),
  phoneNumber: Yup.string().required("هذا الحقل مطلوب"),
  address: Yup.string().required("هذا الحقل مطلوب"),
  detailsAddress: Yup.string().required("هذا الحقل مطلوب"),
});

const validationSchemaSteps = {
  1: firstStepValidation,
  2: secondStepValidation,
  3: thirdStepValidation,
};

export { signupSchems, loginSchema, contactSchema, validationSchemaSteps };
