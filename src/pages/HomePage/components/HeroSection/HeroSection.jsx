import React from 'react';
import hero from '../../../../assets/images/hero.png';
import { Btn } from '../../../../components';

const HeroSection = () => {
    const customStyle = {
        background: `url(${hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: " no-repeat",
    };

    return (
        <div className="rounded-xl py-20 px-10" style={customStyle}>
            <div className=' sm:w-full md:w-2/5'>
                <h1 className='text-5xl leading-12 pb-5 text-headerColor'>
                    اختار يلي
                    <span className='text-titleHero'> بخلصك </span>
                    من مره وحده!
                </h1>
                <p className='text-textColor text-2xl leading-12 pb-5'>ما تشيل هم كلمنا بنساعدك
                    احجز خدمة مضمونة بكبسة زر</p>

                <Btn text="تواصل معنا " type="button" className="bg-white text-black" />
            </div>
        </div>
    );
};

export default HeroSection;
