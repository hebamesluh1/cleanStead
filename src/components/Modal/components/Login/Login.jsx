import React from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'


const Login = ({ className }) => {
    return (
        <div className={` ${className}`}>
            <form>
                <Input
                    type="text"
                    placeholder="الايميل"
                    label="أدخل الايميل"
                    icons 
                    mail
                />
                <Input
                    type="password"
                    placeholder="كلمة المرور"
                    label="أدخل كلمة المرور "
                    icons
                    pass
                />
                <div className='my-3'>
                <Btn text="دخول" className="w-full bg-btnColor text-white" />
                </div>
            </form>
        </div>
    )
}

export default Login