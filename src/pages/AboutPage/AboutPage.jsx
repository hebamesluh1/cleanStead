import React from 'react'
import img from "../../assets/images/heroContact.svg";
import { Btn, Title } from "../../components";
import { useNavigate } from 'react-router-dom';


const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between flex-wrap mt-10 mb-10 gap-3">
            <div className="content flex-1 ms:flex-full p-5">
                <Title title="من نحن" />
                <p className='text-textColor text-xl my-4'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية</p>
                    <Btn className="text-btnColor border border-btnColor my-3" text="تواصل معنا" type="button" onClick={()=>navigate('/contact')}/>
            </div>
            <div className="images flex-1 hidden md:block">
                <img src={img} alt="img" />
            </div>
        </div>
    )
}

export default AboutPage