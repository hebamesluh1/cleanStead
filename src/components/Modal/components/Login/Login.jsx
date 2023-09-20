import React from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'

import { useFormik } from 'formik';

import { loginSchema } from '../../../../validation/validationSchemas';
import { useRestInputProps } from '../../../../utils/useRestProps';



const Login = ({ className }) => {

    const initialValues = {
        email: "",
        password: "",
    };

    const onSubmit = () => {
        console.log("submit")
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    });

    const restInputProps = (key) => useRestInputProps(formik, key);

    return (
        <div className={` ${className}`}>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    type="text"
                    placeholder="الايميل"
                    label="أدخل الايميل"
                    icons
                    mail
                    {...restInputProps("email")}
                />
                <Input
                    type="password"
                    placeholder="كلمة المرور"
                    label="أدخل كلمة المرور "
                    icons
                    pass
                    {...restInputProps("password")}
                />
                <div className='my-3'>
                    <Btn text="دخول" className="w-full bg-btnColor text-white" />
                </div>
            </form>
        </div>
    )
}

export default Login