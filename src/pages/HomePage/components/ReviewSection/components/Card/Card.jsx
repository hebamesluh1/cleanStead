import React from 'react'

import left from '../../../../../../assets/images/qoutesleft.png';
import right from '../../../../../../assets/images/qoutesright.png';

const Card = ({ img, signature, desc }) => {
    return (
        <div className='relative p-2 shadow rounded-lg m-2 py-2'>
            <div className="right absolute top-0 right-0">
                <img src={right} alt="" />
            </div>
            <div className='flex items-center flex-col gap-4 '>
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="desc w-64 p-2 text-center font-light">
                    <p>{desc}</p>
                </div>
                <div className="signature">
                    <h6 className='text-signature font-medium'>{signature}</h6>
                </div>
            </div>
            <div className="left absolute left-0 bottom-0">
                <img src={left} alt="" />
            </div>
        </div>
    )
}

export default Card