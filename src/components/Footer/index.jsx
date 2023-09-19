import React from 'react'

import logo from '../../assets/images/footerLogo.svg'


import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BiLogoFacebook, BiLogoGoogle } from 'react-icons/bi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { PiMapPinLineDuotone } from 'react-icons/pi'


const Footer = () => {
  return (
    <div className='bg-footerBg rounded-t-2xl'>
      <div className='p-5'>
        <div className='flex justify-between flex-wrap  border-b border-white border-solid border-10 pb-10'>
          <div className="summary sm:my-2">
            <div className="logo">
              <img src={logo} alt="footer-Logo" />
            </div>
            <div className="desc text-textColor sm:w-full md:w-60">
              <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.</p>
            </div>
          </div>
          <div className="services ms:my-2">
            <div className="title">
              <h3 className='pb-3'>خدماتنا</h3>
              <ul className='text-textColor leading-7 text-16'>
                <li>تنظيف المنازل</li>
                <li>التنظيف التجاري</li>
                <li>تنظيف السجاد</li>
                <li>تنظيف النوافذ</li>
                <li>تنظيف السيارات</li>
                <li>تنظيف بعد البناء</li>
              </ul>
            </div>
          </div>
          <div className="contact ms:my-2">
            <div className="title">
              <h3 className='pb-3'>تواصل معنا</h3>
              <ul>
                <li>
                  <a href="tel:0592700722" className='flex gap-2 items-center text-textColor'>
                    <BsFillTelephoneFill className='text-btnColor' />
                    0592700722
                  </a>
                </li>
                <li>
                  <a href="mailto:eng.mohammedalhabil@gmail.com" className='flex gap-2 items-center text-textColor'>
                    <MdEmail className='text-btnColor' />
                    eng.mohammedalhabil@gmail.com
                  </a></li>
              </ul>
            </div>
          </div>
          <div className="follow ms:my-2">
            <div className="title">
              <h3 className='pb-3'>تابعنا على</h3>
              <div className="socials">
                <ul className='flex items-center justify-between mb-5'>
                  <li><a href="/#" className='text-textColor text-16'><BiLogoFacebook /></a></li>
                  <li><a href="/#" className='text-textColor text-16'><FiTwitter /></a></li>
                  <li><a href="/#" className='text-textColor text-16'><AiOutlineYoutube /></a></li>
                  <li><a href="/#" className='text-textColor text-16'><BsWhatsapp /></a></li>
                  <li><a href="/#" className='text-textColor text-16'><BiLogoGoogle /></a></li>
                </ul>
              </div>
              <div className="map flex items-center">
                <PiMapPinLineDuotone className='text-btnColor' />
                <div className="map w-30">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.525320861896!2d34.38812925011669!3d31.472450438952443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd8235ee6b864b%3A0xe4be51342e71e93b!2sAl%20Zahra!5e0!3m2!1sen!2s!4v1695055440500!5m2!1sen!2s" width="100" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center py-4">
          <p>جميع الحقوق محفوظة © 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Footer