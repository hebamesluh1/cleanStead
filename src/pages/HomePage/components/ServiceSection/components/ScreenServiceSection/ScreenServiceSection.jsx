import React from 'react'
import { ServiceCard } from '../../../../../../components'

import { ServicesData } from '../../../../../../mock/data'

const ScreenServiceSection = () => {
  return (
    <div className='hidden md:block'>
      <div className="wrapper flex flex-wrap items-center justify-between my-20">
        {ServicesData.map((item) => (
          <ServiceCard
            img={item.img}
            title={item.title}
            desc={item.desc}
            key={item.title} />
        ))}
      </div>
    </div>
  )
}

export default ScreenServiceSection