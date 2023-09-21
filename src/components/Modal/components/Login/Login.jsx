import React, { useState } from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'

import { useFormik } from 'formik';

import { loginSchema } from '../../../../validation/validationSchemas';
import { useRestInputProps } from '../../../../hooks/useRestProps';
import Error from '../../../Error';
import { useAuthContext } from './../../../../context/AuthContext';



const Login = ({ className }) => {

    const { loading, error, login } = useAuthContext();

    const initialValues = {
        email: "",
        password: "",
    };

    const onSubmit = async () => {
        console.log("submit");
        const { email, password } = formik.values;
        await login(email, password);
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
                {error &&
                    <Error msg={error} className="text-center" />
                }
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
                    <Btn text={loading ? "Loading..." : "دخول"} className="w-full bg-btnColor text-white" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login