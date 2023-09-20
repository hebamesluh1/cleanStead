import React from 'react'
import img from '../../../../../../assets/images/Chart_alt.png'

const Card = ({img,title,desc}) => {
    return (
        <div className='flex gap-2 my-3'>
            <div className="img p-3 bg-footerBg rounded-lg">
                <img src={img} alt="" />
            </div>
            <div className="desc">
                <h4 className='text-cardTitle font-extrabold text-xl'>{title}</h4>
                <p className='text-descFont text-l font-light'>{desc}</p>
            </div>
        </div>
    )
}

export default Card