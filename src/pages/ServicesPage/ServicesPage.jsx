import React, { useState } from 'react'
import { Btn, Title } from '../../components'
import img from "../../assets/images/heroContact.svg";
import { availableServices } from '../../mock/data';
import { Card } from './components';

const Services = () => {
    const [showAll, setShowAll] = useState(false);

    const itemsToShow = showAll ? availableServices : availableServices.slice(0, 8);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="wrapper">
            <div className="flex justify-between flex-wrap mt-10 mb-10 gap-3">
                <div className="content flex-1 ms:flex-full p-5">
                    <Title title="تنظيف المنازل" />
                    <p className='text-textColor text-xl my-4'>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                        إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية
                    </p>
                    <Btn className="bg-btnColor text-white my-3" text="احجز الآن" type="button" />
                </div>
                <div className="images flex-1 hidden md:block">
                    <img src={img} alt="img" />
                </div>
            </div>
            <div className="availableServices">
                <h2 className='text-2xl my-4'>الخدمات المتوفرة في تنظيف المنازل</h2>
                <div className='flex flex-wrap justify-center md:justify-between'>
                    {itemsToShow.map((service) => (
                        <Card img={service.img} title={service.title} key={service.id} />
                    )
                    )}
                </div>
                <div className="showMore flex justify-center items-center my-4">
                    <button typ="button" className='border-none w-[200px]' onClick={toggleShowAll}>
                        {!showAll ? " رؤية المزيد" : "عرض أقل"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services