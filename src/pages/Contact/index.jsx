import React from 'react'


import img from '../../assets/images/heroContact.svg';
import effect from '../../assets/images/header.svg'


import Input from '../../components/Input';
import Btn from '../../components/Btn';

const Contact = () => {
  return (
    <div className='flex justify-between flex-wrap mt-10 mb-10 gap-3'>
      <div className="form flex-1 ms:flex-full p-5">
        <form>
          <h1 className='flex items-center gap-3 text-custom-40'>
            تواصل معنا
            <img src={effect} alt="effect" />
          </h1>
          <Input
            label="الخدمة"
            placeholder="اسم الخدمة"
            type="text"
          />

          <div className='flex gap-5'>
            <Input
              label="الاسم"
              placeholder="الاسم"
              type="text"
            />
            <Input
              label="رقم الجوال"
              placeholder="رقم الجوال"
              type="tel"
            />
          </div>
          <Input
            label="الرسالة"
            placeholder="أكتب رسالتك هنا ..."
            type="text"
            area
          />
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