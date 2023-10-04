import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';
import { ServiceCard } from '../../../../../../components';
import { ServicesData } from '../../../../../../mock/data';


const MobileServiceSection = () => {
  return (
    <div className='block md:hidden my-5'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {ServicesData.map((item, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MobileServiceSection