import React from 'react'

const Card = ({ img, title }) => {
    return (
        <div className='flex justify-around items-center p-2 border border-borderColor basis-1/2 md:basis-1/5 m-1 rounded-xl'>
            <div className="image">
                <img src={img} alt="img" />
            </div>
            <div className="title">
                {title}
            </div>
        </div>
    )
}

export default Card