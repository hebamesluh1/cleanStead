import React from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'

const SignUp = ({ className }) => {
    return (
        <div className={` ${className}`}>
            <form>
                <Input
                    type="text"
                    placeholder="الاسم"
                    label="أدخل الاسم"
                    icons
                    user
                />
                <Input
                    type="email"
                    placeholder="أدخل الايميل"
                    label="الايميل"
                    icons
                    mail
                />
                <Input
                    type="tel"
                    placeholder="رقم الجوال"
                    label="رقم الجوال"
                    icons
                    phone
                />
                <Input
                    type="password"
                    placeholder="كلمة المرور"
                    label="أدخل كلمة المرور "
                    icons
                    pass
                />
                <div className='my-3'>
                    <Btn text="انشاء حساب" className="w-full bg-btnColor text-white" />
                </div>
            </form>
        </div>
    )
}

export default SignUp