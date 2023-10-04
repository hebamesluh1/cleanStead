import serv1 from "../assets/images/service-1.png";
import serv2 from "../assets/images/service-2.png";
import serv3 from "../assets/images/service-3.png";
import serv4 from "../assets/images/service-4.png";
import serv5 from "../assets/images/service-5.png";
import serv6 from "../assets/images/service-6.png";

import adv1 from "../assets/images/Edit_duotone.png";
import adv2 from "../assets/images/Date_range_duotone.png";
import adv3 from "../assets/images/Chart_alt.png";
import adv4 from "../assets/images/Chat_alt_2.png";

import rev1 from "../assets/images/customer1.png";
import rev2 from "../assets/images/customer2.png";
import rev3 from "../assets/images/customer3.png";

import services1 from "../assets/images/services.svg";

import serviceDetails1 from "../assets/images/serviceDetails.png";
import serviceDetails2 from "../assets/images/service-1.png";
import serviceDetails3 from "../assets/images/service-2.png";

import { nanoid } from "nanoid";

const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  CONTACT: "/contact",
  BOOK: "/book",
  NOTFOUND: "404",
};

const navigation = [
  {
    id: 1,
    name: "الرئيسية",
    path: PATHS.HOME,
  },
  {
    id: 2,
    name: "الخدمات",
    path: PATHS.SERVICES,
  },
  {
    id: 3,
    name: "من نحن",
    path: PATHS.ABOUT,
  },
  {
    id: 4,
    name: "اتصل بنا",
    path: PATHS.CONTACT,
  },
];

const ServicesData = [
  {
    title: "تنظيف المنازل",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..",
    img: serv1,
  },
  {
    title: "التنظيف التجاري",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..",
    img: serv2,
  },
  {
    title: "تنظيف السجاد",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..",
    img: serv3,
  },
  {
    title: "تنظيف النوافذ",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..",
    img: serv4,
  },
  {
    title: "تنظيف السيارات",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..",
    img: serv5,
  },
  {
    title: "تنظيف بعد البناء",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..",
    img: serv6,
  },
];

const advData = [
  {
    title: "الموثقية",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
    img: adv1,
  },
  {
    title: "الحجز اونلاين",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
    img: adv2,
  },
  {
    title: "خصومات دائمة",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
    img: adv3,
  },
  {
    title: "دعم متواصل",
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
    img: adv4,
  },
];

const reviewData = [
  {
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
    signature: "محمد أحمد",
    img: rev1,
  },
  {
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
    signature: "محمد أحمد",
    img: rev2,
  },
  {
    desc: "ندرك صعوبة القيام بتنظيف السجاد من قبل النساء",
    signature: "محمد أحمد",
    img: rev3,
  },
];

const availableServices = [
  {
    id: 1,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 2,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 3,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 4,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 5,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 6,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 7,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 8,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 9,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 10,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 11,
    title: "غرفة النوم",
    img: services1,
  },
  {
    id: 12,
    title: "غرفة النوم",
    img: services1,
  },
];

const servicesType = [
  {
    id: nanoid(),
    title: "تنظيف المنازل",
    active:false,
    subTitl: [
      {
        id: nanoid(),
        subtitles: "غرفة النوم",
        img: serviceDetails1,
        price: 15,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
      {
        id: nanoid(),
        subtitles: "غرفة المعيشة",
        img: serviceDetails1,
        price: 20,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
      {
        id: nanoid(),
        subtitles: "غرفة الطعام",
        img: serviceDetails1,
        price: 50,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    title: "التنظيف التجاري",
    active:false,
    subTitl: [
      {
        id: nanoid(),
        subtitles: "فحوصات منزلية ",
        img: serviceDetails1,
        price: 70,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
      {
        id: nanoid(),
        subtitles: "خدمة التطهير",
        img: serviceDetails1,
        price: 10,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
      {
        id: nanoid(),
        subtitles: "التجميل المنزلي",
        img: serviceDetails1,
        price: 40,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
      {
        id: nanoid(),
        subtitles: "تنظيف الأثاث",
        img: serviceDetails1,
        price: 100,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
      {
        id: nanoid(),
        subtitles: "صيانة وتصليح ",
        img: serviceDetails1,
        price: 80,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    title: "تنظيف النوافذ",
    active:false,
    subTitl: [
      {
        id: nanoid(),
        subtitles: "تنظيف عميق",
        img: serviceDetails1,
        price: 90,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
      {
        id: nanoid(),
        subtitles: "تنظيف خارجي",
        img: serviceDetails1,
        price: 34,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    title: "تنظيف السجاد",
    active:false,
    subTitl: [
      {
        id: nanoid(),
        subtitles: "تنظيف جاف",
        img: serviceDetails1,
        price: 15,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
      {
        id: nanoid(),
        subtitles: "تنظيف بالبخار",
        img: serviceDetails1,
        price: 89,
        completed:false,
        details: [
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
          {
            id: nanoid(),
            detail: "العناصر المختارة",
          },
        ],
      },
    ],
  },
];
export {
  servicesType,
  availableServices,
  reviewData,
  advData,
  ServicesData,
  navigation,
  PATHS,
};
