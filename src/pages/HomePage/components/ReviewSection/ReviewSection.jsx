import React from 'react'
import Title from '../Title/Title'
import Card from './components/Card'
import { reviewData } from '../../../../mock/data'

const ReviewSection = () => {
    return (
        <div className='my-20 relative z-[-1]'>
            <Title text="ماذا يقولون عملائنا " />
            <div className="flex flex-wrap my-20 justify-center">
                {reviewData.map((item, index) => (
                    <Card
                        desc={item.desc}
                        signature={item.signature}
                        img={item.img}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default ReviewSection