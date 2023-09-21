import React, { useState } from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'
import Error from '../../../Error';

import { useFormik } from 'formik';

import { signupSchems } from '../../../../validation/validationSchemas';
import { useRestInputProps } from '../../../../hooks/useRestProps';
import { useAuthContext } from '../../../../context/AuthContext';

import { registerUser } from '../../../../services/authServices';



const SignUp = ({ className, modal }) => {

    const { loading, setLoading, error, setError, setToken, login } = useAuthContext();

    const initialValues = {
        username: "",
        phone: "",
        email: "",
        password: "",
    };

    const onSubmit = async ({ email, password, username, phone }) => {
        try {
            setLoading(true);

            const { success, token, message } = await registerUser({
                email,
                password,
                username,
                phone,
            });

            if (success) {
                setError('');
                localStorage.setItem('token', token);
                setError("");
                setToken(token);
                login();
                modal(false);

            } else {
                setError(message);
            }
        } finally {
            setLoading(false);
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: signupSchems,
    });

    const restInputProps = (key) => useRestInputProps(formik, key);

    return (
        <div className={` ${className}`}>
            {error &&
                <Error msg={error} className="text-center" />
            }
            <form onSubmit={formik.handleSubmit}>
                <Input
                    type="text"
                    placeholder="الاسم"
                    label="أدخل الاسم"
                    icons
                    user
                    {...restInputProps("username")}
                />
                <Input
                    type="email"
                    placeholder="أدخل الايميل"
                    label="الايميل"
                    icons
                    mail
                    {...restInputProps("email")}
                />
                <Input
                    type="tel"
                    placeholder="رقم الجوال"
                    label="رقم الجوال"
                    icons
                    phone
                    {...restInputProps("phone")}
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
                    <Btn text={`${loading ? "loading..." : "انشاء حساب"}`} className="w-full bg-btnColor text-white" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default SignUp