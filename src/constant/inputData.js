const signUpInput = [
  {
    id: 1,
    type: "text",
    placeholder: "الاسم",
    label: "أدخل الاسم",
    name: "username",
    user: true,
    icons: true,
  },
  {
    id: 2,
    type: "email",
    placeholder: "أدخل الايميل",
    label: "الايميل",
    name: "email",
    mail: true,
    icons: true,
  },
  {
    id: 3,
    type: "tel",
    placeholder: " رقم الهاتف ",
    label: "  رقم الهاتف ",
    name: "phone",
    phone: true,
    icons: true,
  },
  {
    id: 4,
    type: "password",
    placeholder: "كلمة المرو ",
    label: "أدخل كلمة المرور ",
    name: "password",
    pass: true,
    icons: true,
  },
];

const loginInput = [
  {
    id: 1,
    type: "text",
    placeholder: "الايميل",
    label: "أدخل الايميل",
    name: "email",
    mail: true,
    icons: true,
  },
  {
    id: 2,
    type: "password",
    placeholder: "كلمة المرو ",
    label: "أدخل كلمة المرور ",
    name: "password",
    pass: true,
    icons: true,
  },
];
const InformationInput = [
  {
    id: 1,
    type: "text",
    placeholder: "الاسم",
    label: "الاسم",
    name: "username",
  },
  {
    id: 2,
    type: "tel",
    placeholder: "+970 000 000 000",
    label: "رقم الهاتف",
    name: "phoneNumber",
  },
  {
    id: 3,
    type: "text",
    placeholder: "العنوان",
    label: "العنوان",
    name: "address",
  },
  {
    id: 4,
    type: "text",
    placeholder: "عنوان تفصيلي",
    label: "عنوان تفصيلي",
    name: "detailsAddress",
  },
];

export { loginInput, signUpInput, InformationInput };
