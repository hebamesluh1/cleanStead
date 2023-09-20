import React from 'react'

import Title from "../Title"

import { ScreenServiceSection, MobileServiceSection } from './components'

const ServiceSection = () => {
  return (
    <div className='my-20'>
      <Title text="الخدمات التي نقدمها" />
      <ScreenServiceSection />
      <MobileServiceSection />
    </div>
  )
}

export default ServiceSection