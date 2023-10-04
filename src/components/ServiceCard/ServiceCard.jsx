import React from 'react'

import { IoIosArrowBack } from 'react-icons/io'

const ServiceCard = ({ img, title, desc }) => {
    return (
        <div className="serviceCard basis-3/4 md:basis rounded-2xl rounded-lg shadow p-5 my-20">
            <div className="title flex items-center gap-3">
                <div className='rounded-full mt-[-100px] basis-2/4'>
                    <img src={img} alt="" width="100%" height="100%" className='rounded-full' />
                </div>
                <h3 className='text-cardTitle font-extrabold'>{title}</h3>
            </div>
            <div className="serviceDesc text-l text-textColor flex items-center gap-1">
                <p>{desc}</p>
            </div>
            <div className="readMore">
                <a href="/#" className='flex items-center text-btnColor'>
                    رؤية المزيد
                    <IoIosArrowBack />
                </a>
            </div>
        </div>
    )
}

export default ServiceCard