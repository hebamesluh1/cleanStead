import React from 'react'
import Radio from './components/Radio/Radio'

const Time = () => {
    return (
        <div className='my-3'>
            <h2 className='text-xl'>اختر موعد الخدمة</h2>
            <form>
                <div className='my-5'>
                    <h4 className='text-lg my-2'>تكرار الخدمة</h4>
                    <div className="flex gap-[10px]">
                        <Radio text="مرة واحدة" />
                        <Radio text="يوميًا" />
                        <Radio text="أسبوعيًا" />
                        <Radio text="شهريًا" />
                    </div>
                </div>
                <div className='my-5'>
                    <h4 className='text-lg my-2'>التاريخ والوقت</h4>
                    <input type="datetime-local" className='p-2 border border-borderColor text-textColor'/>
                </div>
            </form>
        </div>
    )
}

export default Time