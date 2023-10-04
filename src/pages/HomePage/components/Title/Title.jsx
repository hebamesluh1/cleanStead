import React from 'react'

import left from '../../../../assets/images/headereffectLeft.png';
import right from '../../../../assets/images/headereffectRight.png';

const Title = ({text}) => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <div className=''>
        <img src={right} alt="" />
      </div>
      <h2 className='text-4xl font-medium'>
        {text}
      </h2>
      <div>
        <img src={left} alt="" />
      </div>
    </div>
  )
}

export default Title