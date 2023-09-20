import React from 'react'

import Title from '../Title'
import Card from './components/Card'

import img from '../../../../assets/images/advantages.png'
import { advData } from '../../../../mock/data'

const AdvantagesSection = () => {
    return (
        <div className='my-20'>
            <Title text="لماذا تختارنا" />
            <div className="flex my-20">
                <div className="right-section basis-2/4 hidden md:block">
                    <img src={img} alt="images" className='rounded-lg' />
                </div>
                <div className="left-section flex flex-col justify-around mr-4">
                    {advData.map((item) => (
                        <Card
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            key={item.title}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AdvantagesSection